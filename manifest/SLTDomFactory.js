import React from 'react';
import ReactDom from 'react-dom';
// import { Provider }		from 'react-redux';
// import { createStore } from "redux";
import StoreProvider from '../src/ComparisonChart/StoreProvider.js';
/**
 * React DOM Factory
 */

export default class SLTDomFactory {
	constructor(componentSelector, nodeToReact) {
		this.componentSelector = componentSelector;
		this.nodeToReact = nodeToReact;
		this.componentId = 0;
		// this.store = createStore(function(){});
	}

	/**
	 * Inject the module into the dom wrapped
	 * @param {*} module - The component to inject
	 * @param {object} props  - The component props
	 * @param {node} target - The node to inject to
	 */
	inject(module, props = {}, target) {
		if (target) {
			var children = [];
			for (var i = 0, componentCount = 0, child; i < props.proxy.childNodes.length; i++) {
				try {
					child = this.nodeToReact(props.proxy.childNodes[i], function() {
						return componentCount++;
					});
					if (child) {
						children.push(child);
					}
				} catch (e) {
					console.error('ReactHabitat failed constructing children: ', e);
				}
			}

			var wrapper = React.createElement(
				target.nodeName.toLowerCase(),
				{
					'data-component-id':
						props.proxy.getAttribute('data-component-id') ||
						props.proxy.getAttribute(this.componentSelector) + `-${this.componentId++}`
				},
				React.createElement(module, props, children)
			);

			// ReactDom.render(wrapper, target);
			// ReactDom.render(React.createElement(Provider, { store: this.store },wrapper), target);
			if (wrapper) {
				ReactDom.render(React.createElement(StoreProvider, props, wrapper), target);
			}
		}
	}

	/**
	 * Dispose of any react instances for a node
	 * @param {node} target - The node to tear down
	 */
	dispose(target) {
		if (target) {
			ReactDom.unmountComponentAtNode(target);
		}
	}
}
