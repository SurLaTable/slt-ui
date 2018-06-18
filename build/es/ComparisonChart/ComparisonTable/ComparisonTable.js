import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _Object$keys from "@babel/runtime/core-js/object/keys";
import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { connect } from 'react-redux';
import { actionRemoveAll, actionRemoveProduct, actionSetProducts } from '../actions/productComparisonActions';
import Badge from '../../Badge';
import Button from '../../Button';
import Dialog from '../../Dialog';
import Slide from '../../Slide';
import Table from '../../Table';
import TableBody from '../../Table';
import TableCell from '../../Table';
import TableHead from '../../Table';
import TableRow from '../../Table';
import Typography from '../../Typography'; // import {
//   Badge,
//   Button,
//   Dialog,
//   Slide,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Typography
// } from '@material-ui/core';

import { Cancel as CancelIcon } from '../icons';
const imageStyles = {
  border: '1px solid black',
  display: 'block',
  width: '90px'
};
const badgeStyles = {
  display: 'block',
  marginTop: '10px',
  width: '90px'
};
const tableCellStyles = {
  border: '1px solid #cccccc'
};
const tableModels = {
  cutlery: {
    DIMENSIONS: ['Blade Length', 'Total Length', 'Tang Type'],
    MATERIAL: ['Blade Material', 'Core Material', 'Handle Material'],
    DETAILS: ['Bevel Angle', 'Blade Edge', 'Layers in the Blade', 'Rockwell', 'Stamped or Forged', 'Collection', 'Country of Origin', 'Warranty', {
      name: 'Care & Usage',
      format: 'html'
    }, {
      name: "What's in the Box",
      format: 'html'
    }],
    SHIPPING: ['Drop Ship Ind']
  },
  // This is just an example of another possible type:
  appliance: {
    Features: ['Blends', 'Blade type']
  }
};

const Transition = props => React.createElement(Slide, _extends({
  direction: "up"
}, props));

var _ref = React.createElement("br", null);

var _ref2 = React.createElement(CancelIcon, null);

var _ref3 = React.createElement(CancelIcon, null);

