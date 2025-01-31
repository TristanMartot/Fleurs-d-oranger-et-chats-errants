<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
		<nav id="site-navigation" class="main-navigation">
            <div class="div_button">
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button> 
                <div class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></div>
                <div class="cross"><img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/cross.png'; ?> " alt="Bouton de fermeture du menu"></div>
            </div>  

            <div id="toggle">
                <div class="menu_container">
                        <div class="logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/logo_small.png'; ?> " alt="logo Fleurs d'oranger & chats errants"></a></div>
                        <div class="menu">
                            <ul>
                                <li><a href="#story">Histoire</a></li>
                                <li><a href="#characters">Personnages</a></li>
                                <li><a href="#place">Lieu</a></li>
                                <li><a href="#studio">Studio Koukaki</a></li>
                            </ul>
                        </div>
                        <div class="bottom_menu"><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Studio Koukaki</a></div>
                </div>
            </div>    

		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
