import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import Contact from '../components/Contact';
import { awards, experience, interests, profile } from '../data/profile';
import { dawa, otherProjects, regulus, systems } from '../data/projects';
import { skills } from '../data/skills';

const siteUrl = 'https://portfolio-steel-one-91.vercel.app';
const title = 'Josué Jitimay | AI Research & Engineering';
const description = 'Research portfolio of Josué Jitimay, a computer science and software engineering graduate interested in Bayesian inference, causal reasoning, and robotics.';

function Section({ id, title, children }) {
  return (
    <section className="section" id={id} aria-labelledby={id + '-heading'}>
      <h2 id={id + '-heading'}>{title}</h2>
      {children}
    </section>
  );
}

function Timeline({ entries }) {
  return (
    <ul className="timeline">
      {entries.map(([date, title, detail]) => (
        <li key={title}>
          <span className="label">{date}</span>
          <div><strong>{title}</strong><p>{detail}</p></div>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={siteUrl + '/'} />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl + '/'} />
        <meta property="og:image" content={siteUrl + '/media/josue-jitimay.jpg'} />
        <meta property="og:image:alt" content="Portrait of Josué Jitimay" />
      </Head>

      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main" className="shell">
        <section className="hero" id="top" aria-labelledby="intro-heading">
          <div className="hero-copy min-w-0">
            <p className="label hero-label">AI research & engineering</p>
            <h1 id="intro-heading">Josué Jitimay</h1>
            <p className="hero-lead">I’m an aspiring AI researcher and engineer interested in how intelligent systems reason and act under uncertainty.</p>
            <p className="hero-bio">I graduated with distinction in Computer Science and Software Engineering from Bujumbura International University, Burundi, in 2026. I’m applying for research-based MSc study through Mila for Fall 2027.</p>
            <div className="link-row hero-links">
              <a className="button" href="#research">View research</a>
              <a className="text-link" href="#contact">Contact</a>
              {profile.cv && <a className="text-link" href={profile.cv} download>Download CV</a>}
            </div>
          </div>
          <figure className="portrait">
            <img src="/media/josue-jitimay.jpg" alt="Portrait of Josué Jitimay" width="640" height="598" />
            <figcaption>Bujumbura, Burundi</figcaption>
          </figure>
        </section>

        <Section id="interests" title="Research interests">
          <div className="interest-grid">
            {interests.map(({ title, question }) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{question}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="research" title="Featured research">
          <article className="feature" aria-labelledby="regulus-heading">
            <div className="feature-copy">
              <p className="label">Exploratory research · 2026</p>
              <h3 id="regulus-heading">{regulus.title}</h3>
              <p className="feature-lead">AI-assisted policy simulation</p>
              <p>Regulus explores how policy assumptions can be represented and inspected when evidence is incomplete. My broader work on Regulus examines how probabilistic graphical models, including Bayesian networks, can represent dependencies and support reasoning about causal interventions.</p>
              <p>The revised poster describes a Bayesian inference engine that uses an assumed causal graph to examine interventions. An LLM interprets inputs and explains outputs. Nigeria’s 2023 fuel subsidy removal motivates an illustrative scenario. Regulus has not been validated for policy forecasting.</p>
              <a className="text-link" href={regulus.demo}>Open Regulus demo</a>
            </div>
            <figure className="poster" aria-labelledby="poster-heading">
              <a className="poster-preview" href={regulus.poster} aria-label="Open the Regulus research poster PDF">
                <img src="/media/regulus-poster.png" alt="" width="566" height="800" loading="lazy" decoding="async" />
              </a>
              <figcaption>
                <h4 id="poster-heading">Research poster</h4>
                <p>Presented at {regulus.venue}, {regulus.location}. Poster revised November 2026.</p>
                <a className="text-link" href={regulus.poster}>Read the poster (PDF)</a>
              </figcaption>
            </figure>
          </article>
          <div className="secondary-research"><ProjectCard project={dawa} /></div>
        </Section>

        <Section id="systems" title="Robotics & intelligent systems">
          <div className="systems-grid">
            {systems.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
          <details className="archive" id="projects">
            <summary>Other engineering projects</summary>
            <div className="archive-grid">
              {otherProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
          </details>
        </Section>

        <Section id="achievements" title="Awards & research presentations">
          <div className="split">
            <div><h3>Awards</h3><Timeline entries={awards} /></div>
            <div id="conferences">
              <h3>Research presentations & conferences</h3>
              <Timeline entries={[
                ['2026', 'Regulus poster presentation', regulus.venue + ' · ' + regulus.location],
                ['2025', 'Deep Learning Indaba', 'Attendee · Kigali, Rwanda'],
                ['2023', 'Deep Learning Indaba', 'Attendee · Accra, Ghana'],
              ]} />
            </div>
          </div>
        </Section>

        <Section id="experience" title="Education & experience">
          <div className="split">
            <div>
              <h3>Education</h3>
              <Timeline entries={[[ '2026', 'Computer Science and Software Engineering', 'Bujumbura International University, Burundi · Graduated with distinction' ]]} />
              {profile.cv
                ? <a className="text-link" href={profile.cv} download>Download academic CV (PDF)</a>
                : <p className="availability">Academic CV forthcoming.</p>}
            </div>
            <div>
              <h3>Experience</h3>
              <Timeline entries={experience.slice(0, 3)} />
              <details className="archive">
                <summary>Teaching & community experience</summary>
                <Timeline entries={experience.slice(3)} />
              </details>
            </div>
          </div>
          <details className="archive" id="skills">
            <summary>Technical skills</summary>
            <dl className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <dt>{category === 'ai' ? 'AI' : category}</dt>
                  <dd>{items.map(({ name }) => name).join(', ')}</dd>
                </div>
              ))}
            </dl>
          </details>
        </Section>

        <Section id="contact" title="Contact"><Contact /></Section>
      </main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <span>Josué Jitimay · Bujumbura, Burundi</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}
