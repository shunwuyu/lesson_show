<?php
// ------------------------------------------------------------------
// Add all the sections, fields and settings during admin_init
// ------------------------------------------------------------------
//
class wp_rest_api_controller_Settings {

	// Store our REST API Endpoint base
	public $rest_endpoint_base;

	// Post type slugs that we should not allow users to enable/disable
	private $always_enabled_post_type_slugs;

	public function __construct() {
		add_action( 'admin_init', array( $this, 'set_always_enabled_post_type_slugs' ), 1 );
		add_action( 'admin_init', array( $this, 'wp_rest_api_controller_settings_api_init' ) );
		add_action( 'admin_init', array( $this, 'wp_rest_api_controller_delete_api_cache' ) );
	}

	public function set_always_enabled_post_type_slugs() {
		$this->always_enabled_post_type_slugs = apply_filters( 'wp_rest_api_controller_always_enabled_post_types', array(
				'post',
				'page',
				'revision',
				'nav_menu_item',
				'custom_css',
				'customize_changeset',
				'attachment'
			)
		);
	}

	public function wp_rest_api_controller_settings_api_init() {

		$post_types = $this->get_registered_post_types();

		$this->rest_endpoint_base = esc_url( site_url( '/wp-json/wp/v2/' ) );

		add_settings_section(
			'wp_rest_api_controller_setting_section',
			null,
			array( $this, 'wp_rest_api_controller_setting_section_callback_function' ),
			'wp-rest-api-controller'
		);

		if ( ! empty( $post_types ) ) {

			$wp_rest_api_controller_post_types = array();

			foreach ( $post_types as $post_type_slug => $post_type_name ) {

				add_settings_field(
					"wp_rest_api_controller_post_types_{$post_type_slug}",
					ucwords( $post_type_name ),
					array( $this, 'wp_rest_api_controller_setting_section_setting_callback_function' ),
					'wp-rest-api-controller',
					'wp_rest_api_controller_setting_section',
					array(
						'option_id'      => "wp_rest_api_controller_post_types_{$post_type_slug}",
						'post_type_name' => $post_type_name,
						'post_type_slug' => $post_type_slug,
					)
				);

				register_setting( 'wp-rest-api-controller', "wp_rest_api_controller_post_types_{$post_type_slug}" );
				$wp_rest_api_controller_post_types[] = $post_type_slug;

			}

			update_option( 'wp_rest_api_controller_post_types', $wp_rest_api_controller_post_types );

		}

	}

	public function get_registered_post_types() {

		$post_types = get_post_types();

		// Excluded post types
		foreach( $this->always_enabled_post_type_slugs as $slug ) {
			if ( isset( $post_types[ $slug ] ) ) {
				unset( $post_types[ $slug ] );
			}
		}

		return apply_filters( 'wp_rest_api_controller_post_types', $post_types );
	}

	// ------------------------------------------------------------------
	// Settings section callback function
	// ------------------------------------------------------------------
	public function wp_rest_api_controller_setting_section_callback_function() {

		echo '<p>' . esc_html__( 'Toggle visibility of post types and select meta data to the REST API.', 'wp-rest-api-controller' ) . '</p>';

	}

