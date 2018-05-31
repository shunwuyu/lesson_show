(function( $ ) {
	'use strict';

	/**
	 * All of the code for your admin-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
	jQuery( document ).ready( function() {
		// Check for tooltips, and initialize if they are present
		if ( jQuery( '.tipso' ).length > 0 ) {
			jQuery( '.tipso' ).each( function() {
				var title = jQuery( this ).attr( 'tipso-title' );
				jQuery( this ).tipso({
					speed             : 400,
					background        : '#222222',
					titleBackground   : 'tomato',
					color             : '#ffffff',
					titleColor        : '#ffffff',
					titleContent      : title
				});
			});
		}
		// Clicking a disabled link does nothing
		jQuery( 'body' ).on( 'click', '.endpoint-link[disabled="disabled"]', function() {
			alert( rest_api_controller_localized_admin_data.disabled_notice );
			return false;
		});
	});
})( jQuery );

/**
 * Toggle the end point link disabled attributes
 *
 * @param  mixed checkbox The HTML checkbox that was clicked (passed in using 'this')
 * @return null
 */
function toggleEndpointLink( checkbox ) {
	// checked state
	if ( jQuery( checkbox ).is( ':checked' ) ) {
		jQuery( checkbox ).parents( 'td' ).find( '.endpoint-link' ).removeAttr( 'disabled' );
	} else { // unchecked state
		jQuery( checkbox ).parents( 'td' ).find( '.endpoint-link' ).attr( 'disabled', 'disabled' );
	}
	// Toggle the visibility of the metadata fields
	jQuery( checkbox ).parents( 'td' ).find( '.post-type-meta-data' ).fadeToggle();
	jQuery( checkbox ).parents( 'td' ).find( '.rest-api-endpoint-container' ).fadeToggle();
}

/**
 * Toggle the visibility of the rest base input field and associated 'permalink'
 *
 * @param  mixed HTML element of the clicked button
 * @return null
 */
function toggleRestBaseVisbility( clicked_button, event ) {
	var parent_container = jQuery( clicked_button ).parents( 'td' );
	if ( jQuery( clicked_button ).hasClass( 'save-endpoint' ) ) {
		parent_container.find( '.edit-post-type-rest-base-active' ).fadeTo( 'fast', 0, function() {
			jQuery( this ).hide();
			parent_container.find( '.edit-post-type-rest-base-disabled' ).fadeTo( 'fast', 1 );
		});
	} else {
		parent_container.find( '.edit-post-type-rest-base-disabled' ).fadeTo( 'fast', 0, function() {
			jQuery( this ).hide();
			parent_container.find( '.edit-post-type-rest-base-active' ).fadeTo( 'fast', 1 );
		});
	}
	event.preventDefault();
}

/**
 * Populate the new reset base with the slug for this post type
 *
 * @param  mixed HTML value input for the new rest base
 * @return null
 * @since 1.0.0
 */
function toggleRestBaseInput( input_field ) {
	var parent_container = jQuery( input_field ).parents( 'td' );
	var new_text = convert_string_to_slug( jQuery( input_field ).val() );
	var rest_base = jQuery( input_field ).data( 'rest-base' );
	/* If left empty, fallback */
	if ( '' === new_text ) {
		var original_rest_base = parent_container.find( '.rest-base-hidden-input' ).val();
		jQuery( input_field ).val( original_rest_base );
		parent_container.find( '.endpoint-link' ).attr( 'href', rest_base + original_rest_base ).text( rest_base + original_rest_base );
		return;
	}
	var original_rest_base_url = parent_container.find( '.rest-base-original-hidden-input' ).val();
	var new_endpoint_url = rest_base + new_text;
	// If the new rest base URL has been updated, display our notice to let the user know settings need to be re-saved
	if ( original_rest_base_url != new_endpoint_url ) {
		parent_container.find( '.rest-api-endpoint-updated' ).fadeIn().css( 'display', 'block' );
	} else {
		parent_container.find( '.rest-api-endpoint-updated' ).fadeOut();
	}
	// re-populate the permalink style link -- not working
	parent_container.find( '.endpoint-link' ).attr( 'href', new_endpoint_url ).text( new_endpoint_url );
	parent_container.find( '.rest-base-hidden-input' ).val( new_text );
	// update the text input field with the new sanitized endpoint base
	setTimeout( function() {
		jQuery( input_field ).val( new_text );
	}, 200);
}

/**
 * Remove invalid characters from the slug (similar to sanitize_title() core function)
 * @param  string str String to be sanitized before saving.
 * @return string     The new, cleaned, string to be used for the API endpoint.
 */
function convert_string_to_slug( str ) {
	str = str.replace(/^\s+|\s+$/g, ''); // trim
	str = str.toLowerCase();

	// remove accents, swap ñ for n, etc
	var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
	var to   = "aaaaeeeeiiiioooouuuunc------";

	for (var i=0, l=from.length ; i<l ; i++)
	{
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
		.replace(/\s+/g, '-') // collapse whitespace and replace by -
		.replace(/-+/g, '-'); // collapse dashes

	return str;
}
