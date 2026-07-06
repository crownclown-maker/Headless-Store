import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-mark">Maple &amp; Field</p>
        <p className="footer-note">Made slow, worn often. © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
