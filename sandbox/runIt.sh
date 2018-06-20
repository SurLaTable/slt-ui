#!/bin/bash

rm yarn.lock; \
	rm -rf ./mui && \
	ln -sf ../material-ui/packages/material-ui ./mui && \
	yarn install && \
	yarn start
