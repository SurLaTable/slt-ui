# SLT's component library

![Travis build status](https://travis-ci.org/SurLaTable/slt-ui.svg?branch=master)

## Getting started:

If you just want to hack on components, you can run:

```
yarn install
yarn sandbox
```

More details on the sandbox functionality can be found [here](sandbox/README.md).

## Building:

```
yarn install
yarn build
```

**Additional flags for `yarn build`:**

| Description                                    | Flag       |
| ---------------------------------------------- | ---------- |
| Build the development version.                 | `--dev`    |
| Open the webpack bundle report after building. | `--report` |

### What is this?

`slt-ui` allows you to use modern components on legacy systems. Single page apps are great, but some of us still need to deal with a legacy CMS or other systems. That doesn't mean we want to write legacy code though! Imagine using [Material UI](https://material-ui.com/) to build high level components and dropping them in any ancient CMS (WordPress, ATG, Sitecore, Drupal, Adobe Experience Manager, et cetera). Now you can!

### How did you do this?

We got a lot of help from these libraries:

-   [Material UI](https://material-ui.com/)
-   [React Habitat](https://github.com/DeloitteDigitalAPAC/react-habitat)

React Habitat was the leg up on incorporating ES-NEXT React components into a legacy system, the problem was that it did not handle nested child components, which kept us from starting with a large pattern library like Material UI. We've solved that [here](manifest/SLTDomFactory.js) and [here](manifest/index.js).

We also needed a way to asynchronously load individual components, to keep our clients from getting a huge payload for one component. We additively wrap each Material UI component (and our own components) using [`react-async-component`](https://github.com/ctrlplusb/react-async-component). The code for that lives [here](builder/async.js).

## OK, I want to use this.

Just do:

```
yarn add @sur-la-table/slt-ui
```

Then you can grab any component using:

```
import { Button } from '@sur-la-table/slt-ui';
```

For more details, head [here](build/README.md).
