---
title: How I use AI at work
description: What I build with Claude, Gemini, and N8N, how I check the output, and where I don't trust it.
---

# How I use AI at work

I started building AI tools because I kept running into problems too big to do by hand. Auditing a catalog of 20,000 SKUs or cleaning up years of legacy data isn't hard work, but there's too much of it for a person. The choice was either to accept the problem as unsolvable or to build something that could do the first pass.

Now AI is a normal part of how I work. Here's what that looks like.

## What I use

- **Claude** for work that needs careful reasoning over structured information, like the [catalog audit skill](/projects/catalog-audit) and the [legacy data crosswalk](/projects/attribute-crosswalk), where I split the work across subagents on Opus, Sonnet, and Haiku. I also use Claude Code. [TODO: confirm what you use Claude Code for, or cut it]
- **Gemini** for batch work through custom Gems.
- **N8N** for workflows that run on a schedule, like my weekly industry briefing.

## How I decide what to build

I look for work with three things in common: it's repetitive, there's a clear standard for what "right" looks like, and a person can check the result faster than they could do the work themselves. If I can't write down what a correct answer is, I'm not ready to automate it yet.

## How I check the output

Building the tool is maybe half the job. The other half is knowing whether it's right.

- **Every output shows its source.** When the catalog audit flags a listing, it shows our value, the manufacturer's value, and where the manufacturer's value came from. That makes every flag something a person can verify in seconds.
- **A person reviews before anything changes.** None of my tools write directly to the catalog. They produce a file or a list, someone reviews it, and then the changes go in.
- **I measure against an independent reference.** When I want to know how accurate a tool is, I compare it to a trusted reference, such as the manufacturer's data. Agreement with what the team already believes isn't a good test, because the team might be wrong too.
- **Disagreement is a clue.** When two reviewers disagree about whether an output is correct, the problem is often that the rule itself is unclear. That's worth fixing before blaming the model.

## Where I don't trust it

[TODO: two or three honest lines in your own words. Some ideas, only if they're true for you:]
- [Anything where a wrong answer reaches a patient or a payer without a person seeing it first]
- [Cases where there's no clear source to check against]
- [Specific kinds of mistakes you've seen the models make in your work]

## What I've learned

- **The structure of the inputs matters more than the prompt.** When a tool gets something wrong, the fix is usually in how the information is organized.
- **Build the review step into the output.** If the output format makes checking easy, people will actually check it.
- **Start with the standard.** Writing down what "correct" means before building anything has saved me more time than any prompt trick.

## Things I've built

- [Auditing 20,000 SKUs with Claude](/projects/catalog-audit)
- [Standardizing years of legacy product data](/projects/attribute-crosswalk)
- [An attribute data health dashboard](/projects/attribute-data-health)
- A weekly Diabetes industry briefing and a daily prioritization agent in Notion ([more here](/projects))
