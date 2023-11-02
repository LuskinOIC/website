# LuskinOIC
Front end app for LuskinOIC powered by [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and integrated with [Contenful](https://www.contentful.com/developers/).

Built in partnership by [Sustainable Progress and Equality Collective](https://specollective.org/) and [Of Ash and Fire](https://www.ofashandfire.com/)


## Getting Started

Ensure you have NodeJS version v18.8.0 installed. We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage node version.

To start the development environment install the dependencies and run the development server command:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Site structure

Root directory
```
.
├── README.md
├── _static
├── app
├── docs
├── next-env.d.ts
├── next.config.js
├── node_modules
├── package-lock.json
├── package.json
├── postcss.config.js
├── prettierrc.json
├── public
├── tailwind.config.ts
└── tsconfig.json
```

App directory
```
.
├── about
├── blog
├── components
├── constants
├── events
├── favicon.ico
├── globals.css
├── layout.tsx
├── leadership
├── medical-professionals
├── news
├── page.tsx
├── patient-care
├── patient-stories
├── physician-bio
├── physicians
├── specialties
├── utils
└── ways-to-give
```
## Running linters

To run ESLINT use the command 

```
npm run lint
```

To run in CI mode to help with debugging Github Action failing

```
CI=true npm run lint
```

## Updating environment variables

To copy over env variables needed for email functionality

```
cp .env.sample .env.local
```

Fill in the variables as needed

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

This project is deployed on [DigitalOcean](https://www.digitalocean.com/). 
