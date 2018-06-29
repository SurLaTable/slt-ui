$(`
	<div data-component="StoreProvider">
		<div data-component="ComparisonCheckbox" data-prop-product="PRO-2403251"></div>
		<div data-component="ComparisonCheckbox" data-prop-product="PRO-1251180"></div>
		<div data-component="ComparisonCheckbox" data-prop-product="PRO-227496"></div>
		<div data-component="ComparisonBar" data-n-prop-number-of-items="3"></div>
	</div>
`).prepend('body');
if (ComponentManifest) {
	ComponentManifest.updateHabitat();
}
