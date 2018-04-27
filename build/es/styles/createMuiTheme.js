import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import deepmerge from 'deepmerge'; // < 1kb payload overhead when lodash/merge is > 3kb.
import warning from 'warning';
import createTypography from './createTypography';
import createBreakpoints from './createBreakpoints';
import createPalette from './createPalette';
import createMixins from './createMixins';
import shadows from './shadows';
import transitions from './transitions';
import zIndex from './zIndex';
import spacing from './spacing';

function createMuiTheme(options = {}) {
  const {
    palette: paletteInput = {},
    breakpoints: breakpointsInput = {},
    mixins: mixinsInput = {},
    typography: typographyInput = {},
    shadows: shadowsInput
  } = options,
        other = _objectWithoutProperties(options, ['palette', 'breakpoints', 'mixins', 'typography', 'shadows']);

  const palette = createPalette(paletteInput);
  const breakpoints = createBreakpoints(breakpointsInput);

  const muiTheme = _extends({
    breakpoints,
    direction: 'ltr',
    mixins: createMixins(breakpoints, spacing, mixinsInput),
    overrides: {}, // Inject custom styles
    palette,
    props: {}, // Inject custom properties
    shadows: shadowsInput || shadows,
    typography: createTypography(palette, typographyInput)
  }, deepmerge({
    transitions,
    spacing,
    zIndex
  }, other));

  process.env.NODE_ENV !== "production" ? warning(muiTheme.shadows.length === 25, 'Material-UI: the shadows array provided to createMuiTheme should support 25 elevations.') : void 0;

  return muiTheme;
}

export default createMuiTheme;