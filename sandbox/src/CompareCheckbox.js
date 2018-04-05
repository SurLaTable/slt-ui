import React from 'react';

// import { Button, Checkbox, FormControlLabel } from '@sur-la-table/slt-ui';
import { Checkbox, FormControlLabel } from '@sur-la-table/slt-ui/index.es.js';

import { connect } from 'react-redux';

const toggleCheckbox = (checkbox, checked) => {
  console.log(checkbox);
  return {
    type: 'TOGGLE_CHECKBOX',
    checkbox: checkbox,
    checked: !checked,
  };
};

let CompareCheckbox = props => {
  // props.checked = props.checked || false;
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            sku="2403251"
            image="https://www.surlatable.com/images/customers/c1079/PRO-2403251/PRO-2403251_pdp/main_variation_2403251_view_2403251_425x425."
            onChange={(checkbox, checked) => props.dispatch(toggleCheckbox(checkbox, checked))}
          />
        }
        label="Compare"
      />
    </div>
  );
};
CompareCheckbox = connect((state, ownProps) => ({
  checked: ownProps.value,
  ...ownProps,
}))(CompareCheckbox);

export default CompareCheckbox;
