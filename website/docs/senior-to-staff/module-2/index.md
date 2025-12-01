---
id: module-2-writing
title: "Module 2: Writing is Engineering (The RFC)"
---
# Module 2: Writing is Engineering (The RFC)

**The compiler for Staff Engineers is Google Docs.**

You cannot scale your influence by talking to people one by one. You scale by writing things down. A Staff Engineer is effectively a Technical Writer who knows how to debug a race condition.

Here is the sad truth: **Nobody reads.** They scan. If your doc is boring, they will ignore it, build the wrong thing, and you will get blamed. You must write like a copywriter and edit like a lawyer.

---

## 1. The Design Doc / RFC
*Writing software before writing software.*

The most expensive time to find a bug is in production. The second most expensive is in code review. The cheapest is in the Design Doc phase.
Your job is to simulate the system in your head and write it down so others can find the bugs before a single line of code is written.

**Real-world scenarios:**
*   **The "We'll figure it out":**
    *   *Senior:* Starts coding. "I'll handle the edge cases when I get to them."
    *   *Staff:* Writes a 4-page doc covering Data Model, API Contract, Failure Modes, and Security. Realizes the design won't scale. Changes it. Saves 3 months of wasted dev time.
*   **The Consensus Builder:**
    *   *Senior:* Argues in a Pull Request about architecture.
    *   *Staff:* Links to the approved RFC. "We agreed on this architecture in the Review meeting. If you want to change it, write a counter-proposal." (The argument ends).
*   **The Meeting Killer:**
    *   *Senior:* Calls a 1-hour meeting to "brainstorm" the architecture.
    *   *Staff:* Writes a "Read-Ahead" document outlining the 3 possible paths. The meeting is now 15 minutes of decision-making instead of 60 minutes of rambling.

---

## 2. Naming Things (The Hardest Problem)
*Defining the ubiquitous language.*

You aren't just naming variables; you are naming concepts. If Marketing calls it "Credits," Product calls it "Tokens," and Engineering calls it "Coins," you have a disaster. Staff Engineers enforce the "Ubiquitous Language."

**Real-world scenarios:**
*   **The Tower of Babel:**
    *   *Senior:* Adds a column called `user_money`.
    *   *Staff:* "Stop. We need to agree on a name. Is this 'Balance'? 'Credit'? 'Wallet'? Let's have a 15-minute sync with Product to align the terminology across the entire stack."
*   **The Domain Model:**
    *   *Senior:* Adds fields to the `User` table.
    *   *Staff:* "This isn't user data. This is 'Subscription' data. We need to split the domain model here, or we'll have a God Class in 6 months."
*   **The Reserved Word:**
    *   *Senior:* Names a service `Orders`.
    *   *Staff:* "We already have an `Order` object in the warehouse system. Let's call this `CheckoutOrders` to prevent namespace collision in the Data Lake."

---

## 3. The Decision Log (ADR)
*Protecting the past from the future.*

Why did we choose DynamoDB over Postgres 3 years ago? Nobody knows. Dave left, and now everyone hates Dave because DynamoDB is expensive.
Staff Engineers write **Architecture Decision Records (ADRs)**.
"We chose X because of Y constraints. We rejected Z because of reasons."

**Real-world scenarios:**
*   **The Chesterton's Fence:**
    *   *Senior:* "This code is stupid. I'm rewriting it."
    *   *Staff:* Reads the ADR. "Ah, they did this because of a specific compliance law in Germany. If I rewrite it, we get sued. I will leave the 'stupid' code alone."
*   **The Paper Trail:**
    *   *Senior:* Makes a choice in a Slack DM.
    *   *Staff:* Commits a markdown file to `/docs/adr/001-use-redis.md`. When a new hire asks "Why Redis?", they send the link.
*   **The Gut Feeling:**
    *   *Senior:* "I feel like Postgres is better."
    *   *Staff:* "I don't care about feelings. Write an ADR with the pros/cons and the specific constraints. We decide based on trade-offs, not vibes."

---
