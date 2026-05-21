# Omar Serrano — Portfolio

Personal portfolio. Built with Next.js 14, Tailwind 3.4, framer-motion, matter-js.

- Live: https://omarserrano.ca
- Toronto, GTA · EN · ES · FR

## Stack

- Next.js 14.2 (App Router)
- React 18.3 + TypeScript
- Tailwind CSS 3.4
- framer-motion ^12
- matter-js ^0.20 (drag physics on the hero)
- @supabase/supabase-js (reserved for v3 guestbook)

## Local dev

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — middleware will redirect to `/en`, `/es`, or `/fr` based on your `Accept-Language` header.

## Scripts

* `pnpm dev` — local dev server
* `pnpm build` — production build
* `pnpm typecheck` — TypeScript validation
* `pnpm lint` — Next.js linter

## i18n

* Languages: EN (default), ES, FR
* Detection: `Accept-Language` header via `middleware.ts`
* Override: cookie `NEXT_LOCALE` set by the in-nav switcher

## License

© 2026 Omar Serrano. All rights reserved.
