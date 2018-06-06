#!/bin/bash

#cp -r ../material-ui/packages/material-ui/src/ node_modules/@sur-la-table/slt-ui && \
rm yarn.lock; \
	yarn install && \
#	mkdir -p ./node_modules/@sur-la-table/slt-ui && \
#	pwd && \
	cp -r ../material-ui/packages/material-ui/src/ ./mui && \
#	ln -sfv ../material-ui/packages/material-ui/src/ node_modules/@sur-la-table/slt-ui && \
	yarn start
