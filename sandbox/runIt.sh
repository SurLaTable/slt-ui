#!/bin/bash

#cp -r ../material-ui/packages/material-ui/src/ node_modules/@sur-la-table/slt-ui && \
rm yarn.lock; \
	cp -r ../material-ui/packages/material-ui ./mui && \
	yarn install && \
#	mkdir -p ./node_modules/@sur-la-table/slt-ui && \
#	pwd && \
#	ln -sfv ../material-ui/packages/material-ui/src/ node_modules/@sur-la-table/slt-ui && \
	yarn start
