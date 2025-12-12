---
id: module-6-ownership
title: "Module 6: Ownership & Accountability (The 'Bus Factor')"
---
# Module 6: Ownership & Accountability (The "Bus Factor")

**You built it. You run it. You fix it.**

Junior engineers think their job ends when the PR is merged.
Senior engineers know that’s when the job *starts*.

Ownership means caring about the outcome, not just the output. It means you don't sleep well if you know there is a critical bug in production.

---

## 1. End-to-End Ownership

*From idea to deprecation.*

You are responsible for the entire lifecycle of your code.

1. **Design:** Is this the right thing to build?
2. **Implementation:** Is the code good?
3. **Testing:** Does it actually work?
4. **Deployment:** Did it get to production safely?
5. **Monitoring:** Is it throwing errors?
6. **Maintenance:** Who fixes it in 6 months?

**Real-world scenarios:**

* **The "QA will catch it" mindset:**
  * *Junior:* Merges code without testing edge cases. "QA will find the bugs."
  * *Senior:* Tests it thoroughly. Treats QA as the *last* line of defense, not the first.
* **The Deployment:**
  * *Junior:* Merges the PR and goes to lunch.
  * *Senior:* Merges the PR, watches the build pipeline, verifies it in staging, watches the canary deployment in production, and checks the logs for errors.
* **The Monitoring:**
  * *Junior:* Waits for a user to complain that the site is slow.
  * *Senior:* Sets up an alert if latency exceeds 500ms. Fixes it before users notice.

---

## 2. Incident Management

*Don't panic. Follow the process.*

Production is down. The CEO is yelling. What do you do?

* **Junior:** Panics. Starts changing random code on production. Makes it worse.
* **Senior:**
    1. **Acknowledge:** "I am looking into it."
    2. **Mitigate:** "Rolling back the last deploy to restore service." (Fix the bleeding first).
    3. **Investigate:** "Now that site is up, let's find the root cause."
    4. **Communicate:** Updates stakeholders every 30 mins.

**Real-world scenarios:**

* **The Cowboy:**
  * *Junior:* SSHs into the production server and edits files with Vim to "fix it fast." (Then forgets what they changed, and the server explodes 2 days later).
  * *Senior:* Follows the standard deployment process, even during an emergency, to ensure auditability and prevent regression.
* **The Communicator:**
  * *Junior:* Fixes the issue silently but leaves everyone wondering what happened.
  * *Senior:* Posts in the `#incidents` channel: "Issue identified (Bad DB config). Fix deploying. ETA 5 mins."
* **The Freeze:**
  * *Junior:* Stares at the error logs, paralyzed by fear.
  * *Senior:* Calls for help. "I'm looking at this but I'm not sure. Can someone from the DB team jump on?"

---

## 3. The Post-Mortem (Blameless)

*Failure is an opportunity to learn.*

When things break, we don't look for *who* broke it. We look for *why* the system allowed them to break it.

* **Bad:** "Kevin pushed a bad config." (Fire Kevin).
* **Good:** "The deployment script didn't validate the config before pushing. We need to add a validation step." (Fix the system).
* **Realistic:** We don't fire Kevin, but we do take away his root access until he learns how to use a linter.

If you break production, own it. "I broke it. Here is how I fixed it. Here is how I will prevent it from happening again." That is high-status behavior.

:::tip Pro Tip
**The 5 Whys.**
When investigating a root cause, ask "Why?" 5 times.

1. Why did the site crash? (DB overload)
2. Why was the DB overloaded? (Too many connections)
3. Why were there too many connections? (Connection pool wasn't configured)
4. Why wasn't it configured? (We used the default settings)
5. Why did we use defaults? (We don't have a load testing checklist) -> **Root Cause: Create a load testing checklist.**
:::

**Real-world scenarios:**

* **The Witch Hunt:**
  * *Junior:* "It wasn't me! It was the library!"
  * *Senior:* "It was my code. I missed this edge case. Here is the fix and the test case to prevent it."
* **The Root Cause:**
  * *Junior:* "I restarted the server and it works now." (Band-aid).
  * *Senior:* "I found a memory leak in the image processor. I've patched it so we don't have to restart every day."
* **The Follow-up:**
  * *Junior:* Fixes the bug and moves on.
  * *Senior:* Writes a Post-Mortem document, schedules a review meeting, and creates Jira tickets for the preventative actions.

---

## 4. The "Bus Factor"

*Make yourself redundant.*

If you are the only person who knows how the billing system works, you can never go on vacation. You are a prisoner of your own knowledge.

* **Share knowledge:** Pair program. Write docs. Give tech talks.
* **Automate yourself:** If you do a task 3 times, write a script.

A Senior Engineer's goal is to make themselves unnecessary for the day-to-day operations, so they can focus on the next big problem.

**Real-world scenarios:**

* **The Gatekeeper:**
  * *Junior:* Hoards knowledge to feel important/secure.
  * *Senior:* Documents everything so they can go on a 2-week vacation without checking Slack.
* **The Mentor:**
  * *Junior:* Complains that the new hire is slow.
  * *Senior:* Pairs with the new hire to transfer knowledge and help them speed up.
* **The Hero (Negative):**
  * *Junior:* Wants to be the only one who can save the day.
  * *Senior:* Wants the system to be robust enough that *anyone* can save the day.

---

## 5. Summary

* **Own the outcome.** Not just the code.
* **Stay calm.** Incidents happen.
* **Fix the system.** Don't blame the person.
* **Share the load.** Don't be a single point of failure.

Ownership is the price of autonomy.
