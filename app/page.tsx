import Link from 'next/link';
import Nav from './components/Nav';

const moments = [
  ['01', 'A stronger first signal', 'A project enquiry that feels like part of your studio, not a form someone has to endure.'],
  ['02', 'A clearer internal handoff', 'The important context is visible before the team begins another email thread.'],
  ['03', 'A project ready to move', 'Clients arrive at kickoff with the right details, assets, and decisions in motion.'],
];

export default function Home() {
  return (
    <>
      <main>
        <section className="design-hero">
          <div className="design-grid" />
          <div className="design-nav"><Nav /></div>
          <div className="shell design-content">
            <div className="design-kicker"><i /> THE CLIENT FLOW SYSTEM, BY LUKHANYO RADEBE</div>
            <h1>Make the work<br />before the work<br /><em>feel better.</em></h1>
            <div className="design-intro">
              <p>A design-led client flow for ambitious branding and web-design studios. One clear path from the first enquiry to a project ready to begin.</p>
              <Link href="/start-a-project" className="design-button">Start a project <span>↗</span></Link>
            </div>
          </div>
          <div className="system-object" aria-hidden="true">
            <div className="system-label">CLIENT FLOW<br />SYSTEM / 01</div>
            <div className="system-rail"><i /><i /><i /></div>
            <div className="system-window">
              <p>PROJECT ENQUIRY</p><b>Website and<br />positioning refresh</b><span>Kinfolk Studio · Strong fit</span>
            </div>
            <div className="system-line one" /><div className="system-line two" />
            <div className="system-orb" />
          </div>
          <div className="design-foot"><span>SCROLL TO EXPLORE</span><b>↓</b><p>FOR STUDIOS THAT VALUE<br />A GOOD START.</p></div>
        </section>

        <section className="quiet-intro">
          <div className="shell quiet-grid">
            <p className="small-label">THE PRINCIPLE</p>
            <h2>The way a client enters your studio says as much as the work you make together.</h2>
            <p className="quiet-copy">The Client Flow System turns all those scattered first moments into a consistent experience with a clear purpose. It is practical underneath, but never feels like admin.</p>
          </div>
        </section>

        <section className="moments" id="flow">
          <div className="shell">
            <div className="moments-top"><p className="small-label">THREE MOMENTS THAT MATTER</p><h2>Designed to move the work forward.</h2></div>
            <div className="moment-list">
              {moments.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><b>↗</b></article>)}
            </div>
          </div>
        </section>

        <section className="studio-sprint" id="sprint">
          <div className="sprint-mark" aria-hidden="true">01</div>
          <div className="shell sprint-grid">
            <div className="sprint-copy"><p className="small-label">FOUNDING CLIENT SPRINT</p><h2>One clear system for the studio you are becoming.</h2><p>For studios ready to make every new-client moment feel more organised, more considered, and more theirs.</p></div>
            <div className="sprint-info">
              <div className="sprint-topline"><span>FIRST THREE STUDIOS</span><b>7 TO 10 DAYS</b></div>
              <strong>R12,500</strong>
              <div className="sprint-divider" />
              <p>One focused lead-to-client system, covering enquiry, qualification, proposal preparation, onboarding, and project setup.</p>
              <Link href="/start-a-project" className="design-button dark">Start a project <span>↗</span></Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="shell footer"><span>The Client Flow System, by Lukhanyo Radebe</span><span>Built for branding and web-design studios</span></footer>
    </>
  );
}
