FROM node:23-bookworm-slim AS builder

COPY . /app
WORKDIR /app

ENV time_zone=Asia/Seoul
ENV NODE_ENV=production

ENV NEXT_PUBLIC_API_URL=https://api.tapie.kr
ENV API_HOSTNAME=https://api.tapie.kr
ENV API_VERSION=v1
ENV AUTH_URL=https://auth.tapie.kr

RUN corepack enable
RUN corepack prepare pnpm --activate
RUN pnpm install --frozen-lockfile

# ===== ADMIN =====

FROM builder AS admin

WORKDIR /app/packages/admin

RUN pnpm build

CMD ["pnpm", "run", "start"]