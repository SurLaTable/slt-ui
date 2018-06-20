import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

const SvgIconCustom = (typeof global !== 'undefined' && global.__MUI_SvgIcon__) || SvgIcon;

function createSvgIcon(path, displayName) {
  let Icon = props => <SvgIconCustom {...props}>{path}</SvgIconCustom>;

  Icon.displayName = displayName;
  Icon = pure(Icon);
  Icon.muiName = 'SvgIcon';

  return Icon;
}

export default createSvgIcon;
