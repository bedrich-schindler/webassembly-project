#!/bin/bash

set -e

mkdir -p ./build/
em++ ./src/library.cpp \
  -o ./build/wasm.js \
  --bind \
  --no-entry \
  -s ENVIRONMENT=web \
  -s MODULARIZE=1 \
  -s EXPORT_ES6=1 \
  -s EXPORTED_FUNCTIONS="['_malloc', '_free']" \
  -s ALLOW_MEMORY_GROWTH=1

mkdir -p ../web/src/wasm/module/
cp ./build/wasm.{wasm,js} ../web/src/wasm/module/

