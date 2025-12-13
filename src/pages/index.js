import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import QuoteCard from '../components/QuoteCard';
import styles from './index.module.css';

const HERO_TITLES = [
  {
    title: "The Code Is The Easy Part",
    subtitle: "The tutorials stopped 5 years ago. Good luck.",
    quote: "\"Whether you're herding cats (Management) or wrestling architects (Staff), welcome to the deep end.\""
  },
  {
    title: "Hello, Meetings",
    subtitle: "The cynical guide to trading your compiler for a calendar.",
    quote: "\"You wanted a promotion. Now you have to deal with people.\""
  },
  {
    title: "Debug Your Career",
    subtitle: "Stack Overflow doesn't have the answer to \"Why does my team hate me?\"",
    quote: "\"Senior Engineer is just a Junior who knows how to Google. Staff Engineer is a Senior who knows who to ask.\""
  },
  {
    title: "It's Not Imposter Syndrome",
    subtitle: "You actually don't know what you're doing. Yet.",
    quote: "\"Fake it 'til you make it? No. Learn it 'til you own it.\""
  },
  {
    title: "git push --force career",
    subtitle: "Sometimes you have to break things to move up.",
    quote: "\"Warning: This action cannot be undone. Are you sure you want to become a manager? [y/N]\""
  }
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [heroData, setHeroData] = React.useState(null);

  React.useEffect(() => {
    setHeroData(HERO_TITLES[Math.floor(Math.random() * HERO_TITLES.length)]);
  }, []);

  if (!heroData) {
    // Server-side / Initial render text (SEO friendly default)
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            The Code Is The Easy Part
          </Heading>
          <p className="hero__subtitle">The tutorials stopped 5 years ago. Good luck.</p>
          <p style={{ fontSize: '1.2rem', marginTop: '1.5rem', opacity: 0 }}>Loading...</p>
        </div>
      </header>
    );
  }

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {heroData.title}
        </Heading>
        <p className="hero__subtitle">{heroData.subtitle}</p>
        <p
          style={{
            fontSize: '1.2rem',
            marginTop: '1.5rem',
            maxWidth: '650px',
            margin: '1.5rem auto',
            fontStyle: 'italic',
            opacity: 0.8
          }}>
          {heroData.quote}
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
        <div className="container">
          <QuoteCard />
        </div>
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