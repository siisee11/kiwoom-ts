
# @jasset/kiwoom

[![npm version](https://img.shields.io/npm/v/@jasset/kiwoom.svg)](https://www.npmjs.com/package/@jasset/kiwoom)

TypeScript client for Kiwoom REST API.

## Installation

```bash
npm install @jasset/kiwoom
```

## How to use

```typescript
import { createKiwoomClient } from "@jasset/kiwoom";

async function main() {
  const client = createKiwoomClient({
    appKey: process.env.KIWOOM_APP_KEY!,
    appSecret: process.env.KIWOOM_APP_SECRET!,
    env: "demo", // "real" | "demo"
  });

  // Access tokens are issued and cached automatically.
  const balance = await client.domesticAccount.getAccountEvaluationBalanceDetails({
    qryTp: "1",
    dmstStexTp: "KRX",
  });
  console.log(balance.body.acntEvltRemnIndvTot);

  const ranking = await client.domesticStock.getStockSearchRanking({
    qryTp: "1",
  });
  console.log(ranking.body.itemInqRank);
}

main();
```

## Features

- Object-style client setup aligned with `@jasset/kis`.
- Automatic access token issuance, caching, refresh, and manual token injection.
- Common HTTP layer for Kiwoom `api-id`, continuation headers, error handling, and snake_case-to-camelCase normalization.
- Domain clients for domestic account and domestic stock APIs.
- Backward-compatible function exports for the initial token, daily balance, and ranking helpers.

## Manual Token Control

```typescript
client.setAccessToken("already-issued-token", "20261231235959");
const token = await client.ensureAccessToken();
await client.refreshAccessToken();
client.resetAccessToken();
```

## API Implementation Status

[(See full list in docs or type definitions)](./IMPLEMENTATION_STATUS.md)
