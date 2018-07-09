import localForage from 'localforage';

const loadState = () => {
	try {
		const serializedState = localForage.getItem('sltReduxStore');
		if (!serializedState) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		console.warn('Failed to load Redux state.', err);
	}
};

const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localForage.setItem('state', serializedState);
	} catch (err) {
		console.warn('Failed to save Redux state.', err);
	}
};

export { loadState, saveState };
