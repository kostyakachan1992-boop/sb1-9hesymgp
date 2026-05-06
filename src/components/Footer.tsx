import MarsLogo from './MarsLogo';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <MarsLogo size="md" />
          <p className="footer__tagline">
            Розумний AI-асистент нового покоління для вашого бізнесу.
          </p>
          <p className="footer__copy">© {new Date().getFullYear()} AI MARS. Всі права захищено.</p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4 className="footer__col-title">Продукт</h4>
            <a href="#features">Можливості</a>
            <a href="#pricing">Тарифи</a>
            <a href="#chat">Демо</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Компанія</h4>
            <a href="#contact">Про нас</a>
            <a href="#contact">Контакти</a>
            <a href="#contact">Партнерство</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Підтримка</h4>
            <a href="mailto:support@aimars.ua">Email</a>
            <a href="https://t.me/aimars_bot" target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>Зроблено в Україні 🇺🇦</span>
          <span>Powered by AI MARS</span>
        </div>
      </div>
    </footer>
  );
}
