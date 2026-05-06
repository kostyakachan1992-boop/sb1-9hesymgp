import { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';

const MONOBANK_URL = 'https://send.monobank.ua/jar/6JmeR3U6h4';
const CARD_NUMBER = '4874 1000 2529 3641';

type MessageRole = 'bot' | 'user';

interface Message {
  id: number;
  role: MessageRole;
  text: string;
  isPayment?: boolean;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    role: 'bot',
    text: 'Вітаю! Я AI MARS — ваш розумний асистент. Як я можу вам допомогти сьогодні?',
  },
];

const BOT_RESPONSES: Record<string, string> = {
  default: 'Дякую за ваше питання! Я можу розповісти вам про наші послуги, тарифи або допомогти з оформленням оренди AI-бота. Що вас цікавить?',
  ціна: 'У нас є три тарифи: Стартер (₴999/міс), Про (₴2 499/міс) та Бізнес (₴5 999/міс). Хочете дізнатися більше або оформити підписку?',
  тариф: 'У нас є три тарифи: Стартер (₴999/міс), Про (₴2 499/міс) та Бізнес (₴5 999/міс). Хочете оформити підписку?',
  оренда: 'Чудово! Ви можете орендувати AI-бота вже сьогодні. Вибір тарифу займе лише хвилину. Хочете оформити замовлення?',
  замовлення: 'Чудово! Ви можете оплатити послугу через Monobank (за посиланням на банку) або Приват24. Ось реквізити для оплати:',
  так: 'Чудово! Ви можете оплатити послугу через Monobank (за посиланням на банку) або Приват24. Ось реквізити для оплати:',
  оплатити: 'Чудово! Ви можете оплатити послугу через Monobank (за посиланням на банку) або Приват24. Ось реквізити для оплати:',
  оплата: 'Чудово! Ви можете оплатити послугу через Monobank (за посиланням на банку) або Приват24. Ось реквізити для оплати:',
  хочу: 'Чудово! Ви можете оплатити послугу через Monobank (за посиланням на банку) або Приват24. Ось реквізити для оплати:',
  підписку: 'Чудово! Ви можете оплатити послугу через Monobank (за посиланням на банку) або Приват24. Ось реквізити для оплати:',
  допомога: 'Звісно! Я тут, щоб допомогти. Ви можете запитати про:\n• Можливості AI-бота\n• Тарифи і ціни\n• Процес підключення\n• Технічні деталі',
};

const PAYMENT_TRIGGER_WORDS = ['замовлення', 'так', 'оплатити', 'оплата', 'хочу', 'підписку'];

function getBotResponse(input: string): { text: string; isPayment: boolean } {
  const lower = input.toLowerCase();
  let isPayment = false;

  for (const word of PAYMENT_TRIGGER_WORDS) {
    if (lower.includes(word)) {
      isPayment = true;
      return { text: BOT_RESPONSES[word], isPayment };
    }
  }

  for (const key of Object.keys(BOT_RESPONSES)) {
    if (key !== 'default' && lower.includes(key)) {
      return { text: BOT_RESPONSES[key], isPayment };
    }
  }

  return { text: BOT_RESPONSES.default, isPayment };
}

let msgIdCounter = 10;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [copied, setCopied] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = (text?: string) => {
    const value = (text ?? input).trim();
    if (!value) return;

    const userMsg: Message = { id: ++msgIdCounter, role: 'user', text: value };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const { text: botText, isPayment } = getBotResponse(value);
      const botMsg: Message = {
        id: ++msgIdCounter,
        role: 'bot',
        text: botText,
        isPayment,
      };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 900);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(CARD_NUMBER.replace(/\s/g, '')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      {/* Floating button */}
      <button
        className={`chat-fab ${open ? 'chat-fab--open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Відкрити чат"
      >
        {open ? <CloseIcon /> : <ChatIcon />}
        {!open && <span className="chat-fab__dot" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="chat-panel">
          <div className="chat-panel__header">
            <div className="chat-panel__header-info">
              <div className="chat-panel__avatar">AI</div>
              <div>
                <div className="chat-panel__name">AI MARS Assistant</div>
                <div className="chat-panel__status">
                  <span className="chat-panel__dot-green" /> Онлайн
                </div>
              </div>
            </div>
            <button className="chat-panel__close" onClick={() => setOpen(false)}>
              <CloseIcon />
            </button>
          </div>

          <div className="chat-panel__messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-msg chat-msg--${msg.role}`}>
                {msg.role === 'bot' && <div className="chat-msg__avatar">AI</div>}
                <div className="chat-msg__bubble">
                  <p style={{ whiteSpace: 'pre-line' }}>{msg.text}</p>

                  {msg.isPayment && (
                    <div className="chat-msg__payment">
                      <a
                        href={MONOBANK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="chat-pay-btn chat-pay-btn--mono"
                      >
                        <MonoIcon />
                        Оплатити через Monobank
                      </a>
                      <div className="chat-pay-card">
                        <span className="chat-pay-card__label">Номер картки:</span>
                        <div className="chat-pay-card__row">
                          <span className="chat-pay-card__num">{CARD_NUMBER}</span>
                          <button
                            className={`chat-pay-card__copy ${copied ? 'done' : ''}`}
                            onClick={handleCopy}
                            type="button"
                          >
                            {copied ? '✓' : '⎘'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="chat-msg chat-msg--bot">
                <div className="chat-msg__avatar">AI</div>
                <div className="chat-msg__bubble chat-msg__bubble--typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="chat-panel__quick">
            {['Тарифи та ціни', 'Хочу орендувати', 'Оплатити'].map((q) => (
              <button key={q} className="chat-quick-btn" onClick={() => sendMessage(q)} type="button">
                {q}
              </button>
            ))}
          </div>

          <div className="chat-panel__input">
            <input
              type="text"
              placeholder="Напишіть повідомлення..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={() => sendMessage()} type="button">
              <SendIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function MonoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="6" fill="#fff" />
      <path d="M8 20C8 13.373 13.373 8 20 8s12 5.373 12 12-5.373 12-12 12S8 26.627 8 20z" fill="#F5A623" />
      <path d="M15 16h10l-5 8-5-8z" fill="#fff" />
    </svg>
  );
}
