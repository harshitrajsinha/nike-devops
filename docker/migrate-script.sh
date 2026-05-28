#!/bin/sh

set -e

echo "Running pre-start commands..."

npm run db:push
npm run db:seed

cp -r ./static/ /data/static/