---
title: Standardizing years of legacy product data
summary: An AI agent that maps inconsistent legacy attribute values to the current catalog standard and catches outdated brand names.
order: 4
tags: [AI, Data quality, Automation]
result: ~4 weeks of manual work per batch reduced to a review measured in hours
---

# Standardizing years of legacy product data

**Role:** Built it myself · **Tools:** [TODO: the resume says Claude, but your Ramp portfolio describes this as a Gemini Gem. Pick the right one, or say both if you used both.] · **Result:** About four weeks of manual work per batch reduced to hours of review

## The problem

Product catalogs pick up messy attribute data over the years: inconsistent formatting, naming conventions from before there was a style guide, and brand names that went out of date after mergers, acquisitions, or rebrands.

Standardizing one group of attributes by hand took weeks of analyst time. Because it was so slow, it kept getting pushed down the backlog. Even when someone did it, there was no reliable way to catch brand names that had changed.

## What I built

An AI agent that processes attribute groups in batches. An analyst gives it a filtered spreadsheet of every attribute and value in a group (for example, every attribute with "brand" in the name), and the agent handles the mapping.

## How it works

The agent runs three passes on every value:

1. **Style guide.** Maps the legacy value to the catalog's current format, casing, and naming rules.
2. **Grammar.** Flags and fixes values that are malformed or written incorrectly.
3. **Brand check.** Checks whether the brand name is still current and updates it if the company has been acquired, merged, or rebranded. One old value can map to more than one new value when a brand split or merged.

The output is a mapping spreadsheet with one row per legacy value: the old value, the new value or values, and the type of change. An analyst reviews it, resolves the edge cases, and only then do the changes go into the catalog.

**Example output** (made-up values, for illustration only):

| Legacy value | New value | Change type |
|---|---|---|
| ACME MEDICAL INC. | Acme Medical | Style guide |
| Acme Medcial | Acme Medical | Grammar |
| Acme Medical | Acme Health | Brand updated after rebrand |

## Result

- Each batch used to take an estimated **four weeks** of manual work. It now takes a review measured in hours.
- The brand check was new. It caught outdated names that would otherwise have gone into the catalog unchecked.
- The cleanup actually got done instead of sitting in the backlog.

## What I learned

The hard part was deciding where the model was reliable enough to trust and where a person still needed to check. Defining what a correct mapping looks like up front, and building the review step into the output format, mattered more than the prompt itself.

*All examples on this page are illustrative. No real catalog data is shown.*
