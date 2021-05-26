<?php
/**
Plugin Name:       Hide Block
Description:       Gutenberg Toolkit - Hide Backend Blocks
Plugin URI:        https://wordpress.org/plugins/hide-block
Version:           1.0.1
Author:            Benjamin Zekavica
Author URI:        https://www.benjamin-zekavica.de
License:           GPL v2 or later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:       hide-block
Domain Path: 	  /languages

Hide Block is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

Easy SVG is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with Easy SVG. If not, see license.txt .

Copyright by:
(c) 2021 by Benjamin Zekavica. All rights reserved.
Imprint:
Benjamin Zekavica
Oranienstrasse 12
52066 Aachen

E-Mail: info@benjamin-zekavica.de
Web: www.benjamin-zekavica.de

I don't give support by Mail. Please write in the
community forum for questions and problems.

*/

if ( !defined( 'ABSPATH' ) ) exit;

function hideblock_plugin_editor_scripts() {
	
    // Enqueue block editor JS
    wp_enqueue_script(
        'hide-block-script',
        plugins_url( '/build/index.js', __FILE__ ),
        [ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor' ]
    );

}
add_action( 'enqueue_block_editor_assets', 'hideblock_plugin_editor_scripts' );


/**
 * Enqueue frontend and editor JavaScript and CSS
 */
function hideblock_plugin_scripts() {
	
    // Enqueue block editor styles
    wp_enqueue_style(
        'hide-block-style',
        plugins_url( '/build/style-index.css', __FILE__ ),
        [],
    );

}
add_action( 'enqueue_block_assets', 'hideblock_plugin_scripts' );


// Dynamic Return Contents
function hideblock_plugin_frontend( $block_content, $block ) {
	if( $block['attrs']['hiddenblock'] ) {
		return null;
	}else {
		return $block_content;
	}
}
add_filter( 'render_block', 'hideblock_plugin_frontend', 10, 3);


// Translation
function hideblock_plugin_translation() {
	wp_set_script_translations( 'hideblock-script', 'hideblock', plugin_dir_path( __FILE__ ) . 'languages');
}
add_action( 'init', 'hideblock_plugin_translation' );
