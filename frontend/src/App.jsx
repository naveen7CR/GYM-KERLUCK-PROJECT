import { useState, useEffect } from 'react';
import './App.css';
import sudheeshImg from './assets/trainers/sudheesh.jpg';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-container">
          <div className="plates-container">
            <div className="plate-wrapper plate-5kg">
              <div className="plate-circle"><span className="plate-weight">5kg</span></div>
              <div className="plate-hole"></div>
            </div>
            <div className="plate-wrapper plate-10kg">
              <div className="plate-circle"><span className="plate-weight">10kg</span></div>
              <div className="plate-hole"></div>
            </div>
            <div className="plate-wrapper plate-15kg">
              <div className="plate-circle"><span className="plate-weight">15kg</span></div>
              <div className="plate-hole"></div>
            </div>
          </div>
          <div className="loading-brand">
            <span className="brand-main">KER<span className="brand-accent">LUCK</span></span>
            <span className="brand-sub">⚡ PREMIUM FITNESS ⚡</span>
          </div>
          <div className="loading-bar-container">
            <div className="loading-bar-track"><div className="loading-bar-fill"></div></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="nav-logo">
          <span className="logo-icon">💪</span>
          <span className="logo-name">KER<span className="logo-accent">LUCK</span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home">HOME</a></li>
          <li><a href="#why">WHY US</a></li>
          <li><a href="#knowledge">WHY KERLUCK</a></li>
          <li><a href="#programs">PROGRAMS</a></li>
          <li><a href="#trainers">TRAINERS</a></li>
          <li><a href="#membership" className="btn-nav">MEMBERSHIP</a></li>
        </ul>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-left">
            <div className="badge">🔥 PREMIUM FITNESS</div>
            <h1>
              BUILD YOUR <br />
              <span className="highlight">STRONGER SELF.</span>
            </h1>
            <p className="subtitle">Train. Transform. Become Stronger.</p>
            <p className="description">
              Welcome to Kerluck Gym — the most trusted fitness community in Sohna, Gurgaon.
              Get personalized training, quality equipment, and a supportive environment
              to achieve your goals.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">🔥 START TRAINING</button>
              <button className="btn-secondary">📋 EXPLORE PROGRAMS</button>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">ACTIVE MEMBERS</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">EXPERT TRAINERS</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">20+</div>
                <div className="stat-label">TRAINING PROGRAMS</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">YEARS OF EXCELLENCE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-us" id="why">
        <div className="section-header">
          <span className="section-badge">🌟 WHY CHOOSE US</span>
          <h2>Your <span className="highlight">Fitness Journey</span> Starts Here</h2>
          <p>We make fitness accessible, enjoyable, and effective for everyone</p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">🏋️</div>
            <h3>Quality Equipment</h3>
            <p>Well-maintained machines and free weights for every workout style.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">🧘</div>
            <h3>Expert Guidance</h3>
            <p>Certified trainers ready to guide and motivate you daily.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">💪</div>
            <h3>Affordable Plans</h3>
            <p>From monthly to yearly — choose what fits your budget best.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">🔥</div>
            <h3>Community Support</h3>
            <p>Train with like-minded people who push you to be your best.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">⚡</div>
            <h3>Flexible Timings</h3>
            <p>Workout at your convenience with our flexible hours.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">🏆</div>
            <h3>Track Progress</h3>
            <p>Get regular assessments to see how far you've come.</p>
          </div>
        </div>
      </section>

      {/* ===== KNOWLEDGE SECTION ===== */}
      <section className="knowledge" id="knowledge">
        <div className="section-header">
          <span className="section-badge">📚 WHY KERLUCK?</span>
          <h2>Fitness is <span className="highlight">Not Just a Hobby</span></h2>
          <p>It's a lifestyle. Here's why Kerluck is different.</p>
        </div>

        <div className="knowledge-grid">
          <div className="knowledge-item">
            <div className="knowledge-number">01</div>
            <h3>Consistency Over Intensity</h3>
            <p>We believe in showing up daily. Small consistent efforts beat one intense workout. Our programs are designed to build lasting habits, not just quick results.</p>
          </div>

          <div className="knowledge-item">
            <div className="knowledge-number">02</div>
            <h3>Form Over Weight</h3>
            <p>Lifting heavy is great — but lifting right is everything. Our trainers ensure your form is perfect before you increase weight, preventing injuries and maximizing gains.</p>
          </div>

          <div className="knowledge-item">
            <div className="knowledge-number">03</div>
            <h3>Rest Is Growth</h3>
            <p>Muscles grow when you rest, not when you train. We educate our members on recovery, sleep, and nutrition — because fitness is 30% gym and 70% lifestyle.</p>
          </div>

          <div className="knowledge-item knowledge-full">
            <div className="knowledge-number">04</div>
            <h3>Community Over Competition</h3>
            <p>You're not competing with anyone but yourself. Our community supports, motivates, and celebrates every small win — because every journey matters. At Kerluck, we grow together.</p>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS SECTION ===== */}
      <section className="programs" id="programs">
        <div className="section-header">
          <span className="section-badge">💪 OUR PROGRAMS</span>
          <h2>Choose Your <span className="highlight">Path</span></h2>
          <p>Expert-designed programs for every fitness level</p>
        </div>

        <div className="programs-grid">
          <div className="program-card">
            <div className="program-icon">🏋️</div>
            <h3>STRENGTH TRAINING</h3>
            <p>Build muscle & increase power</p>
            <span className="program-duration">⏱ 12 Weeks</span>
            <button className="program-btn">Learn More →</button>
          </div>

          <div className="program-card">
            <div className="program-icon">🥊</div>
            <h3>CARDIO BLAST</h3>
            <p>Burn fat & boost endurance</p>
            <span className="program-duration">⏱ 8 Weeks</span>
            <button className="program-btn">Learn More →</button>
          </div>

          <div className="program-card">
            <div className="program-icon">🧘</div>
            <h3>YOGA & FLEX</h3>
            <p>Improve mobility & reduce stress</p>
            <span className="program-duration">⏱ 6 Weeks</span>
            <button className="program-btn">Learn More →</button>
          </div>

          <div className="program-card">
            <div className="program-icon">⚡</div>
            <h3>HIIT MAX</h3>
            <p>High intensity interval training</p>
            <span className="program-duration">⏱ 6 Weeks</span>
            <button className="program-btn">Learn More →</button>
          </div>

          <div className="program-card">
            <div className="program-icon">💪</div>
            <h3>PERSONAL TRAINING</h3>
            <p>1-on-1 coaching sessions</p>
            <span className="program-duration">⏱ Custom</span>
            <button className="program-btn">Learn More →</button>
          </div>
        </div>
      </section>

      {/* ===== TRAINERS ===== */}
      <section className="trainers" id="trainers">
        <div className="section-header">
          <span className="section-badge">🏋️ OUR TRAINERS</span>
          <h2>Meet Your <span className="highlight">Experts</span></h2>
          <p>Certified professionals to guide you every step of the way</p>
        </div>

        <div className="trainers-grid">
          {/* Trainer 1 — Sudheesh */}
          <div className="trainer-card">
            <div className="trainer-photo-wrapper">
              <img src={sudheeshImg} alt="Sudheesh Sudhakaran" className="trainer-photo" />
            </div>
            <h3>SUDHEESH SUDHAKARAN</h3>
            <p>Stretching & Yoga Expert</p>
            <div className="trainer-social">
              <span>🏆 3+ Years</span>
              <span>⭐ 4.8/5</span>
            </div>
          </div>

          {/* Trainer 2 — Placeholder */}
          <div className="trainer-card">
            <div className="trainer-image" style={{ borderColor: '#e63946' }}>💪</div>
            <h3>COMING SOON</h3>
            <p>Strength Coach</p>
            <div className="trainer-social">
              <span>🏆 —</span>
              <span>⭐ —</span>
            </div>
          </div>

          {/* Trainer 3 — Placeholder */}
          <div className="trainer-card">
            <div className="trainer-image" style={{ borderColor: '#ff6b35' }}>🧘</div>
            <h3>COMING SOON</h3>
            <p>Fitness Expert</p>
            <div className="trainer-social">
              <span>🏆 —</span>
              <span>⭐ —</span>
            </div>
          </div>
        </div>
      </section>
      {/* ===== MEMBERSHIP ===== */}
      <section className="membership" id="membership">
        <div className="section-header">
          <span className="section-badge">💎 MEMBERSHIP</span>
          <h2>Choose Your <span className="highlight">Plan</span></h2>
          <p>Flexible plans for every fitness journey</p>
        </div>

        <div className="membership-grid">
          <div className="membership-card">
            <div className="plan-icon">📅</div>
            <h3>MONTHLY</h3>
            <div className="plan-price">₹1,000<span>/mo</span></div>
            <ul className="plan-features">
              <li>✓ Full Gym Access</li>
              <li>✓ All Equipment</li>
              <li>✓ Locker Room</li>
              <li>✕ Personal Trainer</li>
              <li>✕ Diet Plan</li>
            </ul>
            <button className="plan-btn">Join Now</button>
          </div>

          <div className="membership-card">
            <div className="plan-icon">📆</div>
            <h3>QUARTERLY</h3>
            <div className="plan-price">₹2,700<span>/3 mo</span></div>
            <ul className="plan-features">
              <li>✓ Full Gym Access</li>
              <li>✓ All Equipment</li>
              <li>✓ Locker Room + Towel</li>
              <li>✓ 1 Free PT Session</li>
              <li>✕ Diet Plan</li>
            </ul>
            <button className="plan-btn">Join Now</button>
          </div>

          <div className="membership-card">
            <div className="plan-icon">📊</div>
            <h3>HALF-YEARLY</h3>
            <div className="plan-price">₹4,800<span>/6 mo</span></div>
            <ul className="plan-features">
              <li>✓ Full Gym Access</li>
              <li>✓ All Equipment</li>
              <li>✓ Locker Room + Towel</li>
              <li>✓ 2 Free PT Sessions</li>
              <li>✓ Basic Diet Plan</li>
            </ul>
            <button className="plan-btn">Join Now</button>
          </div>

          <div className="membership-card popular">
            <div className="popular-badge">🔥 BEST VALUE</div>
            <div className="plan-icon">🏆</div>
            <h3>YEARLY</h3>
            <div className="plan-price">₹8,400<span>/12 mo</span></div>
            <ul className="plan-features">
              <li>✓ Full Gym Access</li>
              <li>✓ All Equipment</li>
              <li>✓ Locker Room + Towel</li>
              <li>✓ 4 Free PT Sessions</li>
              <li>✓ Custom Diet Plan</li>
              <li>✓ Free Merchandise</li>
            </ul>
            <button className="plan-btn">Join Now</button>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq">
        <div className="section-header">
          <span className="section-badge">❓ FAQ</span>
          <h2>Frequently Asked <span className="highlight">Questions</span></h2>
          <p>Everything you need to know before joining</p>
        </div>

        <div className="faq-grid">
          <div className="faq-item">
            <h3>What are the gym timings?</h3>
            <p>We are open Monday to Saturday, 6:00 AM to 10:00 PM. Sunday is closed.</p>
          </div>
          <div className="faq-item">
            <h3>Do I need to bring my own towel?</h3>
            <p>We provide fresh towels for all our members. Just bring yourself and your workout gear!</p>
          </div>
          <div className="faq-item">
            <h3>Can I freeze my membership?</h3>
            <p>Yes, you can freeze your membership for up to 30 days per year with prior notice.</p>
          </div>
          <div className="faq-item">
            <h3>Is there a joining fee?</h3>
            <p>No joining fee! Just pay your first month's membership and start training immediately.</p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>KER<span>LUCK</span></h3>
            <p>Build Your Stronger Self.</p>
            <div className="footer-social">
              <span>📱</span>
              <span>📧</span>
              <span>📞</span>
              <span>📍</span>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#programs">Programs</a>
            <a href="#trainers">Trainers</a>
            <a href="#membership">Membership</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>📞 <strong>7982288293</strong></p>
            <p>👤 Owner: <strong>Rohit</strong></p>
            <p>📍 HCBS Sports Ville, Sohna, Gurgaon</p>
          </div>
          <div className="footer-col">
            <h4>Hours</h4>
            <p>🕐 Mon-Sat: 6:00 AM - 10:00 PM</p>
            <p>🚫 Sunday: Closed</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Kerluck Fitness. Built with 💪 | Sohna, Gurgaon</p>
        </div>
      </footer>

      {/* ===== BACK TO TOP BUTTON ===== */}
      {showTopBtn && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}

    </div>
  );
}

export default App;