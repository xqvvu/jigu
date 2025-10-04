DOCKER_COMPOSE_DIR := ./apps/server

.PHONY: FORCE
FORCE:

dev:
	pnpm run dev

compose%:
	@case "$*" in \
		-up) \
			docker compose \
				-f $(DOCKER_COMPOSE_DIR)/compose.local.yml \
				up -d ;; \
	  -down) \
			docker compose \
				-f $(DOCKER_COMPOSE_DIR)/compose.local.yml \
				down ;; \
		-clean) \
			make compose-down; \
			rm -rf apps/server/.docker ;; \
	  -help|*) \
			echo "  Usage:"; \
			echo "  # Stable profile"; \
			echo "  make compose-up                   # Start base services"; \
			echo "  make compose-down                 # Stop base services"; \
			echo; \
			exit 1 ;; \
	esac

server%:
	@case "$*" in \
		-auth-secret) \
		npx @better-auth/cli secret ;; \
		-drizzle-generate) \
			cd apps/server || { echo "Failed to change directory to packages/shared"; exit 1; }; \
			npx @better-auth/cli@latest generate -y --config="src/lib/auth.ts" --output="../../packages/shared/src/schema/auth.ts"; \
			npx drizzle-kit generate; \
			cd ../.. ;; \
		-drizzle-migrate) \
			cd apps/server; \
			npx drizzle-kit migrate; \
			cd ../.. ;; \
	esac
