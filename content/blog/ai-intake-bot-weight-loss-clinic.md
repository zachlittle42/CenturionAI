---
title: "I Built an AI Intake Bot for a Weight Loss Clinic in 4 Hours — Here's Exactly How"
slug: "ai-intake-bot-weight-loss-clinic"
description: "Step-by-step walkthrough of building an AI patient intake bot for a weight loss clinic using OpenClaw. Intake time dropped from 20 minutes to 5."
keywords: ["AI intake bot", "weight loss clinic AI", "patient intake automation", "OpenClaw medical bot"]
publishDate: "2026-03-01"
author: "Centurion AI"
readingTime: "8 min read"
tags: ["project-writeup", "healthcare", "OpenClaw", "automation", "patient intake"]
category: "project-writeups"
---

# I Built an AI Intake Bot for a Weight Loss Clinic in 4 Hours — Here's Exactly How

> **TL;DR:** A weight loss clinic was burning 20 minutes per patient on manual intake forms. I built a conversational AI intake bot with OpenClaw that connects to their EHR, cut intake time to 5 minutes, and improved data accuracy by 35%. The whole build took one afternoon.

## The Problem

The clinic owner called me on a Tuesday. She was frustrated. Every new patient walked in and spent 20 minutes filling out paper forms. Then her front desk staff spent another 10 minutes typing that data into their EHR system. Handwriting was illegible half the time. Fields got skipped. Allergies got missed.

She had 15-20 new patients a week. That is roughly 7-10 hours of staff time just on intake. And the error rate was causing downstream problems — wrong medications flagged, insurance claims bouncing back, patients repeating their history to the provider because the chart was incomplete.

She wanted digital intake. But every off-the-shelf solution she found was either a glorified PDF or cost $500/month and still required manual data entry.

![Weight loss clinic intake workflow before automation](/blog/images/ai-intake-bot-weight-loss-clinic/before-workflow.png)

## The Approach

I proposed something different: a conversational AI intake experience. Instead of a static form, patients would have a natural conversation with an AI agent that asked the right questions, followed up intelligently, and pushed structured data directly into the clinic's EHR.

The key insight was that a conversation handles branching logic far better than a form. If a patient mentions they are on a GLP-1 medication, the bot can immediately ask which one, the dosage, how long they have been on it, and any side effects — without making every patient scroll past irrelevant sections.

The tech stack was simple:

- **OpenClaw** for the conversational AI agent
- **The clinic's EHR API** (they used Jane App) for data sync
- **A simple web interface** patients access via a link texted to them before their appointment

## The Build

### Hour 1: Mapping the Intake Flow

I sat with the clinic's lead medical assistant for 45 minutes. We went through their paper intake form line by line and mapped every question into categories:

- **Demographics** — name, DOB, contact info, insurance
- **Medical history** — conditions, surgeries, hospitalizations
- **Medications** — current meds, dosages, prescribers
- **Weight loss history** — previous programs, GLP-1 experience, goals
- **Lifestyle** — diet patterns, exercise, sleep, stress
- **Screening questions** — eating disorders, mental health, contraindications

The critical piece was identifying the branching logic. If someone has never tried a GLP-1, skip the detailed GLP-1 history. If someone reports a history of eating disorders, flag for provider review before the appointment.

### Hour 2: Building the OpenClaw Agent

I configured the OpenClaw agent with a detailed system prompt that included:

- The full question tree with branching logic
- The clinic's specific terminology preferences
- Instructions to be warm but efficient
- Hard rules about what medical advice it absolutely cannot give
- Output formatting that matches the EHR's data structure

The conversation design was critical. I did not want it to feel like a robot reading a form. The bot opens with a friendly greeting, explains the process, and moves through topics naturally. It confirms information back to the patient and asks for corrections.

Here is a snippet of the interaction flow:

```
Bot: "Welcome! I'm here to help get your paperwork done before
your visit. This usually takes about 5 minutes. Let's start
with the basics — what's your full legal name?"

Patient: "Sarah Johnson"

Bot: "Great, Sarah. And your date of birth?"

Patient: "March 15, 1988"

Bot: "Got it. Now, are you currently taking any medications?
If so, just list them and I'll ask about details for each one."
```

### Hour 3: EHR Integration

This was the most technical part. Jane App has a decent API, so I built a middleware layer that:

1. Takes the structured JSON output from the OpenClaw conversation
2. Maps each field to the corresponding EHR field
3. Creates or updates the patient record
4. Flags any items that need provider review (eating disorder history, drug interactions, etc.)

