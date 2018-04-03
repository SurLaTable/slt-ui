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

**Hacking (WIP, currently broken):**

1. Clone `slt-ui`.
2. If you _do not_ have the `codesandbox` CLI installed: `npm install -g codesandbox`
3. `cd slt-ui/build`
4. `codesandbox .`
5. Profit.