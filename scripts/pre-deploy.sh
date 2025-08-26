#!/bin/bash

# Pre-deploy script
# Runs migrations for all environments
# Runs seeding only for non-production environments

echo "Running pre-deploy script..."

# Always run migrations
echo "Running migrations..."
pnpm migrate

# Only seed data if not in production
if [ "$RAILWAY_ENVIRONMENT_NAME" = "production" ]; then
  echo "Production environment detected - skipping data seeding"
else
  echo "Non-production environment detected - running data seeding"
  pnpm seed:all
fi

echo "Pre-deploy script completed"