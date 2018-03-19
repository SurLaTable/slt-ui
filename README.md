Convert Material UI into an asynchronous component library:

---

```sh
jscodeshift --transform async-wrap-exports.js --parser flow ~/material-ui/src/**/index.js \
	&& jscodeshift --transform async-wrap-exports.js --parser flow ~/material-ui/packages/material-ui-icons/src/index.js
	&& jscodeshift --transform change-direct-references.js --parser flow ~/material-ui/src/**/*.js
```
