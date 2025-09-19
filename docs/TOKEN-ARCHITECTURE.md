# Bitcoin Apps Suite Token Architecture

## Overview

The Bitcoin Apps Suite leverages a dual-token architecture built on BSV blockchain, utilizing two container standards to enable universal tokenization of digital content.

## Core Token Standards

### 1. `.nft` (Non-Fungible Token Container)
- **Repository**: `/Users/b0ase/Projects/nft`
- **Purpose**: Universal wrapper for ANY digital file to make it a tradeable blockchain asset
- **Functionality**: 
  - Encrypts and wraps content (jpeg, pdf, doc, video, etc.)
  - Creates unique, transferable ownership
  - Enables on-chain trading of digital assets

### 2. `.ft` (Fungible Token Container)  
- **Repository**: `/Users/b0ase/Projects/ft`
- **Purpose**: Universal wrapper for ANY fungible token standard on BSV
- **Functionality**:
  - Wraps various token standards (1sat ordinals, STAS, etc.)
  - Represents revenue shares in associated .nft assets
  - Enables dividend distribution to token holders

## How They Work Together

```
Original File → .nft Container → Associated .ft Tokens
     ↓              ↓                    ↓
  content.jpg → content.jpg.nft → content.ft (revenue shares)
```

When someone purchases access to an .nft file, the revenue automatically distributes to .ft token holders, creating a sustainable economic model for content creators and investors.

## Integration with Bitcoin Apps

### Bitcoin Writer
- Documents saved as `.nft` files
- Authors can issue `.ft` tokens for revenue sharing
- Readers can purchase both access and investment stakes

### Bitcoin Drive  
- All uploaded files automatically wrapped in `.nft` containers
- Storage providers earn `.ft` tokens for hosting
- Users can trade storage capacity as tokenized assets

### Bitcoin Spreadsheets
- Datasets packaged as `.nft` files  
- Data subscribers pay for access
- `.ft` tokens represent revenue shares from subscriptions

### Bitcoin Email
- Important emails can be converted to `.nft` for permanent storage
- Email lists and databases tradeable as `.nft` assets

## $BAPPS Master Token

The $BAPPS token serves as the ecosystem's master `.ft` token:
- Receives percentage of all app revenues
- Provides governance rights across all apps
- Acts as primary trading pair for app-specific tokens

## Token Flow Example

1. **Creation**: User creates `document.pdf` in Bitcoin Writer
2. **Wrapping**: System wraps it as `document.pdf.nft`
3. **Token Generation**: 1,000,000 `document.ft` tokens created
4. **Distribution**:
   - 510,000 to creator (51%)
   - 490,000 available for sale (49%)
5. **Revenue**: When users buy access to the .nft:
   - Payment splits among `.ft` holders
   - $BAPPS token holders get ecosystem fee
   - Creator maintains majority control

## Developer Integration

To work with these standards:

```javascript
// Example: Creating tokenized content
import { NFTWrapper } from '@bsv/nft';
import { FTWrapper } from '@bsv/ft';

async function tokenizeContent(file) {
  // Wrap content in .nft
  const nft = await NFTWrapper.create(file);
  
  // Create associated .ft tokens
  const ft = await FTWrapper.create({
    standard: 'STAS', // or '1sat', etc.
    supply: 1000000,
    ticker: `$${file.name.toUpperCase()}`,
    nftReference: nft.id
  });
  
  return { nft, ft };
}
```

## Benefits

1. **Universal Compatibility**: Any file type, any token standard
2. **Automatic Monetization**: Built-in revenue sharing
3. **Decentralized Ownership**: True digital property rights
4. **Ecosystem Synergy**: All apps benefit from shared standards
5. **Developer Friendly**: Simple APIs for integration

## Resources

- **NFT Standard**: https://github.com/your-username/nft
- **FT Standard**: https://github.com/your-username/ft
- **Bitcoin Apps Suite**: https://bitcoin-apps-suite.vercel.app
- **BSV Documentation**: https://bsvblockchain.org

## License

All Bitcoin Apps Suite software is licensed under the Open BSV License, ensuring it can only be used on the BSV blockchain.

---

*The .nft and .ft standards represent the foundation of a new digital economy where every piece of content can be owned, traded, and monetized on the blockchain.*