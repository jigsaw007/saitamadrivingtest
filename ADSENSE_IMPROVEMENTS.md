# AdSense / SEO Improvement Pass — 2026-09-09

## Protected core
The following files were intentionally left byte-for-byte unchanged from the uploaded ZIP:
- api/create-checkout.js
- api/stripe-webhook.js
- src/components/Paywall.js
- src/PaymentSuccess.js
- src/utils/premium.js
- src/hooks/useAuth.js
- src/pages/Karimen.js
- src/pages/Honmen.js
- src/pages/SetA.js
- src/pages/SetB.js
- src/pages/SetC.js
- src/pages/SetD.js
- src/pages/Illustrations.js

## Main changes
- Corrected canonical/OG/structured-data domain to https://saitamadrivingtest.com
- Rebuilt robots.txt and sitemap.xml
- Added per-route SEO metadata and noindex for login/payment/thin set routes
- Standardized branding to Saitama Driving Test
- Removed unsupported 99% success-rate presentation
- Rewrote About page to avoid unsupported instructor/community-feature claims
- Rewrote Privacy Policy to accurately disclose Supabase, Stripe, Google Analytics and browser storage
- Rewrote Terms to match current premium/payment/account behavior
- Added Contact, Disclaimer, Editorial & Sources Policy
- Added Resources hub
- Added Foreign Licence Conversion study guide
- Added Saitama Licence Center guide
- Added Test-day Checklist
- Improved navigation and added a site-wide footer with independence disclaimer
- Added official-source links to NPA, Saitama Prefectural Police and JAF
- Updated PWA manifest branding

## Local verification
Use Node 20 (the version declared by package.json):

```bash
npm ci
npm run build
```

The sandbox used for this edit runs Node 22 and dependency installation timed out, so a full production build could not be completed here. The protected core checksums were verified after editing.

## Before applying for AdSense
- Deploy this version and check every new route on desktop and mobile.
- Add the deployed sitemap in Google Search Console.
- Let Google crawl/index the new content pages.
- Do not add a fake ads.txt entry; add the exact AdSense-provided ads.txt line after you receive your publisher ID/instructions.
- If AdSense is enabled for EEA/UK users, configure Google's required consent/CMP flow as applicable.
