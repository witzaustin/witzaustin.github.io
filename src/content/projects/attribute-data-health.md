---
title: An attribute data health dashboard
summary: Checks every standardized catalog attribute for duplicate and out-of-order values and produces an upload-ready fix file. Each check went from 2 hours to 30 minutes.
order: 5
tags: [Data quality, SQL, N8N, Claude Code]
result: 75% less time per check · 2 hours to 30 minutes · covers every standardized attribute
---

# An attribute data health dashboard

**Role:** Built it myself · **Tools:** Redshift, SQL, N8N, Claude Code · **Result:** 75% less time per check, from 2 hours to 30 minutes

## The problem

Product attributes, like brand, size, or weight, drive how products appear and get filtered when someone places an order. Over time they collect problems: the same value entered twice in slightly different ways, or values that show up in the wrong order.

What counts as the right order depends on the attribute:

- **Alphabetical** for something like brand
- **Numeric** for something like weight or length
- **A pre-defined order** for something like size, where small comes before medium and large

Every time someone uploads new values, they have to land in the right place. Checking that by hand meant going into our CMS, pulling the CSV, opening it, working out whether the values were in order, putting them in the correct order, saving a new CSV, and uploading it back to the CMS. Doing that for every attribute took an outsized amount of time, so problems slipped through.

## What I built

A dashboard that checks attribute data against the catalog's ordering rules and reports on its health. The catalog data lives in Redshift, an N8N workflow runs the SQL checks against it, and I built the dashboard itself with Claude Code. It:

- **Flags duplicate values** that mean the same thing but are entered differently
- **Flags out-of-order values** based on the right ordering rule for each attribute
- **Gives each attribute a health rating**, so it's clear where to focus first
- **Produces an upload-ready CSV** of corrected values, so fixing the problems is a review and an upload instead of manual editing

<!-- dashboard-demo -->

## How it gets used

We run it twice a week to keep catalog attribute data correct, with a focus on making sure newly uploaded values are in the right order. The dashboard produces the upload-ready file automatically. A person still does a final pass and signs off that everything is correct before anything goes back into the CMS.

## Result

- Covers **every standardized attribute** in the catalog.
- Each check went from **2 hours to 30 minutes**, a **75%** time savings, because the dashboard does the analysis and builds the corrected file.
- It finds issues we couldn't have found without spending an outsized amount of time digging through the data.

## What I learned

The corrected CSV was the part that made the dashboard useful. A report that only lists problems creates a to-do list. A report that hands you the fix gets acted on.

*All examples on this page are illustrative. No real catalog data is shown.*
