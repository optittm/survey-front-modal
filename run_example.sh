#!/bin/bash

npm ci
npx webpack --mode=development
node examples/js/index.js