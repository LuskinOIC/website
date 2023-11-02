# LuskinIOC

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Site structure

Root directory
```
.
├── README.md
├── _static
├── app -> Routing structure
├── components -> Shared components
├── constants -> Constant values
├── docs -> Documentation
├── next-env.d.ts
├── next.config.js
├── node_modules
├── package-lock.json
├── package.json
├── postcss.config.js
├── prettierrc.json
├── public
├── tailwind.config.ts
├── tsconfig.json
└── utils
```

App directory
```
.
├── about
│   └── page.tsx
├── blog
│   └── page.tsx
├── events
│   ├── [slug]
│   └── page.tsx
├── favicon.ico
├── globals.css
├── layout.tsx
├── leadership
│   └── page.tsx
├── medical-professionals
│   └── page.tsx
├── news
│   ├── [slug]
│   └── page.tsx
├── page.tsx
├── patient-care
│   └── page.tsx
├── patient-stories
│   ├── [slug]
│   └── page.tsx
├── physician-bio
│   └── [slug]
├── physicians
│   └── page.tsx
├── specialties
│   ├── [slug]
│   └── page.tsx
└── ways-to-give
    └── page.tsx
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
