---
title: An attribute data health dashboard
summary: Scores catalog attribute data, flags duplicate and out-of-order values, and produces a corrected file ready for review and upload.
order: 5
tags: [Data quality, Dashboards]
result: Attribute problems found automatically, with an upload-ready fix file
---

# An attribute data health dashboard

**Role:** Built it myself · **Tools:** [TODO: what you built it with]

## The problem

Product attributes, like size, count, or strength, drive how products appear and get filtered when someone places an order. Over time they collect problems: the same value entered twice in slightly different ways, or values that show up in the wrong order. [TODO: confirm what "out of order" means here. I've assumed values that should follow a set sequence, like sizes going small to large, appearing out of sequence.]

These problems are easy to miss one at a time. Across a whole catalog they make ordering harder, and finding them by hand means scrolling through attribute lists one by one.

## What I built

A dashboard that checks attribute data against the catalog's ordering rules and reports on its health. It:

- **Flags duplicate values** that mean the same thing but are entered differently
- **Flags out-of-order values** that break the expected sequence
- **Gives each attribute a health rating**, so it's clear where to focus first
- **Produces an upload-ready CSV** of corrected values, so fixing the problems is a review and an upload instead of manual editing

**Example** (made-up values, for illustration only):

| Attribute | Problem | Current | Suggested fix |
|---|---|---|---|
| Size | Duplicate | "Large", "LG" | "Large" |
| Size | Out of order | M, S, L | S, M, L |

## How it gets used

[TODO: one or two sentences. Who uses it and how often? For example, whether you run it before category reviews, or whether teammates use it on their own categories.]

## Result

[TODO: any result you're comfortable sharing, such as how many attributes it covers, how many issues the first run found, or how much faster cleanup became. If you don't have a number, cut this section and let "What I built" carry the page.]

## What I learned

The corrected CSV was the part that made the dashboard useful. A report that only lists problems creates a to-do list. A report that hands you the fix gets acted on.

*All examples on this page are illustrative. No real catalog data is shown.*
