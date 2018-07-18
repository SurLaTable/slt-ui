# SLT's component library

[![Travis build status](https://travis-ci.org/SurLaTable/slt-ui.svg?branch=master)](https://travis-ci.org/SurLaTable/slt-ui)

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

Note that unlike vanilla React Habitat _you can have nested components_.