The mapping took some trial and error. The EHR expected specific codes for conditions and medications, so I built a lookup table that translates natural language responses into the right codes. "Ozempic" maps to the correct NDC code. "High blood pressure" maps to the ICD-10 code for essential hypertension.

![EHR integration architecture diagram](/blog/images/ai-intake-bot-weight-loss-clinic/ehr-integration.png)

### Hour 4: Testing and Safety Rails

I ran through 12 test scenarios:

- Standard healthy patient
- Patient with complex medication list
- Patient with eating disorder history (should trigger flag)
- Patient who gives vague answers (bot should ask clarifying questions)
- Patient who tries to ask for medical advice (bot should redirect)
- Patient who enters contradictory information (bot should catch it)

I also added safety guardrails. The bot never provides medical advice. If a patient describes symptoms that sound urgent, it tells them to call the clinic or go to urgent care. Every completed intake gets a confidence score, and anything below 85% gets flagged for staff review.

## The Results

We went live the following Monday. The clinic texted intake links to patients when they booked appointments.

**Week 1 numbers:**
- Average intake time: **4 minutes 47 seconds** (down from 20 minutes)
- Completion rate: **94%** (6% abandoned mid-conversation, staff followed up manually)
- Data accuracy: **97%** (measured against provider-verified charts)
- Staff data entry time: **Zero** (direct EHR sync)

**After 30 days:**
- Front desk reclaimed roughly **8 hours per week**
- Provider satisfaction jumped — charts were complete before the patient walked in
- Two medication interaction flags caught issues that would have been missed on paper forms
- Patient feedback was overwhelmingly positive — they liked doing it from their phone at home

The total build cost was roughly $2,400 in consulting time. Monthly running cost is about $45 for the OpenClaw API usage. Compared to $500/month for a traditional digital intake platform that still requires manual data entry.

![Results dashboard showing intake time reduction](/blog/images/ai-intake-bot-weight-loss-clinic/results-dashboard.png)

## Lessons Learned

**Conversation design matters more than the tech.** I spent more time on how the bot talks than on the code. The questions, the tone, the branching logic — that is what makes it feel natural versus robotic. If I did this again, I would spend even more time on this phase.

**Do not skip the medication lookup table.** Patients write drug names in creative ways. "Ozempic," "the pen," "semaglutide," "that weight loss shot" — the bot needs to handle all of these. I underestimated this initially and had to expand the lookup table after launch.

**Paper form holdouts exist.** About 5% of patients refused to use the digital intake. The clinic still keeps paper forms for them. Do not force it.

**Flag, do not block.** My instinct was to stop the intake if something seemed off. Better approach: let the patient finish, flag the issue, and let the clinical staff review. Nobody wants to be told by a robot that their answers are wrong.

## FAQ

### How long did the whole project take from start to finish?
Four hours of active build time, plus about an hour of planning calls with the clinic beforehand. We went live within a week of the initial conversation.

### Is this HIPAA compliant?
Yes. OpenClaw's infrastructure supports HIPAA-compliant deployments. We also signed a BAA with the clinic and ensured all data transmission is encrypted. Patient data is not stored in the AI system — it passes through to the EHR and the conversation logs are purged after 72 hours.

### What happens if the bot gets confused by a patient's answer?
The bot asks for clarification. If it still cannot parse the response after two attempts, it flags that field for manual staff review and moves on to the next topic. No data is lost — the raw conversation is available for staff to reference.

### Can this work with EHR systems other than Jane App?
Absolutely. The middleware layer is the only part that is EHR-specific. We have since built connectors for Athena, DrChrono, and Practice Fusion. The OpenClaw agent and conversation flow remain the same.

### What does the ongoing maintenance look like?
Minimal. The clinic has not needed us for any maintenance in the first three months. We did update the medication lookup table once when a new GLP-1 medication launched. The monthly cost is just API usage — about $45 for their patient volume.

### Do patients actually prefer this over paper forms?
The clinic surveyed patients after the first month. 89% preferred the AI intake. The top reasons were convenience (doing it at home), speed, and not having to repeat information to the provider. The 11% who preferred paper were mostly patients over 65.

### Could this replace the front desk staff entirely?
No, and that is not the goal. The front desk staff now spend their time on higher-value tasks — greeting patients, handling insurance questions, managing the schedule. Intake data entry was the lowest-value part of their job. This freed them up to do work that actually requires a human.

---

**Want us to build an AI intake system for your practice?** [Get a free strategy call](/get-started) — we will map your intake flow and give you an honest assessment of what AI can automate.

[[LINK: automate-med-spa-followup]] | [[LINK: glp1-coaching-bot-claude]] | [[LINK: openclaw-customer-service-agent]]
