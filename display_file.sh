#!/bin/bash

echo "=== Listing all files under ./src ==="

# Find and loop through all files (not directories) under ./src
find ./src -type f | while read file; do
  echo ""
  echo "========== FILE: $file =========="
  cat "$file"
  echo ""
done
