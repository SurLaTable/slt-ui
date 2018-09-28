import Habitat, { ACTIVE_HABITAT_FLAG } from 'react-habitat/lib/Habitat';
import { asyncComponent } from 'react-async-component';
import React from 'react';

// Turn all attributes into props for an element:
export function getProps(ele) {
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

export default function DomToHabitatBuilder(bootstrapper) {
	return function domToHabitat(ele, incrementID) {
		if (ele.nodeType == 3) {
			// The element is text.
			return React.createElement(
				React.Fragment,
				{ key: `text-${incrementID()}` },
				ele.textContent
			);
		} else if (ele.nodeType == 8) {
			// The element is a comment.
			return null;
		}
		// Ignore elements that have already been connected:
		if (ele.hasAttribute(ACTIVE_HABITAT_FLAG)) {
			if (ele.getAttribute(ACTIVE_HABITAT_FLAG) === 'temp') {
				ele.removeAttribute(ACTIVE_HABITAT_FLAG);
			} else {
				return null;
			}
		}

		var children = [];
		var componentName = ele.getAttribute(bootstrapper.componentSelector);

		//possible location of failure for dynamic registration
		var registration = bootstrapper.__container__._registrations[componentName];

		for (var i = 0, componentCount = 0, child; i < ele.childNodes.length; i++) {
			child = domToHabitat(ele.childNodes[i], function() {
				return componentCount++;
			});
			if (child) {
				children.push(child);
			}
		}

		if (registration) {
			// This is a component.
			let Component = asyncComponent({
				resolve: () => registration._operator()
			});
			let key = `${componentName}-${incrementID()}`;
			var props = {
				key: key,
				'data-component-id': key
			};
			try {
				props = Object.assign(props, Habitat.parseProps(ele));
			} catch (e) {
				props = Object.assign(props, getProps(ele));
			}

			if (registration.meta.defaultProps) {
				props = Object.assign({}, registration.meta.defaultProps, props);
			}

			return React.createElement(Component, props, children);
		} else {
			// Regular element:
			let key = `${ele.nodeName.toLowerCase()}-${incrementID()}`;
			return React.createElement(
				ele.nodeName.toLowerCase(),
				{
					key: key,
					...getProps(ele)
				},
				children
			);
		}
	};
}
