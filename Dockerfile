# ─── Stage 1: Build static site ───────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Nuxt UI Pro license must be present at build time
ARG NUXT_UI_PRO_LICENSE
ENV NUXT_UI_PRO_LICENSE=$NUXT_UI_PRO_LICENSE

# Generate fully static output → .output/public/
RUN npm run generate


# ─── Stage 2: Serve with nginx ────────────────────────────────────────────────
FROM nginx:alpine

COPY --from=builder /app/.output/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
