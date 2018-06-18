import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '@material-ui/core';
const SvgIconCustom = typeof global !== 'undefined' && global.__MUI_SvgIcon__ || SvgIcon;

function createSvgIcon(path, displayName) {
  let Icon = props => React.createElement(SvgIconCustom, props, path);

  Icon.displayName = displayName;
  Icon = pure(Icon);
  Icon.muiName = 'SvgIcon';
  return Icon;
}

export default createSvgIcon;