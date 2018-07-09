const loadState = () => {
	try {
		const serializedState = localStorage.getItem('sltReduxStore');
		if (serializedState === null) {
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
		localStorage.setItem('state', serializedState);
	} catch (err) {
		console.warn('Failed to save Redux state.', err);
	}
};

export { loadState, saveState };
