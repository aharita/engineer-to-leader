---
id: module-3-strategy
title: "Module 3: Technical Strategy (The Long Game)"
---
# Module 3: Technical Strategy (The Long Game)

**Code is tactical. Strategy is logistical. And politics is inevitable.**

Strategy is not "We will use Kubernetes." Strategy is "We will reduce infrastructure costs by 40% over 12 months by consolidating compute, which will allow us to survive the funding crunch without firing Dave."
Staff Engineers connect the tech stack to the P&L sheet. If you can't explain how your refactor saves money or makes money, you are just playing with expensive toys.

---

## 1. The "Silver Bullet" Immunity

*Avoiding Hype-Driven Development. And Resume-Driven Development.*

Every year there is a new framework that promises to solve all your problems, cure cancer, and make your parents proud of you. It is a lie.
Staff Engineers are cynical. They have seen the cycle: SOAP -> REST -> GraphQL -> RPC -> SOAP (renamed).
Your job is to stand in front of the hype train and ask: "What is the switching cost?"

**Real-world scenarios:**

*   **The Rewrite Fetish:**
    *   *Senior:* "React is dead. We need to rewrite in SolidJS for performance."
    *   *Staff:* "We have 50 engineers who know React. We have 0 who know SolidJS. The performance bottleneck is the database, not the DOM. Request denied. Go optimize your SQL queries."
*   **The Boredom Check:**
    *   *Senior:* "I want to use Go for this microservice."
    *   *Staff:* "Our entire stack is Node. Introducing Go means new CI pipelines, new deployment patterns, and split knowledge. Unless you can prove Node *cannot* handle this load (you can't), we stick to the boring stack. I don't care if you're bored."
*   **The Resume Driven Dev:**
    *   *Senior:* Pushes for a Graph Database because "it's cool."
    *   *Staff:* "This data is relational. You just want to put GraphQL on your resume so you can get a job at Meta. We are using Postgres. If you want to use a Graph DB, do it on your side project that you'll never finish."
*   **The "Microservices" Trap:**
    *   *Senior:* "We need to split the monolith into 15 microservices to decouple."
    *   *Staff:* "We have 3 developers. If we split into 15 services, we will spend 100% of our time debugging distributed tracing errors. We are keeping the monolith until we have more users than my mom's blog."

---

## 2. Resource Mapping

*Identifying the bottlenecks before they happen. Usually, the bottleneck is people.*

You need to know the constraints of your org better than anyone.
*   **Personnel:** Do we have enough backend devs? (No).
*   **Budget:** Can we afford this datastore? (No).
*   **Time:** Can we ship this before Black Friday? (Also No).

**Real-world scenarios:**

*   **The Hidden Dependency:**
    *   *Senior:* Estimates 2 weeks for the feature.
    *   *Staff:* "You need the Data Team to create a new pipeline for this. The Data Team has a 6-week backlog and they hate us because we broke the build last week. This feature is actually 8 weeks away."
*   **The Cloud Bill:**
    *   *Senior:* "I'll use DynamoDB On-Demand."
    *   *Staff:* "At our scale, On-Demand will cost $10k/month. Provisioned capacity is $2k/month. I'll change the Terraform to use Provisioned. I just saved the company $96k/year. I expect a bonus I won't get."
*   **The Sales Promise:**
    *   *Senior:* Scrambles to build what Sales promised the client.
    *   *Staff:* Intercepts the Sales team. "We physically cannot build that in 2 weeks. I'm getting on a call with the client to negotiate a phased rollout. And I'm going to have a 'friendly chat' with the VP of Sales about promising features that don't exist."
*   **The Hiring Freeze:**
    *   *Senior:* "We need to hire 3 more devs to finish this."
    *   *Staff:* "We are in a hiring freeze. You have to finish this with the 2 interns and a bag of coffee. Re-scope the project or die trying."
