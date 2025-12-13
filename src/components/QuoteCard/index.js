import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';
import quotesData from '../../data/quotes.json';

// Helper to separate data types
const getScenarios = () => quotesData.filter(q => q.type === 'scenario_comparison');
const getDescriptions = () => quotesData.filter(q => q.type !== 'scenario_comparison');

const scenarios = getScenarios();
const descriptions = getDescriptions();

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default function QuoteCard() {
    const [data, setData] = useState(null);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        setData({
            scenario: getRandomItem(scenarios),
            description: getRandomItem(descriptions)
        });
    }, []);

    const handleRefresh = () => {
        setAnimating(true);
        setTimeout(() => {
            setData({
                scenario: getRandomItem(scenarios),
                description: getRandomItem(descriptions)
            });
            setAnimating(false);
        }, 200);
    };

    if (!data) {
        return (
            <section className={styles.quoteContainer}>
                <div className={styles.scenarioContainer} style={{ opacity: 0 }}>
                    Loading...
                </div>
            </section>
        );
    }

    const { scenario, description } = data;

    return (
        <section className={clsx(styles.quoteContainer, animating && styles.fadeIn)}>
            {/* Description Section (Concept First) */}
            <div className={clsx(styles.scenarioContainer, styles.fadeIn)} style={{ marginBottom: 0 }}>
                <div className={styles.scenarioTitle}>
                    {description.label || 'Key Insight'}
                </div>
                <div className={styles.quoteText} style={{ marginBottom: '1rem' }}>
                    {description.text}
                </div>
                <div className={styles.sourceInfo} style={{ textAlign: 'left', width: '100%' }}>
                    <Link to={description.link} className={styles.module} style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                        {description.track} : {description.source} →
                    </Link>
                </div>
            </div>

            <hr style={{ margin: '2rem 0', borderColor: 'var(--ifm-color-emphasis-200)', opacity: 0.5 }} />

            {/* Scenario Section */}
            <div className={clsx(styles.scenarioContainer, styles.fadeIn)}>
                <div className={styles.scenarioTitle}>
                    {scenario.title.replace(/\.$/, '')}
                </div>

                <div className={styles.setupText}>
                    {scenario.setup}
                </div>

                <div className={styles.comparisonGrid}>
                    <div className={clsx(styles.roleBlock, styles.juniorBlock)}>
                        <span className={clsx(styles.roleTitle, styles.juniorTitle)}>
                            {scenario.juniorRole || 'Junior'} Approach
                        </span>
                        <div className={styles.roleContent}>{scenario.junior}</div>
                    </div>

                    <div className={clsx(styles.roleBlock, styles.seniorBlock)}>
                        <span className={clsx(styles.roleTitle, styles.seniorTitle)}>
                            {scenario.seniorRole || 'Senior'} Approach
                        </span>
                        <div className={styles.roleContent}>{scenario.senior}</div>
                    </div>
                </div>

                <div className={styles.footer} style={{ marginTop: '0.5rem', borderTop: 'none', paddingTop: 0 }}>
                    <div className={styles.sourceInfo} style={{ textAlign: 'left', width: '100%' }}>
                        <Link to={scenario.link} className={styles.module} style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                            {scenario.track} : {scenario.source} →
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.footer} style={{ marginTop: '2rem' }}>
                <div style={{ flex: 1 }}></div>
                <button
                    className={styles.refreshButton}
                    onClick={handleRefresh}
                    aria-label="Get new wisdom"
                >
                    <span>🔄</span> Refresh All
                </button>
                <div style={{ flex: 1 }}></div>
            </div>
        </section>
    );
}
