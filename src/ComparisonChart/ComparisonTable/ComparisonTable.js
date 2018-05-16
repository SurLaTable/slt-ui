import React from 'react';
import { connect } from 'react-redux';
import sortSkus from '../utils/sortSkus';
import { actionRemoveAll, actionSetProducts } from '../actions/productComparisonActions';

import Button from '../../Button';
import Dialog from '../../Dialog';
import Slide from '../../transitions/Slide';
import {default as Table, TableBody, TableCell, TableHead, TableRow} from '../../Table';
import Typography from '../../Typography';

import { PlayForWork as PlayForWorkIcon } from '../icons';

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

	constructor(){
		super();
		window.addEventListener("popstate",(event) => {
			let state = event.state;
			if(state == null){
				//CLOSE COMPARISON TABLE
				this.setState({ open: false });
			}else if(state.type == "OPEN_COMPARISON_TABLE"){
				this.props.dispatch(actionSetProducts(state.skus));
				this.setState({ open: true });
			}
		});
	}

	handleClickOpen = () => {
		if(window && window.history){
			let history = window.history;
			history.pushState({
				type:"OPEN_COMPARISON_TABLE",
				skus: this.props.skus
			});
		}
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
		if(window && window.history){
			window.history.back();
		}
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
					disabled={props.skus && props.skus.length < 2}
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
