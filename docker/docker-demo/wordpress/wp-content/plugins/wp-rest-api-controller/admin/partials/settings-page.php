<?php
$kses_filter = array(
	'input' => array(
		'type' => array(),
		'name' => array(),
		'id' => array(),
		'class' => array(),
		'value' => array(),
		'pmbx_context' => array(),
	),
);
$clear_api_cache_button = get_submit_button( __( 'Clear Cache', 'wp-rest-api-controller' ), 'secondary', 'clear-wp-rest-api-controller-cache' );
$save_settings_button   = get_submit_button( __( 'Save Settings', 'wp-rest-api-controller' ), 'primary', 'save-wp-rest-api-controller-settings' );
?>

<h2><?php esc_html_e( 'WP REST API Controller Settings', 'wp-rest-api-controller' ); ?></h2>

<form method="POST" action="options.php">
	<?php

		settings_fields( 'wp-rest-api-controller' );

		do_settings_sections( 'wp-rest-api-controller' );

		wp_nonce_field( 'clear_wp_rest_api_controller_cache', 'clear_wp_rest_api_controller_cache' );

		echo wp_kses_post( '<div class="submit-buttons">' );

			echo wp_kses( $save_settings_button, $kses_filter );

			echo '<span class="top-right tipso delete-rest-api-cache-tipso" data-tipso-title="' . esc_attr__( 'Delete REST API Cache', 'wp-rest-api-controller' ) . '" data-tipso="' . esc_attr__( 'Clear the WP REST API Cache stored in this plugin. If you recently registered a new post type, or assigned new meta data to a post - click this to update the lists above.', 'wp-rest-api-controller' ) . '">';

				echo wp_kses( $clear_api_cache_button, $kses_filter );

			echo '</span>';

		echo wp_kses_post( '</div>' );

	?>
</form>
