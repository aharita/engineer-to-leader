---
id: module-4-architecture
title: "Module 4: Architectural Thinking (The 'Buy' Button)"
---
# Module 4: Architectural Thinking (The "Buy" Button)

**Building less to achieve more. Laziness is a virtue.**

Juniors build solutions. Staff Engineers buy solutions, or delete the problem entirely.
The most scalable code is the code you never wrote. It has 0 bugs, 0 latency, and costs $0.

---

## 1. Buy vs. Build (The Ego Check)

*You are not Google. You do not need to build a custom database. You sell socks.*

Engineers suffer from NIH (Not Invented Here). We love building queues, auth systems, and logging frameworks because it makes us feel smart.
Staff Engineers are the "Fun Police." They say: "Use AWS SQS. Use Auth0. Use Datadog. We are a sock company, not a distributed message queue company."

**Real-world scenarios:**

*   **The "Custom Auth":**
    *   *Senior:* "I'll build a JWT handling service! It'll be fun!"
    *   *Staff:* "No. We pay Auth0. It costs money, but it costs less than your salary when you spend 3 months debugging OAuth redirects and we get hacked because you forgot to salt the hashes."
*   **The Orchestrator:**
    *   *Senior:* "I'll write a cron system in Python using `sleep()`."
    *   *Staff:* "We are using Temporal or Airflow. I don't want to debug retry logic at 3 AM when your `sleep()` loop drifts by 4 hours."
*   **The "Better" Wrapper:**
    *   *Senior:* "I'll write a wrapper around the AWS SDK to make it cleaner."
    *   *Staff:* "Don't. The next person won't know your wrapper. They know the AWS SDK. Do not abstract away the standard tools just because you don't like the syntax."
*   **The UI Library:**
    *   *Senior:* "Material UI is too generic. I'll build a custom component library from scratch."
    *   *Staff:* "You have 2 weeks. Use the library. Nobody cares if the button has a slightly different border radius except you."

---

## 2. One-Way vs. Two-Way Doors

*Speed vs. Deliberation. Or "How hard is this to undo?"*

A **Two-Way Door** decision is reversible (e.g., A/B testing a button color). Make these fast.
A **One-Way Door** decision is irreversible (e.g., Choosing a database, picking a primary language, getting a face tattoo). Make these slow.
Staff Engineers identify which is which.

:::tip Pro Tip
**The Migration Rule.**
Never choose a technology unless you also have a theory on how you would migrate *off* of it. If you can't imagine how to delete it, don't build it.
:::

**Real-world scenarios:**

*   **The Database Pick:**
    *   *Senior:* "Let's use Cassandra, it's web scale!"
    *   *Staff:* "This is a One-Way Door. Migration off Cassandra is hell. Do we *really* need that scale? Or will Postgres handle our load for the next 5 years? (Hint: It's Postgres)."
*   **The Experiment:**
    *   *Senior:* Agonizing over a variable name for 2 hours.
    *   *Staff:* "It's a Two-Way door. Pick one, merge it. We can rename it in 5 seconds with an IDE refactor. Move on. You are wasting oxygen."
*   **The Framework Lock-in:**
    *   *Senior:* "Let's use this heavy framework that handles everything for us!"
    *   *Staff:* "That framework couples our UI to our Data layer. If we ever want to swap the backend, we have to rewrite the frontend. I prefer a decoupled architecture so I don't have to rewrite this app in 2 years."

---

## 3. Non-Functional Requirements (NFRs)

*The things that kill you silently. And get you paged.*

Functional requirements: "User can click button."
Non-Functional requirements: "Button works when 100,000 users click it at once and doesn't cost $5 per click."
Staff Engineers obsess over NFRs: Latency, Throughput, Cost, Security, Compliance, Observability.

**Real-world scenarios:**

*   **The Happy Path:**
    *   *Senior:* "The feature works. I clicked it and it didn't crash."
    *   *Staff:* "What is the P99 latency? What happens if the 3rd party API is down? Are we logging the failure? Is the PII encrypted? Why is the error message 'Object Object'?"
*   **The Cost Audit:**
    *   *Senior:* "I spun up the cluster. It's fast."
    *   *Staff:* "This cluster costs $200/day. The feature makes $5/day. Shut it down and re-architect for Serverless before the CFO comes down here with a baseball bat."
*   **The Legal Trap:**
    *   *Senior:* "I'm storing the user's IP address for analytics."
    *   *Staff:* "We operate in Europe. That's GDPR data. You need to add a retention policy to delete it after 30 days or we get fined 4% of global revenue. Do you have 4% of global revenue in your pocket?"
*   **The Observability Gap:**
    *   *Senior:* "I added a `console.log`."
    *   *Staff:* "That goes to stdout and disappears. Add a structured log with a trace ID so I can actually find it in Datadog when the customer complains."

---

## 4. Summary

* **Buy before you build.** You sell socks, not custom auth systems. Use Auth0, use Stripe, use whatever lets you ship faster.
* **Know your doors.** Two-way doors (reversible): move fast. One-way doors (databases, languages, face tattoos): move slow.
* **Obsess over NFRs.** The feature "works" until 100,000 users hit it at once and it costs $5 per click. Latency, cost, security—these are the silent killers.
* **Have an exit strategy.** Never adopt a technology unless you can imagine how to migrate off of it. If you can't delete it, don't create it.

Architecture is the art of making decisions you'll regret slightly less than the alternatives. Choose wisely, and document why.
