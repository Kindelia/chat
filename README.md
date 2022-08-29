# Kindelia Chat

Kindelia **app** platform including **tags** on messages

### Tools used

- [Next.js](https://nextjs.org) React framework
- [Turborepo](https://turborepo.org/) high-performance build system for and TypeScript codebases
- [Planetscale](https://planetscale.com/) serverless database platform
- [Prisma](https://prisma.io/) for database ORM
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Netlify](https://www.netlify.com/) for deploying
<!-- - [Docker Compose](https://docs.docker.com/compose/) for local database -->

### Configuration

```bash
cd my-turborepo
cp .env.example .env
ln -s ../../.env ./apps/chat/
yarn install
yarn db:push
```

Update the your `.env` accordingly.

Aside of it, it's necessary to configure **planetscale** and **netlify**.

Then, run on background:

```bash
pscale connect chat dev --port 3309
yarn studio
yarn dev
```