class ComparisonTable extends React.Component {
  constructor() {
    super();
    Object.defineProperty(this, "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: false
      }
    });

    if (window && window.history && window.history.state && window.history.state.type === 'OPEN_COMPARISON_TABLE') {
      // We refresh with the old state.
      window.history.replaceState(null, 'ComparisonTable');
    }

    window.addEventListener('popstate', event => {
      let state = event.state;

      if (state == null) {
        // CLOSE COMPARISON TABLE:
        this.setState({
          open: false
        });
      } else if (state.type === 'OPEN_COMPARISON_TABLE' && !this.state.open) {
        this.props.dispatch(actionSetProducts(state.selection));
        this.setState({
          open: true
        });
        window.history.replaceState(state, 'ComparisonTable');
      }
    });
  }

  handleClickOpen() {
    if (window && window.history) {
      window.history.pushState({
        type: 'OPEN_COMPARISON_TABLE',
        selection: this.props.selection
      }, 'ComparisonTable');
    }

    this.setState({
      open: true
    });
  }

  handleClose() {
    if (window && window.history) {
      window.history.replaceState(null, 'ComparisonTable');
    }

    this.setState({
      open: false
    });
  }

  handleFormat(data, format) {
    switch (format) {
      case 'html':
        // Convert the HTML to text, because we don't
        // want bullet points.
        let temp = document.createElement('span');
        temp.innerHTML = data;
        let returnText = temp.textContent;
        return returnText !== 'undefined' ? returnText : null;

      default:
        return data;
    }
  }

  render() {
    const props = this.props;

    const sections = _Object$keys(tableModels[props.type]);

    const attributes = tableModels[props.type];
    return React.createElement(React.Fragment, null, React.createElement(Button, {
      onClick: this.handleClickOpen.bind(this),
      variant: "raised",
      color: "primary",
      disabled: props.selection.length < 2,
      style: {
        backgroundColor: '#6d8b19',
        color: '#ffffff',
        height: '20%',
        marginTop: '1.5rem'
      }
    }, "COMPARE"), React.createElement(Typography, {
      style: {
        margin: '10px 30px',
        width: '250px',
        textAlign: 'left'
      }
    }, "Select up to 3 products to compare and find the best one for you.", _ref, React.createElement(Button, {
      onClick: (event, checked) => {
        props.dispatch(actionRemoveAll());
      },
      style: {
        textDecoration: 'underline'
      }
    }, "REMOVE ALL")), React.createElement(Dialog, {
      fullScreen: true,
      open: this.state.open,
      onClose: this.handleClose.bind(this),
      TransitionComponent: Transition,
      transitionDuration: 600
    }, React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(TableRow, {
      style: {
        backgroundColor: '#E4E4E4'
      }
    }, React.createElement(TableCell, {
      style: tableCellStyles
    }, React.createElement(Button, {
      onClick: this.handleClose.bind(this)
    }, _ref2, "Hide chart")), props.selection.map((product, index) => {
      const first = product[_Object$keys(product)[0]];

      return first ? React.createElement(TableCell, {
        key: index,
        style: tableCellStyles
      }, React.createElement(Badge, {
        "data-product-id": product.id,
        badgeContent: _ref3,
        style: badgeStyles,
        onClick: (event, checked) => {
          props.dispatch(actionRemoveProduct(product.id));
        }
      }, React.createElement("img", {
        alt: `${first['Web Brand']} ${first.Collection}`,
        style: imageStyles,
        src: `https://www.surlatable.com/images/customers/c1079/${product.id}/generated/${product.id}_Default_1_200x200.jpg`
      })), `${first['Web Brand']} ${first.Collection}`) : null;
    }))), sections.map((section, index) => {
      return React.createElement(React.Fragment, {
        key: index
      }, React.createElement(TableHead, null, React.createElement(TableRow, {
        style: {
          backgroundColor: '#111111',
          height: '36px'
        }
      }, props.selection && Array(props.selection.length + 1).fill().map((ignore, index) => index ? React.createElement(TableCell, {
        key: index,
        style: tableCellStyles
      }) : React.createElement(TableCell, {
        key: index,
        style: // Extend an empty object with our default styles:
        _extends({}, tableCellStyles, {
          color: '#ffffff',
          fontWeight: 900
        })
      }, section)))), React.createElement(TableBody, null, attributes[section].map((attribute, index) => {
        let format = 'default'; // Determine if the property is an object or a string.
        // We don't need to use strings for our later processing.

        if (typeof attribute !== 'string') {
          format = attribute.format;
          attribute = attribute.name;
        }

        return React.createElement(TableRow, {
          key: index,
          style: {
            // This alternates the color of every other row:
            backgroundColor: (index === 1 || index % 2 !== 0) && '#eeeeee'
          }
        }, React.createElement(TableCell, {
          key: index,
          style: _extends({}, tableCellStyles, {
            fontWeight: 900
          })
        }, attribute), props.selection.map((product, index) => {
          let cellData = []; // At the end of processing the loop,
          // we store the last value, that
          // way we can check for duplicates.

          let lastValue;

          for (let sku in product) {
            if (product[sku][attribute] !== lastValue) {
              if (format === 'html') {
                cellData.push(this.handleFormat(product[sku][attribute], format));
              } else if (cellData.indexOf(product[sku][attribute]) === -1) {
                cellData.push(this.handleFormat(product[sku][attribute], format));
              }
            }

            lastValue = product[sku][attribute];
          }

          if (format === 'default') {
            const delimiter = ', ';
            cellData = cellData.join(delimiter); // Since there will always be
            // an extraneous comma and
            // space at the end after this
            // processing, we cut it off here.

            if (cellData.slice(-2) === delimiter) {
              cellData = cellData.slice(0, -2);
            }
          }

          return React.createElement(TableCell, {
            key: index,
            style: _extends({}, tableCellStyles, {
              textAlign: 'center'
            })
          }, cellData);
        }));
      })));
    }))));
  }

}

ComparisonTable = connect((state, props) => {
  if (state.productComparisonReducer) {
    return _objectSpread({}, props, {
      selection: state.productComparisonReducer.selection
    });
  } else {
    return _objectSpread({}, props, {
      selection: []
    });
  }
})(ComparisonTable);
export default ComparisonTable;