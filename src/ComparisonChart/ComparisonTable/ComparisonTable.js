import React from 'react';
import { connect } from 'react-redux';
import {
	actionRemoveAll,
	actionRemoveProduct,
	actionSetProducts,
} from '../actions/productComparisonActions';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import { Cancel as CancelIcon, PlayForWork as PlayForWorkIcon } from '../icons';

const theme = createMuiTheme({});

const imageStyles = {
	border: '1px solid black',
	display: 'block',
	width: '90px',
};

const badgeStyles = {
	display: 'block',
	marginTop: '10px',
	width: '90px',
};

const tableCellStyles = {
	border: '1px solid #cccccc',
	// maxWidth: `${global.innerWidth * 0.1}px`
};

const tableModels = {
	cutlery: {
		DIMENSIONS: ['Blade Length', 'Total Length', 'Tang Type'],
		MATERIAL: ['Blade Material', 'Core Material', 'Handle Material'],
		DETAILS: [
			'Bevel Angle',
			'Blade Edge',
			'Layers in the Blade',
			'Rockwell',
			'Stamped or Forged',
			'Collection',
			'Country of Origin',
			'Warranty',
			{ name: 'Care & Usage', format: 'html' },
			{ name: "What's in the Box", format: 'html' },
		],
		// SHIPPING: ['Drop Ship Ind'],
	},
	// This is just an example of another possible type:
	appliance: {
		Features: ['Blends', 'Blade type'],
	},
};

const Transition = (props) => <Slide direction="up" {...props} />;

class ComparisonTable extends React.Component {
	state = {
		open: false,
	};

	constructor() {
		super();
		if (
			global &&
			global.history &&
			global.history.state &&
			global.history.state.type === 'OPEN_COMPARISON_TABLE'
		) {
			// We refresh with the old state.
			global.history.replaceState(null, 'ComparisonTable');
		}
		global.addEventListener('popstate', (event) => {
			let state = event.state;

			if (state == null) {
				// CLOSE COMPARISON TABLE:
				this.setState({ open: false });
			} else if (state.type === 'OPEN_COMPARISON_TABLE' && !this.state.open) {
				this.props.dispatch(actionSetProducts(state.selection));
				this.setState({ open: true });
				global.history.replaceState(state, 'ComparisonTable');
			}
		});
	}

