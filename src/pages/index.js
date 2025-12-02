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
        <p
          style={{
            fontSize: '1.1rem',
            marginTop: '1rem',
            maxWidth: '600px',
            margin: '1rem auto',
          }}>
          Choose your path. Master the transition.
        </p>
      </div>
    </header>
  );
}

function PathCard({ title, description, icon, link }) {
  return (
    <div className="col col--6" style={{ marginBottom: '2rem' }}>
      <div
        className="card"
        style={{
          height: '100%',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {icon}
        </div>
        <Heading as="h3">{title}</Heading>
        <p style={{ flex: 1, color: 'var(--ifm-color-content-secondary)' }}>
          {description}
        </p>
        <Link className="button button--primary button--lg" to={link}>
          Start Now →
        </Link>
      </div>
    </div>
  );
}

function FeatureHighlight() {
  const features = [
    {
      title: '🎯 Real Frameworks',
      description:
        '1-on-1 scripts, calibration tactics, and team dynamics strategies',
    },
    {
      title: '📈 Actionable Content',
      description:
        'Promotion packets, compensation negotiation, and leadership mechanics',
    },
    {
      title: '⚡ Career Acceleration',
      description: 'Skip years of trial-and-error with battle-tested playbooks',
    },
    {
      title: '🔧 Dark Arts Unlocked',
      description: 'Navigate politics, build psychological safety, architect teams',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: 'var(--ifm-background-surface-secondary)',
        padding: '3rem 0',
      }}>
      <div className="container">
        <Heading
          as="h2"
          style={{ textAlign: 'center', marginBottom: '3rem' }}>
          What You'll Master
        </Heading>
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className="col col--6" style={{ marginBottom: '2rem' }}>
              <h3>{feature.title}</h3>
              <p style={{ color: 'var(--ifm-color-content-secondary)' }}>
                {feature.description}
              </p>
            </div>
          ))}
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
        <section style={{ padding: '3rem 0' }}>
          <div className="container">
            <Heading
              as="h2"
              style={{ textAlign: 'center', marginBottom: '3rem' }}>
              Choose Your Career Path
            </Heading>
            <div className="row">
              <PathCard
                icon="🚀"
                title="Senior Engineer → Manager"
                description="Master the transition from code to leadership. 8 modules covering delegation, team dynamics, compensation, and navigating organizational politics."
                link="/engineer-to-leader/docs/senior-to-manager/module-1/"
              />
              <PathCard
                icon="👔"
                title="Manager → Director"
                description="Scale from managing engineers to managing managers. Navigate P&L budgets, org design, hiring machines, and executive presence at the leadership table."
                link="/engineer-to-leader/docs/manager-to-director/module-1/"
              />
              <PathCard
                icon="📚"
                title="Junior → Senior Engineer"
                description="Level up from junior to senior IC. Deep dive into technical depth, system design, code review mastery, and establishing yourself as a trusted expert."
                link="/engineer-to-leader/docs/junior-to-senior/module-1/"
              />
              <PathCard
                icon="⚡"
                title="Senior → Staff Engineer"
                description="Advance to Staff level as an IC. Master organizational influence, technical strategy, architecture thinking, and cross-team impact without management authority."
                link="/engineer-to-leader/docs/senior-to-staff/module-1/"
              />
            </div>
          </div>
        </section>
        <FeatureHighlight />
      </main>
    </Layout>
  );
}