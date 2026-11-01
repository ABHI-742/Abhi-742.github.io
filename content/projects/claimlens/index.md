---
date: '2026-10-30'
title: 'ClaimLens: AI Insurance Claim Triage'
github: 'https://github.com/ABHI-742/claimlens'
external: ''
tech:
  - Python
  - FastAPI
  - Claude API
  - pgvector (RAG)
  - AWS S3 / SQS
  - React
  - Docker
showInProjects: true
---

Reads claim documents with OCR, masks PII before any model call, extracts structured facts with Claude, and checks coverage against policy clauses retrieved from pgvector, rejecting answers that cite clauses it never retrieved. Fraud rules and a triage score route claims to fast-track, standard or investigate queues. Built around an SQS pipeline with retries and a dead-letter queue, rotating refresh tokens and role-based access, with 34 integration tests.
