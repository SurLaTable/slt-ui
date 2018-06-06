import * as React from 'react';
import { StyledComponentProps } from './styles';
export { StyledComponentProps };

/**
 * All standard components exposed by `material-ui` are `StyledComponents` with
 * certain `classes`, on which one can also set a top-level `className` and inline
 * `style`.
 */
export type StandardProps<C, ClassKey extends string, Removals extends keyof C = never> =
  & Omit<C, 'classes' | Removals>
  & StyledComponentProps<ClassKey>
  & {
    className?: string;
    style?: React.CSSProperties;
  };

export type PaletteType = 'light' | 'dark';
export interface Color {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

/**
 * Remove properties `K` from `T`.
 *
 * @internal
 */
export type Omit<T, K extends string> = Pick<T, Exclude<keyof T, K>>;

/**
 * `T extends ConsistentWith<T, U>` means that where `T` has overlapping properties with
 * `U`, their value types do not conflict.
 *
 * @internal
 */
export type ConsistentWith<T, U> = Pick<U, keyof T & keyof U>;

/**
 * Like `T & U`, but using the value types from `U` where their properties overlap.
 *
 * @internal
 */
export type Overwrite<T, U> = (U extends ConsistentWith<U, T> ? T : Omit<T, keyof U>) & U;

export namespace PropTypes {
  type Alignment = 'inherit' | 'left' | 'center' | 'right' | 'justify';
  type Color = 'inherit' | 'primary' | 'secondary' | 'default';
  type Margin = 'none' | 'dense' | 'normal';
}

// From index.js
export { default as AppBar } from './AppBar';
export { default as Avatar } from './Avatar';
export { default as Badge } from './Badge';
export { default as BottomNavigation, BottomNavigationAction } from './BottomNavigation';
export { default as Button } from './Button';
export { default as ButtonBase } from './ButtonBase';
export { default as Card, CardActions, CardContent, CardHeader, CardMedia } from './Card';
export { default as Checkbox } from './Checkbox';
export { default as Chip } from './Chip';
export { default as ClickAwayListener } from './utils/ClickAwayListener';
export { default as CssBaseline } from './CssBaseline';
export {
  default as Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from './Dialog';
export { default as Divider } from './Divider';
export { default as Drawer } from './Drawer';
export {
  default as ExpansionPanel,
  ExpansionPanelActions,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from './ExpansionPanel';
export { FormControl, FormGroup, FormLabel, FormHelperText, FormControlLabel } from './Form';
export { default as Hidden } from './Hidden';
export { default as Icon } from './Icon';
export { default as IconButton } from './IconButton';
export { default as Input, InputLabel, InputAdornment } from './Input';
export { default as Grid } from './Grid';
export { default as GridList, GridListTile, GridListTileBar } from './GridList';
export {
  default as List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from './List';
export { default as Menu, MenuItem, MenuList } from './Menu';
export { default as MobileStepper } from './MobileStepper';
export { default as Modal, Backdrop, ModalManager } from './Modal';
export { default as Paper } from './Paper';
export { default as Popover } from './Popover';
export { default as Portal } from './Portal';
export { CircularProgress, LinearProgress } from './Progress';
export { default as Radio, RadioGroup } from './Radio';
export { default as Select } from './Select';
export { default as Snackbar, SnackbarContent } from './Snackbar';
export { default as Stepper, Step, StepButton, StepContent, StepIcon, StepLabel } from './Stepper';
export {
  createGenerateClassName,
  createMuiTheme,
  jssPreset,
  MuiThemeProvider,
  StyleRulesCallback,
  Theme,
  withStyles,
  WithStyles,
  withTheme,
  WithTheme,
} from './styles';

import * as colors from './colors';

export { colors };

export { default as SvgIcon } from './SvgIcon';
export { default as SwipeableDrawer } from './SwipeableDrawer';
export { default as Switch } from './Switch';
export {
  default as Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from './Table';
export { default as Tabs, Tab } from './Tabs';
export { default as Typography } from './Typography';
export { default as TextField } from './TextField';
export { default as Toolbar } from './Toolbar';
export { default as Tooltip } from './Tooltip';
export { Slide, Grow, Fade, Collapse, Zoom } from './transitions';

export { default as withWidth } from './utils/withWidth';
