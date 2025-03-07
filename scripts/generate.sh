#!/bin/bash
set -e
npm run clean-api-docs
npm run generate-api-docs
node ./scripts/clean.js
