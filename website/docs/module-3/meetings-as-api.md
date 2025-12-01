---
sidebar_position: 2
title: "3.1 The \"Meetings as API\" Philosophy"
description: Your calendar is a server, and it is under DDoS attack
---

# 3.1 The "Meetings as API" Philosophy

## The Hook

**Your calendar is a server, and it is under DDoS attack.**

Engineers hate meetings because they are often undefined "interrupts." As a manager, you must treat meetings like API calls.

If an API call (meeting) has no documentation (agenda), unknown payload (attendees), and no return value (action items), it throws a 400 Bad Request error. You must reject it.

---

## The Framework: Input/Output/Error Handling

Every meeting you host or attend must satisfy this contract:

1. **Input (Agenda):** Distributed 24 hours in advance. If there is no agenda, there is no meeting.
2. **Process (Timebox):** Start on time. End 5 minutes early. If the decision is made in 10 minutes, end the meeting in 10 minutes.
3. **Output (Minutes):** A written record of **Decisions Made** and **Action Items** (Who, What, When).
4. **Error Handling:** If the key decision-maker is absent, cancel immediately. Do not "discuss" for 30 minutes with no power to decide.

---

## The Script

**Scenario:** A Project Manager invites your whole team to a "Brainstorming Session" with no agenda.

**Reply with:**

> "I want to respect the team's Maker Time. Can you clarify the specific goal of this session and provide an agenda? If we are just exploring ideas, I can attend alone. If we need technical estimates, please send the requirements document first so we can read it async."

---

## The Challenge

### The Decline Button

Find one recurring meeting on your calendar that you dread. Cancel it for this week.

If nobody complains, cancel it forever.

If they do complain, ask: "What decision was blocked by not having this meeting?"

---

## Key Takeaways

:::tip Remember
Treat meetings like API calls: clear inputs (agenda), defined outputs (action items), and proper error handling (cancel if key people are absent).
:::

**Next:** Learn how to lead during crises with [Incident Command for Managers](./incident-command.md)
