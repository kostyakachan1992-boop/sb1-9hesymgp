import { useState } from 'react';
import './PaymentButtons.css';

const MONOBANK_URL = 'https://send.monobank.ua/jar/6JmeR3U6h4';
const CARD_NUMBER = '4874 1000 2529 3641';

interface PaymentButtonsProps {
  planName?: string;
  compact?: boolean;
}

export default function PaymentButtons({ planName, compact = false }: PaymentButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CARD_NUMBER.replace(/\s/g, '')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={`payment ${compact ? 'payment--compact' : ''}`}>
      {planName && <p className="payment__label">Оплата{planName ? ` — ${planName}` : ''}</p>}

      <div className="payment__buttons">
        {/* Monobank */}
        <a
          href={MONOBANK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="payment__btn payment__btn--mono"
        >
          <MonobankLogo />
          <span>Monobank</span>
        </a>

        {/* Privat24 */}
        <button
          className="payment__btn payment__btn--privat"
          onClick={() => alert('Для оплати через Приват24 скористайтесь номером картки нижче або посиланням Monobank.')}
          type="button"
        >
          <Privat24Logo />
          <span>Приват24</span>
        </button>
      </div>

      <div className="payment__card">
        <span className="payment__card-label">Переказ за номером картки:</span>
        <div className="payment__card-row">
          <span className="payment__card-num">{CARD_NUMBER}</span>
          <button
            className={`payment__copy ${copied ? 'payment__copy--done' : ''}`}
            onClick={handleCopy}
            type="button"
            title="Скопіювати номер картки"
          >
            {copied ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
            )}
            <span>{copied ? 'Скопійовано!' : 'Копіювати'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function MonobankLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#fff" />
      <path d="M8 20C8 13.373 13.373 8 20 8s12 5.373 12 12-5.373 12-12 12S8 26.627 8 20z" fill="#F5A623" />
      <path d="M15 16h10l-5 8-5-8z" fill="#fff" />
    </svg>
  );
}

function Privat24Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#fff" />
      <rect x="6" y="14" width="28" height="12" rx="2" fill="#009B3A" />
      <text x="20" y="23.5" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="Arial">P24</text>
    </svg>
  );
}
