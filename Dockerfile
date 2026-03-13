# Dependencies
FROM node:20-alpine AS deps

WORKDIR /webapp

ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json .npmrc ./

RUN npm ci

# Build
FROM node:20-alpine AS builder

WORKDIR /webapp

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /webapp/node_modules ./node_modules
COPY . .

RUN npm run build

# Runtime
FROM node:20-alpine AS runner

WORKDIR /webapp

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /webapp/node_modules ./node_modules
COPY package.json package-lock.json ./

COPY --from=builder /webapp/.next ./.next
COPY --from=builder /webapp/public ./public
COPY --from=builder /webapp/next.config.js ./next.config.js

EXPOSE 3000

CMD ["npm", "start", "--", "-H", "0.0.0.0", "-p", "3000"]
