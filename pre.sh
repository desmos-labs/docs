#!/usr/bin/env bash

# Include desmos modules specs
git clone https://github.com/desmos-labs/desmos.git

rm -rf docs/02-developers/modules && mkdir -p docs/02-developers/05-modules && cd docs/02-developers/05-modules

for D in ../../../desmos/x/*; do
  if [ -d "${D}" ]; then
    rm -rf "$(echo "$D" | awk -F/ '{print $NF}')"
    if [ -d "${D}/spec" ]; then
      mkdir -p "$(echo "$D" | awk -F/ '{print $NF}')" && cp -r "$D"/spec/* "$_"
    fi
  fi
done

cd ../../../
rm -rf desmos

