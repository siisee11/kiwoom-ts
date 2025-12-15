
# @jasset/kiwoom

[![npm version](https://img.shields.io/npm/v/@jasset/kiwoom.svg)](https://www.npmjs.com/package/@jasset/kiwoom)

Typescript client for KIS API(KoreaInvestment OpenAPI).

## Installation

```bash
npm install @jasset/kiwoom
```

## How to use

```typescript
import { createKiwoomClient } from "@jasset/kiwoom";

async function main() {
  const client = createKiwoomClient({
    appKey: process.env.KIWOOM_APP_KEY,
    appSecret: process.env.KIWOOM_APP_SECRET,
  });

  // 1. (Optional) Get Access Token manually
  // The client will automatically fetch and reuse the token if not set.
  // const { access_token } = await client.getAccessToken();
  // client.setAccessToken(access_token);

  // 2. Call API (e.g. Check Domestic Holiday)
  // Token is automatically handled!
  // New: APIs are organized under namespaces
  const result = await client.domestic.checkHoliday({
    bassDt: "20231225",
  });
  
  console.log(result.holidays);
}
main();
```

## Features

- **Typed Request/Response**: All request and response bodies are fully typed.

## API Implementation Status

[(See full list in docs or type definitions)](./IMPLEMENTATION_STATUS.md)