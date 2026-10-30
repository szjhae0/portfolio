import { useEffect, useState } from "react";
import figmaIcon from "./assets/figma.svg";
import canvaIcon from "./assets/canva.svg";
import principlesIcon from "./assets/principles.svg";
import layoutIcon from "./assets/layout.svg";
import prototypingIcon from "./assets/prototyping.svg";
import experienceIcon from "./assets/experience.svg";
import profileImage from "./assets/profile.jpg";
import ecommerce1 from "./assets/ecommerce1.png";
import ecommerce2 from "./assets/ecommerce2.png";
import ecommerce3 from "./assets/ecommerce3.png";
import low1 from "./assets/low.png";
import low2 from "./assets/low2.png";
import low3 from "./assets/low3.png";
import pawhaven1 from "./assets/pawhaven.png";
import pawhaven2 from "./assets/pawhaven2.png";
import securelife1 from "./assets/securelife.png";

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=DM+Sans:wght@400;500&display=swap");

:root {
  --paper: #ffffff;
  --card: #ffffff;
  --parchment: #e8e2d4;
  --soft: #f5f1e8;
  --night: #1f2150;
  --indigo: #42478b;
  --orchid: #b67ddb;
  --muted: #50558f;
  --line: #d3cab4;
  --nav-h: 73px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; scroll-padding-top: var(--nav-h); color-scheme: light; background: var(--paper); }

html, body, #root {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-shadow: none;
  text-align: left;
  display: block;
  place-items: initial;
}

body {
  background: var(--paper);
  color: var(--night);
  font-family: "DM Sans", system-ui, sans-serif;
  font-size: 17px;
  line-height: 1.6;
  min-width: 0;
}

h1, h2, h3, p, li, span, strong { color: inherit; }

a { color: inherit; }

:focus-visible { outline: 3px solid var(--indigo); outline-offset: 3px; }

.wrap { width: 100%; max-width: none; margin: 0; padding: 0 clamp(16px, 2.5vw, 32px); }

.nav {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid #ece7da;
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px clamp(16px, 2.5vw, 32px);
}

.brand { display: flex; align-items: center; gap: 12px; text-decoration: none; }

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 13px;
  background: linear-gradient(135deg, var(--indigo), var(--orchid));
  color: #ffffff;
  display: grid;
  place-items: center;
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 700;
  font-size: 22px;
}

.brand-text strong {
  display: block;
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 21px;
  line-height: 1.1;
}

.brand-text span { display: block; font-size: 12px; color: var(--muted); }

.nav-links { display: flex; gap: 36px; }

.nav-links a {
  text-decoration: none;
  color: var(--night);
  font-weight: 500;
  padding: 6px 0;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}

.nav-links a:hover { color: var(--indigo); }

.nav-links a.active { color: var(--indigo); border-bottom-color: var(--orchid); }

.menu-btn {
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--night);
  place-items: center;
  cursor: pointer;
}

.menu-btn svg { width: 22px; height: 22px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }

.hero {
  position: relative;
  isolation: isolate;
  min-height: calc(100svh - var(--nav-h));
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 0 48px;
}

.hero::before,
.hero::after {
  content: "";
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  filter: blur(30px);
  pointer-events: none;
}

.hero::before {
  top: -120px;
  right: 0;
  width: 560px;
  height: 560px;
  background: radial-gradient(circle, rgba(182, 125, 219, 0.4), transparent 65%);
}

.hero::after {
  bottom: -60px;
  left: 0;
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(66, 71, 139, 0.2), transparent 65%);
}

.frame {
  position: relative;
  padding: 0;
  animation: rise 0.8s ease both;
}

@keyframes rise {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: none; }
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(240px, 360px);
  gap: 48px;
  align-items: center;
}

.profile {
  aspect-ratio: 4 / 5;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 24px 50px -24px rgba(31, 33, 80, 0.5);
}

.profile img { width: 100%; height: 100%; object-fit: cover; display: block; }

