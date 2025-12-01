import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/module-1">
            Start Module 1: The Rewire →
          </Link>
        </div>
        <div style={{ marginTop: '2rem', color: 'var(--ifm-color-content-secondary)' }}>
          <p>Master the identity shift from Senior Engineer to Engineering Leader</p>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>🎯 Identity to Impact</h3>
              <p>
                Master the transition from Individual Contributor to Engineering Leader. 8 modules covering everything from delegation to team dynamics.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>📈 Real-World Frameworks</h3>
              <p>
                From 1-on-1s to calibration politics, from technical debt to psychological safety—actionable scripts you can use tomorrow.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>⚡ Career Mechanics Unlocked</h3>
              <p>
                Learn the dark arts: writing promotion packets, navigating compensation talks, and architecting high-performing teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Transform from Individual Contributor to Engineering Leader. Learn the frameworks, scripts, and tactics to succeed as an engineering manager.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
