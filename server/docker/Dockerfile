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

EXPOSE 3333

CMD ["node", "dist/infra/http/server.mjs"]
