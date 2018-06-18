import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import { connect } from 'react-redux';
import Checkbox from '../../Checkbox';
import { FormControlLabel } from '../../Form';
import { actionToggleProductSelection } from '../actions/productComparisonActions';

let CompareCheckbox = props => {
  return React.createElement("div", null, React.createElement(FormControlLabel, {
    control: React.createElement(Checkbox, {
      onChange: (event, checked) => {
        props.dispatch(actionToggleProductSelection(props.product, checked));
      },
      disabled: props.disabled,
      checked: props.checked,
      "data-product": props.product
    }),
    label: props.checked ? 'Added' : 'Compare'
  }));
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

  let disabled = !checked && selection.length > 2;
  return _objectSpread({}, props, {
    checked,
    updated: Date.now(),
    disabled
  });
})(CompareCheckbox);
export default CompareCheckbox;