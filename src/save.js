import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
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
};

export default Save;
