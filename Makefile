# Makefile

# Nom de l'image Docker
DOCKER_IMAGE = harbor.knada.rancher.kosmos.fr/public/flink-kubernetes-dashboard
# Tag de l'image Docker
DOCKER_TAG = latest

# Répertoire de l'application
APP_DIR = .

# Nom de l'application
APP_NAME = flink-kubernetes-dashboard

.PHONY: build-docker push-docker

build-docker:
	@echo "Building Docker image..."
	docker build -t $(DOCKER_IMAGE):$(DOCKER_TAG) $(APP_DIR)

push-docker:
	@echo "Pushing Docker image..."
	docker push $(DOCKER_IMAGE):$(DOCKER_TAG)

# Exécute le build et le push en séquence
build-and-push: build-docker push-docker

# Nettoie l'image Docker localement (attention : cela supprime toutes les images locales non utilisées)
clean-docker:
	@echo "Cleaning Docker images..."
	docker system prune -af