	handleClickOpen() {
		if (global && global.history) {
			global.history.pushState(
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
		if (global && global.history) {
			global.history.replaceState(null, 'ComparisonTable');
		}
		this.setState({ open: false });
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

		const sections = Object.keys(tableModels[props.type]);
		const attributes = tableModels[props.type];

		return (
			<MuiThemeProvider theme={theme}>
				<div className="comparison-table">
					<Button
						onClick={this.handleClickOpen.bind(this)}
						variant="raised"
						color="primary"
						disabled={props.selection.length < 2}
						style={{
							backgroundColor: '#6d8b19',
							color: '#ffffff',
							display: 'inline-block',
							height: '20%',
							marginLeft: '10px',
							marginTop: '-40px',
						}}
					>
						COMPARE
					</Button>
					<Typography
						style={{
							display: 'inline-block',
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
							style={{ padding: 0, textDecoration: 'underline' }}
						>
							REMOVE ALL
						</Button>
					</Typography>

					<Dialog
						PaperProps={{
							style: {
								// height: `${window.innerHeight}px`,
								// maxHeight: `${window.innerHeight}px`,
								// maxWidth: `${window.innerWidth * 0.95}px`,
								padding: 0,
								// width: `${window.innerWidth * 0.95}px`
								// overflowX: 'hidden'
							},
						}}
						style={{ padding: 0 }}
						maxWidth={false}
						fullWidth={true}
						open={this.state.open}
						onClose={this.handleClose.bind(this)}
						scroll="paper"
						TransitionComponent={Transition}
						transitionDuration={600}
					>
						<DialogTitle style={{ padding: 0 }}>
							<Table>
								<TableHead>
									<TableRow
										style={{
											backgroundColor: '#E4E4E4',
										}}
									>
										<TableCell style={tableCellStyles}>
											<Button onClick={this.handleClose.bind(this)}>
												<PlayForWorkIcon />Hide chart
											</Button>
										</TableCell>
										{props.selection.map((product, index) => {
											const first = product[Object.keys(product)[0]];
											return first ? (
												<TableCell key={index} style={tableCellStyles}>
													<Badge
														data-product-id={product.id}
														badgeContent={<CancelIcon />}
														style={badgeStyles}
														onClick={(event, checked) => {
															props.dispatch(
																actionRemoveProduct(product.id),
															);
														}}
													>
														<img
															alt={`${first['Web Brand']} ${
																first.Collection
															}`}
															style={imageStyles}
															src={`https://www.surlatable.com/images/customers/c1079/${
																product.id
															}/generated/${
																product.id
															}_Default_1_200x200.jpg`}
														/>
													</Badge>
													{`${first['Web Brand']} ${first.Collection}`}
												</TableCell>
											) : null;
										})}
									</TableRow>
								</TableHead>
							</Table>
						</DialogTitle>
						<DialogContent style={{ padding: 0 }}>
							<Table>
								{sections.map((section, index) => {
									return (
										<React.Fragment key={index}>
											<TableBody>
												<TableRow
													style={{
														backgroundColor: '#111111',
														height: '36px',
													}}
												>
													{
														// This Array().fill() has to exist to allow the column to
														// extend one beyond the selection length (for the sake of
														// the first column).
													}
													{props.selection &&
														Array(props.selection.length + 1)
															.fill()
															.map(
																(ignore, index) =>
																	index ? (
																		<TableCell
																			key={index}
																			style={tableCellStyles}
																		/>
																	) : (
																		<TableCell
																			key={index}
																			style={
																				// Extend an empty object with our default styles:
																				Object.assign(
																					{},
																					tableCellStyles,
																					{
																						color:
																							'#ffffff',
																						fontWeight: 900,
																					},
																				)
																			}
																		>
																			{section}
																		</TableCell>
																	),
															)}
												</TableRow>
											</TableBody>
											<TableBody>
												{attributes[section].map((attribute, index) => {
													let format = 'default';
													// Determine if the property is an object or a string.
													// We don't need to use strings for our later processing.
													if (typeof attribute !== 'string') {
														format = attribute.format;
														attribute = attribute.name;
													}
													return (
														<TableRow
															key={index}
															style={{
																// This alternates the color of every other row:
																backgroundColor:
																	(index === 1 ||
																		index % 2 !== 0) &&
																	'#eeeeee',
															}}
														>
															<TableCell
																key={index}
																style={Object.assign(
																	{},
																	tableCellStyles,
																	{
																		fontWeight: 900,
																	},
																)}
															>
																{attribute}
															</TableCell>
															{props.selection.map(
																(product, index) => {
																	let cellData = [];

																	// At the end of processing the loop,
																	// we store the last value, that
																	// way we can check for duplicates.
																	let lastValue;
																	for (let sku in product) {
																		if (
																			product[sku][
																				attribute
																			] !== lastValue
																		) {
																			if (format === 'html') {
																				cellData.push(
																					this.handleFormat(
																						product[
																							sku
																						][
																							attribute
																						],
																						format,
																					),
																				);
																			} else if (
																				cellData.indexOf(
																					product[sku][
																						attribute
																					],
																				) === -1
																			) {
																				cellData.push(
																					this.handleFormat(
																						product[
																							sku
																						][
																							attribute
																						],
																						format,
																					),
																				);
																			}
																		}

																		lastValue =
																			product[sku][attribute];
																	}
																	if (format === 'default') {
																		const delimiter = ', ';
																		cellData = cellData.join(
																			delimiter,
																		);
																		// Since there will always be
																		// an extraneous comma and
																		// space at the end after this
																		// processing, we cut it off here.
																		if (
																			cellData.slice(-2) ===
																			delimiter
																		) {
																			cellData = cellData.slice(
																				0,
																				-2,
																			);
																		}
																	}
																	return (
																		<TableCell
																			key={index}
																			style={Object.assign(
																				{},
																				tableCellStyles,
																				{
																					textAlign:
																						'center',
																				},
																			)}
																		>
																			{cellData}
																		</TableCell>
																	);
																},
															)}
														</TableRow>
													);
												})}
											</TableBody>
										</React.Fragment>
									);
								})}
							</Table>
						</DialogContent>
					</Dialog>
				</div>
			</MuiThemeProvider>
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
			...props,
			selection: [],
		};
	}
})(ComparisonTable);

export default ComparisonTable;
