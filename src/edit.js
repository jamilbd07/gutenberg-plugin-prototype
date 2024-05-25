/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

/**
 * Internal depencencies
 */
import classnames from "classnames";

import Inspector from "./inspector";

export default function Edit(props) {
	const { attributes, setAttributes, className, clientId, isSelected } = props;
	const {
		blockId,
		title,
		titleTag,
		titleColor,
	} = attributes;

	// 
	useEffect(() => {
		if (!blockId) {
			setAttributes({
				blockId: `block-${Math.floor((Math.random() * 987654))}`,
			});
		}
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
					<RichText
						tagName={titleTag} // The tag here is the element output and editable in the admin
						value={title} // Any existing content, either from the database or an attribute default
						allowedFormats={['core/bold', 'core/italic']} // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={(title) => setAttributes({ title })} // Store updated content as a block attribute
						placeholder={__('Write your Text here...')} // Display this text before any content has been added by the user
						style={{ color: titleColor }}
					/>
				</div>
			</div>
		</>
	);
}
