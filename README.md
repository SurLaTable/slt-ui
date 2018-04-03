# SLT's component library

![Bitbucket Pipelines branch](https://img.shields.io/bitbucket/pipelines/atlassian/adf-builder-javascript/task/SECO-2168.svg)

Welcome friends! We are still tidying up, excuse the mess.

**Setup and build:**

```
yarn install
yarn git-setup
yarn build
```

**Publishing:**

1.  Make sure you have committed and pushed all your changes.
2.  Update the version in `package.json`.
3.  `yarn build`
4.  `yarn git-mark-release && git push --tags`
5.  `cd build`
6.  `yarn publish`

**Hacking (I just want to ~~break~~ build stuff!):**

1.  Clone `slt-ui`.
2.  `cd slt-ui/sandbox`
3.  `yarn install`
4.  `yarn start`
5.  Profit ... or more specifically, edit `src/index.js` as your 'app' entry point. You can access any of the `slt-ui` components like so:

```js
import { Button } from '@sur-la-table/slt-ui';
```

This will use the version of `slt-ui` you have built locally, not the `npm` version.
