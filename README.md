# LuskinOIC Website

Public website for The Luskin Orthopaedic Institute for Children (LuskinOIC). Built in partnership by [Sustainable Progress and Equality Collective](https://specollective.org/) and [Of Ash and Fire](https://www.ofashandfire.com/).

NOTE: This project is in the process of being migrated to Webflow.

## License

The code for this project is released under a [Creative Commons License](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en) and can be used for educational and non-commercial purposes. Any redistribution of the code should be shared under the same license. All assets, content, and artifacts contained within the public folder are under the copyright of LuskinOIC.

## Getting Started

Ensure you have NodeJS version v16.20.2 installed. We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage node version. Run `nvm use` to trigger the .nvmrc file.

To start the development environment install the dependencies and run the development server command:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Updating environment variables

To copy over env variables needed for Contentful functionality

```
cp .env.sample .env.local
```

Reach out to a project admin to fill in the variables as needed.

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

This project is deployed on [DigitalOcean](https://www.digitalocean.com/) using App Platform.