	// ------------------------------------------------------------------
	// Callback function for our example setting
	// ------------------------------------------------------------------
	public function wp_rest_api_controller_setting_section_setting_callback_function( $args ) {

		$post_type_object = get_post_type_object( $args['post_type_slug'] );

		$rest_base = wp_rest_api_controller::get_post_type_rest_base( $args['post_type_slug'] );

		if ( isset( $post_type_object ) && ! empty( $post_type_object ) ) {

			$singular_name = ( isset( $post_type_object->labels->singular_name ) ) ? $post_type_object->labels->singular_name : $args['post_type_name'];

		} else {

			$singular_name = $args['post_type_name'];

		}

		$options = get_option( $args['option_id'], array(
			'active' => 0,
			'meta_data' => array(),
		) );

		$active_state = ( isset( $options['active'] ) && 1 === absint( $options['active'] ) ) ? true : false;

		$disabled_attr = ( $active_state ) ? '' : 'disabled=disabled';

		$post_type_meta = $this->retreive_post_type_meta_keys( $args['post_type_slug'] );

		?>

		<!-- Display the checkboxes/descriptions -->
		<label class="switch switch-green">
			<input name="<?php echo esc_attr( $args['option_id'] ); ?>[active]" type="checkbox" class="switch-input" onchange="toggleEndpointLink(this);" value="1" <?php checked( 1, $active_state );?>>
			<span class="switch-label" data-on="<?php esc_attr_e( 'Enabled', 'wp-rest-api-controller' ); ?>" data-off="<?php esc_attr_e( 'Disabled', 'wp-rest-api-controller' ); ?>"></span>
			<span class="switch-handle"></span>
		</label>

		<section class="rest-api-endpoint-container<?php if ( ! $active_state ) { echo ' hidden-container'; } ?>">

			<!-- API Endpoint Example -->
			<p class="description">

				<small class="edit-post-type-rest-base-disabled">
					<?php printf( esc_attr( '%s', 'wp-rest-api-controller' ), '<span class="top-right tipso edit-rest-permalink-icon" data-tipso-title="' . esc_attr__( 'REST Endpoint', 'wp-rest-api-controller' ) . '" data-tipso="' . sprintf( esc_attr__( 'Access the %s post type via the REST API at the following URL.', 'wp-rest-api-controller' ), esc_attr( $singular_name ) ) . '"><span class="dashicons dashicons-editor-help"></span></span><a class="endpoint-link" ' . esc_attr( $disabled_attr ) . ' href="' . esc_url( $this->rest_endpoint_base . $rest_base ) . '" target="_blank">' . esc_url( $this->rest_endpoint_base . $rest_base ) ); ?></a>
					<a href="#" onclick="toggleRestBaseVisbility(this,event);" class="button-secondary edit-endpoint edit-endpoint-secondary-btn" class=""><?php esc_attr_e( 'Edit Endpoint', 'wp-rest-api-controller' ); ?></a>
				</small>

				<small class="edit-post-type-rest-base-active" style="display:none;">
					<?php echo esc_url( $this->rest_endpoint_base ); ?>
					<input type="text" onchange="toggleRestBaseInput(this);" data-rest-base="<?php echo esc_url( $this->rest_endpoint_base ); ?>" name="<?php echo esc_attr( $args['option_id'] ); ?>[rest_base]" value="<?php echo esc_attr( $rest_base ); ?>">
					<a href="#" onclick="toggleRestBaseVisbility(this,event);" class="button-secondary save-endpoint edit-endpoint-secondary-btn" class=""><?php esc_attr_e( 'Save New Endpoint', 'wp-rest-api-controller' ); ?></a>
				</small>

				<!-- updated API endpoint notice -->
				<span class="rest-api-endpoint-updated rest-api-controller-warning-notice">
					<span class="dashicons dashicons-info"></span>
					<?php esc_attr_e( 'This endpoint was updated. You need to re-save the settings to access this post type at the endpoint above.', 'wp-rest-api-controller' ); ?>
				</span>

				<!-- Original rest base -->
				<input type="hidden" class="rest-base-original-hidden-input" value="<?php echo esc_url( $this->rest_endpoint_base . $rest_base ); ?>">

				<!-- New rest base -->
				<input type="hidden" class="rest-base-hidden-input" name="<?php echo esc_attr( $args['option_id'] ); ?>[rest_base]" value="<?php echo esc_attr( $rest_base ); ?>">

			</p>

			<!-- End API Endpoint Example -->

		</section>

		<!-- Only if post type meta is assigned here -->
		<?php if ( $post_type_meta && ! empty( $post_type_meta ) ) { ?>
			<section class="post-type-meta-data<?php if ( ! $active_state ) { echo ' hidden-container'; } ?>">
				<table class="widefat fixed rest-api-controller-meta-data-table" cellspacing="0">
					<thead>
						<tr>
							<th id="cb" class="manage-column column-cb check-column" scope="col">&nbsp;</th>
							<th id="columnname" class="manage-column column-columnname" scope="col"><span class="top-right tipso" data-tipso-title="<?php esc_attr_e( 'Meta Key', 'wp-rest-api-controller' ); ?>" data-tipso="<?php esc_attr_e( 'This is the default meta key stored by WordPress.', 'wp-rest-api-controller' ); ?>"><?php esc_attr_e( 'Meta Key', 'wp-rest-api-controller' ); ?></span></th>
							<th id="columnname" class="manage-column column-columnname" scope="col"><span class="top-right tipso" data-tipso-title="<?php esc_attr_e( 'Custom Meta Key', 'wp-rest-api-controller' ); ?>" data-tipso="<?php esc_attr_e( 'Specify a custom meta key to use instead of the default.', 'wp-rest-api-controller' ); ?>"><?php esc_attr_e( 'Custom Meta Key', 'wp-rest-api-controller' ); ?></span></th>
						</tr>
					</thead>
					<tbody>
						<?php
						$x = 1;
						foreach ( $post_type_meta as $meta_key ) {
							$meta_active_state = ( isset( $options['meta_data'][ $meta_key ]['active'] ) ) ? true : false;
							$custom_meta_key = ( isset( $options['meta_data'][ $meta_key ]['custom_key'] ) ) ? $options['meta_data'][ $meta_key ]['custom_key'] : '';
							?>
								<tr class="<?php echo ( 0 === $x % 2 ) ? '' : 'alternate'; ?>">
									<th class="check-column" scope="row">
										<label class="switch small switch-green">
											<input name="<?php echo esc_attr( $args['option_id'] ); ?>[meta_data][<?php echo esc_attr( $meta_key ); ?>][active]" type="checkbox" class="switch-input" onchange="console.log( 'Meta Data toggled' );" value="1" <?php checked( 1, $meta_active_state );?>>
											<span class="switch-label" data-on="<?php esc_attr_e( 'On', 'wp-rest-api-controller' ); ?>" data-off="<?php esc_attr_e( 'Off', 'wp-rest-api-controller' ); ?>"></span>
											<span class="switch-handle"></span>
										</label>
									</th>
									<td><?php echo esc_attr( $meta_key ); ?></td>
									<td>
										<input name="<?php echo esc_attr( $args['option_id'] ); ?>[meta_data][<?php echo esc_attr( $meta_key ); ?>][original_meta_key]" type="hidden" value="<?php echo esc_attr( $meta_key ); ?>">
										<input name="<?php echo esc_attr( $args['option_id'] ); ?>[meta_data][<?php echo esc_attr( $meta_key ); ?>][custom_key]" type="text" value="<?php echo esc_attr( $custom_meta_key ); ?>" placeholder="<?php echo esc_attr( $meta_key ); ?>">
									</td>
								</tr>
							<?php
							$x++;
						}
						?>
					</tbody>
				</table>
			</section>
		<?php } ?>
		<!-- Description -->
		<p class="description"><?php printf( esc_attr__( 'Expose the %s post type to the REST API.', 'wp-rest-api-controller' ), '<code>' . esc_attr( $singular_name ) . '</code>' ); ?></p>
		<?php
	}

