import { __ } from "@wordpress/i18n";

// the consts defined here should be unique from one another
// export const WRAPPER_BG = "wrprBg";

export const TEXT_ALIGN = [
	{ label: __("Left", "essential-blocks"), value: "left" },
	{ label: __("Right", "essential-blocks"), value: "right" },
	{ label: __("Center", "essential-blocks"), value: "center" },
	{ label: __("Justify", "essential-blocks"), value: "justify" },
];

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
];