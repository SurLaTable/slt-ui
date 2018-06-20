"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _keys = _interopRequireDefault(require("@babel/runtime/core-js/object/keys"));

var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _productComparisonActions = require("../actions/productComparisonActions");

var _index = require("../../index.js");

var _icons = require("../icons");

// import { Badge } from '../../Badge';
// import { Button } from '../../Button';
// import { Dialog } from '../../Dialog';
// import { Slide } from '../../transitions';
// import { Table } from '../../Table';
// import { TableBody } from '../../Table';
// import { TableCell } from '../../Table';
// import { TableHead } from '../../Table';
// import { TableRow } from '../../Table';
// import { Typography } from '../../Typography';
// import {
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
var theme = (0, _index.createMuiTheme)({
  typography: {
    fontSize: 22
  }
});
var imageStyles = {
  border: '1px solid black',
  display: 'block',
  width: '90px'
};
var badgeStyles = {
  display: 'block',
  marginTop: '10px',
  width: '90px'
};
var tableCellStyles = {
  border: '1px solid #cccccc'
};
var tableModels = {
  cutlery: {
    DIMENSIONS: ['Blade Length', 'Total Length', 'Tang Type'],
    MATERIAL: ['Blade Material', 'Core Material', 'Handle Material'],
    DETAILS: ['Bevel Angle', 'Blade Edge', 'Layers in the Blade', 'Rockwell', 'Stamped or Forged', 'Collection', 'Country of Origin', 'Warranty', {
      name: 'Care & Usage',
      format: 'html'
    }, {
      name: "What's in the Box",
      format: 'html'
    }] // SHIPPING: ['Drop Ship Ind'],

  },
  // This is just an example of another possible type:
  appliance: {
    Features: ['Blends', 'Blade type']
  }
};

var Transition = function Transition(props) {
  return _react.default.createElement(_index.Slide, (0, _extends2.default)({
    direction: "up"
  }, props));
};

var _ref = _react.default.createElement("br", null);

var _ref2 = _react.default.createElement(_icons.Cancel, null);

var _ref3 = _react.default.createElement(_icons.Cancel, null);

