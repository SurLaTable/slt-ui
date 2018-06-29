import React from 'react';
import { actionRemoveProduct } from '../actions/productComparisonActions';
import { connect } from 'react-redux';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Badge from '@material-ui/core/Badge';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

import { AddBox as AddBoxIcon, Cancel as CancelIcon } from '../icons';
import ComparisonTable from '../ComparisonTable/ComparisonTable';

const theme = createMuiTheme({
	typography: {
		fontSize: 22
	}
});

class ComparisonBar extends React.Component {
	render() {
		const props = this.props;
		// Fill the array given the number of items
		// specified by our props. If product ids exist,
		// we populate an array with those,
		// otherwise we fill the array with
		// the indices.
		// We force the type to be a number,
		// in case it gets passed as a string using
		// React Habitat's `data-prop` vs `data-n-prop`.
		const selection = Array(Number(props.numberOfItems))
			.fill()
			.map(
				(ignore, index) =>
					(props.selection && props.selection[index]) || index
			);

		return (
			<MuiThemeProvider theme={theme}>
				<Slide
					direction="up"
					in={typeof selection[0] === 'object'}
					mountOnEnter
					unmountOn
				>
					<Paper
						className="comparison-bar"
						ref={(ComparisonBarContainer) =>
							(this.ComparisonBarContainer = ComparisonBarContainer)
						}
						elevation={4}
						style={{
							backgroundColor: '#E4E4E4',
							bottom: 0,
							marginLeft: `${(global.innerWidth -
								global.innerWidth * 0.9) /
								2}px`,
							paddingBottom: '48px',
							position: 'fixed',
							width: '90%',
							zIndex:1300
						}}
					>
						<BottomNavigation
							showLabels
							style={{
								backgroundColor: '#E4E4E4',
								marginTop: '10px'
							}}
						>
							<ComparisonTable type="cutlery" />

							{selection &&
								selection.map((product, index) => {
									// Since the product data contains multiple skus,
									// we just grab the first one available.
									// We may decide later to change this behavior,
									// with some kind of user selection tool.
									const productData = product
										? product[Object.keys(product)[0]]
										: index;
									const productId = product.id || '';

									return (
										<BottomNavigationAction
											key={index}
											label={
												productData
													? `${
															productData[
																'Web Brand'
															]
													  } ${
															productData.Collection
													  }`
													: `Item #${index + 1}`
											}
											// Disable the ripple animation if the item box is empty:
											disableRipple={!productId.length}
											icon={
												<React.Fragment>
													{productId.length ? (
														<Badge
															data-product-id={
																productId
															}
															badgeContent={
																<CancelIcon />
															}
															onClick={(
																event,
																checked
															) => {
																props.dispatch(
																	actionRemoveProduct(
																		productId
																	)
																);
															}}
														>
															<img
																alt={`${
																	productData[
																		'Web Brand'
																	]
																} ${
																	productData.Collection
																}`}
																src={`https://www.surlatable.com/images/customers/c1079/${productId}/generated/${productId}_Default_1_200x200.jpg`}
																style={{
																	border:
																		'1px solid black',
																	height:
																		'50px',
																	width:
																		'50px'
																}}
															/>
														</Badge>
													) : (
														<AddBoxIcon
															style={{
																fontSize: 50
															}}
														/>
													)}
												</React.Fragment>
											}
										/>
									);
								})}
						</BottomNavigation>
					</Paper>
				</Slide>
			</MuiThemeProvider>
		);
	}
}

ComparisonBar.defaultProps = {
	numberOfItems: 3
};

ComparisonBar = connect((state, props) => {
	if (state.productComparisonReducer) {
		return {
			...props,
			selection: state.productComparisonReducer.selection
		};
	} else {
		return {
			selection: [],
			...props
		};
	}
})(ComparisonBar);

export default ComparisonBar;
