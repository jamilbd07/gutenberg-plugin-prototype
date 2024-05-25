import { useBlockProps, RichText } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const {
		blockId,
		title,
		titleTag,
		titleColor
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className={`block-wrapper ${blockId}`} data-id={blockId}>
				<RichText.Content
					tagName={titleTag} // The tag here is the element output and editable in the admin
					value={title} // Any existing content, either from the database or an attribute default
					style={{ color: titleColor }}
				/>
			</div>
		</div>
	);
};

export default Save;
