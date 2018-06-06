import * as React from 'react';
import { StandardProps } from '..';

export interface ChipProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, ChipClassKey> {
  avatar?: React.ReactElement<any>;
  component?: React.ReactType<ChipProps>;
  deleteIcon?: React.ReactElement<any>;
  label?: React.ReactNode;
  onDelete?: React.EventHandler<any>;
  onKeyDown?: React.EventHandler<React.KeyboardEvent<any>>;
}

export type ChipClassKey =
  | 'root'
  | 'clickable'
  | 'deletable'
  | 'avatar'
  | 'avatarChildren'
  | 'label'
  | 'deleteIcon';

declare const Chip: React.ComponentType<ChipProps>;

export default Chip;
