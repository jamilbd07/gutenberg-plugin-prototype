/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import Save from "./save";
import Edit from "./edit";
import Attributes from "./attributes";
import example from "./example";
import { Icon } from "./icon";
import deprecated from "./deprecated";
import "./style.scss";
import metadata from "./block.json";

const { name } = metadata;

registerBlockType(
	{
		name: name,
		...metadata
	},
	{
		icon: Icon,
		attributes: Attributes,
		edit: Edit,
		save: Save,
		example,
		deprecated,
	});
