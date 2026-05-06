import MarsLogo from './MarsLogo';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero section">
      <div className="hero__bg-grid" />
      <div className="hero__bg-glow" />
      <div className="container hero__content">
        <div className="hero__badge">Штучний інтелект для бізнесу</div>
        <MarsLogo size="lg" />
        <h1 className="hero__headline">
          Розумний AI-асистент<br />для вашого бізнесу
        </h1>
        <p className="hero__desc">
          Автоматизуйте підтримку клієнтів, збільшуйте продажі та заощаджуйте час
          з потужним AI-чат-ботом на базі найсучасніших технологій.
        </p>
        <div className="hero__actions">
          <a href="#pricing" className="btn btn-primary hero__btn">
            Обрати тариф
          </a>
          <a href="#chat" className="btn btn-outline hero__btn">
            Спробувати демо
          </a>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">98%</span>
            <span className="hero__stat-label">Задоволених клієнтів</span>
          </div>
          <div className="hero__stat-div" />
          <div className="hero__stat">
            <span className="hero__stat-num">24/7</span>
            <span className="hero__stat-label">Підтримка без перерв</span>
          </div>
          <div className="hero__stat-div" />
          <div className="hero__stat">
            <span className="hero__stat-num">3×</span>
            <span className="hero__stat-label">Швидше обслуговування</span>
          </div>
        </div>
      </div>
    </section>
  );
}
