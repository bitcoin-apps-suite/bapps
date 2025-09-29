# HollaEx BSV Exchange Setup Guide

## Overview
This guide details how to integrate HollaEx Kit with Bitcoin SV (BSV) for the Bitcoin Apps Store exchange.

## Prerequisites
- Docker & Docker Compose
- Node.js 18+
- BSV Node (Bitcoin SV)
- PostgreSQL database

## Quick Setup

### 1. Clone HollaEx Kit
```bash
git clone https://github.com/hollaex/hollaex-kit.git
cd hollaex-kit
```

### 2. Configure BSV Integration

Create a configuration file `settings/configmap/bsv-config.yaml`:

```yaml
coins:
  bsv:
    fullname: "Bitcoin SV"
    symbol: "BSV"
    active: true
    allow_deposit: true
    allow_withdrawal: true
    withdrawal_fee: 0.0001
    min_withdrawal: 0.001
    max_withdrawal: 100
    min_deposit: 0.0001
    deposit_confirmations: 6
    
  bwriter:
    fullname: "Bitcoin Writer Token"
    symbol: "BWRITER"
    active: true
    allow_deposit: true
    allow_withdrawal: true
    withdrawal_fee: 1
    min_withdrawal: 10
    max_withdrawal: 100000
    
  bsheets:
    fullname: "Bitcoin Sheets Token"
    symbol: "BSHEETS"
    active: true
    # ... similar config for other tokens
```

### 3. BSV Node Connection

Add BSV node configuration to `.env`:

```env
BSV_NODE_URL=http://localhost:8332
BSV_RPC_USER=your_rpc_user
BSV_RPC_PASSWORD=your_rpc_password
BSV_NETWORK=mainnet
```

### 4. Token Smart Contracts

For BSV-based tokens, create smart contract deployment scripts:

```javascript
// scripts/deploy-tokens.js
const bsvjs = require('bsv');

const tokens = [
  { name: 'Bitcoin Writer', symbol: 'BWRITER', supply: 10000000 },
  { name: 'Bitcoin Sheets', symbol: 'BSHEETS', supply: 10000000 },
  { name: 'Bitcoin Drive', symbol: 'BDRIVE', supply: 10000000 },
  { name: 'Bitcoin Email', symbol: 'BMAIL', supply: 10000000 },
  { name: 'Bitcoin Music', symbol: 'BMUSIC', supply: 10000000 },
];

// Token creation logic using BSV smart contracts
```

### 5. Docker Compose Setup

Create `docker-compose.bsv.yml`:

```yaml
version: '3.8'

services:
  bsv-node:
    image: bitcoinsv/bitcoin-sv:latest
    ports:
      - "8332:8332"
      - "8333:8333"
    volumes:
      - ./bsv-data:/data
    command: |
      -server
      -rpcuser=${BSV_RPC_USER}
      -rpcpassword=${BSV_RPC_PASSWORD}
      -rpcallowip=0.0.0.0/0
      
  hollaex-server:
    build: ./server
    environment:
      - BSV_NODE_URL=${BSV_NODE_URL}
      - BSV_RPC_USER=${BSV_RPC_USER}
      - BSV_RPC_PASSWORD=${BSV_RPC_PASSWORD}
    depends_on:
      - bsv-node
      - postgres
      
  hollaex-web:
    build: ./web
    ports:
      - "3000:80"
    depends_on:
      - hollaex-server
```

### 6. Launch the Exchange

```bash
# Start BSV node
docker-compose -f docker-compose.bsv.yml up -d bsv-node

# Wait for BSV sync
docker-compose logs -f bsv-node

# Start HollaEx services
docker-compose -f docker-compose.bsv.yml up -d

# Deploy tokens
node scripts/deploy-tokens.js
```

## Integration with Bitcoin Apps Store

### API Endpoints

The exchange will expose these endpoints for the Bitcoin Apps Store:

```javascript
// Exchange API
GET /api/v2/markets  // List all token pairs
GET /api/v2/ticker   // Price ticker for all pairs
GET /api/v2/orderbook?symbol=BWRITER-BSV
POST /api/v2/order   // Place order

// WebSocket
ws://localhost:3000/stream
- Subscribe to: trades, orderbook, ticker
```

### Frontend Integration

Update the Bitcoin Apps Store exchange page to connect to HollaEx:

```typescript
// app/exchange/page.tsx
const HOLLAEX_API = process.env.NEXT_PUBLIC_HOLLAEX_API || 'http://localhost:3000/api/v2';

async function fetchTokenPrices() {
  const response = await fetch(`${HOLLAEX_API}/ticker`);
  return response.json();
}

async function placeOrder(order: Order) {
  const response = await fetch(`${HOLLAEX_API}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    },
    body: JSON.stringify(order)
  });
  return response.json();
}
```

## BSV Token Standards

Use BSV's token protocols:
- **Run Protocol**: For fungible tokens
- **STAS**: For security tokens with compliance
- **Simple Tokens**: Basic token implementation

Example token creation:

```javascript
const Run = require('run-sdk');
const run = new Run({ network: 'main' });

class BitcoinAppToken extends Run.Token {
  constructor(supply, name, symbol) {
    super();
    this.supply = supply;
    this.name = name;
    this.symbol = symbol;
  }
}

// Deploy token
const bWriterToken = new BitcoinAppToken(10000000, 'Bitcoin Writer', 'BWRITER');
await bWriterToken.sync();
console.log('Token deployed:', bWriterToken.location);
```

## Production Considerations

1. **Security**:
   - Use SSL/TLS for all connections
   - Implement rate limiting
   - Add DDoS protection
   - Multi-sig wallets for cold storage

2. **Compliance**:
   - KYC/AML integration
   - Transaction monitoring
   - Regulatory reporting

3. **Performance**:
   - Redis for caching
   - Load balancing
   - Database replication
   - CDN for static assets

4. **Monitoring**:
   - Prometheus metrics
   - Grafana dashboards
   - Alert system
   - Audit logs

## Next Steps

1. Set up BSV testnet for development
2. Deploy token contracts
3. Configure HollaEx with BSV support
4. Test trading pairs
5. Integrate with Bitcoin Apps Store UI
6. Launch on mainnet

## Resources

- [HollaEx Documentation](https://docs.hollaex.com)
- [BSV Wiki](https://wiki.bitcoinsv.io)
- [Run Protocol](https://run.network)
- [BSV Developer Portal](https://www.bsvblockchain.org/developers)