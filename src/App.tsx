import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <section id="chat" className="chat-section">
          <div className="container">
            <h2 className="section-title">Спробуйте AI MARS</h2>
            <div className="glow-line" />
            <p className="section-sub" style={{ marginBottom: 32 }}>
              Відкрийте чат-кнопку внизу праворуч, щоб поспілкуватись з AI-асистентом
            </p>
            <div className="chat-demo-box">
              <div className="chat-demo-box__inner">
                <p>Натисніть кнопку <strong>чату</strong> у правому нижньому куті сторінки, щоб розпочати діалог з AI MARS. Спробуйте написати «Хочу орендувати» або «Тарифи та ціни».</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}

export default App;
