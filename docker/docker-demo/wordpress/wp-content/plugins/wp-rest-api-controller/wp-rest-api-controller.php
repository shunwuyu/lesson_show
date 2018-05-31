<?php
/**
 * 		Plugin Name:       WP REST API Controller
 * 		Plugin URI:        https://www.yikesplugins.com
 * 		Description:       WP REST API Controller enables a UI to toggle endpoints in the REST API.
 * 		Version:           1.4.1
 * 		Author:            YIKES, Inc.
 * 		Author URI:        https://www.yikesinc.com
 * 		License:           GPL-3.0+
 *		License URI:       http://www.gnu.org/licenses/gpl-3.0.txt
 * 		Text Domain:       wp-rest-api-controller
 * 		Domain Path:       /languages
 *
 * 		WP REST API Controller by YIKES, Inc., Evan Herman, Evan Herman is free software: you can redistribute it and/or modify
 * 		it under the terms of the GNU General Public License as published by
 * 		the Free Software Foundation, either version 2 of the License, or
 * 		any later version.
 *
 * 		WP REST API Controller by YIKES, Inc., Evan Herman, Evan Herman is distributed in the hope that it will be useful,
 * 		but WITHOUT ANY WARRANTY; without even the implied warranty of
 * 		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * 		GNU General Public License for more details.
 *
 * 		You should have received a copy of the GNU General Public License
 *		along with WP REST API Controller by YIKES, Inc., Evan Herman, Evan Herman If not, see <http://www.gnu.org/licenses/>.
 *
**/


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * 	Define path constant to our plugin directory.
 *
 * 	@since 6.0.0
 *	@return void
 */
if ( ! defined( 'WP_REST_API_CONTROLLER_PATH' ) ) {
	define( 'WP_REST_API_CONTROLLER_PATH' , plugin_dir_path( __FILE__ ) );
}
/**
 * 	Define URL constant to our plugin directory.
 *
 * 	@since 6.0.0
 *	@return void
 */
if ( ! defined( 'WP_REST_API_CONTROLLER_URL' ) ) {
	define( 'WP_REST_API_CONTROLLER_URL' , plugin_dir_url( __FILE__ ) );
}

/**
 * Localization
 * Include our textdomain and translation files
 **/
function wp_rest_api_controller_text_domain_init() {
	load_plugin_textdomain( 'wp-rest-api-controller', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
}
add_action( 'init', 'wp_rest_api_controller_text_domain_init' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-wp-rest-api-controller-activator.php
 */
register_activation_hook( __FILE__, 'activate_wp_rest_api_controller' );
function activate_wp_rest_api_controller() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp-rest-api-controller-activator.php';
	wp_rest_api_controller_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-wp-rest-api-controller-deactivator.php
 */
register_deactivation_hook( __FILE__, 'deactivate_wp_rest_api_controller' );
function deactivate_wp_rest_api_controller() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp-rest-api-controller-deactivator.php';
	wp_rest_api_controller_Deactivator::deactivate();
}

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-wp-rest-api-controller.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_wp_rest_api_controller() {

	$plugin = new wp_rest_api_controller();
	$plugin->run();

}
run_wp_rest_api_controller();
