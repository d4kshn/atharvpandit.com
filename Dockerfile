# Build and serve the static export (output: "export" → ./out) in a container.
#
#   docker build -t atharvpandit .
#   docker run --rm -p 3000:3000 atharvpandit
#   → http://localhost:3000

# --- Build stage: produce the static site (out/) ---
FROM node:24-alpine AS builder
WORKDIR /app
RUN corepack enable

# Install dependencies first (better layer caching)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Build the static export
COPY . .
RUN pnpm build

# --- Runtime stage: serve the static files ---
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# `serve` handles clean URLs (/contact → contact.html) and 404.html
RUN npm install -g serve@14

COPY --from=builder /app/out ./out

EXPOSE 3000
CMD ["serve", "out", "-l", "3000"]
