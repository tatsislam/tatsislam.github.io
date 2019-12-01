#!/bin/sh
# To help upload my site

UPDATE_SITE=`jekyll serve`
COPY_SITE=`cp -R _site/. ../../tatsislam.github.io/`