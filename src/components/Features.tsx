import './Features.css';

const FEATURES = [
  {
    icon: '🤖',
    title: 'GPT-4 Powered',
    desc: 'Використовує найновіші AI-моделі для точних та природніх відповідей вашим клієнтам.',
  },
  {
    icon: '⚡',
    title: 'Миттєві відповіді',
    desc: 'Час відповіді менше 2 секунд. Клієнти отримують допомогу одразу, без очікування.',
  },
  {
    icon: '🔗',
    title: 'Легка інтеграція',
    desc: 'Підключення до вашого сайту або месенджера за 15 хвилин. Підтримка Telegram, Viber, WhatsApp.',
  },
  {
    icon: '📊',
    title: 'Аналітика',
    desc: 'Детальна статистика розмов, популярні питання, конверсії та рекомендації для покращення.',
  },
  {
    icon: '🛡️',
    title: 'Безпека даних',
    desc: 'Шифрування даних, відповідність GDPR. Ваші клієнтські дані під надійним захистом.',
  },
  {
    icon: '🇺🇦',
    title: 'Українська мова',
    desc: 'Повна підтримка української мови. Бот розуміє суржик та діалекти.',
  },
];

export default function Features() {
  return (
    <section id="features" className="features section">
      <div className="container">
        <h2 className="section-title">Можливості</h2>
        <div className="glow-line" />
        <p className="section-sub" style={{ marginBottom: 48 }}>
          Все що потрібно для автоматизації клієнтського сервісу
        </p>
        <div className="features__grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
