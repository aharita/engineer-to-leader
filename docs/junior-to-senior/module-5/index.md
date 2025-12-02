---
id: module-5-communication
title: "Module 5: Communication & Visibility (Loud Work)"
---
# Module 5: Communication & Visibility (Loud Work)

**If you do great work in the forest and nobody sees it, you didn't do it.**

Engineers hate "politics." They hate "marketing." They just want to code.
But here is the secret: **Visibility is not vanity. It is utility.**

If your manager doesn't know what you are doing, they can't help you. If the team doesn't know what you are building, they will build the same thing.

---

## 1. The Art of the Status Update

*Nobody reads your 5-paragraph essay.*

Your manager is busy. They want to know 3 things:

1. **What did you do?** (Briefly)
2. **Are you on track?** (Yes/No)
3. **Are you blocked?** (Help me)

**Real-world scenarios:**

* **The Rambler:**
  * *Junior:* "Well, I tried to install the library but the version was wrong, so I looked at the docs..." (5 minutes later) "...so I'm still working on it."
  * *Senior:* "I'm working on the Auth feature. Hit a snag with the library version, but I have a workaround. Expecting to finish by EOD. No blockers."
* **The Wall of Text:**
  * *Junior:* Writes a 500-word daily standup message detailing every function they touched.
  * *Senior:* "Yesterday: Fixed Auth Bug. Today: API integration. Blockers: None."
* **The Ghost:**
  * *Junior:* Skips standup because "I have nothing to say."
  * *Senior:* "Still investigating the memory leak. It's trickier than expected. Will update at noon."

---

## 2. "No Surprises"

*Bad news is better than late news.*

The worst thing you can do is say "Everything is fine" for 2 weeks, and then on the day of the deadline say "I'm not done."

If you are going to miss a deadline, tell people **early**.
"Hey, this task is more complex than I thought. I might need 2 extra days."
Most managers can handle a delay. They cannot handle a surprise.

**Real-world scenarios:**

* **The Optimist:**
  * *Junior:* "I can do it in 2 days!" (Takes 5 days).
  * *Senior:* "It looks like a 2-day task, but I'll estimate 3 days to account for testing and code review."
* **The Hero:**
  * *Junior:* Stays up all night to hit the deadline without telling anyone they are behind. Burns out.
  * *Senior:* "I'm at risk of missing the deadline. Can we cut scope or get help?"
* **The Silent Struggle:**
  * *Junior:* Hits a blocker on Monday. Tells manager on Friday.
  * *Senior:* Hits a blocker on Monday. Tells manager on Monday afternoon.

---

## 3. Documentation as Communication

*Write it down.*

If you explain something to a teammate verbally, you helped one person.
If you write it in a doc, you help everyone who joins the team forever.

* **The README:** If I clone your repo, how do I run it?
* **The Architecture Decision Record (ADR):** *Why* did we choose React over Vue? Write it down so we don't have the same argument in 6 months.

:::tip Pro Tip
**If you answer the same question twice, write a doc.**
The first time, answer it. The second time, write it in a Notion doc/Wiki and send the link. The third time, just send the link. You just automated yourself.
:::

**Real-world scenarios:**

* **The Bus Factor:**
  * *Junior:* Keeps all the deployment knowledge in their head.
  * *Senior:* Writes a "Deployment Runbook" so that anyone can deploy if they get hit by a bus (or win the lottery).
* **The Oral Tradition:**
  * *Junior:* "Ask Sarah how the billing system works."
  * *Senior:* "Read `docs/billing-architecture.md`."
* **The Slack Search:**
  * *Junior:* Searches Slack for a code snippet someone posted 3 months ago.
  * *Senior:* Puts that snippet in the team's shared code snippets or wiki.

---

## 4. Async Etiquette (The "No Hello" Rule)

*Stop holding my attention hostage.*

There is a special place in hell for people who DM you "Hi" and then wait for you to reply before typing their actual question. This is a synchronous interrupt in an asynchronous world.

**The Rule:** Your first message must contain the **entire** context. "Hi, I'm stuck on the payment API, here is the error log, do you have 5 mins?" allows me to answer you when I'm free. "Hi" forces me to stop working just to acknowledge your existence.

**Real-world scenarios:**

* **The Cliffhanger:**
  * *Junior:* "Hey, are you there?" (Waits 10 mins). "Can I ask a question?" (Waits 5 mins). "I broke the build."
  * *Senior:* (Has now lost 15 minutes of flow state). "Just say you broke the build so I can fix it."
* **The "Urgent" DM:**
  * *Junior:* DMs 4 people the same question to see who answers first.
  * *Senior:* "Don't broadcast. Post it in the public team channel. That way, when one person answers, everyone else sees it and doesn't waste time researching the same thing."
* **The Meeting Plant:**
  * *Junior:* Sits in the back of the Zoom call, camera off, checks phone.
  * *Senior:* "If I have nothing to contribute, I decline the invite. If I attend, I take notes and send the recap."

---

## 5. Summary

* **Be concise.** Respect people's time.
* **Flag risks early.** No surprises.
* **Write it down.** Docs > Talk.
* **Speak up.** Your opinion matters.

Communication is the API for your career.
