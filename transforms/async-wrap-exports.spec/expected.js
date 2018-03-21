import { asyncComponent } from "react-async-component";

const FormGroup = asyncComponent({
	resolve: () => import("./FormGroup")
});

export { FormGroup };

const FormLabel = asyncComponent({
	resolve: () => import("./FormLabel")
});

export { FormLabel };

const FormControl = asyncComponent({
	resolve: () => import("./FormControl")
});

export { FormControl };

const FormHelperText = asyncComponent({
	resolve: () => import("./FormHelperText")
});

export { FormHelperText };

const FormControlLabel = asyncComponent({
	resolve: () => import("./FormControlLabel")
});

export { FormControlLabel };
