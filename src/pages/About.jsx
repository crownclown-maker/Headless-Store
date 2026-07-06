import './PageShared.css';
import './About.css';

export function About() {
  return (
    <div className="page about">
      <div className="page-head">
        <p className="eyebrow">Our story</p>
        <h1>Test</h1>
      </div>

      <div className="about-body">
        <p>
          We started making things because we couldn't find what we wanted to wear ourselves —
          pieces that felt like they belonged outdoors, softened rather than faded, and held up
          season after season.
        </p>
        <p>
          Everything is made in small runs, with natural fibers chosen for how they age, not just
          how they look on day one. We'd rather restock a favorite than chase a trend.
        </p>
        <p>
          If a piece ever wears through, we'll help you mend it before we sell you a new one.
          That's the whole philosophy, really.
        </p>
      </div>
    </div>
  );
}
