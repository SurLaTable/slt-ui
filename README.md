# SLT's component library

[![Travis build status](https://travis-ci.org/SurLaTable/slt-ui.svg?branch=master)](https://travis-ci.org/SurLaTable/slt-ui)

# :warning: Our build requires Node 10.x or greater.

## Getting started:

If you just want to hack on components, you can run:

```
yarn install
yarn sandbox
```

More details on the sandbox functionality can be found [here](sandbox/README.md).

Conversely, you can also hack on components using CodeSandbox:

[![Edit @sur-la-table/slt-ui](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/SurLaTable/slt-ui/tree/0b63e06d14b42cc5f91739dff90a09ed747b1e93)

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

### Dynamically registering components:

First build the component:

```sh
yarn build dynamic-registration ./src/--REPLACE_WITH_COMPONENT_DIRECTORY--/index.js
```

Then in your frontend environment:

```js
var slt_dynamic_registration = function(e){var t={};function n(r) ...
$('<div data-component="TestButton">This is a test button</div>').prependTo('body');
ComponentManifest.register(slt_dynamic_registration);
```

## What is this?

`slt-ui` allows you to use modern components on legacy systems. Single page apps are great, but some of us still need to deal with a legacy CMS or other systems. That doesn't mean we want to write legacy code though! Imagine using [Material UI](https://material-ui.com/) to build high level components and dropping them in any ancient CMS (WordPress, ATG, Sitecore, Drupal, Adobe Experience Manager, et cetera). Now you can!

## How did you do this?

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

```js
import { Button } from '@sur-la-table/slt-ui';
```

For injecting into a legacy system, use [React Habitat](https://github.com/DeloitteDigitalAPAC/react-habitat)'s syntax:

```html
<div data-component="Card">
    <div data-component="Button">Yo</div>
</div>
```

Note that unlike vanilla React Habitat _you can have nested components_.

For more details, head [here](build/README.md).

## Contributing components:

Note that production-ready components that utilize Material UI components, must use the following import syntax:

```js
import Button from '@material-ui/core/Button';
```

Note the lack of curly brackets around the import name, and the direct path to the component in the package string. Luckily, this is the exact syntax used in Material UI's documentation.

Without this direct reference to a component, all of Material UI will be included in each component, rather than the specific component itself. As you can guess, this causes needless bloat for the end user.

## Publishing:

After [building](https://github.com/SurLaTable/slt-ui#building) the repo, do:

```
cd build
yarn login
yarn publish
```

To publish the `beta` tag to `npm` (for development environments), just add a `--tag beta` argument to `yarn publish`, in other words:

```
cd build
yarn login
yarn publish --tag beta
```
