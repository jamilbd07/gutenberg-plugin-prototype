/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	Button,
	ButtonGroup,
	BaseControl,
	TabPanel,
} from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import { select } from "@wordpress/data";

/**
 * Internal depencencies
 */

import objAttributes from "./attributes";

import {
	TEXT_ALIGN,
	UNIT_TYPES,
} from "./constants";

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		blockId,
	} = attributes;

	return (
		<InspectorControls key="controls">
			<div className="plugin-panel-control">
				<PanelBody
					title={__("General", "gutenberg-plugin-prototype")}
					initialOpen={true}
				>
					{/* <SelectControl
						label={__("Layouts", "gutenberg-plugin-prototype")}
						value={layouts}
						options={LAYOUTS}
						onChange={(layouts) => setAttributes({ layouts })}
					/>

					<ToggleControl
						label={__("Display Caption", "gutenberg-plugin-prototype")}
						checked={displayCaption}
						onChange={() =>
							setAttributes({ displayCaption: !displayCaption })
						}
					/>
					<ColorControl
						label={__("Background Color", "gutenberg-plugin-prototype")}
						color={captionBGColor}
						onChange={(backgroundColor) =>
							setAttributes({ captionBGColor: backgroundColor })
						}
					/> */}
				</PanelBody>
			</div>
		</InspectorControls>
	);
}

export default Inspector;
