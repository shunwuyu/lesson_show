<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://www.yikesinc.com
 * @since      1.0.0
 *
 * @package    plugin-boilerplate
 * @subpackage plugin-boilerplate/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    plugin-boilerplate
 * @subpackage plugin-boilerplate/includes
 * @author     YIKES, Inc., Evan Herman
 */
class wp_rest_api_controller_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'wp-rest-api-controller',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
