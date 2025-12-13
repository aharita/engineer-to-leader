---
id: module-6-ops
title: "Module 6: Operational Maturity (Sleeping at Night)"
---
# Module 6: Operational Maturity (Sleeping at Night)

**It doesn't matter if the code is clean if the site is down. Users don't care about your monads.**

Seniors celebrate merging the PR. Staff Engineers celebrate the deployment surviving the weekend without a PagerDuty alert.
You are responsible for the system *behaving* in the wild. The wild is a scary place full of users who do things you didn't expect, like "clicking the button twice."

---

## 1. Observability vs. Logging

*Can you understand the system without deploying new code? Or are you guessing?*

Logging is "Printing text to a file that nobody reads until it's too late."
Observability is "Asking questions of your system and getting answers that aren't 'NullPointerException'."
If you have to add a `console.log` and redeploy to understand a bug, you do not have observability. You have "Hope-Driven Debugging."

**Real-world scenarios:**

*   **The "It's Slow" Ticket:**
    *   *Senior:* "I can't reproduce it locally. Works on my machine. Closing ticket."
    *   *Staff:* Checks the Tracing dashboard (Honeycomb/Datadog). "I see the span. It's spending 2 seconds waiting for the 3rd party fraud check API. The bug isn't in our code, it's the vendor. I'm emailing their CTO."
*   **The Alert Fatigue:**
    *   *Senior:* Sets up alerts for "High CPU." Gets woken up every night at 3 AM. Ignores the alerts. Develops insomnia and a hatred for computers.
    *   *Staff:* Deletes the CPU alert. Sets an SLO (Service Level Objective) alert on "Error Rate > 1%". Only gets woken up when users are actually suffering. Sleeps like a baby.
*   **The Needle in the Haystack:**
    *   *Senior:* Greps through 1GB of text logs. "I think I saw an error... wait, that was yesterday."
    *   *Staff:* Added `customer_id` and `transaction_id` as high-cardinality tags to the metrics. Finds the exact failed request in 3 seconds. "Here is the stack trace. Fix it."

---

## 2. Incident Command

*Being the adult in the room when the house is on fire. And the CEO is screaming.*

When the site crashes, panic ensues. The Staff Engineer steps up as the Incident Commander (IC).
Your job is not to fix the bug. Your job is to coordinate the people fixing the bug so they don't trip over each other.

**Real-world scenarios:**

*   **The Hero Mode:**
    *   *Senior:* Dives into the code, ignores Slack, fixes it 2 hours later. Nobody knew what was happening. The CEO thinks the site is still down.
    *   *Staff:* "I am IC. Bob, check the DB logs. Sarah, check the rollback status. I will update the status page every 15 mins. CEO, get off the call, you are distracting us."
*   **The Post-Mortem:**
    *   *Senior:* "We fixed it. It was a typo. Let's move on."
    *   *Staff:* "We got lucky. Why did the linter fail to catch this? Why did the canary deploy not stop it? Why do we allow typos to take down production? We need to fix the process, not just the typo."
*   **The Stakeholder Manager:**
    *   *Senior:* Getting pinged by the CEO every 5 mins. "Is it fixed? Is it fixed?" Gets stressed. Makes a mistake. Deletes the database.
    *   *Staff:* Steps in. "CEO, please stop pinging the engineers. They are working. I will give you an update in 30 minutes. Direct all questions to me. If you ping them again, I'm turning off Slack."
*   **The "Root Cause" Fallacy:**
    *   *Senior:* "The root cause was human error. Dave messed up."
    *   *Staff:* "There is no such thing as human error. The system allowed Dave to mess up. The root cause is a bad system. Fix the system, don't blame Dave."

---

## 3. Summary

* **Observability > Logging.** If you have to redeploy to understand a bug, you have hope, not observability.
* **Alert on user pain, not CPU metrics.** SLOs over vanity alerts. Your sleep depends on it.
* **Be the Incident Commander.** When things break, coordinate—don't just code. Keep the CEO off the engineers' backs.
* **Fix the system, not the person.** "Human error" is a cop-out. The system allowed the error. Fix the system.
* **Post-mortems are mandatory.** Not to assign blame, but to make sure this specific disaster never happens again. New disasters are fine.

Ops maturity is the difference between "the site is down and everyone is panicking" and "the site is down and we're calmly following the runbook." Be the calm.
