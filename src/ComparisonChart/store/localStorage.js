if (typeof localStorage === 'undefined' || localStorage === null) {
	const LocalStorage = require('node-localstorage').LocalStorage;
	var localStorage = new LocalStorage('./scratch');
}

const loadState = () => {
	try {
		const serializedState = localStorage.getItem('sltReduxStore');
		const returnState = JSON.parse(serializedState);
		console.log('serializedState:');
		console.log(returnState);

		if (returnState === null) {
			return undefined;
		}
		return returnState;
	} catch (err) {
		console.warn('Failed to load Redux state.', err);
	}
};

const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (err) {
		console.warn('Failed to save Redux state.', err);
	}
};

export { loadState, saveState };
