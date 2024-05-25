<?php

/**
 * Plugin Name:     Plugin Name
 * Plugin URI:      https://jamiluddin.me/
 * Description:     Plugin Description
 * Version:         1.0.0
 * Author:          MD Jamil Uddin
 * Author URI:      https://jamiluddin.me/
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     plugin-name
 *
 * @package         plugin-name
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

if ( ! function_exists( 'plugin_init' ) ) {
    function plugin_init()
    {
        define( 'BLOCK_VERSION', "1.0.0" );
        define( 'BLOCK_ADMIN_URL', plugin_dir_url( __FILE__ ) );
        define( 'BLOCK_ADMIN_PATH', dirname( __FILE__ ) );

        $script_asset_path = BLOCK_ADMIN_PATH . "/build/index.asset.php";
        if ( ! file_exists( $script_asset_path ) ) {
            throw new Error(
                'You need to run `npm start` or `npm run build` for the block first.'
            );
        }
        $index_js         = BLOCK_ADMIN_URL . 'build/index.js';
        $script_asset     = require $script_asset_path;
        $all_dependencies = array_merge( $script_asset[ 'dependencies' ], [
            'wp-blocks',
            'wp-i18n',
            'wp-element',
            'wp-block-editor'
         ] );

        //Register Script for Editor
        wp_register_script(
            'block-name-editor-script',
            $index_js,
            $all_dependencies,
            $script_asset[ 'version' ],
            true
        );

        $style_css = BLOCK_ADMIN_URL . 'build/style-index.css';
        //Frontend Style
        wp_register_style(
            'block-name-editor-style',
            $style_css,
            [  ],
            BLOCK_VERSION
        );

        if ( ! WP_Block_Type_Registry::get_instance()->is_registered( 'plugin-slug/plugin-name' ) ) {
            register_block_type(
                BLOCK_ADMIN_PATH . '/src/block.json',
                [
                    'editor_script'   => 'block-name-editor-script',
                    'editor_style'    => 'block-name-editor-style',
                    'render_callback' => function ( $attributes, $content ) {
                        if ( ! is_admin() ) {
                            wp_enqueue_style( 'block-name-editor-style' );
                        }
                        return $content;
                    }
                 ]
            );
        }
    }
}
add_action( 'init', 'plugin_init', 99 );
