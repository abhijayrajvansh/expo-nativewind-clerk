# kill-metro-expo.sh
#!/usr/bin/env bash
set -euo pipefail

# Kill Metro/Expo if running
pkill -f "expo|metro|react-native" || true

# Resolve TMP (macOS sets $TMPDIR; fall back to /tmp)
TMP="${TMPDIR:-/tmp}"

# Remove Metro/haste caches if present
find "$TMP" -maxdepth 1 \( -name 'metro-*' -o -name 'haste-map-*' \) -print -exec rm -rf {} +

# Project caches
rm -rf .expo .expo-shared

echo "✅ Metro caches cleared."
