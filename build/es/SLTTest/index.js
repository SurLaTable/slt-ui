// Test
import { Checkbox } from '../Checkbox';
import { connect } from 'react-redux';

let SLTTest = props => React.createElement(React.Fragment, null, React.createElement(Checkbox, {
  onClick: (event, checked) => props.dispatch((event, checked) => {
    console.log('Redux was here:', checked);
  })
}, "Hey"));

SLTTest = connect()(SLTTest);
export default SLTTest;