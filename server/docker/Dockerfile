FROM node:22.14.0 AS base

WORKDIR /usr/src/app

COPY package.json yarn.lock .

RUN yarn install --frozen-lockfile

FROM base AS build

WORKDIR /usr/src/app

COPY . .

RUN yarn build
RUN yarn install --production --frozen-lockfile --ignore-scripts --prefer-offline

FROM node:22-alpine AS deploy

USER 1000

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json

ENV NODE_ENV=production
ENV PORT=3333
ENV DATABASE_URL="postgresql://docker:docker@localhost:5432/brev_ly"

ENV CLOUDFLARE_ACCESS_KEY_ID="#"
ENV CLOUDFLARE_SECRET_ACCESS_KEY="#"
ENV CLOUDFLARE_BUCKET="#"
ENV CLOUDFLARE_ACCOUNT_ID="#"
ENV CLOUDFLARE_PUBLIC_URL="http://localhost"

EXPOSE 3333

CMD ["node", "dist/infra/http/server.mjs"]
