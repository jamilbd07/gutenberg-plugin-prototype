/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	ColorPalette,
	PanelRow,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		titleTag,
		titleColor
	} = attributes;

	return (
		<InspectorControls key="controls">
			<div className="plugin-panel-control">
				<PanelBody
					title={__("General", "gutenberg-plugin-prototype")}
					initialOpen={true}
				>
					<PanelRow>Text Color</PanelRow>
					<ColorPalette
						colors={[]}
						value={titleColor}
						onChange={(value) => { setAttributes({ titleColor: value }) }}
					/>

					<ToggleGroupControl
						__nextHasNoMarginBottom
						isBlock
						value={titleTag}
						label="Select Tag"
						onChange={(tag) => setAttributes({ titleTag: tag })}
					>
						<ToggleGroupControlOption
							label="H1"
							value="h1"
						/>
						<ToggleGroupControlOption
							label="H2"
							value="h2"
						/>
						<ToggleGroupControlOption
							label="H3"
							value="h3"
						/>
						<ToggleGroupControlOption
							label="H4"
							value="h4"
						/>
						<ToggleGroupControlOption
							label="H5"
							value="h5"
						/>
						<ToggleGroupControlOption
							label="H6"
							value="h6"
						/>
						<ToggleGroupControlOption
							label="P"
							value="p"
						/>
					</ToggleGroupControl>
				</PanelBody>
			</div>
		</InspectorControls>
	);
}

export default Inspector;
