import React from 'react';
import { connect } from 'react-redux';

import { Checkbox, FormControlLabel } from '../../index.js';
// import { FormControlLabel } from '../../Form';
// import { Checkbox, FormControlLabel } from '@material-ui/core';

import { actionToggleProductSelection } from '../actions/productComparisonActions';

let ComparisonCheckbox = props => {
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

ComparisonCheckbox = connect((state, props) => {
  let selection = state.productComparisonReducer ? state.productComparisonReducer.selection : [];
  let checked = false;

  // TODO: Figure out why `selection` is populated with `undefined`.

  if (selection.length) {
    for (let i = 0; i < selection.length; i++) {
      if (selection[i].id == props.product) {
        checked = true;
        break;
      }
    }
  }

  let disabled = !checked && selection.length > 2;
  return {
    ...props,
    checked,
    disabled,
  };
})(ComparisonCheckbox);

export default ComparisonCheckbox;
