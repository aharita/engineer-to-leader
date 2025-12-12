---
id: module-2-writing
title: "Module 2: Writing is Engineering (The RFC)"
---
# Module 2: Writing is Engineering (The RFC)

**The compiler for Staff Engineers is Google Docs. And it has no type checking.**

You cannot scale your influence by talking to people one by one. You scale by writing things down. A Staff Engineer is effectively a Technical Writer who knows how to debug a race condition and has a drinking problem.

Here is the sad truth: **Nobody reads.** They scan. If your doc is boring, they will ignore it, build the wrong thing, and you will get blamed. You must write like a copywriter and edit like a lawyer who hates their client.

---

## 1. The Design Doc / RFC

*Writing software before writing software. Because deleting English is faster than deleting Java.*

The most expensive time to find a bug is in production (usually on Black Friday). The second most expensive is in code review. The cheapest is in the Design Doc phase.
Your job is to simulate the system in your head and write it down so others can find the bugs before a single line of code is written.

**Real-world scenarios:**

*   **The "We'll figure it out":**
    *   *Senior:* Starts coding. "I'll handle the edge cases when I get to them." (Spoiler: They won't).
    *   *Staff:* Writes a 6-page doc covering Data Model, API Contract, Failure Modes, and Security. Realizes the design won't scale past 10 users. Changes it. Saves 3 months of wasted dev time and a potential divorce.
*   **The Consensus Builder:**
    *   *Senior:* Argues in a Pull Request about architecture for 4 days.
    *   *Staff:* Links to the approved RFC. "We agreed on this architecture in the Review meeting. If you want to change it, write a counter-proposal." The argument ends instantly. Power move.
*   **The Meeting Killer:**
    *   *Senior:* Calls a 1-hour meeting to "brainstorm" the architecture. Everyone plays on their phone.
    *   *Staff:* Writes a "Read-Ahead" document outlining the 3 possible paths. The meeting is now 15 minutes of decision-making. Everyone gets 45 minutes of their life back. They still hate meetings, but they hate you less.
*   **The "Just One More Feature":**
    *   *Senior:* "Sure, we can add that." (Scope creep ensues).
    *   *Staff:* "That's out of scope for this RFC. I've added it to 'Future Considerations' which is code for 'We will never do this'."

---

## 2. Naming Things (The Hardest Problem)

*Defining the ubiquitous language. Or why we argue about 'User' vs 'Account' for 3 hours.*

You aren't just naming variables; you are naming concepts. If Marketing calls it "Credits," Product calls it "Tokens," and Engineering calls it "Coins," you have a disaster. Staff Engineers enforce the "Ubiquitous Language" like a linguistic dictator.

**Real-world scenarios:**

*   **The Tower of Babel:**
    *   *Senior:* Adds a column called `user_money`.
    *   *Staff:* "Stop. We need to agree on a name. Is this 'Balance'? 'Credit'? 'Wallet'? Let's have a 15-minute sync with Product to align the terminology across the entire stack before I lose my mind."
*   **The Domain Model:**
    *   *Senior:* Adds fields to the `User` table.
    *   *Staff:* "This isn't user data. This is 'Subscription' data. We need to split the domain model here, or we'll have a God Class in 6 months that will require a priest to refactor."
*   **The Reserved Word:**
    *   *Senior:* Names a service `Orders`.
    *   *Staff:* "We already have an `Order` object in the warehouse system. Let's call this `CheckoutOrders` to prevent namespace collision in the Data Lake. Future you will thank present me."
*   **The Boolean Trap:**
    *   *Senior:* `is_enabled = true`.
    *   *Staff:* "What does 'enabled' mean? Enabled for login? Enabled for billing? Enabled for existence? Rename it to `can_login` or I will reject this PR with extreme prejudice."

---

## 3. The Decision Log (ADR)

*Protecting the past from the future. And protecting your reputation.*

Why did we choose DynamoDB over Postgres 3 years ago? Nobody knows. Dave left, and now everyone hates Dave because DynamoDB is expensive.
Staff Engineers write **Architecture Decision Records (ADRs)**.
"We chose X because of Y constraints. We rejected Z because of reasons."

**Real-world scenarios:**

*   **The Chesterton's Fence:**
    *   *Senior:* "This code is stupid. I'm rewriting it."
    *   *Staff:* Reads the ADR. "Ah, they did this because of a specific compliance law in Germany. If I rewrite it, we get sued for 10 million Euros. I will leave the 'stupid' code alone and go get lunch."
*   **The Paper Trail:**
    *   *Senior:* Makes a choice in a Slack DM. The DM is lost to the void.
    *   *Staff:* Commits a markdown file to `/docs/adr/001-use-redis.md`. When a new hire asks "Why Redis?", they send the link. The new hire reads it and nods, pretending to understand.
*   **The Gut Feeling:**
    *   *Senior:* "I feel like Postgres is better."
    *   *Staff:* "I don't care about your feelings. Write an ADR with the pros/cons and the specific constraints. We decide based on trade-offs, not vibes. This isn't art class."
*   **The "It's Trendy" Choice:**
    *   *Senior:* "Let's use GraphQL because Facebook uses it!"
    *   *Staff:* Writes ADR 005: "We are sticking to REST because we don't have Facebook's problems, but we do have Facebook's deadline pressure."
