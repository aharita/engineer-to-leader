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
  },
  {
    title: "The Calendar Is The IDE",
    subtitle: "Your new development environment has invites instead of imports.",
    quote: "\"I coded for 15 minutes today. It was glorious.\""
  },
  {
    title: "Legacy Code Archaeologist",
    subtitle: "Digging through commits from 2018 to find out who hurt us.",
    quote: "\"It's not a bug, it's a load-bearing undefined behavior.\""
  },
  {
    title: "Staff Engineer? Maybe.",
    subtitle: "The role description is just a shrug emoji.",
    quote: "\"My job is to go to meetings so the team doesn't have to.\""
  },
  {
    title: "Driven by Resume",
    subtitle: "Implementing Kubernetes because it looks good on LinkedIn.",
    quote: "\"We don't need microservices, but I need a raise.\""
  },
  {
    title: "Works on My Machine",
    subtitle: "But you're deploying to production, and production is on fire.",
    quote: "\"Docker didn't solve the problem, it just containerized the chaos.\""
  },
  {
    title: "The 10x Engineer Myth",
    subtitle: "You're not 10x. You just broke the build 10x faster.",
    quote: "\"Slow is smooth. Smooth is fast. Rushing is a SEV-1.\""
  },
  {
    title: "Reply All: \"Please Remove Me\"",
    subtitle: "Navigating corporate communication without losing your soul.",
    quote: "\"This meeting could have been an email. This email could have been a slack message. This slack message could have been silence.\""
  },
  {
    title: "Tech Debt Collector",
    subtitle: "It's time to pay up for those shortcuts you took in Q1.",
    quote: "\"We'll fix it later. (Narrator: They never fixed it later.)\""
  },
  {
    title: "Promotion Packet Driven Development",
    subtitle: "If it's not in the doc, it didn't happen.",
    quote: "\"I spent more time writing about my code than writing code.\""
  },
  {
    title: "Full Stack Overflow",
    subtitle: "Copying code you don't understand to build systems you can't maintain.",
    quote: "\"I have no idea why this works, but do not touch it.\""
  },
  {
    title: "The Golden Handcuffs",
    subtitle: "You hate the legacy stack, but you love the RSUs.",
    quote: "\"I'm just here for the vesting schedule.\""
  },
  {
    title: "Estimates are Lies",
    subtitle: "It will be done when it's done. Or next quarter.",
    quote: "\"T-Shirt sizing? Put me down for an XL headache.\""
  },
  {
    title: "On-Call Survivor",
    subtitle: "Sleep is for people with low availability requirements.",
    quote: "\"The pager doesn't scare me. The silence does.\""
  },
  {
    title: "Bike-Shedding Expert",
    subtitle: "Spending 4 hours debating variable names.",
    quote: "\"Actually, I think we should use a slightly different shade of blue for the button.\""
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
      title: 'Weaponized Soft Skills',
      description:
        'How to say "No" without getting fired, and how to say "Yes" without actually doing the work.',
    },
    {
      title: 'Performance Review Judo',
      description:
        'Writing a promo packet that makes your 3 lines of CSS look like you re-architected the entire internet.',
    },
    {
      title: 'Strategic Incompetence',
      description: 'Master the fine art of being "too busy" for glue work while taking credit for the high-visibility project.',
    },
    {
      title: 'Surviving The Re-Org',
      description: 'Navigate politics, manage up, and survive the restructuring that is definitely coming next quarter.',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: 'var(--ifm-color-emphasis-100)',
        padding: '3rem 0',
      }}>
      <div className="container">
        <Heading
          as="h2"
          style={{ textAlign: 'center', marginBottom: '3rem' }}>
          The Dark Arts of Corporate Survival
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
      description="The Not-So-Boring Guide to Engineering Leadership.">
      <HomepageHeader />
      <main>
        <div className="container">
          <QuoteCard />
        </div>
        <FeatureHighlight />
      </main>
    </Layout>
  );
}