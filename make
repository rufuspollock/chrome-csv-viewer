#!/bin/bash
# Builds the zip file for the chrome extension

mkdir -p tmp
mkdir -p dist
cp -a css *.js manifest.json *.html tmp/
mkdir -p tmp/vendor/recline
cp -a vendor/recline/dist vendor/recline/vendor tmp/vendor/recline
zip -r dist/recline-csv-viewer.zip tmp/*
rm -Rf tmp
