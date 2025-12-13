const fs = require('fs');
const path = require('path');

// Change these mapped names to human readable for display
const TRACK_NAMES = {
    'junior-to-senior': 'Junior → Senior',
    'senior-to-manager': 'Senior → Manager',
    'manager-to-director': 'Manager → Director',
    'senior-to-staff': 'Senior → Staff'
};

const DOCS_ROOT = path.join(__dirname, '../docs');
const OUTPUT_FILE = path.join(__dirname, '../src/data/quotes.json');

function extractQuotes() {
    const quotes = [];

    // Get all track directories
    const tracks = Object.keys(TRACK_NAMES);

    tracks.forEach(track => {
        const trackPath = path.join(DOCS_ROOT, track);
        if (!fs.existsSync(trackPath)) return;

        // Get all module directories within the track
        const modules = fs.readdirSync(trackPath).filter(file =>
            fs.statSync(path.join(trackPath, file)).isDirectory()
        );

        modules.forEach(module => {
            const indexPath = path.join(trackPath, module, 'index.md');
            if (!fs.existsSync(indexPath)) return;

            console.log(`Processing: ${track}/${module}`);

            const content = fs.readFileSync(indexPath, 'utf8');
            const trackName = TRACK_NAMES[track];

            // Extract Title for source name
            const titleMatch = content.match(/title:\s*"([^"]+)"/);
            let moduleName = module;
            let moduleSubtitle = '';

            if (titleMatch) {
                const fullTitle = titleMatch[1].replace(/^Module \d+: /, '');
                // Check if it has parens: "The Mindset Shift (From 'How' to 'Why')"
                const parenMatch = fullTitle.match(/(.*?)\s*\((.*?)\)/);

                if (parenMatch) {
                    moduleName = parenMatch[1].trim();
                    moduleSubtitle = parenMatch[2].trim();
                } else {
                    moduleName = fullTitle.trim();
                }
            }

            const docLink = `/docs/${track}/${module}`;

            // 1. :::tip Blocks
            const tipMatches = getMatchesGroups(content, /:::tip\s*(.*?)\n([\s\S]*?):::/gm);
            tipMatches.forEach(({ group1, group2 }) => {
                const title = group1.trim() || 'Pro Tip';
                const body = group2.trim();
                if (body.split(/\s+/).length > 10 && body.length < 600) {
                    quotes.push({
                        text: body,
                        label: title,
                        source: moduleName,
                        track: trackName,
                        link: docLink,
                        type: 'tip'
                    });
                }
            });

            // 2. Topic Descriptions / Paragraphs
            // Capture meaningful paragraphs (not list items, not headers)
            const paragraphs = content.split(/\n\n+/);
            paragraphs.forEach(para => {
                const trimmed = para.trim();

                // Skip if it looks like a list item, header, table, or weird markdown
                if (/^[\*\-\#\|]/.test(trimmed)) return;
                if (trimmed.startsWith(':::')) return;
                if (trimmed.startsWith('<')) return;

                // Must be substantial
                const wordCount = trimmed.split(/\s+/).length;
                if (wordCount < 10 || wordCount > 100) return; // Allow shorter snappy descriptions

                // Skip common 'junk'
                if (trimmed.includes('Congratulations')) return; // Intro fluff
                if (trimmed.includes('Welcome to')) return;

                // It's a candidate
                if (isValidQuote(trimmed)) {
                    quotes.push({
                        text: trimmed,
                        label: moduleSubtitle || 'Key Insight', // Use subtitle from parens
                        source: moduleName,
                        track: trackName,
                        link: docLink,
                        type: 'statement'
                    });
                }
            });

            // 3. Parse 'Real-world scenarios' blocks
            // Structure:
            // * **Title:** Setup
            //   * *Junior:* ...
            //   * *Senior:* ...

            const lines = content.split('\n');
            let currentScenario = null;

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                const trimmed = line.trim();

                // 1. Find the parent bullet: * **Title:** Setup
                const parentMatch = trimmed.match(/^\*\s*\*\*(.*?):\*\*(.*)$/);

                if (parentMatch) {
                    // Check if this is likely a scenario (has 'Junior' or 'Senior' follow-up nearby)
                    // We optimistically start a scenario
                    currentScenario = {
                        title: parentMatch[1].trim(),
                        setup: parentMatch[2].trim(),
                        junior: null,
                        senior: null,
                        source: moduleName,
                        track: trackName,
                        link: docLink,
                        type: 'scenario_comparison'
                    };
                    continue;
                }

                // 2. Find children
                if (currentScenario) {
                    // Check for nested bullets
                    // * *Junior:* ...
                    // * *Senior:* ...
                    // allow some flexibility in whitespace
                    const juniorMatch = trimmed.match(/^\s*\*\s*\*(Junior|Manager|IC).*?:\*\s*(.*)$/i);
                    const seniorMatch = trimmed.match(/^\s*\*\s*\*(Senior|Director|Leader).*?:\*\s*(.*)$/i);

                    if (juniorMatch) {
                        currentScenario.junior = juniorMatch[2].trim();
                        // Capture role if it varies? For now assume Junior/Senior standard
                        currentScenario.juniorRole = juniorMatch[1];
                    } else if (seniorMatch) {
                        currentScenario.senior = seniorMatch[2].trim();
                        currentScenario.seniorRole = seniorMatch[1];

                        // Once we have both (or at least Senior, which usually comes last), push it
                        if (currentScenario.junior && currentScenario.senior) {
                            quotes.push(currentScenario);
                            currentScenario = null; // Reset
                        }
                    } else if (trimmed === '' || trimmed.startsWith('##') || trimmed.startsWith('---')) {
                        // Empty line or new section usually kills the context
                        currentScenario = null;
                    }
                }
            }
        });
    });

    // Deduplicate
    const uniqueQuotes = Array.from(new Set(quotes.map(q => JSON.stringify(q))))
        .map(s => JSON.parse(s));

    console.log(`Extracted ${uniqueQuotes.length} unique quotes.`);

    // Ensure output dir exists
    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write to file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(uniqueQuotes, null, 2));
    console.log(`Saved to ${OUTPUT_FILE}`);
}

function getMatches(string, regex) {
    const matches = [];
    let match;
    while ((match = regex.exec(string)) !== null) {
        matches.push(match[1]);
    }
    return matches;
}

function getMatchesGroups(string, regex) {
    const matches = [];
    let match;
    while ((match = regex.exec(string)) !== null) {
        matches.push({ group1: match[1], group2: match[2] });
    }
    return matches;
}

function isValidQuote(text) {
    const len = text.length;
    // Don't want too short (likely UI) or too long (whole paragraphs)
    if (len < 10 || len > 300) return false;

    // Filter out common non-quote patterns
    const t = text.trim();
    const lower = t.toLowerCase();

    if (lower.includes('click here')) return false;
    if (lower.includes('real-world scenarios')) return false;
    if (lower.startsWith('module ')) return false;

    // Filter out labels ending in colon (e.g. "**The Optimist:**")
    // or just "The Optimist:"
    if (t.endsWith(':') || t.endsWith(':*')) return false;

    // Filter out just labels often used in scenarios
    if (/^(the|a|an)\s+[\w\s-]+\*?$/i.test(t)) {
        // "The Optimist" -> unlikely to be a quote unless it has punctuation
        if (!t.match(/[.!?]$/)) return false;
    }

    return true;
}

extractQuotes();
