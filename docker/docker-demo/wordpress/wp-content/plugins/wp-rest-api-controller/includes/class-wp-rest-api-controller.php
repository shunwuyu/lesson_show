<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://www.yikesinc.com
 * @since      1.0.0
 *
 * @package    wp_rest_api_controller
 * @subpackage wp_rest_api_controller/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    wp_rest_api_controller
 * @subpackage wp_rest_api_controller/includes
 * @author     YIKES, Inc., Evan Herman
 */
class wp_rest_api_controller {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      wp_rest_api_controller_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	public $plugin;

	private $enabled_post_types;

	private $post_meta;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {

		$this->plugin_name        = 'WP REST API Controller';
		$this->version            = '1.4.0';
		$this->enabled_post_types = $this->get_stored_post_types();

		if ( isset( $plugin ) ) {

			$this->plugin = $plugin;

		}

		if ( $this->enabled_post_types && ! empty( $this->enabled_post_types ) ) {

			add_action( 'init',          array( $this, 'expose_api_endpoints' ), 100 );
			add_action( 'rest_api_init', array( $this, 'append_meta_data_to_api_request' ) );

		}

		$this->load_dependencies();

		$this->set_locale();

		$this->define_admin_hooks();

		$this->run_one_point_four_update_check();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - wp_rest_api_controller_Loader. Orchestrates the hooks of the plugin.
	 * - wp_rest_api_controller_i18n. Defines internationalization functionality.
	 * - wp_rest_api_controller_Admin. Defines all hooks for the admin area.
	 * - wp_rest_api_controller_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-rest-api-controller-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-rest-api-controller-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-wp-rest-api-controller-admin.php';

		$this->loader = new wp_rest_api_controller_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the wp_rest_api_controller_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new wp_rest_api_controller_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new wp_rest_api_controller_Admin( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );

	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {

		$this->loader->run();

	}

	/**
	 * As of 1.4.0, we've made some core changes to the plugin, so run the changes
	 *
	 * @since    1.4.0
	 */
	public function run_one_point_four_update_check() {

		// Check if we've done this before
		if ( get_option( 'wp_rest_api_controller_one_point_four', false ) === false ) {

			// We no longer support enabling/disabling post/page endpoints, so remove these options
			delete_option( 'wp_rest_api_controller_post_types_post' );
			delete_option( 'wp_rest_api_controller_post_types_page' );

			// Add a flag so we don't do this all the time
			add_option( 'wp_rest_api_controller_one_point_four', true );
		}
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {

		return $this->plugin_name;

	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    wp_rest_api_controller_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {

		return $this->loader;

	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {

		return $this->version;

	}

	/**
	 * Get the stored post types to expose/disable to the REST API
	 *
	 * @return array Array of post type slugs to expose to our API
	 * @since 1.0.0
	 */
	public function get_stored_post_types() {

		$stored_post_types = get_option( 'wp_rest_api_controller_post_types', false );

		if ( ! $stored_post_types ) {

			return;

		}

		$post_types_array = array();

		foreach ( $stored_post_types as $post_type_slug ) {

			$post_type_options = get_option( "wp_rest_api_controller_post_types_{$post_type_slug}", 0 );

			if ( $post_type_options && ( isset( $post_type_options['active'] ) && $post_type_options['active'] ) ) {

				$post_types_array[ $post_type_slug ] = 'enabled';

				continue;

			}

			$post_types_array[ $post_type_slug ] = 'disabled';

		}

		return $post_types_array;

	}

	/**
	 * Based on the value of a custom meta key in the WP REST API array
	 * we return the original key, so that get_post_meta() can be used properly
	 *
	 * @param  string $custom_meta_key_name The custom meta key defined in the options.
	 * @return string                       The original meta key to use in get_post_meta() function
	 */
	public function get_original_meta_key_name( $post_type_slug, $custom_meta_key_name ) {

		$meta_options = get_option( "wp_rest_api_controller_post_types_{$post_type_slug}", array(
			'active' => 0,
			'meta_data' => array(),
		) );

		if ( ! isset( $meta_options['meta_data'] ) || ! is_array( $meta_options['meta_data'] ) ) {
			return;
		}

		foreach ( $meta_options['meta_data'] as $key ) {

			if ( strtolower( $custom_meta_key_name ) === strtolower( $key['custom_key'] ) ) {

				return $key['original_meta_key'];

			}
		}

		// Make sure we have a 'original_key' before returning it
		$return_key = '';
		if ( isset( $this->post_meta[ $post_type_slug ] ) && isset( $this->post_meta[ $post_type_slug ][ $custom_meta_key_name ] ) 
			&& isset( $this->post_meta[ $post_type_slug ][ $custom_meta_key_name ]['original_key'] ) ) {

			$return_key = $this->post_meta[ $post_type_slug ][ $custom_meta_key_name ]['original_key'];

		}

		return $return_key;
	}

	/**
	 * Expose (or disable) post types to the REST API
	 *
	 * @return null Expose the enabled API endpoints
	 *
	 * @since 1.0.0
	 */
	public function expose_api_endpoints() {

		$enabled_post_types = $this->enabled_post_types;

		if ( ! $enabled_post_types || empty( $enabled_post_types ) ) {

			return;

		}

		global $wp_post_types;

		foreach ( $enabled_post_types as $post_type_slug => $enabled ) {

			if ( ! isset( $wp_post_types[ $post_type_slug ] ) || ! is_object( $wp_post_types[ $post_type_slug ] ) ) {

				continue;
			}

			$rest_base = $this->get_post_type_rest_base( $post_type_slug );

			if ( 'enabled' !== $enabled ) {

				$wp_post_types[ $post_type_slug ]->show_in_rest = false;

				continue;

			}

			$wp_post_types[ $post_type_slug ]->show_in_rest = true;
			$wp_post_types[ $post_type_slug ]->rest_base    = $rest_base;
		}
	}

	/**
	 * Append post type meta data to the API request
	 *
	 * All requests append data using get_post_meta() inside custom_meta_data_callback()
	 * Users can override the value and provide a custom value using our filter `wp_rest_api_controller_api_property_value`
	 * For help, see the 'Other Notes' section in the WordPress.org repository for this plugin
	 *
	 * @since 1.0.0
	 */
	public function append_meta_data_to_api_request() {

		$enabled_post_types = $this->enabled_post_types;

		if ( ! $enabled_post_types || empty( $enabled_post_types ) ) {

			return;

		}

		foreach ( $enabled_post_types as $post_type_slug => $enabled ) {

			if ( 'enabled' !== $enabled ) {

				continue;

			}

			$post_type_options = get_option( "wp_rest_api_controller_post_types_{$post_type_slug}", array(
				'active' => 0,
				'meta_data' => array(),
			) );

			if ( ! isset( $post_type_options['meta_data'] ) || empty( $post_type_options['meta_data'] ) ) {

				continue;

			}

			foreach ( $post_type_options['meta_data'] as $meta_key => $meta_data ) {

				if ( ! isset( $meta_data['active'] ) || ( isset( $meta_data['active'] ) && 1 !== absint( $meta_data['active'] ) ) ) {

					continue;
				}

				$rest_api_meta_name = ( isset( $meta_data['custom_key'] ) && ! empty( $meta_data['custom_key'] ) ) ? $meta_data['custom_key'] : $meta_key;

				$this->post_meta[ $post_type_slug ][ $rest_api_meta_name ] = array(
					'original_key' => $meta_key,
					'custom_key'   => $meta_data['custom_key'],
				);

				register_rest_field(
					$post_type_slug,
					str_replace( '-', '_', sanitize_title( $rest_api_meta_name ) ),
					array(
						'get_callback'    => array( $this, 'custom_meta_data_callback' ),
						'update_callback' => null,
						'schema'          => null,
					)
				);

			}
		}
	}

	/**
	 * Callback function to append our metadata value to the field
	 *
	 * @param  array   $object      Post object
	 * @param  string  $field_name  Field name.
	 * @param  array   $request     API request.
	 *
	 * @return string               The original meta key name to use in get_post_meta();
	 */
	function custom_meta_data_callback( $object, $field_name, $request ) {

		$original_meta_key_name = $this->get_original_meta_key_name( $object['type'], $field_name );
		
		// If we can't find the original meta key name, then return. 
		// We do not want our get_post_meta() call to look like get_post_meta( $id, NULL, true ) or all meta fields will be returned
		if ( empty( $original_meta_key_name ) ) {
			return;
		}


		/**
		*	'wp_rest_api_controller_retrieve_meta_single'
		*
		*	Toggle the get_post_meta's $single argument
		*
		*	For meta data stored with repeating keys (i.e. multiple DB entries for one meta_key value), you should set this value to false.
		*	If you do not set this to false, you will only retrieve the first value found in the DB, rather than an array of all the values.
		*
		*	@param bool  | true 					| The default is true - return single
		*	@param string| $field_name				| The renamed meta key - allows users to filter this called based on the renamed meta key name
		*	@param string| $original_meta_key_name	| The meta key - allows users to filter this call based on the original meta key name
		*	@return bool | T/F
		*/
		$retrieve_post_meta_single = apply_filters( 'wp_rest_api_controller_retrieve_meta_single', true, $field_name, $original_meta_key_name );

		return apply_filters( 'wp_rest_api_controller_api_property_value', get_post_meta( $object['id'], $original_meta_key_name, $retrieve_post_meta_single ), $object['id'], $original_meta_key_name );

	}

	/**
	 * Get the rest base for a given post type
	 *
	 * @param  string $post_type_slug Slug of the post type to return.
	 *
	 * @return string                 REST API base name.
	 */
	public static function get_post_type_rest_base( $post_type_slug ) {

		$post_type_options = $options = get_option( "wp_rest_api_controller_post_types_{$post_type_slug}", array(
			'active' => 0,
			'meta_data' => array(),
		) );

		switch ( $post_type_slug ) {

			case 'post':
				$rest_base = 'posts';
				break;

			case 'page':
				$rest_base = 'pages';
				break;

			default:
				$rest_base = $post_type_slug;
				break;

		}

		if ( isset( $post_type_options['rest_base'] ) && ! empty( $post_type_options['rest_base'] ) ) {

			$rest_base = $post_type_options['rest_base'];

		}

		return apply_filters( 'wp_rest_api_controller_rest_base', $rest_base, $post_type_slug, 0 );

	}

}
