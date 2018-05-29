import React from 'react';
import { connect } from 'react-redux';
import { actionRemoveAll, actionSetProducts } from '../actions/productComparisonActions';

import Button from '../../Button';
import Dialog from '../../Dialog';
import Slide from '../../transitions/Slide';
import { default as Table, TableBody, TableCell, TableHead, TableRow } from '../../Table';
import Typography from '../../Typography';

import { Cancel as CancelIcon } from '../icons';

const imageStyles = {
  width: '90px',
  display: 'block',
};

const tableModels = {
  cutlery: {
    Dimensions: [
      'Bevel Angle',
      'Blade Edge',
      'Blade Length',
      'Blade Material',
      'Total Length',
      'Core Material',
      'Handle Material',
      'Layers in the Blade',
      'Rockwell',
      'Stamped or Forged',
      'Tang Type',
      'Collection',
      'Country of Origin',
      'Warranty',
      { name: 'Care & Usage', format: 'html' },
      { name: "What's in the Box", format: 'html' },
    ],
  },
  // This is just an example of another possible type:
  appliance: {
    Features: ['Blends', 'Blade type'],
  },
};

const Transition = props => <Slide direction="up" {...props} />;

class ComparisonTable extends React.Component {
  state = {
    open: false,
  };

  constructor() {
    super();
    console.log(window.history.state);
    if (
      window &&
      window.history &&
      window.history.state &&
      window.history.state.type == 'OPEN_COMPARISON_TABLE'
    ) {
      //we refreshed with some old state

      history.replaceState(null, 'ComparisonTable');
    }
    window.addEventListener('popstate', event => {
      let state = event.state;
      console.log(state);
      if (state == null) {
        //CLOSE COMPARISON TABLE
        this.setState({ open: false });
      } else if (state.type == 'OPEN_COMPARISON_TABLE' && this.state.open == false) {
        this.props.dispatch(actionSetProducts(state.selection));
        this.setState({ open: true });
        history.replaceState(state, 'ComparisonTable');
      }
    });
  }

  handleClickOpen() {
    if (window && window.history) {
      let history = window.history;
      history.pushState(
        {
          type: 'OPEN_COMPARISON_TABLE',
          selection: this.props.selection,
        },
        'ComparisonTable',
      );
    }
    this.setState({ open: true });
  }

  handleClose() {
    if (window && window.history) {
      let history = window.history;
      history.replaceState(null, 'ComparisonTable');
    }
    this.setState({ open: false });
  }

  handleFormat(data, format) {
    switch (format) {
      case 'html':
        return <div dangerouslySetInnerHTML={{ __html: data }} />;
      default:
        return data;
    }
  }

  render() {
    const props = this.props;

    const sections = Object.keys(tableModels[props.type]);
    const attributes = tableModels[props.type][Object.keys(tableModels[props.type])[0]];

    return (
      <React.Fragment>
        <Button
          onClick={this.handleClickOpen.bind(this)}
          variant="raised"
          color="primary"
          disabled={props.selection.length < 2}
          style={{ height: '20%', marginTop: '1.5rem' }}
        >
          COMPARE
        </Button>
        <Typography
          style={{
            margin: '10px 30px',
            width: '250px',
            textAlign: 'left',
          }}
        >
          Select up to 3 products to compare and find the best one for you.
          <br />
          <Button
            onClick={(event, checked) => {
              props.dispatch(actionRemoveAll());
            }}
          >
            REMOVE ALL
          </Button>
        </Typography>

        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose.bind(this)}
          transition={Transition}
          transitionDuration={500}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Button onClick={this.handleClose.bind(this)}>
                    <CancelIcon />Hide chart
                  </Button>
                </TableCell>
                {props.selection.map((product, index) => {
                  const first = product[Object.keys(product)[0]];
                  if (first) {
                    return (
                      <TableCell key={index}>
                        <img
                          alt={first.name}
                          style={imageStyles}
                          src={`https://www.surlatable.com/images/customers/c1079/${
                            product.id
                          }/generated/${product.id}_Default_2_200x200.jpg`}
                        />
                        {first.name}
                      </TableCell>
                    );
                  }
                })}
              </TableRow>
              <TableRow
                style={{
                  backgroundColor: '#111111',
                }}
              >
                {props.selection.map(
                  (ignore, index) =>
                    index ? (
                      <TableCell key={index} />
                    ) : (
                      <TableCell
                        key={index}
                        style={{
                          color: '#ffffff',
                        }}
                      >
                        {sections[index]}
                      </TableCell>
                    ),
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {attributes.map((attribute, index) => {
                let format = 'default';
                if (typeof attribute != 'string') {
                  format = attribute.format;
                  attribute = attribute.name;
                }
                return (
                  <TableRow
                    key={index}
                    style={{
                      backgroundColor: (index === 1 || index % 2 !== 0) && '#eeeeee',
                    }}
                  >
                    <TableCell>{attribute}</TableCell>
                    {props.selection.map((product, index) => {
                      let cellData = [];

                      for (let i in product) {
                        if (format == 'html') {
                          cellData.push(this.handleFormat(product[i][attribute], format));
                        } else if (cellData.indexOf(product[i][attribute]) == -1) {
                          cellData.push(this.handleFormat(product[i][attribute], format));
                        }
                      }
                      if (format == 'default') {
                        cellData = cellData.join(', ');
                      }
                      return <TableCell key={index}>{cellData}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Dialog>
      </React.Fragment>
    );
  }
}

ComparisonTable = connect((state, props) => {
  if (state.productComparisonReducer) {
    return {
      ...props,
      selection: state.productComparisonReducer.selection,
    };
  } else {
    return {
      selection: [],
      ...props,
    };
  }
})(ComparisonTable);

export default ComparisonTable;
