import { NavLink } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="logo">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 2C13 2 6 8 6 15a7 7 0 0 0 14 0C20 8 13 2 13 2Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path d="M13 8v13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span>Maple &amp; Field</span>
        </NavLink>

        <nav className="main-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/collections" className={({ isActive }) => (isActive ? 'active' : '')}>
            Collections
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? 'active' : '')}>
            Shop
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
