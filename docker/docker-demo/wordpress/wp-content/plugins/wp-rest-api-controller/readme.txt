=== WP REST API Controller ===
Contributors: yikesinc, eherman24, liljimmi, yikesitskevin
Tags: rest, api, endpoint, controller, meta, data, meta_data, toggle, endpoints, rest_base, rest_name, REST API, yikes, inc
Requires at least: 4.7
Tested up to: 4.9.2
Stable tag: 1.4.1
License: GPLv3 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.txt

Enable a UI to toggle visibility and customize properties in WP REST API requests.

== Description ==

WP REST API Controller allows admins to toggle the visibility of, and customize the endpoints for, all *custom* post types within WordPress with an easy-to-use graphical interface. Additionally, you can tweak visibility and customize the meta data attached to the API response.

> **Note:** This plugin requires WordPress Version 4.7 or later to work.

**Features:**

* Enable/Disable REST API endpoints for custom post types
* Enable/Disable custom post type meta data (add or remove meta fields from API requests)
* Rename custom post type base endpoints
* Rename meta data models in API requests, so they are more user friendly.
* Manipulate and control post types and data created by third party plugins and themes.
* Granular control of API responses without writing a single line of PHP code.
* Filters included to alter and extend default functionality.

> **Note:** As of version 1.4.0, this plugin no longer controls default WordPress Posts or Pages.

== Installation ==

1. Download the plugin .zip file and make note of where on your computer you downloaded it to.
2. In the WordPress admin (yourdomain.com/wp-admin) go to Plugins > Add New or click the "Add New" button on the main plugins screen.
3. On the following screen, click the "Upload Plugin" button.
4. Browse your computer to where you downloaded the plugin .zip file, select it and click the "Install Now" button.
5. After the plugin has successfully installed, click "Activate Plugin" and enjoy!
6. Find the WP REST API Controller Settings screen under the **Tools** menu in the WordPress Admin

== Frequently Asked Questions ==

= Can I toggle the visibility of endpoints? =

Yes! You can quickly and easily toggle the endpoints, so they are either accessible or inaccessible to API requests. Using our interface you can enable the post types you need, while disabling the ones you don't.

= Can I alter the default REST endpoints using this plugin? =

No. You can not change the default post (`posts`) and page (`pages`) post type endpoints. You can only control custom post type endpoints.

= Can I alter REST endpoints for post types from other plugins or my theme? =

Yes! Our plugin simply filters the `rest_base` parameter for the custom post type, so you can setup or alter REST endpoints for every custom post type on your site!

= Are all post types customizable using this plugin? =

Our plugin allows you to customize most of the post types within WordPress. However, we have excluded the `posts`, `pages`, `nav_menu_items` and `revisions` post types by default. As WordPress Core continues to develop REST API functionality, these post types may change.

= Can we customize the meta data assigned to post types? =

Yes! Users can enable or disable custom meta data assigned to each post. You can also change the name of the property for each meta data in the API request. If you assign custom meta fields to your posts using [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/), [CMB2](https://wordpress.org/plugins/cmb2/) or `add_meta_box()` you can adjust the visibility, and customize the name, of the property in API requests.

= Is this plugin compatible with the Core WordPress 4.7 REST API? =
Yes! Version 1.3 of this plugin is compatible with WordPress 4.7.

= How do I retrieve repeating postmeta fields? =
A repeating postmeta field is one where there are multiple database entries for a single meta key. The default behavior of this plugin did not deal with these fields correctly (i.e. it only returned the first value). As of v1.4.1, a new filter has been added - `wp_rest_api_controller_retrieve_meta_single` - that allows you to retrieve all of the repeating post meta fields. The reason this was not set as the default behavior is that it changes the data structure of non-repeating fields (i.e. all postmeta values will be returned as arrays). This filter has three parameters: `$single` - the boolean value for returning postmeta as arrays or as single items, `$renamed_meta_key_name` - the renamed name of the meta_key we're retrieving and `$original_meta_key_name` - the original meta key name. These parameters allow you to specifically determine which fields you want returned as arrays. As always, if you have any questions please reach out to us on GitHub or through the WordPress Support forum.

<strong>Note:</strong> All properties in the API request are populated using `get_post_meta()`. If you need to set a custom value, you can use the `wp_rest_api_controller_api_property_value` filter provided by this plugin.

== Screenshots ==

1. WP REST API Controller settings page.

== Changelog ==

= WP REST API Controller v1.4.1 - February 23rd, 2017 =
* A new filter has been added: `wp_rest_api_controller_retrieve_meta_single`. This controls the `$single` argument for the `get_post_meta()` function. Please note: if you want to see all of the values for repeating meta key fields (i.e. multiple entries in the postmeta table corresponding to the same key) you *need to use this filter* and return false. If you don't you will only retrieve the first value. For more information, see the FAQ "How do I retrieve repeating postmeta fields."

= WP REST API Controller v1.4.0 - January 18th, 2017 =
* Default `posts` and `pages` are no longer controllable with this plugin (this change is due to future WordPress Core development leveraging the REST API). As a result, both endpoints will be enabled and all post meta customizations will be lost on update.
* Added array of 'always enabled' posts and an associated filter `wp_rest_api_controller_always_enabled_post_types`. By default, post, page, revision, nav_menu_item, custom_css, customize_changeset, and attachment post types are always enabled.
* Added logic to handle empty post meta names to prevent all post meta fields from being displayed
* Added logic to handle uppercase letters in customized post meta names

= WP REST API Controller v1.3.0 - December 6th, 2016 =
* Refactor code base.
* Repair a few errors.
* Remove additional post types (media, changeset, custom_css).
* Updated plugin compatibility to work alongside WordPress 4.7 and later (REST API now baked into core).

= WP REST API Controller v1.2.0 - July 10th, 2016 =
* Patched issue where all meta keys were returning the same value.
* Bumped version to v1.2.0.

= WP REST API Controller v1.1.0 - July 10th, 2016 =
* Added the ability to clear cache when new post types/meta data have been registered.
* Added admin notices to help clarify what happened.
* Built in support to include hidden meta keys for 'Easy Digital Downloads' and 'WooCommerce' (to enable hidden meta keys on other post types, use the `wp_rest_api_controller_exclude_hidden_meta_keys_post_types` filter.)
* Bumped version number to v1.1.0.

= WP REST API Controller v1.0.0 =
* Initial plugin commit.

== Upgrade Notice ==

= WP REST API Controller v1.3.0 - December 6th, 2016 =
* Refactor code base.
* Repair a few errors.
* Updated plugin compatibility to work alongside WordPress 4.7 and later (REST API now baked into core).
