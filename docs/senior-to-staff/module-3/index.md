---
id: module-3-strategy
title: "Module 3: Technical Strategy (The Long Game)"
---
# Module 3: Technical Strategy (The Long Game)

**Code is tactical. Strategy is logistical.**

Strategy is not "We will use Kubernetes." Strategy is "We will reduce infrastructure costs by 40% over 12 months by consolidating compute, which will allow us to survive the funding crunch."
Staff Engineers connect the tech stack to the P&L sheet.

---

## 1. The "Silver Bullet" Immunity

*Avoiding Hype-Driven Development.*

Every year there is a new framework that promises to solve all your problems. It is a lie.
Staff Engineers are cynical. They have seen the cycle: SOAP -> REST -> GraphQL -> RPC.
Your job is to stand in front of the hype train and ask: "What is the switching cost?"

**Real-world scenarios:**

* **The Rewrite Fetish:**
  * *Senior:* "React is dead. We need to rewrite in SolidJS for performance."
  * *Staff:* "We have 50 engineers who know React. We have 0 who know SolidJS. The performance bottleneck is the database, not the DOM. Request denied."
* **The Boredom Check:**
  * *Senior:* "I want to use Go for this microservice."
  * *Staff:* "Our entire stack is Node. Introducing Go means new CI pipelines, new deployment patterns, and split knowledge. Unless you can prove Node *cannot* handle this load, we stick to the boring stack."
* **The Resume Driven Dev:**
  * *Senior:* Pushes for a Graph Database because "it's cool."
  * *Staff:* "This data is relational. You just want to put GraphQL on your resume. We are using Postgres."

---

## 2. Resource Mapping

*Identifying the bottlenecks before they happen.*

You need to know the constraints of your org better than anyone.

* **Personnel:** Do we have enough backend devs?
* **Budget:** Can we afford this datastore?
* **Time:** Can we ship this before Black Friday?

**Real-world scenarios:**

* **The Hidden Dependency:**
  * *Senior:* Estimates 2 weeks for the feature.
  * *Staff:* "You need the Data Team to create a new pipeline for this. The Data Team has a 6-week backlog. This feature is actually 8 weeks away."
* **The Cloud Bill:**
  * *Senior:* "I'll use DynamoDB On-Demand."
  * *Staff:* "At our scale, On-Demand will cost $10k/month. Provisioned capacity is $2k/month. I'll change the Terraform to use Provisioned."
* **The Sales Promise:**
  * *Senior:* Scrambles to build what Sales promised the client.
  * *Staff:* Intercepts the Sales team. "We physically cannot build that in 2 weeks. I'm getting on a call with the client to negotiate a phased rollout."

---
