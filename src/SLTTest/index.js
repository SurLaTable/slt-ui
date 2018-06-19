// Test

import { Checkbox } from '../Checkbox';
import { connect } from 'react-redux';

let SLTTest = props => (
  <React.Fragment>
    <Checkbox
      onClick={(event, checked) =>
        props.dispatch((event, checked) => {
          console.log('Redux was here:', checked);
        })
      }
    >
      Hey
    </Checkbox>
  </React.Fragment>
);

SLTTest = connect()(SLTTest);

export default SLTTest;
