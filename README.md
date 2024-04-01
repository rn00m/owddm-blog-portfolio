# Astro, HyGraph, Tailwind CSS Blog-Portfolio

## If you spot any errors or it could be done better, please do let me know!

## Features
- Simple starter project
- No complexed coding, pretty straighforward for starters.
- [NPM] Tailwind CSS for styling
- [NPM] Astro-icon for easy access and use of "https://iconify.design" icons.
- [NPM] tw-neumorphism for some shadow and highlighting of cards 
- 🌙 Dark mode
- 📱 Responsive (layout, images, Tailwind Typography (prose))
- ♿ Accessible (as measured by https://web.dev/measure/)
- 🔎 SEO-enabled (as measured by https://web.dev/measure/)
- Lighthouse score 99/100 (Chrome Lighthouse)
- 🔗 Open Graph tags for social media sharing
- Making use of .env (security wise)
- [NPM] Astro/Sitemap with automatic robots.txt
- API connection with HyGraph


When the project is downloaded and opened in example VS Code, open a terminal and start with below command, see all commands further down:

```sh
npm install
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files (only mentioned a few, too much, but you get the idea lol.. ):

```text
/
├── public/
│   └── fonts/
│   │   ├── Futurewave.ttf
│   │   ├── favicon.svg
├── src/
│   └── assets/*
│   └── components/*
│   └── icons/*
│   └── js/
│   │   └── utils.js
│   └── layouts/
│   │   ├── BlogLayout.astro
│   │   ├── MainLayout.astro
│   │   └── ProjectLayout.astro
│   └── pages/
│       └── blog/
│       │   ├── [...slug].astro
│       │   └── index.astro
│       └── portfolio/
│       │   ├── [...slug].astro
│       │   └── index.astro
│   ├── 404.astro
│   ├── credits.astro
│   ├── index.astro
│   ├── me-myself-and-i.astro
│   ├── robots.txt.ts
│   └── styles/
│   │   ├── frc.css
│   │   ├── index.css
│   │   └── global.css
│   ├── env.d.ts
│   └── types.ts
├── .env
├── .gitignore
├── astro.config.mjs
├── package.json
└── tailwind.config.mjs
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory or in the `assets/` directory that I created for this project. More info on this link: https://docs.astro.build/en/guides/images/

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 HyGraph and .env variables (for security!)
In the project an example is created, for starters to learn.

In the .env file in the root replace the example keys with your own which you will find in your HyGraph account. You can get it from the HyGraph account.

API endpoint: Project settings > API access > Endpoints (copy/paste)
- Use either the "Content API" or the "High Performance Content API", your choice.

API Token: Project settings > API access > Permanent Auth Tokens (create/add token any name can be used)

In the .env file paste the token and endpoint, example below:
HYGRAPH_ENDPOINT=https://api-ap-northeast-1.hygraph.com/v2/xxxxxxxxxxxx/master
HYGRAPH_TOKEN=whateverTokenThatGotCreatedComesHereAndDoNotUseSpacesYesIKnowAPersonWhomUsedSpacesForBetterReadablity!!!DoNotDoThat!!!

Always remember the to check the .gitignore that the .env is listed (see example), because you do not want any API listed on GIT, some exceptions can be applied for Public API, but if you can, learn not to upload any API:

example .gitignore
# environment variables
.env
.env.production

## 👀 Deploy on Netlify
This is pretty straighforward. 
- Log in Netlify
- Add a site from your GitHub account
- Give your project a name and leave all the BUILD settings as is, no changes are needed. 

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
