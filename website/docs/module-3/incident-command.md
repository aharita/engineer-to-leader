---
sidebar_position: 3
title: "3.2 Incident Command for Managers"
description: During an outage, you are not an Engineer
---

# 3.2 Incident Command for Managers

## The Hook

**During an outage, you are not an Engineer.**

When the site goes down (P0), your instinct is to open the logs and start debugging. **Stop.**

Your team has better debuggers than you. Your job is to keep the "room" calm. If the manager panics, the team panics. If the team panics, the outage lasts twice as long.

---

## The Framework: The Incident Commander (IC) Role

You are the **Incident Commander**. Your duties are:

1. **Shield the Team:** Intercept every message from the CEO/CTO asking "Is it fixed yet?"
2. **Designate Roles:** Explicitly say, "Sarah, check the database logs. Mike, check the load balancer. Everyone else, stay off the call."
3. **Watch the Clock:** If Sarah has been looking at logs for 15 minutes with no result, you must intervene: "Sarah, we need a new theory. Hand off to Mike."

---

## The Script

**Scenario:** The VP of Sales joins the incident Zoom call and demands an ETA.

**Say this:**

> "We are currently investigating the root cause. Having extra people on this call is distracting the engineers. I will post an update in the #status-channel every 30 minutes. Please drop off the call so we can focus. I will tag you in the next update."

---

## The Challenge

### The Fire Drill

In your next team sync, run a "Tabletop Exercise."

"Hypothetically, if AWS region us-east-1 went down right now, how would we know? Who gets paged? Do we have a runbook for failover?"

If the answer is "I don't know," you have your assignment for the next sprint.

---

## Key Takeaways

:::tip Remember
During incidents, your job is to be the calm Incident Commander who shields the team, designates roles, and watches the clock—not to debug.
:::

**Next:** Learn to speak the language of risk with [Technical Debt as a Financial Instrument](./technical-debt.md)
