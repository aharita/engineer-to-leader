---
id: module-6-ops
title: "Module 6: Operational Maturity (Sleeping at Night)"
---
# Module 6: Operational Maturity (Sleeping at Night)

**It doesn't matter if the code is clean if the site is down.**

Seniors celebrate merging the PR. Staff Engineers celebrate the deployment surviving the weekend.
You are responsible for the system *behaving* in the wild.

---

## 1. Observability vs. Logging

*Can you understand the system without deploying new code?*

Logging is "Printing text to a file."
Observability is "Asking questions of your system."
If you have to add a `console.log` and redeploy to understand a bug, you do not have observability.

**Real-world scenarios:**

* **The "It's Slow" Ticket:**
  * *Senior:* "I can't reproduce it locally."
  * *Staff:* Checks the Tracing dashboard (Honeycomb/Datadog). "I see the span. It's spending 2 seconds waiting for the 3rd party fraud check API. The bug isn't in our code, it's the vendor."
* **The Alert Fatigue:**
  * *Senior:* Sets up alerts for "High CPU." Gets woken up every night. Ignores the alerts.
  * *Staff:* Deletes the CPU alert. Sets an SLO (Service Level Objective) alert on "Error Rate > 1%". Only gets woken up when users are actually suffering.
* **The Needle in the Haystack:**
  * *Senior:* Greps through 1GB of text logs.
  * *Staff:* Added `customer_id` and `transaction_id` as high-cardinality tags to the metrics. Finds the exact failed request in 3 seconds.

---

## 2. Incident Command

*Being the adult in the room when the house is on fire.*

When the site crashes, panic ensues. The Staff Engineer steps up as the Incident Commander (IC).
Your job is not to fix the bug. Your job is to coordinate the people fixing the bug.

**Real-world scenarios:**

* **The Hero Mode:**
  * *Senior:* Dives into the code, ignores Slack, fixes it 2 hours later. Nobody knew what was happening.
  * *Staff:* "I am IC. Bob, check the DB logs. Sarah, check the rollback status. I will update the status page every 15 mins. Let's get on a Zoom."
* **The Post-Mortem:**
  * *Senior:* "We fixed it. Let's move on."
  * *Staff:* "We got lucky. Why did the linter fail to catch this? Why did the canary deploy not stop it? We need to fix the process."
* **The Stakeholder Manager:**
  * *Senior:* Getting pinged by the CEO every 5 mins. "Is it fixed? Is it fixed?" Gets stressed.
  * *Staff:* Steps in. "CEO, please stop pinging the engineers. They are working. I will give you an update in 30 minutes. Direct all questions to me."

---
