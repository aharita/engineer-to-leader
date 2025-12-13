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
  * *Junior:* "Well, I tried to install the library but the version was wrong, so I looked at the docs..." (Rambles for 5 minutes about their emotional journey).
  * *Senior:* "I'm working on the Auth feature. Hit a snag with the library version, but I have a workaround. Expecting to finish by EOD. No blockers." (Boring, effective).
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
  * *Senior:* (Has now lost 15 minutes of flow state and wants to scream). "Just say you broke the build so I can fix it."
* **The "Urgent" DM:**
  * *Junior:* DMs 4 people the same question to see who answers first.
  * *Senior:* "Don't broadcast. Post it in the public team channel. That way, when one person answers, everyone else sees it and doesn't waste time researching the same thing."
* **The Meeting Plant:**
  * *Junior:* Sits in the back of the Zoom call, camera off, checks phone.
  * *Senior:* "If I have nothing to contribute, I decline the invite. If I attend, I take notes and send the recap."

---

## 5. Cross-Team Collaboration (The Political Game You Hate But Must Play)

*Other teams are not the enemy. They are NPCs with their own quest lines.*

You cannot build anything meaningful alone. You need Design to make it pretty. You need Product to tell you what to build (and change their mind 47 times). You need DevOps to deploy it without crying. You need QA to find the bugs you swore weren't there.

**The Rules:**

* **Learn their language.** Product speaks in "user stories" and "customer value." Finance speaks in "ROI" and "COGS." If you only speak in "microservices" and "technical debt," you will be ignored.
* **Empathy is strategic.** The PM is not changing requirements to annoy you. They are reacting to new information from the business. If you understand *why* the change happened, you can push back intelligently instead of just sulking.
* **Build relationships before you need them.** Have coffee with the PM. Say hi to the Designer. When the incident happens at 2 AM, you'll be glad you have allies.

**Real-world scenarios:**

* **The "Not My Job" Silo:**
  * *Junior:* "That's a product decision, not my problem." (The feature ships with a UX that makes users cry).
  * *Senior:* "I think this user flow has a problem. Can we walk through it with Design before I build it?" (Prevents 2 weeks of rework).
* **The Design Handoff:**
  * *Junior:* "The Figma looks pretty but it's impossible to build. Whatever, I'll just make something up." (Designer is confused why it looks different).
  * *Senior:* "Hey, this animation will add 3 days. Is it critical, or can we do a simpler version for MVP?"
* **The DevOps Dance:**
  * *Junior:* "I finished the feature. DevOps can figure out how to deploy it." (DevOps hates you now).
  * *Senior:* "I'm adding a new service. I'll pair with DevOps to set up the pipeline and make sure monitoring is in place before we go live."
* **The Blame Cycle:**
  * *Junior:* "QA didn't catch the bug." / "Product gave bad requirements." / "Design was unclear."
  * *Senior:* "We (the team) missed this. What process failed? How do we fix it?"

:::tip Pro Tip
**The Pre-Mortem.**
Before starting a risky project, gather the team and ask: "Imagine it's 3 months from now and this project failed spectacularly. What went wrong?" You'll surface risks that nobody would admit in a normal planning meeting. Design will say, "We didn't have enough time for research." Product will say, "The requirements weren't clear." Engineering will say, "We underestimated the complexity." Now you can fix these issues *before* they kill the project.
:::

---

## 6. Summary

* **Be concise.** Respect people's time.
* **Flag risks early.** No surprises.
* **Write it down.** Docs > Talk.
* **Speak up.** Your opinion matters.
* **Play nice with others.** Product, Design, DevOps—they're not the enemy. Treat them like allies and you'll be amazed at how much easier your job gets.

Communication is the API for your career. Don't let it timeout.
