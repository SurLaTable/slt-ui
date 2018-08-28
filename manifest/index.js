/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactHabitat from 'react-habitat';
import Registration from 'react-habitat/lib/Registration';

import SLTDomFactory from './SLTDomFactory';
import PubSub from './pubsub';
import DomToHabitatBuilder from './DomToHabitat.js';

//NOTE: This is a webpack specific loader, used to generate the async wrapper
import * as sltUi from '../builder/temp/slt';

function dig(path, obj) {
	return path.split('.').reduce((itm, key) => {
		return itm[key];
	}, obj);
}

class Manifest extends ReactHabitat.Bootstrapper {
	constructor() {
		super();

		var bootstrapper = this;
		var ComponentManifest = (global.ComponentManifest = Object.assign(new PubSub(), {
			React: React,
			ReactDOM: ReactDOM,
			bootstrapper: bootstrapper
		}));

		// Create a new container:
		const containerBuilder = new ReactHabitat.ContainerBuilder();

		// Set the container to use the React Habitat SltDom factory:
		containerBuilder.factory = new SLTDomFactory(
			bootstrapper.componentSelector,
			DomToHabitatBuilder(this)
		);

		// Webpack specific build code:
		for (let comp in sltUi) {
			containerBuilder.register(sltUi[comp]).as(comp);
		}

		// Set the DOM container:
		var container = containerBuilder.build();
		this.setContainer(container);

		ComponentManifest.rebuild = (callback) => {
			//Disabled for production at the moment.
			if (process.env.NODE_ENV == 'development') {
				bootstrapper.dispose(() => {
					bootstrapper.setContainer(containerBuilder.build());
					if (typeof callback == 'function') {
						callback();
					}
				});
			}
		};

		ComponentManifest.register = (name, component) => {
			if (name == null) {
				throw new Error(
					'registering a component requires a name and the constructor for that component'
				);
			}
			if (typeof name != 'string') {
				for (let i in name) {
					if (name[i] == '__esModule') {
						continue;
					}
					containerBuilder.register(name[i]).as(i);
					container._registrations[i] =
						containerBuilder._registrations[containerBuilder._registrations.length - 1];
				}
			} else {
				containerBuilder.register(component).as(name);
				container._registrations[name] =
					containerBuilder._registrations[containerBuilder._registrations.length - 1];
			}
			bootstrapper.update();
		};

		ComponentManifest.unregister = (name) => {
			for (let i = containerBuilder._registrations.length - 1; i >= 0; i--) {
				if (containerBuilder._registrations[i].key == name) {
					containerBuilder._registrations.splice(i, 1);
				}
			}
			return delete container._registrations[name];
		};
	}
}

// Export single instance:
export default new Manifest();
