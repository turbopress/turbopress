FROM node:18-alpine as base
RUN npm i -g pnpm turbo

FROM base AS pruner
WORKDIR /app
COPY . .
RUN turbo prune --scope=@turbopress/api --docker

# remove all empty node_modules folder structure
RUN rm -rf /app/out/full/*/*/node_modules

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# Add lockfile and package.json's of isolated subworkspace
COPY .gitignore .gitignore
COPY --from=pruner /app/out/json/ .
RUN pnpm install

# Build the project and its dependencies
COPY --from=pruner /app/out/full/ .
ENV PAYLOAD_CONFIG_PATH=src/payload.config.ts
RUN pnpm build:api

# Run App
FROM base as runner
WORKDIR /app
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js
COPY --from=builder /app/apps/api/package.json .
RUN pnpm install --prod
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/apps/api/build ./build

EXPOSE 3000

CMD ["node", "dist/server.js"]
