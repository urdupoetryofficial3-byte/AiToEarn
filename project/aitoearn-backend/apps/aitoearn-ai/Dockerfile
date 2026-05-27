FROM node:24-alpine AS deps

RUN npm install -g pnpm

WORKDIR /app

COPY deps/ ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod

FROM node:24-alpine AS production

ARG APP_NAME

# Speed up Alpine package downloads in China
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories

RUN apk add --no-cache curl ffmpeg

WORKDIR /app

COPY assets/ ./
COPY --from=deps /app/ ./

COPY apps/ ./apps/
COPY libs/ ./libs/

ENV NODE_ENV=production
ENV APP_NAME=$APP_NAME

CMD ["sh", "-c", "echo 'nameserver 8.8.8.8' >> /etc/resolv.conf && echo 'nameserver 1.1.1.1' >> /etc/resolv.conf && node apps/${APP_NAME}/src/main.js -c config.js"]
