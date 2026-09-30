import MarsLogo from './MarsLogo';
import './Hero.css';

export default function Hero() {
  return (
      <section className="hero section">
            <div className="hero__bg-grid" />
                  <div className="hero__bg-glow" />
                        <div className="container hero__container">
                                <div className="hero__badge">
                                          <div translate="no" className="notranslate">
                                                  <MarsLogo size="lg" />
                                                  </div>
                                                  
                                                  </div>
                                                          <h1 className="hero__headline">
                                                                    Розумний AI-асистент <br className="hero__br" /> для вашого бізнесу
                                                                            </h1>
                                                                                    <p className="hero__desc">
                                                                                              Автоматизуйте підтримку клієнтів та збільшуйте продажі <br className="hero__br" /> з потужним AI-чат-ботом нового покоління.
                                                                                                      </p>
                                                                                                              <div className="hero__actions">
                                                                                                                        <a href="#pricing" className="btn btn--primary hero__btn">
                                                                                                                                    Обрати тариф
                                                                                                                                              </a>
                                                                                                                                                        <a href="#chat" className="btn btn--secondary hero__btn">
                                                                                                                                                                    Спробувати демо
                                                                                                                                                                              </a>
                                                                                                                                                                                      </div>
                                                                                                                                                                                              <div className="hero__stats">
                                                                                                                                                                                                        <div className="hero__stat-item">
                                                                                                                                                                                                                    <span className="hero__stat-number">24/7</span>
                                                                                                                                                                                                                                <span className="hero__stat-label">Підтримка без перерв</span>
                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                    <div className="hero__stat-item">
                                                                                                                                                                                                                                                                <span className="hero__stat-number">&lt; 3 сек</span>
                                                                                                                                                                                                                                                                            <span className="hero__stat-label">Миттєві відповіді</span>
                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                <div className="hero__stat-item">
                                                                                                                                                                                                                                                                                                            <span className="hero__stat-number">99.9%</span>
                                                                                                                                                                                                                                                                                                                        <span className="hero__stat-label">Захист від витоку даних</span>
                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                    </section>
                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                                                      