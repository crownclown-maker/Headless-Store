import { Link } from 'react-router-dom';
import './Home.css';

export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <svg
          className="hero-branch"
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M20 380C120 340 160 280 150 200C142 138 90 110 60 60"
            stroke="var(--moss)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M150 200C190 190 220 160 230 120" stroke="var(--moss)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M140 240C185 250 220 240 250 210" stroke="var(--moss)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="230" cy="120" r="4" fill="var(--gold)" />
          <circle cx="250" cy="210" r="4" fill="var(--gold)" />
          <circle cx="60" cy="60" r="4" fill="var(--gold)" />
        </svg>

        <p className="eyebrow">Small-batch goods, worn in slowly</p>
        <h1>
          Things made
          <br />
          to <em>weather</em> well.
        </h1>
        <p className="hero-sub">
          Natural fibers, muted tones, and pieces built to soften with time rather than wear out.
        </p>
        <div className="hero-actions">
          <Link to="/shop" className="btn btn-primary">
            Shop the collection
          </Link>
          <Link to="/collections" className="btn btn-ghost">
            Browse collections
          </Link>
        </div>
      </section>

      <section className="strip">
        <div className="strip-item">
          <span className="strip-num">01</span>
          <p>Natural, breathable materials sourced with care.</p>
        </div>
        <div className="strip-item">
          <span className="strip-num">02</span>
          <p>Small runs, restocked seasonally — never overproduced.</p>
        </div>
        <div className="strip-item">
          <span className="strip-num">03</span>
          <p>Designed to be repaired, not replaced.</p>
        </div>
      </section>
    </div>
  );
}