	/**
	 * Retreive the meta data assigned to a post, and cache it in a transient
	 * Note: This only retreives meta that has already been stored. If the meta has been
	 * registered, but no post has any meta assigned to it - it will not display.
	 *
	 * @param  string $post_type The post type name to retreive meta data for.
	 * @return array             The array of meta data for the given post type.
	 */
	public function retreive_post_type_meta_keys( $post_type ) {

		if ( WP_DEBUG || false === ( $meta_keys = get_transient( $post_type . '_meta_keys' ) ) ) {

			global $wpdb;
			$query = "
				SELECT DISTINCT($wpdb->postmeta.meta_key)
				FROM $wpdb->posts
				LEFT JOIN $wpdb->postmeta
				ON $wpdb->posts.ID = $wpdb->postmeta.post_id
				WHERE $wpdb->posts.post_type = '%s'
				AND $wpdb->postmeta.meta_key != ''
			";

			$excluded_post_types = apply_filters( 'wp_rest_api_controller_exclude_hidden_meta_keys_post_types', array(
				'product',  // WooCommerce
				'download', // Easy Digital Downloads
			) );

			if ( ! in_array( $post_type, $excluded_post_types ) ) {
				$query .= "AND $wpdb->postmeta.meta_key NOT RegExp '(^[_0-9].+$)'";
				$query .= "AND $wpdb->postmeta.meta_key NOT RegExp '(^[0-9]+$)'";
			}

			$meta_keys = $wpdb->get_col( $wpdb->prepare( $query, $post_type ) );

			set_transient( $post_type . '_meta_keys', $meta_keys, 60 * 60 * 24 ); // create 1 Day Expiration

		}

		return $meta_keys;

	}

	/**
	 * Clear The REST API Controller Transients
	 *
	 * @since 1.0.1
	 */
	public function wp_rest_api_controller_delete_api_cache() {

		if ( isset( $_POST['clear-wp-rest-api-controller-cache'] ) ) {

			if ( ! isset( $_POST['clear_wp_rest_api_controller_cache'] ) || ! wp_verify_nonce( $_POST['clear_wp_rest_api_controller_cache'], 'clear_wp_rest_api_controller_cache' ) ) {

				wp_safe_redirect( add_query_arg( array(
					'api-cache-cleared' => 'false',
				), admin_url( 'tools.php?page=wp-rest-api-controller-settings' ) ) );

				exit;

			} else {

				$post_types = wp_rest_api_controller::get_stored_post_types();

				if ( $post_types && ! empty( $post_types ) ) {

					foreach ( $post_types as $post_type_slug => $post_type_data ) {

						delete_transient( "{$post_type_slug}_meta_keys" );

					}
				}

				wp_safe_redirect( add_query_arg( array(
					'api-cache-cleared' => 'true',
				), admin_url( 'tools.php?page=wp-rest-api-controller-settings' ) ) );

				exit;

			}
		}

	}

}
$settings = new wp_rest_api_controller_Settings();
