import { useState } from 'react';
import PaymentButtons from './PaymentButtons';
import './Pricing.css';

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  popular?: boolean;
}

const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Стартер',
    price: '999',
    period: '/міс',
    desc: 'Ідеально для малого бізнесу',
    features: [
      '1 AI-бот',
      'До 500 повідомлень/місяць',
      'Базові відповіді на питання',
      'Email підтримка',
      'Базова аналітика',
    ],
  },
  {
    id: 'pro',
    name: 'Про',
    price: '2 499',
    period: '/міс',
    desc: 'Для зростаючого бізнесу',
    features: [
      '3 AI-боти',
      'До 5 000 повідомлень/місяць',
      'GPT-4 модель',
      'Інтеграція CRM',
      'Пріоритетна підтримка',
      'Детальна аналітика',
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Бізнес',
    price: '5 999',
    period: '/міс',
    desc: 'Для великих компаній',
    features: [
      'Необмежена кількість ботів',
      'Необмежені повідомлення',
      'GPT-4 Turbo + fine-tuning',
      'Повна інтеграція',
      'Виділений менеджер',
      'SLA 99.9%',
      'Власна база знань',
    ],
  },
];

export default function Pricing() {
  const [activePlan, setActivePlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <h2 className="section-title">Тарифи</h2>
        <div className="glow-line" />
        <p className="section-sub" style={{ marginBottom: 48 }}>
          Обирайте план, що відповідає вашим потребам. Платіть зручним способом.
        </p>

        <div className="pricing__grid">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`pricing__card ${plan.popular ? 'pricing__card--popular' : ''}`}
            >
              {plan.popular && <div className="pricing__badge">Найпопулярніший</div>}

              <div className="pricing__top">
                <h3 className="pricing__name">{plan.name}</h3>
                <p className="pricing__desc">{plan.desc}</p>
                <div className="pricing__price">
                  <span className="pricing__currency">₴</span>
                  <span className="pricing__amount">{plan.price}</span>
                  <span className="pricing__period">{plan.period}</span>
                </div>
              </div>

              <ul className="pricing__features">
                {plan.features.map((f) => (
                  <li key={f} className="pricing__feature">
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing__actions">
                <button
                  className={`pricing__pay-btn ${plan.popular ? 'pricing__pay-btn--primary' : ''}`}
                  onClick={() => setActivePlan(activePlan === plan.id ? null : plan.id)}
                  type="button"
                >
                  {activePlan === plan.id ? 'Приховати' : 'Оплатити'}
                </button>
              </div>

              {activePlan === plan.id && (
                <div className="pricing__payment-panel">
                  <PaymentButtons planName={plan.name} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
