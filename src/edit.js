/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	BlockControls,
	useBlockProps,
} from "@wordpress/block-editor";
import {
	ToolbarGroup,
	ToolbarItem,
	ToolbarButton,
	Button,
} from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import { select } from "@wordpress/data";

/**
 * Internal depencencies
 */
import classnames from "classnames";

import Inspector from "./inspector";

export default function Edit(props) {
	const { attributes, setAttributes, className, clientId, isSelected } = props;
	const {
		blockId,
	} = attributes;

	// 
	useEffect(() => {
		setAttributes({
			blockId: clientId,
		});
	}, []);

	const blockProps = useBlockProps({
		className: classnames(className, `custom-class`),
	});

	return (
		<>
			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			)}
			<div {...blockProps}>
				<div className={`block-wrapper ${blockId}`} data-id={blockId}>
					<h2>Block Prototype</h2>
					{/* ... */}
				</div>
			</div>
		</>
	);
}
