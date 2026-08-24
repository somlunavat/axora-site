/**
 * SIGNAL HARBOR — Axora's page-level design contract:
 * editorial technology clarity, asymmetric signal-path layout, ink/bone/citron palette,
 * and precise operational interactions over generic SaaS visual language.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  CloudCog,
  Menu,
  Moon,
  Network,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { useTheme } from "../contexts/ThemeContext";

const services = [
  {
    number: "01",
    icon: Network,
    title: "Technology strategy",
    text: "A practical route from competing priorities to an investment plan your business can execute.",
    tags: ["Roadmaps", "Modernization", "Architecture"],
  },
  {
    number: "02",
    icon: CloudCog,
    title: "Cloud & platforms",
    text: "Resilient foundations, designed around the way your teams actually need to work and scale.",
    tags: ["Cloud", "Data", "Integration"],
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Security & resilience",
    text: "Security built into the operating model, so confidence grows alongside capability.",
    tags: ["Risk", "Identity", "Continuity"],
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Managed technology",
    text: "A responsive technical partner for the systems your people and customers rely on each day.",
    tags: ["Support", "Optimization", "Visibility"],
  },
];

function AxoraMark({ className = "" }: { className?: string }) {
  return (
    <img
      className={`brand-mark ${className}`}
      src="/manus-storage/axora-logo_4bfeffdb.png"
      alt="Axora Services"
    />
  );
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 36);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const isDark = theme === "dark";

  const handleThemeToggle = () => {
    toggleTheme?.();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please add your name, email, and a brief outline of your needs.");
      return;
    }
    const subject = encodeURIComponent(`Axora inquiry — ${form.company || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "Not provided"}\n\nWhat we need help with:\n${form.message}`,
    );
    window.location.href = `mailto:hello@axoraservices.com?subject=${subject}&body=${body}`;
    toast.success("Your email app is opening with your inquiry.");
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Axora Services home" onClick={closeMenu}>
            <AxoraMark />
            <span className="brand-wordmark">axora<span>.</span></span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#about">Why Axora</a>
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={handleThemeToggle}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={isDark}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              <span>{isDark ? "Light" : "Dark"}</span>
            </button>
            <a className="header-contact" href="#contact">
              Let&apos;s talk <ArrowRight size={16} strokeWidth={2.2} />
            </a>
          </div>

          <button
            className="menu-trigger"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-orbit orbit-one" />
        <div className="mobile-menu-orbit orbit-two" />
        <nav aria-label="Mobile navigation">
          <a href="#services" onClick={closeMenu}><span>01</span>Services <ArrowDownRight /></a>
          <a href="#about" onClick={closeMenu}><span>02</span>Why Axora <ArrowDownRight /></a>
          <a href="#contact" onClick={closeMenu}><span>03</span>Start a conversation <ArrowDownRight /></a>
          <button className="mobile-theme-toggle" type="button" onClick={handleThemeToggle} aria-pressed={isDark}>
            <span>{isDark ? "Use light mode" : "Use dark mode"}</span>
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
        </nav>
      </div>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-gridline vertical-line" aria-hidden="true" />
          <div className="hero-gridline horizontal-line" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-copy reveal-item">
              <p className="eyebrow eyebrow-light"><span className="pulse-dot" /> Technology services, made dependable</p>
              <h1 id="hero-title">Build the system your <em>next chapter</em> needs.</h1>
              <p className="hero-description">
                Axora Services helps ambitious organizations make technology a clear, secure, and lasting advantage.
              </p>
              <div className="hero-actions">
                <a className="button button-citron" href="#contact">Start a conversation <ArrowRight size={18} /></a>
                <a className="text-link text-link-light" href="#services">Explore our services <span><ArrowDownRight size={18} /></span></a>
              </div>
            </div>

            <div className="hero-visual reveal-item" aria-label="Abstract systems network">
              <img src="/manus-storage/axora-hero-network_15da2f47.jpg" alt="" />
              <div className="visual-glass-card">
                <span className="card-status"><i /> SIGNAL / ACTIVE</span>
                <strong>Clearer direction.<br />Stronger systems.</strong>
                <span className="card-arrow"><ArrowDownRight size={19} /></span>
              </div>
              <span className="visual-label visual-label-top">ROUTE 01 — STRATEGY</span>
              <span className="visual-label visual-label-bottom">BUILDING CAPABILITY</span>
              <span className="coord coord-a">42.163° N</span>
              <span className="coord coord-b">71.538° W</span>
            </div>
          </div>
          <div className="hero-bottom-bar">
            
            <a href="#services" aria-label="Explore Axora services"><ArrowDownRight size={21} /></a>
          </div>
        </section>

        <section className="capability-strip" aria-label="Technology capabilities">
          <div>STRATEGY <i /> CLOUD <i /> CYBERSECURITY <i /> MANAGED SERVICES <i /> DATA &amp; PLATFORMS <i /></div>
          <div aria-hidden="true">STRATEGY <i /> CLOUD <i /> CYBERSECURITY <i /> MANAGED SERVICES <i /> DATA &amp; PLATFORMS <i /></div>
        </section>

        <section className="intro-section" id="about" aria-labelledby="intro-title">
          <div className="signal-rail"><span>01</span><i /><span>04</span></div>
          <div className="intro-layout">
            <p className="eyebrow eyebrow-dark">How we create value</p>
            <div className="intro-statement">
              <h2 id="intro-title">The technology that matters is the kind that lets your people <em>move with confidence.</em></h2>
              <p>We align strategy, platforms, security, and support around the way your organization actually creates value—so every investment has a clearer purpose.</p>
              <a className="text-link text-link-dark" href="#services">Explore our services <span><ArrowRight size={18} /></span></a>
            </div>
          </div>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="services-heading">
            <div>
              <p className="eyebrow eyebrow-dark">Our core capabilities</p>
              <h2 id="services-title">The hard questions.<br /><em>A clearer route.</em></h2>
            </div>
            <p>Focused expertise for the decisions and systems that shape what your business can do next.</p>
          </div>

          <div className="services-list">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top"><span>{service.number}</span><Icon size={24} strokeWidth={1.6} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="service-bottom">
                    <div className="tag-list">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <a href="#contact" aria-label={`Ask about ${service.title}`}><ArrowRight size={20} /></a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="focus-section" aria-labelledby="focus-title">
          <div className="focus-image">
            <img src="/manus-storage/axora-architecture_3321fbe0.jpg" alt="Abstract engineered technology infrastructure" />
            <span className="focus-image-label">SCALE WITH INTENT</span>
          </div>
          <div className="focus-copy">
            <p className="eyebrow eyebrow-light">Built to work together</p>
            <h2 id="focus-title">One partner across the <em>technology horizon.</em></h2>
            <p>From a difficult transformation decision to the day-to-day work of keeping systems healthy, Axora connects the strategic view with the technical detail.</p>
            <ul>
              <li><Check size={17} /> Understand the current landscape before changing it.</li>
              <li><Check size={17} /> Deliver progress in practical, visible increments.</li>
              <li><Check size={17} /> Build capabilities that stay useful after go-live.</li>
            </ul>
            <a href="#contact" className="button button-outline-light">Talk to an expert <ArrowRight size={18} /></a>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-art"><img src="/manus-storage/axora-contact-light_e5eee1f0.jpg" alt="" /></div>
          <div className="contact-inner">
            <div className="contact-intro">
              <p className="eyebrow eyebrow-dark">Start a conversation</p>
              <h2 id="contact-title">Bring the hard technology <em>questions.</em></h2>
              <p>Tell us what is changing, what is getting in the way, or what needs to work better. We will help you make the next move with greater clarity.</p>
              <div className="contact-note"><span>AXORA SERVICES</span><span>TECHNOLOGY, WITH DIRECTION</span></div>
            </div>
            <form className="inquiry-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Name<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your name" /></label>
                <label>Work email<input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@company.com" /></label>
              </div>
              <label>Company <span>(optional)</span><input value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} placeholder="Your organization" /></label>
              <label>What are you working through?<textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="A quick outline is all we need to start." rows={4} /></label>
              <button type="submit" className="button button-dark">Send inquiry <Send size={17} /></button>
              <p className="form-disclaimer">Submitting opens your default email app with your inquiry prepared for our team.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#top" aria-label="Back to top"><AxoraMark /><span className="brand-wordmark">axora<span>.</span></span></a>
          <p>Technology, with direction.</p>
          <a className="footer-top-link" href="#top">Back to top <ArrowDownRight size={17} /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Axora Services</span>
          <span>Built for what&apos;s next.</span>
        </div>
      </footer>
    </div>
  );
}
