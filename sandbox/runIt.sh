#!/bin/bash

#cp -r
rm yarn.lock && \
	yarn install && \
	mkdir -p ./node_modules/@sur-la-table/slt-ui && \
	pwd && \
	ln -sfv ../material-ui/packages/material-ui/src ./node_modules/@sur-la-table/slt-ui && \
	yarn start
