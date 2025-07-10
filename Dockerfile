FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /home/app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN ls -la && ls -la src && cat tsconfig.json

RUN pnpm build

EXPOSE 3000

CMD ["node", "dist/main.js"]