var ComparisonTable =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ComparisonTable, _React$Component);

  function ComparisonTable() {
    var _this;

    (0, _classCallCheck2.default)(this, ComparisonTable);
    _this = (0, _possibleConstructorReturn2.default)(this, (ComparisonTable.__proto__ || (0, _getPrototypeOf.default)(ComparisonTable)).call(this));
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "state", {
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

    window.addEventListener('popstate', function (event) {
      var state = event.state;

      if (state == null) {
        // CLOSE COMPARISON TABLE:
        _this.setState({
          open: false
        });
      } else if (state.type === 'OPEN_COMPARISON_TABLE' && !_this.state.open) {
        _this.props.dispatch((0, _productComparisonActions.actionSetProducts)(state.selection));

        _this.setState({
          open: true
        });

        window.history.replaceState(state, 'ComparisonTable');
      }
    });
    return _this;
  }

  (0, _createClass2.default)(ComparisonTable, [{
    key: "handleClickOpen",
    value: function handleClickOpen() {
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
  }, {
    key: "handleClose",
    value: function handleClose() {
      if (window && window.history) {
        window.history.replaceState(null, 'ComparisonTable');
      }

      this.setState({
        open: false
      });
    }
  }, {
    key: "handleFormat",
    value: function handleFormat(data, format) {
      switch (format) {
        case 'html':
          // Convert the HTML to text, because we don't
          // want bullet points.
          var temp = document.createElement('span');
          temp.innerHTML = data;
          var returnText = temp.textContent;
          return returnText !== 'undefined' ? returnText : null;

        default:
          return data;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var sections = (0, _keys.default)(tableModels[props.type]);
      var attributes = tableModels[props.type];
      return _react.default.createElement(_index.MuiThemeProvider, {
        theme: theme
      }, _react.default.createElement("div", {
        className: "comparison-table"
      }, _react.default.createElement(_index.Button, {
        onClick: this.handleClickOpen.bind(this),
        variant: "raised",
        color: "primary",
        disabled: props.selection.length < 2,
        style: {
          backgroundColor: '#6d8b19',
          color: '#ffffff',
          display: 'inline-block',
          height: '20%',
          marginTop: '-40px'
        }
      }, "COMPARE"), _react.default.createElement(_index.Typography, {
        style: {
          display: 'inline-block',
          margin: '10px 30px',
          width: '250px',
          textAlign: 'left'
        }
      }, "Select up to 3 products to compare and find the best one for you.", _ref, _react.default.createElement(_index.Button, {
        onClick: function onClick(event, checked) {
          props.dispatch((0, _productComparisonActions.actionRemoveAll)());
        },
        style: {
          padding: 0,
          textDecoration: 'underline'
        }
      }, "REMOVE ALL")), _react.default.createElement(_index.Dialog, {
        fullScreen: true,
        open: this.state.open,
        onClose: this.handleClose.bind(this),
        TransitionComponent: Transition,
        transitionDuration: 600
      }, _react.default.createElement(_index.Table, null, _react.default.createElement(_index.TableHead, null, _react.default.createElement(_index.TableRow, {
        style: {
          backgroundColor: '#E4E4E4'
        }
      }, _react.default.createElement(_index.TableCell, {
        style: tableCellStyles
      }, _react.default.createElement(_index.Button, {
        onClick: this.handleClose.bind(this)
      }, _ref2, "Hide chart")), props.selection.map(function (product, index) {
        var first = product[(0, _keys.default)(product)[0]];
        return first ? _react.default.createElement(_index.TableCell, {
          key: index,
          style: tableCellStyles
        }, _react.default.createElement(_index.Badge, {
          "data-product-id": product.id,
          badgeContent: _ref3,
          style: badgeStyles,
          onClick: function onClick(event, checked) {
            props.dispatch((0, _productComparisonActions.actionRemoveProduct)(product.id));
          }
        }, _react.default.createElement("img", {
          alt: "".concat(first['Web Brand'], " ").concat(first.Collection),
          style: imageStyles,
          src: "https://www.surlatable.com/images/customers/c1079/".concat(product.id, "/generated/").concat(product.id, "_Default_1_200x200.jpg")
        })), "".concat(first['Web Brand'], " ").concat(first.Collection)) : null;
      }))), sections.map(function (section, index) {
        return _react.default.createElement(_react.default.Fragment, {
          key: index
        }, _react.default.createElement(_index.TableHead, null, _react.default.createElement(_index.TableRow, {
          style: {
            backgroundColor: '#111111',
            height: '36px'
          }
        }, props.selection && Array(props.selection.length + 1).fill().map(function (ignore, index) {
          return index ? _react.default.createElement(_index.TableCell, {
            key: index,
            style: tableCellStyles
          }) : _react.default.createElement(_index.TableCell, {
            key: index,
            style: // Extend an empty object with our default styles:
            (0, _extends2.default)({}, tableCellStyles, {
              color: '#ffffff',
              fontWeight: 900
            })
          }, section);
        }))), _react.default.createElement(_index.TableBody, null, attributes[section].map(function (attribute, index) {
          var format = 'default'; // Determine if the property is an object or a string.
          // We don't need to use strings for our later processing.

          if (typeof attribute !== 'string') {
            format = attribute.format;
            attribute = attribute.name;
          }

          return _react.default.createElement(_index.TableRow, {
            key: index,
            style: {
              // This alternates the color of every other row:
              backgroundColor: (index === 1 || index % 2 !== 0) && '#eeeeee'
            }
          }, _react.default.createElement(_index.TableCell, {
            key: index,
            style: (0, _extends2.default)({}, tableCellStyles, {
              fontWeight: 900
            })
          }, attribute), props.selection.map(function (product, index) {
            var cellData = []; // At the end of processing the loop,
            // we store the last value, that
            // way we can check for duplicates.

            var lastValue;

            for (var sku in product) {
              if (product[sku][attribute] !== lastValue) {
                if (format === 'html') {
                  cellData.push(_this2.handleFormat(product[sku][attribute], format));
                } else if (cellData.indexOf(product[sku][attribute]) === -1) {
                  cellData.push(_this2.handleFormat(product[sku][attribute], format));
                }
              }

              lastValue = product[sku][attribute];
            }

            if (format === 'default') {
              var delimiter = ', ';
              cellData = cellData.join(delimiter); // Since there will always be
              // an extraneous comma and
              // space at the end after this
              // processing, we cut it off here.

              if (cellData.slice(-2) === delimiter) {
                cellData = cellData.slice(0, -2);
              }
            }

            return _react.default.createElement(_index.TableCell, {
              key: index,
              style: (0, _extends2.default)({}, tableCellStyles, {
                textAlign: 'center'
              })
            }, cellData);
          }));
        })));
      })))));
    }
  }]);
  return ComparisonTable;
}(_react.default.Component);

ComparisonTable = (0, _reactRedux.connect)(function (state, props) {
  if (state.productComparisonReducer) {
    return (0, _objectSpread2.default)({}, props, {
      selection: state.productComparisonReducer.selection
    });
  } else {
    return (0, _objectSpread2.default)({}, props, {
      selection: []
    });
  }
})(ComparisonTable);
var _default = ComparisonTable;
exports.default = _default;