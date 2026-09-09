# Non-quiz site improvements

Implemented without changing quiz, scoring, payment, authentication or premium access logic.

## Added
- `/start-here` guided learning path
- `/faq` with visible FAQ content and matching FAQ structured data
- `/updates` site changelog
- Proper catch-all 404 page
- Breadcrumb component and breadcrumb structured data
- Reusable Sources & Review component
- Reusable related-content CTA component
- Search/filter on the Resources page
- Additional internal links between study pages
- Keyboard focus visibility and mobile styles
- Lazy-loading/async decoding for road-sign images

## Improved
- Foreign licence conversion guide with current Saitama official workflow references
- Saitama licence center guide
- Test-day checklist
- Emergency guide with current official/JAF numbers
- Road signs, vocabulary, road-safety and licence guide trust/source blocks
- Sitemap coverage for the new public pages
- Route-specific SEO metadata

## Protected areas verified unchanged
- `api/create-checkout.js`
- `api/stripe-webhook.js`
- `src/PaymentSuccess.js`
- `src/hooks/useAuth.js`
- `src/lib/supabase.js`
- `src/components/Paywall.js`
- `src/pages/Karimen.js`
- `src/pages/Honmen.js`
- `src/pages/SetA.js`
- `src/pages/SetB.js`
- `src/pages/SetC.js`
- `src/pages/SetD.js`
- `src/pages/Illustrations.js`

## Notes
This patch intentionally does not include `public/index.html`, `vercel.json`, or generated `build/` files, so it will not overwrite the newer production fixes made directly in GitHub.
