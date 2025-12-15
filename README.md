
# @jasset/kiwoom

[![npm version](https://img.shields.io/npm/v/@jasset/kiwoom.svg)](https://www.npmjs.com/package/@jasset/kiwoom)

Typescript client for Kiwoom Open API.

## Installation

```bash
npm install @jasset/kiwoom
```

## How to use

```typescript
import { KiwoomClient } from "@jasset/kiwoom";

async function main() {
  // 1. Initialize Client
  const client = new KiwoomClient(
    process.env.KIWOOM_APP_KEY!,
    process.env.KIWOOM_APP_SECRET!,
    true // isMock: true for mock investment, false for real
  );

  // 2. Issue Access Token
  // You should manage the token yourself (e.g. cache it)
  const tokenResponse = await client.issueAccessToken();
  const token = tokenResponse.token;
  console.log('Access Token:', token);

  // 3. Call APIs

  // Example: Get Daily Balance Yield (ka01690)
  const dailyBalance = await client.getDailyBalanceYield(token, "20231225");
  console.log('Daily Balance:', dailyBalance);

  // Example: Get Real-time Stock Search Ranking (ka00198)
  // qry_tp: '1'(1min), '2'(10min), '3'(1hour), '4'(cumulative), '5'(30sec)
  const ranking = await client.getStockSearchRanking(token, '1');
  console.log('Stock Ranking:', ranking.item_inq_rank);
}
main();
```

## Features

- **Typed Request/Response**: All request and response bodies are fully typed.

## API Implementation Status

[(See full list in docs or type definitions)](./IMPLEMENTATION_STATUS.md)