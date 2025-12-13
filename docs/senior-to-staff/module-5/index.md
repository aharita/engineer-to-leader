---
id: module-5-influence
title: "Module 5: Influence & Politics (Herding Cats)"
---
# Module 5: Influence & Politics (Herding Cats)

**Getting people to do what you want when you can't fire them. Also known as "Manipulation for Good."**

You are not their manager. You cannot order them to refactor the code. You have to *convince* them it was their idea.
This is "Soft Power." It is the art of being right without being annoying.
If you rely on "Authority" ("Do it because I'm Staff"), you have already lost. You are now just a bureaucrat with a hoodie.

---

## 1. Social Capital & Trust

*The Bank Account of Leadership. Don't bounce a check.*

Every time you help someone, fix a build, or unblock a team, you deposit capital.
Every time you force a technical standard or say "No," you withdraw capital.
If you are overdrawn, people will nod in meetings and then ignore you. They will "forget" to invite you to the design review.

**Real-world scenarios:**

*   **The Ivory Tower Architect:**
    *   *The Failure:* Sits in a room, draws diagrams, hands them to the team. The team ignores them because "He doesn't know our codebase and he smells like whiteboard markers."
    *   *The Staff Move:* "I'm going to spend a week in the trenches with your team, fixing bugs and feeling your pain. *Then* I will propose an architecture." (Credibility earned. You are now "One of Us").
*   **The "I told you so":**
    *   *Senior:* "I told you using Mongo was a mistake." (Everyone hates you).
    *   *Staff:* "Mongo is hurting us now. Here is a migration plan to Postgres that minimizes downtime. I'll take the lead on the hardest part." (Everyone loves you. You are the Savior).
*   **The Code Review Nuke:**
    *   *Senior:* Leaves 50 comments on a PR ripping it apart. "This is garbage."
    *   *Staff:* DMs the author. "Hey, I see where you're going with this PR, but I think the architecture might cause issues down the road. Can we do a 10-min sync?" Saves face, builds trust, avoids a public execution.

---

## 2. Consensus is a Trap

*Agreeing to disagree and moving forward. Democracy is overrated.*

You will never get 10 engineers to agree on anything. If you wait for consensus, you will die of old age.
Staff Engineers push for "Consent," not "Consensus."
"Is this approach safe enough to try? Yes? Then we go. I don't care if you don't love it."

**Real-world scenarios:**

*   **The Deadlock:**
    *   *Senior:* Team A wants gRPC. Team B wants GraphQL. They argue for 3 weeks. The project is stalled.
    *   *Staff:* "Both work. We are going with GraphQL because our Frontend team is larger and they prefer it. Team A, I know you disagree, but I need you to commit to this path so we can ship. You can use gRPC on your next project."
*   **The Escalation:**
    *   *Senior:* Keeps arguing in the ticket. "But technically..."
    *   *Staff:* Calls a meeting. "We are leaving this room with a decision. If we can't decide, I will decide. And you won't like my decision."
*   **The Pocket Veto:**
    *   *Senior:* Thinks everyone agreed, but the Tech Lead of Team B is silently ignoring the emails and stalling the work.
    *   *Staff:* Spots the silence. Confronts it. "Hey Team B Lead, I noticed you haven't approved the RFC. I assume this means you are blocking. What is your specific blocker?" Force the passive-aggression into the light and kill it with fire.
*   **The "Bike-Shedding":**
    *   *Senior:* Argues about linter rules for 4 hours.
    *   *Staff:* "I am merging the linter config. If you don't like it, write a script to auto-fix your code. We are done talking about indentation."

---

## 3. Translating for Executives (The Interpreter)

*They don't speak your language. You have to speak theirs.*

Executives don't care about your microservices. They care about money, risk, and timelines. If you can't translate "We need to refactor the payment system" into "This will reduce fraud losses by $500k/year and cut development time by 30%," you will get a polite nod and zero budget.

**Real-world scenarios:**

*   **The Technical Monologue:**
    *   *Senior:* "We need to migrate to Kubernetes because Docker Swarm has scalability limitations in orchestrating stateful workloads across availability zones." (CTO's eyes glaze over).
    *   *Staff:* "Our current infrastructure can't handle Black Friday traffic. Kubernetes fixes that. Cost: $50k. Risk of doing nothing: $2M in lost sales. I've already talked to the team and we can have it done by October." (CTO nods and signs off).
*   **The Risk Translation:**
    *   *Senior:* "We have technical debt."
    *   *Staff:* "We have a 40% chance of a major outage in the next 6 months if we don't address the payment system. Here's the probability breakdown and what we need to mitigate it."
*   **The Time vs. Scope:**
    *   *Senior:* "It'll be done when it's done."
    *   *Staff:* "We have 3 options: Ship all features in 6 months, ship 80% of features in 3 months, or hire 2 contractors and ship everything in 4 months. Here are the costs and risks of each."
*   **The Skip-Level:**
    *   *Senior:* Gets nervous talking to the VP.
    *   *Staff:* Books regular 1:1s with skip-level leadership. "If my manager gets hit by a bus, leadership should know who I am and what I'm working on. Also, my manager can't block my visibility."

:::tip Pro Tip
**The One-Pager.**
Executives have the attention span of a caffeinated goldfish. Never send them a 10-page doc. Send a one-page summary with: Problem, Proposed Solution, Cost/Benefit, Timeline. Put the details in an appendix "for those who want to go deeper" (nobody will).
:::

---

## 4. Summary

* **Build social capital.** Every "No" withdraws from the trust bank. Balance it with deposits (unblocking people, fixing things, being useful).
* **Consent over consensus.** You'll never get 10 engineers to agree. Get agreement that it's "safe enough to try" and move on.
* **Speak executive.** Translate tech into money, risk, and timelines. Numbers beat opinions.
* **Manage up.** Your skip-level should know your name and your work. Don't let your manager be your only advocate.
* **Kill passive-aggression.** If someone is blocking silently, force it into the light. Politely. Then less politely.

Politics is just influence with a bad reputation. Learn to play the game, or be played by it.
