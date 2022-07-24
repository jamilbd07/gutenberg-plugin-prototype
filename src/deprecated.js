/**
 * Internal dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * WordPress dependencies
 */
import attributes from "./attributes";

const deprecated = [
	{
		attributes: { ...attributes },

		save: ({ attributes }) => {
			const {
				blockId,
			} = attributes;

			return (
				<div {...useBlockProps.save()}>
					<div className={`block-wrapper ${blockId}`} data-id={blockId}>
						{/* ... */}
					</div>
				</div>
			);
		},
	},
];

export default deprecated;
