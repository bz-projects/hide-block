const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorAdvancedControls, BlockControls } = wp.blockEditor;
const { PanelRow, ToggleControl, ToolbarGroup } = wp.components;
const { __ } = wp.i18n;

// Framework
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

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
        return (
            <Fragment>
                <BlockControls>
                    <ToolbarGroup>
							<ToggleButtonGroup className="hide-block__toolbar">
								<Tooltip 
									title={
										props.attributes.hiddenblock ? 
											__('Show Block', 'hideblock')
										:
											__('Hide Block', 'hideblock')
									}>

									<FormControlLabel
										label={false}
										control={
											<Checkbox
												color="primary"
												checked={ props.attributes.hiddenblock }
												onChange={ (boolean) => {
													props.setAttributes({
														hiddenblock: boolean.target.checked
													}); 
												}}
												icon={
													<VisibilityOutlinedIcon
														style={{ color: 'var(--wp-admin-theme-color)' }}
													/>
												} 
												checkedIcon={ 
													<VisibilityOffOutlinedIcon
														style={{ color: 'var(--wp-admin-theme-color)' }}
													/>
												}
											/>
										}
									/>
								</Tooltip>
							</ToggleButtonGroup>
                    </ToolbarGroup>
                </BlockControls>
                
                <InspectorAdvancedControls>
                    <PanelRow>
                        <ToggleControl
                            label={ __('Hide Block', 'hideblock') }
                            help={
                                props.attributes.hiddenblock
                                    ? __('Block is hidden', 'hideblock')
                                    : __('Block is visible', 'hideblock')
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