<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'foce-style' , get_stylesheet_directory_uri() . '/style.css' );
    wp_enqueue_script( 'foce-style' , get_stylesheet_directory_uri() . '/js/animation.js',[],'', true,);
    wp_enqueue_script( 'foce-slider' , get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-element-bundle.min.js' );
    wp_enqueue_script( 'foce-navigation' , get_stylesheet_directory_uri() . '/js/navigation.js', [],'', true );
}



// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}