const attributes = {
	// blockId attribute for making unique className and other uniqueness
	blockId: {
		type: "string"
	},
	title: {
		type: "string",
		default: "Sample Title"
	},
	titleTag: {
		type: "string",
		default: "h2"
	},
	titleColor: {
		type: "string",
		default: "#333333"
	}
};

export default attributes;
