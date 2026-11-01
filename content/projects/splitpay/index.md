---
date: '2026-10-31'
title: 'SplitPay: Real-Time Expense Splitting'
github: 'https://github.com/ABHI-742/splitpay'
external: ''
tech:
  - Node.js
  - TypeScript
  - PostgreSQL
  - Redis
  - Socket.IO
  - BullMQ
  - Stripe
showInProjects: true
---

Group expense tracker with four split methods, ledger-derived balances and a min-cash-flow algorithm that settles a group in at most n−1 payments. Changes reach every member instantly through Socket.IO and Redis pub/sub, debts are paid through Stripe Checkout with signed, idempotent webhooks, and recurring bills run on BullMQ with backoff retries and a dead-letter queue. Covered by 32 tests against real Postgres and Redis.
