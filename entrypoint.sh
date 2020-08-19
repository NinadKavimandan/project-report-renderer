#!/bin/sh

set -e

build_dir=/opt/build

# Copy the reports from the working directory to our build location
cp -R $INPUT_REPORTSPATH $build_dir/.reports

cd $build_dir
npm run build
npm run export -- -o "$GITHUB_WORKSPACE/$INPUT_OUTPUTSPATH"