FROM node:23-bookworm-slim AS builder

COPY . /app
WORKDIR /app

ENV time_zone=Asia/Seoul
ENV NODE_ENV=production
ENV API_VERSION=v1

RUN corepack enable
RUN corepack prepare pnpm --activate
RUN pnpm install --frozen-lockfile

# ===== ADMIN =====

FROM builder AS admin

WORKDIR /app/packages/admin

RUN pnpm build

CMD ["pnpm", "run", "start"]