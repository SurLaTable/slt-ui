/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from "react";
import ReactDom from "react-dom";
import ReactHabitat from "react-habitat";

import SLTDomFactory from "./SLTDomFactory";
import Habitat from "react-habitat/lib/Habitat";
import PubSub from "./pubsub";

import { asyncComponent } from "react-async-component";
//NOTE: This is a webpack specific loader, used to generate the async wrapper
import * as sltUi from "@sur-la-table/slt-ui";

// Turn all attributes into props for an element:
function getProps(ele) {
	var props = {};
	var style = {};
	for (let i = 0; i < ele.attributes.length; i++) {
		const a = ele.attributes[i];
		props[a.name] = a.value;
	}
	for (let i = 0; i < ele.style.length; i++) {
		style[ele.style[i]] = ele.style[ele.style[i]];
	}
	props.style = style;
	props.className = ele.className;
	//delete props.class;
	return props;
}

class Manifest extends ReactHabitat.Bootstrapper {
	constructor() {
		super();

		var app = this;
		var ComponentManifest = (global.ComponentManifest = Object.assign(
			new PubSub(),
			{
				React: React,
				ReactDom: ReactDom,
				updateHabitat: this.update.bind(this),
			}
		));

		// Create a new container:
		const containerBuilder = new ReactHabitat.ContainerBuilder();

		function nodeToReact(ele, incrementID) {
			// Ignore elements that have already been connected:
			if (ele.nodeType == 3) {
				// The element is text.
				return React.createElement(
					React.Fragment,
					null,
					ele.textContent
				);
			} else if (ele.nodeType == 8) {
				// The element is a comment.
				return null;
			}
			if (Habitat.hasHabitat(ele)) {
				return null;
			}

			var children = [];
			var componentName = ele.getAttribute(app.componentSelector);

			var registration = app.__container__._registrations[componentName];

			for (
				var i = 0, componentCount = 0, child;
				i < ele.childNodes.length;
				i++
			) {
				child = nodeToReact(ele.childNodes[i], function() {
					return componentCount++;
				});
				if (child) {
					children.push(child);
				}
			}

			var reEl;
			if (registration) {
				// This is a component.
				var props = {};
				try {
					props = Object.assign(props, Habitat.parseProps(ele));
				} catch (e) {
					props = Object.assign(props, getProps(ele));
				}
				//TODO create unique ID HERE
				if (registration.meta.defaultProps) {
					props = Object.assign(
						{},
						registration.meta.defaultProps,
						props
					);
				}

				// Had to create a direct reference to the component with the registry.
				// This is only necessary because we are using the
				// async react element library.
				var Component = asyncComponent({
					resolve: () => registration._operator()
				});
				var key = `${componentName}-${incrementID()}`;
				reEl = React.createElement(
					ele.nodeName.toLowerCase(),
					{
						key: key,
						"data-component-id": key
					},
					React.createElement(Component, props, children)
				);
			} else {
				// Regular element:
				reEl = React.createElement(
					ele.nodeName.toLowerCase(),
					{
						key: `${componentName}-${incrementID()}`,
						...getProps(ele)
					},
					children
				);
			}
			return reEl;
		}

		// Set the container to use the React Habitat SltDom factory:
		containerBuilder.factory = new SLTDomFactory(
			app.componentSelector,
			nodeToReact
		);

		// Webpack specific build code:
		for (let comp in sltUi) {
			containerBuilder.register(sltUi[comp]).as(comp);
		}

		// Set the DOM container:
		this.setContainer(containerBuilder.build());

		ComponentManifest.register = (name, component) => {
			if (name == null) {
				console.error(
					"registering a component requires a name and the constructor for that component"
				);
			}
			if (typeof name != "string") {
				for (let i in name) {
					containerBuilder.register(name[i]).as(i);
				}
			} else {
				containerBuilder.register(component).as(name);
			}

			this.dispose();
			this.setContainer(containerBuilder.build());
		};

		ComponentManifest.dispose = () => this.dispose();
	}
}

// Export single instance:
export default new Manifest();
