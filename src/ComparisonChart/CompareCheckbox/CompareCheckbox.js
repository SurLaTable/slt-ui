import React from 'react';
import { connect } from 'react-redux';

import Checkbox from '../../Checkbox';
import { FormControlLabel } from '../../Form';
import { actionToggleProductSelection } from '../actions/productComparisonActions';

// TEMP:
// Once the image is removed, this import can be removed,
// since it exists on the reducer.

let CompareCheckbox = props => {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            onChange={(event, checked) => {
              props.dispatch(actionToggleProductSelection(props.product, checked));
            }}
            disabled={props.disabled}
            checked={props.checked}
            data-product={props.product}
          />
        }
        label={props.checked ? 'Added' : 'Compare'}
      />
    </div>
  );
};

CompareCheckbox = connect((state, props) => {
  let selection = state.productComparisonReducer ? state.productComparisonReducer.selection : [];
  let checked = false;
  for (let i = 0; i < selection.length; i++) {
    if (selection[i].id == props.product) {
      checked = true;
      break;
    }
  }

  let disabled = checked == false && selection.length > 2;
  return {
    ...props,
    checked,
    disabled,
  };
})(CompareCheckbox);

export default CompareCheckbox;
