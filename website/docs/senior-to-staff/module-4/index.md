---
id: module-4-architecture
title: "Module 4: Architectural Thinking (The 'Buy' Button)"
---

# Module 4: Architectural Thinking (The "Buy" Button)

**Building less to achieve more.**

Juniors build solutions. Staff Engineers buy solutions, or delete the problem entirely.
The most scalable code is the code you never wrote.

---

## 1. Buy vs. Build (The Ego Check)
*You are not Google. You do not need to build a custom database.*

Engineers suffer from NIH (Not Invented Here). We love building queues, auth systems, and logging frameworks.
Staff Engineers are the "Fun Police." They say: "Use AWS SQS. Use Auth0. Use Datadog. We are a pizza company, not a message queue company."

**Real-world scenarios:**
*   **The "Custom Auth":**
    *   *Senior:* "I'll build a JWT handling service!"
    *   *Staff:* "No. We pay Auth0. It costs money, but it costs less than your salary when you spend 3 months debugging OAuth redirects."
*   **The Orchestrator:**
    *   *Senior:* "I'll write a cron system in Python."
    *   *Staff:* "We are using Temporal or Airflow. I don't want to debug retry logic at 3 AM."
*   **The "Better" Wrapper:**
    *   *Senior:* "I'll write a wrapper around the AWS SDK to make it cleaner."
    *   *Staff:* "Don't. The next person won't know your wrapper. They know the AWS SDK. Do not abstract away the standard tools."

---

## 2. One-Way vs. Two-Way Doors
*Speed vs. Deliberation.*

A **Two-Way Door** decision is reversible (e.g., A/B testing a button color). Make these fast.
A **One-Way Door** decision is irreversible (e.g., Choosing a database, picking a primary language). Make these slow.
Staff Engineers identify which is which.

:::tip Pro Tip
**The Migration Rule.**
Never choose a technology unless you also have a theory on how you would migrate *off* of it. If you can't imagine how to delete it, don't build it.
:::

**Real-world scenarios:**
*   **The Database Pick:**
    *   *Senior:* "Let's use Cassandra, it's web scale!"
    *   *Staff:* "This is a One-Way Door. Migration off Cassandra is hell. Do we *really* need that scale? Or will Postgres handle our load for the next 5 years? Let's verify."
*   **The Experiment:**
    *   *Senior:* Agonizing over a variable name.
    *   *Staff:* "It's a Two-Way door. Pick one, merge it. We can rename it in 5 seconds with an IDE refactor. Move on."
*   **The Framework Lock-in:**
    *   *Senior:* "Let's use this heavy framework that handles everything for us!"
    *   *Staff:* "That framework couples our UI to our Data layer. If we ever want to swap the backend, we have to rewrite the frontend. I prefer a decoupled architecture."

---

## 3. Non-Functional Requirements (NFRs)
*The things that kill you silently.*

Functional requirements: "User can click button."
Non-Functional requirements: "Button works when 100,000 users click it at once."
Staff Engineers obsess over NFRs: Latency, Throughput, Cost, Security, Compliance, Observability.

**Real-world scenarios:**
*   **The Happy Path:**
    *   *Senior:* "The feature works."
    *   *Staff:* "What is the P99 latency? What happens if the 3rd party API is down? Are we logging the failure? Is the PII encrypted?"
*   **The Cost Audit:**
    *   *Senior:* "I spun up the cluster."
    *   *Staff:* "This cluster costs $200/day. The feature makes $5/day. Shut it down and re-architect for Serverless."
*   **The Legal Trap:**
    *   *Senior:* "I'm storing the user's IP address."
    *   *Staff:* "We operate in Europe. That's GDPR data. You need to add a retention policy to delete it after 30 days or we get fined 4% of global revenue."

---
