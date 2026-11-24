import { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/kerluck-logo.jpeg';
import sudheeshImg from './assets/trainers/sudheesh.jpg';
import trainer2Img from './assets/trainers/trainer2.jpg';
import gym1 from './assets/gym/gym1.jpg';
import gym2 from './assets/gym/gym2.jpg';
import gym3 from './assets/gym/gym3.jpg';

const links = [
  ['home', 'HOME'], ['why', 'WHY US'], ['knowledge', 'WHY KERLUCK'],
  ['programs', 'PROGRAMS'], ['trainers', 'TRAINERS'], ['gallery', 'GALLERY'],
];

const stats = [['500+', 'ACTIVE MEMBERS'], ['2', 'EXPERT TRAINERS'], ['5', 'TRAINING PROGRAMS'], ['5+', 'YEARS OF EXCELLENCE']];

const why = [
  ['🏋️', 'Quality Equipment', 'Well-maintained machines and free weights for every workout style.'],
  ['🧘', 'Expert Guidance', 'Certified trainers ready to guide and motivate you daily.'],
  ['💪', 'Affordable Plans', 'From monthly to yearly, choose what fits your budget best.'],
  ['🔥', 'Community Support', 'Train with like-minded people who push you to be your best.'],
  ['⚡', 'Flexible Timings', 'Workout at your convenience with our flexible hours.'],
  ['🏆', 'Track Progress', 'Get regular assessments to see how far you’ve come.'],
];

const ideas = [
  ['Consistency Over Intensity', 'Small consistent efforts beat one intense workout. Our programs build lasting habits, not just quick results.'],
  ['Form Over Weight', 'Lifting heavy is great, but lifting right is everything. Our trainers fix your form before you add weight.'],
  ['Rest Is Growth', 'Muscles grow when you rest. We teach recovery, sleep and nutrition, because fitness is 30% gym and 70% lifestyle.'],
  ['Community Over Competition', 'You’re not competing with anyone but yourself. Our community celebrates every small win. At Kerluck, we grow together.'],
];

const programs = [
  ['🏋️', 'STRENGTH TRAINING', 'Build muscle & increase power', '12 Weeks'],
  ['🥊', 'CARDIO BLAST', 'Burn fat & boost endurance', '8 Weeks'],
  ['🧘', 'YOGA & FLEX', 'Improve mobility & reduce stress', '6 Weeks'],
  ['⚡', 'HIIT MAX', 'High intensity interval training', '6 Weeks'],
  ['💪', 'PERSONAL TRAINING', '1-on-1 coaching sessions', 'Custom'],
];

// Edit trainer details here
const trainers = [
  { name: 'SUDHEESH SUDHAKARAN', role: 'Stretching & Yoga Expert', exp: '3+ Years', rating: '4.8/5', img: sudheeshImg },
  { name: 'ROHIT', role: 'All-Rounder Trainer', exp: '5+ Years', rating: '4.9/5', img: trainer2Img },
];

const gallery = [
  [gym1, 'Dumbbell rack at Kerluck Gym'],
  [gym2, 'Cardio and treadmill area'],
  [gym3, 'Strength machines and leg press'],
];

const plans = [
  { icon: '📅', name: 'MONTHLY', price: '₹1,000', per: '/mo', perks: ['✓ Full Gym Access', '✓ All Equipment', '✓ Locker Room', '✕ Personal Trainer', '✕ Diet Plan'] },
  { icon: '📆', name: 'QUARTERLY', price: '₹2,700', per: '/3 mo', perks: ['✓ Full Gym Access', '✓ All Equipment', '✓ Locker Room + Towel', '✓ 1 Free PT Session', '✕ Diet Plan'] },
  { icon: '📊', name: 'HALF-YEARLY', price: '₹4,800', per: '/6 mo', perks: ['✓ Full Gym Access', '✓ All Equipment', '✓ Locker Room + Towel', '✓ 2 Free PT Sessions', '✓ Basic Diet Plan'] },
  { icon: '🏆', name: 'YEARLY', price: '₹8,400', per: '/12 mo', popular: true, perks: ['✓ Full Gym Access', '✓ All Equipment', '✓ Locker Room + Towel', '✓ 4 Free PT Sessions', '✓ Custom Diet Plan', '✓ Free Merchandise'] },
];

const faqs = [
  ['What are the gym timings?', 'We are open Monday to Saturday, 6:00 AM to 10:00 PM. Sunday is closed.'],
  ['Do I need to bring my own towel?', 'We provide fresh towels for our members. Just bring yourself and your workout gear!'],
  ['Can I freeze my membership?', 'Yes, you can freeze your membership for up to 30 days per year with prior notice.'],
  ['Is there a joining fee?', 'No joining fee! Just pay your first membership and start training immediately.'],
];

function Header({ badge, title, accent, text }) {
  return (
    <div className="section-header">
      <span className="section-badge">{badge}</span>
      <h2>{title} <span className="highlight">{accent}</span></h2>
      <p>{text}</p>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    const onScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-container">
          <img className="loading-logo" src={logo} alt="Kerluck Gym" />
          <div className="plates-container">
            {[['5kg', 'plate-5kg'], ['10kg', 'plate-10kg'], ['15kg', 'plate-15kg']].map(([w, c]) => (
              <div key={w} className={`plate-wrapper ${c}`}>
                <div className="plate-circle">{w}</div>
              </div>
            ))}
          </div>
          <div className="loading-brand">
            <span className="brand-main">KER<span className="brand-accent">LUCK</span></span>
            <span className="brand-sub">⚡ PREMIUM FITNESS ⚡</span>
          </div>
          <div className="loading-bar-track"><div className="loading-bar-fill"></div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <nav className="navbar">
        <a className="nav-logo" href="#home">
          <img src={logo} alt="Kerluck Gym logo" />
          <span className="logo-name">KER<span className="logo-accent">LUCK</span></span>
        </a>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
          {links.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
          <li><a href="#membership" className="btn-nav">MEMBERSHIP</a></li>
        </ul>
        <button className="hamburger" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-left">
            <div className="badge">🔥 PREMIUM FITNESS</div>
            <h1>BUILD YOUR <br /><span className="highlight">STRONGER SELF.</span></h1>
            <p className="subtitle">Train. Transform. Become Stronger.</p>
            <p className="description">
              Welcome to Kerluck Gym, a trusted fitness community in Sohna, Gurgaon.
              Get personalized training, quality equipment and a supportive environment to reach your goals.
            </p>
            <div className="hero-buttons">
              <a className="btn-primary" href="#membership">🔥 START TRAINING</a>
              <a className="btn-secondary" href="#programs">📋 EXPLORE PROGRAMS</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              {stats.map(([n, l]) => (
                <div className="hero-stat" key={l}>
                  <div className="stat-number">{n}</div>
                  <div className="stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="why-us" id="why">
        <Header badge="🌟 WHY CHOOSE US" title="Your" accent="Fitness Journey Starts Here" text="We make fitness accessible, enjoyable, and effective for everyone" />
        <div className="why-grid">
          {why.map(([icon, t, d]) => (
            <div className="why-card" key={t}>
              <div className="why-icon">{icon}</div><h3>{t}</h3><p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="knowledge" id="knowledge">
        <Header badge="📚 WHY KERLUCK?" title="Fitness is" accent="Not Just a Hobby" text="It’s a lifestyle. Here’s why Kerluck is different." />
        <div className="knowledge-grid">
          {ideas.map(([t, d], i) => (
            <div className={`knowledge-item ${i === 3 ? 'knowledge-full' : ''}`} key={t}>
              <div className="knowledge-number">0{i + 1}</div><h3>{t}</h3><p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="programs" id="programs">
        <Header badge="💪 OUR PROGRAMS" title="Choose Your" accent="Path" text="Expert-designed programs for every fitness level" />
        <div className="programs-grid">
          {programs.map(([icon, t, d, dur]) => (
            <div className="program-card" key={t}>
              <div className="program-icon">{icon}</div><h3>{t}</h3><p>{d}</p>
              <span className="program-duration">⏱ {dur}</span>
              <a className="program-btn" href="#membership">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      <section className="trainers" id="trainers">
        <Header badge="🏋️ OUR TRAINERS" title="Meet Your" accent="Experts" text="Certified professionals to guide you every step of the way" />
        <div className="trainers-grid">
          {trainers.map((t) => (
            <div className="trainer-card" key={t.name}>
              <div className="trainer-photo-wrapper"><img src={t.img} alt={t.name} className="trainer-photo" /></div>
              <h3>{t.name}</h3><p>{t.role}</p>
              <div className="trainer-social"><span>🏆 {t.exp}</span><span>⭐ {t.rating}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery" id="gallery">
        <Header badge="📸 GALLERY" title="Inside" accent="Kerluck Gym" text="Machines, free weights and cardio, all under one roof" />
        <div className="gallery-grid">
          {gallery.map(([src, alt]) => <img key={alt} src={src} alt={alt} loading="lazy" />)}
        </div>
      </section>

      <section className="membership" id="membership">
        <Header badge="💎 MEMBERSHIP" title="Choose Your" accent="Plan" text="Flexible plans for every fitness journey" />
        <div className="membership-grid">
          {plans.map((p) => (
            <div className={`membership-card ${p.popular ? 'popular' : ''}`} key={p.name}>
              {p.popular && <div className="popular-badge">🔥 BEST VALUE</div>}
              <div className="plan-icon">{p.icon}</div><h3>{p.name}</h3>
              <div className="plan-price">{p.price}<span>{p.per}</span></div>
              <ul className="plan-features">{p.perks.map((f) => <li key={f}>{f}</li>)}</ul>
              <a className="plan-btn" href="tel:7982288293">Call to Join</a>
            </div>
          ))}
        </div>
      </section>

      <section className="faq">
        <Header badge="❓ FAQ" title="Frequently Asked" accent="Questions" text="Everything you need to know before joining" />
        <div className="faq-grid">
          {faqs.map(([q, a]) => <div className="faq-item" key={q}><h3>{q}</h3><p>{a}</p></div>)}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <img className="footer-logo" src={logo} alt="Kerluck Gym" />
            <h3>KER<span>LUCK</span></h3>
            <p>Build Your Stronger Self.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#home">Home</a><a href="#programs">Programs</a>
            <a href="#trainers">Trainers</a><a href="#membership">Membership</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>📞 <a href="tel:7982288293">7982288293</a></p>
            <p>👤 Owner: Rohit</p>
            <p>📍 HCBS Sports Ville, Sohna, Gurgaon</p>
          </div>
          <div className="footer-col">
            <h4>Hours</h4>
            <p>🕐 Mon-Sat: 6:00 AM - 10:00 PM</p>
            <p>🚫 Sunday: Closed</p>
          </div>
        </div>
        <div className="footer-bottom"><p>© 2026 Kerluck Fitness | Sohna, Gurgaon</p></div>
      </footer>

      {showTopBtn && (
        <button className="back-to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
      )}
    </div>
  );
}

export default App;
