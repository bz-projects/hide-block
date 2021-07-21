const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorAdvancedControls, BlockControls } = wp.blockEditor;
const { PanelRow, ToggleControl, ToolbarGroup, ToolbarItem, Button, Dashicon } = wp.components;
const { __ } = wp.i18n;

// Styling 
import './style.scss';

// HideBlock - Added Attr
function attrHideBlock( props ) {
    if( props.hasOwnProperty('attributes') ){
    
        props.attributes.hiddenblock = {
            type: 'boolean',
            default: false
        };
    }
    return props;
} 
wp.hooks.addFilter('blocks.registerBlockType', 'hideblock/attr', attrHideBlock );


// HideBlock - Editor
const editorHideBlock = createHigherOrderComponent( ( BlockEdit ) => {
    
    return ( props ) => {

		return(
			<Fragment>
				<BlockControls>
					<ToolbarGroup>
						<ToolbarItem
							as={ Button } 
							onClick={ 
								() => {
									{ props.attributes.hiddenblock === true  ? (
										props.setAttributes({
											hiddenblock: false
										})
									) : (
										props.setAttributes({
											hiddenblock: true
										})
									)}
								}
							}
						>		
							{ props.attributes.hiddenblock === true  ? (
								<Dashicon icon="hidden" />
							) : (
								<Dashicon icon="visibility" />
							)}
						</ToolbarItem>
					</ToolbarGroup>
				</BlockControls>

				<InspectorAdvancedControls>
					<PanelRow>
						<ToggleControl
							label={ __('Hide Block', 'hideblock') }
							help={
								props.attributes.hiddenblock
									? __('Block is hidden', 'hide-block')
									: __('Block is visible', 'hide-block')
							}
							checked={ props.attributes.hiddenblock }
							onChange={ ( boolean ) => {
								props.setAttributes({
									hiddenblock: boolean
								}); 
							}}
						/>
					</PanelRow>
				</InspectorAdvancedControls>

				<section 
					className={
						props.attributes.hiddenblock ? 
							'hide-block hide-block--active'
						:
							'hide-block'
					}
				>
					<BlockEdit { ...props } />
				</section>
		
			</Fragment>
		);
    };
}, 'withInspectorControl' );
 
wp.hooks.addFilter(
    'editor.BlockEdit',
    'hideblock/editor',
    editorHideBlock
);