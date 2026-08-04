import Link from 'next/link';
import Nav from './components/Nav';

const flow = [
  ['01', 'Capture the right context', 'A project enquiry designed to ask thoughtful questions before your first reply.'],
  ['02', 'Make the next move clear', 'A simple view of fit, timing, scope signals, and the recommended action.'],
  ['03', 'Start with momentum', 'A proper client home for the details that make kickoff more useful.'],
];

export default function Home() {
  return (
    <>
      <main>
        <section className="editorial-hero">
          <div className="editorial-image" />
          <div className="editorial-shade" />
          <div className="editorial-nav"><Nav /></div>
          <div className="shell editorial-content">
            <div className="editorial-kicker"><span /> The Client Flow System, by Lukhanyo Radebe</div>
            <h1>Client work<br />should feel <i>considered</i><br />from the start.</h1>
            <div className="editorial-bottom">
              <p>A client experience and studio operating system for branding and web-design teams ready to work with more clarity, care, and momentum.</p>
              <Link href="/start-a-project" className="editorial-cta">Start a project <b>↗</b></Link>
            </div>
          </div>
          <div className="hero-note"><span>01</span><small>From first enquiry<br />to a project ready to begin.</small></div>
          <div className="hero-card">
            <p>NEW ENQUIRY</p>
            <strong>Website and positioning<br />refresh</strong>
            <span>Strong fit · October launch</span>
          </div>
        </section>

        <section className="statement">
          <div className="shell statement-grid">
            <p className="statement-label">A BETTER BEGINNING</p>
            <h2>Most studios do exceptional creative work. Their client journey should show it.</h2>
            <p className="statement-copy">The Client Flow System replaces scattered DMs, rushed proposals, and awkward onboarding with a thoughtful sequence of moments that work well for clients and the team behind the scenes.</p>
          </div>
        </section>

        <section className="black-flow" id="flow">
          <div className="shell">
            <div className="black-flow-head"><p>THE FLOW</p><h2>Every first step has a purpose.</h2></div>
            <div className="flow-list">
              {flow.map(([number, title, copy]) => <article key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p><b>↗</b>
              </article>)}
            </div>
          </div>
        </section>

        <section className="proof">
          <div className="shell proof-grid">
            <div><p>THE FOUNDING CLIENT SPRINT</p><h2>Built around the way your studio already works.</h2></div>
            <div className="proof-panel"><span>7 to 10 business days</span><strong>R12,500</strong><p>For the first three studios. One focused system for enquiry, qualification, proposal preparation, onboarding, and project setup.</p><Link href="/start-a-project" className="pill blue">Start a project</Link></div>
          </div>
        </section>
      </main>
      <footer className="shell footer"><span>The Client Flow System, by Lukhanyo Radebe</span><span>Built for branding and web-design studios</span></footer>
    </>
  );
}
