import React from 'react';
import { connect } from 'react-redux';
import sortSkus from '../utils/sortSkus';
import { actionRemoveAll } from '../actions/productComparisonActions';

import {
	Button,
	Dialog,
	Slide,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography
} from '@sur-la-table/slt-ui';

import { PlayForWork as PlayForWorkIcon } from '@material-ui/icons';

const imageStyles = {
	width: '90px',
	display: 'block'
};

const tableModels = {
	cutlery: {
		Dimensions: ['Blade length', 'Total length', 'Full Tang value']
	},
	// This is just an example of another possible type:
	appliance: {
		Features: ['Blends', 'Blade type']
	}
};

const Transition = (props) => <Slide direction="up" {...props} />;

class ComparisonTable extends React.Component {
	state = {
		open: false
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};
	render() {
		const props = this.props;

		const sections = Object.keys(tableModels[props.type]);
		const attributes =
			tableModels[props.type][Object.keys(tableModels[props.type])[0]];

		return (
			<React.Fragment>
				<Button
					onClick={this.handleClickOpen}
					variant="raised"
					color="primary"
					style={{ height: '20%', marginTop: '1.5rem' }}
				>
					COMPARE
				</Button>
				<Typography
					style={{
						margin: '10px 30px',
						width: '250px',
						textAlign: 'left'
					}}
				>
					Select up to 3 products to compare and find the best one for
					you.
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
					onClose={this.handleClose}
					transition={Transition}
					transitionDuration={500}
				>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>
									<Button onClick={this.handleClose}>
										<PlayForWorkIcon />Hide chart
									</Button>
								</TableCell>
								{props.skus &&
									props.skus.map((sku, index) => {
										const product = props.productData[sku];
										return (
											<TableCell key={index}>
												<img
													alt={product.name}
													style={imageStyles}
													src={product.image}
												/>
												{product.name}
											</TableCell>
										);
									})}
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow
								style={{
									backgroundColor: '#111111'
								}}
							>
								{props.skus &&
									Array(props.skus.length + 1)
										.fill()
										.map(
											(ignore, index) =>
												index ? (
													<TableCell key={index} />
												) : (
													<TableCell
														key={index}
														style={{
															color: '#ffffff'
														}}
													>
														{sections[index]}
													</TableCell>
												)
										)}
							</TableRow>
							{attributes.map((attribute, index) => (
								<TableRow
									key={index}
									style={{
										backgroundColor:
											(index === 1 || index % 2 !== 0) &&
											'#eeeeee'
									}}
								>
									<TableCell>{attribute}</TableCell>
									{props.skus &&
										props.skus.map((sku, index) => {
											const product =
												props.productData[sku];
											return (
												<TableCell key={index}>
													{product[attribute]}
												</TableCell>
											);
										})}
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Dialog>
			</React.Fragment>
		);
	}
}

ComparisonTable = connect((state, ownProps) => ({
	productData: state.productComparisonReducer.productData,
	skus: sortSkus(state.productComparisonReducer.productData),
	...ownProps
}))(ComparisonTable);

export default ComparisonTable;