.ph {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: var(--muted);
  font-size: 15px;
  background: repeating-linear-gradient(135deg, #ded7c5, #ded7c5 12px, #e8e2d4 12px, #e8e2d4 24px);
}

.profile .ph {
  color: var(--night);
  font-weight: 500;
  background: linear-gradient(165deg, var(--indigo) 0%, var(--orchid) 50%, var(--parchment) 100%);
}

.hero h1 {
  color: var(--night);
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 700;
  font-size: clamp(38px, 7vw, 76px);
  line-height: 1.02;
  letter-spacing: -0.02em;
  max-width: 14ch;
}

.grad {
  background: linear-gradient(100deg, var(--indigo), var(--orchid));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero p { max-width: 52ch; margin-top: 24px; color: var(--muted); }

.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 999px;
  font-weight: 500;
  text-decoration: none;
  border: 2px solid var(--night);
  transition: background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;
}

.btn:hover { transform: translateY(-2px); }

.btn-solid { background: var(--indigo); border-color: var(--indigo); color: var(--card); box-shadow: 0 12px 24px -10px rgba(66, 71, 139, 0.7); }
.btn-solid:hover { background: var(--night); border-color: var(--night); }
.btn-line:hover { background: var(--night); color: var(--card); }

.section {
  min-height: calc(100svh - var(--nav-h));
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 56px 0;
}

.section h2 {
  text-align: center;
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 700;
  font-size: clamp(30px, 4.5vw, 46px);
  letter-spacing: -0.02em;
  margin-bottom: 32px;
}

.section h2::after {
  content: "";
  display: block;
  width: 48px;
  height: 4px;
  border-radius: 4px;
  background: linear-gradient(90deg, var(--indigo), var(--orchid));
  margin: 14px auto 0;
}

.section.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }

.section.reveal.show { opacity: 1; transform: none; }

.section-center { text-align: center; }

.about { max-width: 62ch; margin: 0 auto; font-size: 19px; }

.about p + p { margin-top: 16px; color: var(--muted); font-size: 17px; }

.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

.panel { border: 1px solid #ece7da; border-radius: 28px; padding: 36px; background: var(--card); box-shadow: 0 20px 50px -30px rgba(66, 71, 139, 0.35); }

.panel h3 { font-family: "Bricolage Grotesque", sans-serif; font-size: 22px; margin-bottom: 24px; }

.items { list-style: none; display: grid; gap: 20px; }

.item { display: flex; align-items: flex-start; gap: 16px; }

.icon {
  flex: none;
  width: 44px;
  height: 44px;
  background: rgba(182, 125, 219, 0.16);
  border-radius: 14px;
  display: grid;
  place-items: center;
}

.icon img { width: 24px; height: 24px; display: block; }

.item strong { display: block; font-size: 17px; font-weight: 500; line-height: 44px; }

.item p { color: var(--muted); font-size: 15px; margin-top: -8px; }

.projects { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }

.project { background: var(--card); border: 1px solid #ece7da; border-radius: 28px; overflow: hidden; box-shadow: 0 20px 50px -30px rgba(66, 71, 139, 0.35); transition: transform 0.3s, box-shadow 0.3s, border-color 0.2s; }

.project:hover { transform: translateY(-6px); border-color: var(--orchid); box-shadow: 0 30px 60px -28px rgba(66, 71, 139, 0.55); }

.project-img img, .project-img .ph { transition: transform 0.5s; }

.project:hover .project-img img, .project:hover .project-img .ph { transform: scale(1.05); }

.project-btn {
  display: block;
  width: 100%;
  background: none;
  border: 0;
  text-align: left;
  font: inherit;
  color: inherit;
  cursor: pointer;
}

.project-btn:focus-visible { outline-offset: -3px; }

.project-img { position: relative; aspect-ratio: 4 / 3; overflow: hidden; }

.project-img img { width: 100%; height: 100%; object-fit: cover; display: block; }

.badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--indigo);
  color: var(--card);
  font-size: 13px;
  font-weight: 500;
  padding: 2px 12px;
  border-radius: 999px;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(31, 33, 80, 0.6);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 50;
}

.modal {
  background: var(--card);
  border-radius: 20px;
  width: min(960px, 100%);
  max-height: 100%;
  overflow: auto;
  padding: 24px;
}

.modal-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 16px; }

.modal-head h3 { font-family: "Bricolage Grotesque", sans-serif; font-size: 24px; }

.modal-head p { color: var(--muted); font-size: 15px; }

.circle-btn {
  flex: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--night);
  display: grid;
  place-items: center;
  cursor: pointer;
}

.circle-btn:hover { border-color: var(--indigo); color: var(--indigo); }

.circle-btn svg { width: 22px; height: 22px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

.stage {
  position: relative;
  height: min(58vh, 520px);
  background: var(--soft);
  border-radius: 12px;
  overflow: hidden;
}

.stage img { width: 100%; height: 100%; object-fit: contain; display: block; }

.stage .circle-btn { position: absolute; top: 50%; transform: translateY(-50%); }

.stage .prev { left: 12px; }
.stage .next { right: 12px; }

.thumbs-row { display: flex; align-items: center; gap: 16px; margin-top: 16px; }

.counter { color: var(--muted); font-size: 15px; flex: none; }

.thumbs { display: flex; gap: 8px; overflow-x: auto; padding: 4px; }

.thumb {
  flex: none;
  width: 72px;
  aspect-ratio: 4 / 3;
  border: 2px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
  padding: 0;
  background: none;
  cursor: pointer;
}

.thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }

.thumb-on { border-color: var(--indigo); }

.project-body { padding: 20px 24px 24px; }

.project-body h3 { font-family: "Bricolage Grotesque", sans-serif; font-size: 20px; }

.project-body p { color: var(--muted); font-size: 15px; margin-top: 4px; }

.footer { padding: 56px 0 32px; border-top: 1px solid var(--line); text-align: center; }

.footer-title {
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 700;
  font-size: clamp(26px, 3.5vw, 34px);
  letter-spacing: -0.02em;
}

.contact-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px 64px;
  margin-top: 28px;
  text-align: left;
}

.contact-list span { display: block; color: var(--muted); font-size: 15px; }

.contact-list a { font-weight: 500; }

.copyright { margin-top: 48px; padding-top: 24px; border-top: 1px solid #ece7da; color: var(--muted); font-size: 15px; }

@media (max-width: 800px) {
  .two-col { grid-template-columns: 1fr; }
  .projects { grid-template-columns: 1fr; }
  .hero-grid { grid-template-columns: 1fr; gap: 32px; }
  .profile { max-width: 280px; }
  .menu-btn { display: grid; }
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 4px;
    padding: 12px clamp(16px, 2.5vw, 32px) 20px;
    background: var(--card);
    border-bottom: 1px solid var(--line);
  }
  .nav-links.open { display: flex; }
  .nav-links a, .nav-links a.active { padding: 10px 0; border-bottom: 0; }
  .section { padding: 40px 0; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .btn, .project, .section.reveal, .project-img img, .project-img .ph { transition: none; }
  .frame { animation: none; }
  .section.reveal { opacity: 1; transform: none; }
}
`;

const navItems = [
  { label: "Home", id: "top" },
  { label: "About Me", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const projects = [
  {
    title: "Food Delivery Website",
    text: "A web interface for a food delivery platform inspired by foodpanda, with cuisine browsing, restaurant results, and a sort-by filter panel.",
    images: [ecommerce1, ecommerce2, ecommerce3],
  },
  {
    title: "Wellness Website Wireframes",
    text: "Low-fidelity wireframes for a mental wellness website where HCDC students can track their mood, find inspiration, and access support.",
    images: [low1, low2, low3],
  },
  {
    title: "PawHaven Pet Shop",
    text: "A landing page and services page design for a pet shop, covering food, toys, grooming, pet care, and health check-ups.",
    images: [pawhaven1, pawhaven2],
  },
  {
    title: "SecureLife Insurance App",
    text: "A mobile app design for an insurance company, with life, health, car, and house coverage, quick actions, and a premium calculator.",
    images: [securelife1],
  },
];

function Picture({ src, label }) {
  if (src) {
    return <img src={src} alt={label} />;
  }
  return <div className="ph">{label}</div>;
}

const closeIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const prevIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M15 5l-7 7 7 7" />
  </svg>
);

const nextIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 5l7 7-7 7" />
  </svg>
);

const tools = [
  {
    icon: figmaIcon,
    title: "Figma",
    text: "Beginner in UI/UX design, interface layout, and exploring design prototypes.",
  },
  {
    icon: canvaIcon,
    title: "Canva",
    text: "Creating visual designs, presentations, and other creative materials.",
  },
];

const learning = [
  { icon: principlesIcon, title: "UI/UX design principles" },
  { icon: layoutIcon, title: "User interface layout and design" },
  { icon: prototypingIcon, title: "Wireframing and prototyping" },
  { icon: experienceIcon, title: "Creating user-friendly digital experiences" },
];

export default function App() {
  const [active, setActive] = useState(null);
  const [slide, setSlide] = useState(0);
  const [activeLink, setActiveLink] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);

  const current = active === null ? null : projects[active];
  const total = current ? current.images.length : 0;

  useEffect(() => {
    if (active === null) {
      return undefined;
    }
    const count = projects[active].images.length;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setActive(null);
      }
      if (event.key === "ArrowRight") {
        setSlide((value) => (value + 1) % count);
      }
      if (event.key === "ArrowLeft") {
        setSlide((value) => (value - 1 + count) % count);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  useEffect(() => {
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = navItems[0].id;
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element && element.getBoundingClientRect().top <= 120) {
          current = item.id;
        }
      });
      setActiveLink(atBottom ? navItems[navItems.length - 1].id : current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".section").forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const openProject = (index) => {
    setActive(index);
    setSlide(0);
  };

  const closeProject = () => setActive(null);

  const showNext = () => setSlide((value) => (value + 1) % total);

  const showPrev = () => setSlide((value) => (value - 1 + total) % total);

  return (
    <>
      <style>{styles}</style>

      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">J</span>
            <span className="brand-text">
              <strong>Jhea</strong>
              <span>UI/UX • Creative</span>
            </span>
          </a>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeLink === item.id ? "active" : ""}
                aria-current={activeLink === item.id ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </header>

      <div className="wrap">
        <main>
          <section className="hero" id="top">
            <div className="frame">
              <div className="hero-grid">
                <div>
                  <h1>
                    Aspiring <span className="grad">UI/UX</span> designer
                  </h1>
                  <p>
                    I’m an IT student exploring Figma, learning UI/UX principles, and turning ideas
                    into creative digital experiences.
                  </p>
                  <div className="hero-actions">
                    <a className="btn btn-solid" href="#projects">See projects</a>
                    <a className="btn btn-line" href="#contact">Get in touch</a>
                  </div>
                </div>
                <div className="profile">
                  <Picture src={profileImage} label="Profile photo" />
                </div>
              </div>
            </div>
          </section>

          <section className="section section-center" id="about">
            <h2>About me</h2>
            <div className="about">
              <p>Hi, I’m Jhea, an aspiring UI/UX designer and IT student based in Davao City.</p>
              <p>
                I’m still learning, growing, and discovering my style one design at a time. I’m
                continuously improving my design skills as I explore new tools, techniques, and
                creative ideas.
              </p>
              <p>
                I started with Figma and Canva, and I’m now practicing wireframing and prototyping
                so I can turn rough ideas into clear, user-friendly screens. So far I’ve worked on a
                food delivery website, wellness website wireframes, a pet shop landing page, and an
                insurance mobile app.
              </p>
              <p>
                I enjoy designs that are simple, easy to use, and pleasant for the people who use
                them. I’m always open to feedback and to opportunities that help me grow as a
                designer.
              </p>
            </div>
          </section>

          <section className="section" id="skills">
            <h2>Skills and learning</h2>
            <div className="two-col">
              <div className="panel">
                <h3>Design tools</h3>
                <ul className="items">
                  {tools.map((item) => (
                    <li className="item" key={item.title}>
                      <span className="icon">
                        <img src={item.icon} alt="" />
                      </span>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="panel">
                <h3>Currently learning</h3>
                <ul className="items">
                  {learning.map((item) => (
                    <li className="item" key={item.title}>
                      <span className="icon">
                        <img src={item.icon} alt="" />
                      </span>
                      <div>
                        <strong>{item.title}</strong>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="section" id="projects">
            <h2>Projects</h2>
            <div className="projects">
              {projects.map((project, index) => (
                <article className="project" key={index}>
                  <button
                    className="project-btn"
                    onClick={() => openProject(index)}
                    aria-label={`View ${project.title}`}
                  >
                    <div className="project-img">
                      <Picture src={project.images[0]} label={project.title} />
                      {project.images.length > 1 && (
                        <span className="badge">{project.images.length} images</span>
                      )}
                    </div>
                    <div className="project-body">
                      <h3>{project.title}</h3>
                      <p>{project.text}</p>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </section>

        </main>

        <footer className="footer" id="contact">
          <h2 className="footer-title">Contact</h2>
          <ul className="contact-list">
            <li>
              <span>Email</span>
              <a href="mailto:jheaabrahan@gmail.com">jheaabrahan@gmail.com</a>
            </li>
            <li>
              <span>Phone</span>
              <a href="tel:09263701720">0926 370 1720</a>
            </li>
            <li>
              <span>Address</span>
              Durian Street, San Lorenzo, Buhangin, Davao City
            </li>
          </ul>
          <p className="copyright">© 2026 Jhea A. Abrahan</p>
        </footer>
      </div>

      {current && (
        <div className="overlay" onClick={closeProject}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-head">
              <div>
                <h3>{current.title}</h3>
                <p>{current.text}</p>
              </div>
              <button className="circle-btn" onClick={closeProject} aria-label="Close">
                {closeIcon}
              </button>
            </div>

            <div className="stage">
              {total > 1 && (
                <button className="circle-btn prev" onClick={showPrev} aria-label="Previous image">
                  {prevIcon}
                </button>
              )}
              <Picture src={current.images[slide]} label={`${current.title} image ${slide + 1}`} />
              {total > 1 && (
                <button className="circle-btn next" onClick={showNext} aria-label="Next image">
                  {nextIcon}
                </button>
              )}
            </div>

            {total > 1 && (
              <div className="thumbs-row">
                <span className="counter">
                  {slide + 1} / {total}
                </span>
                <div className="thumbs">
                  {current.images.map((image, index) => (
                    <button
                      key={index}
                      className={index === slide ? "thumb thumb-on" : "thumb"}
                      onClick={() => setSlide(index)}
                      aria-label={`Show image ${index + 1}`}
                      aria-current={index === slide}
                    >
                      <Picture src={image} label={`${current.title} thumbnail ${index + 1}`} />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}