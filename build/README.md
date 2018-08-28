# SLT's component library

**master**: [![Travis 'master' build status](https://travis-ci.org/SurLaTable/slt-ui.svg?branch=master)](https://travis-ci.org/SurLaTable/slt-ui)

**develop**: [![Travis 'develop' build status](https://travis-ci.org/SurLaTable/slt-ui.svg?branch=develop)](https://travis-ci.org/SurLaTable/slt-ui)

`slt-ui` is a high performance, asynchronous, component library that is compatible with legacy systems, for more details on that, see our main [README](https://github.com/SurLaTable/slt-ui/blob/master/README.md).

To use it in your project, just do:

```
yarn add @sur-la-table/slt-ui
```

Then you can grab any component using:

```js
import { Button } from '@sur-la-table/slt-ui';
```

This includes [Material UI](https://material-ui.com/) components and also `slt-ui` components.

For injecting into a legacy system, use [React Habitat](https://github.com/DeloitteDigitalAPAC/react-habitat)'s syntax:

```html
<div data-component="Card">
    <div data-component="Button">Yo</div>
</div>
```

To register these components with Habitat, run:

```js
ComponentManifest.bootstrapper.update();
```

Note that this differs from React Habitat's method (`window.updateHabitat();`). Both are functionally the same, but we expose the low level `bootstrapper` to have access to more of Habitat's internal methods.

Also, unlike vanilla React Habitat _you can have nested components_.

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
