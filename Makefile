DOCKER_COMPOSE_DIR := ./apps/server

.PHONY: FORCE
FORCE:


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
	esac
