/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */


const cross = document.querySelector('.cross');
const toggleContainer = document.getElementById('toggle');

// Init des elements à rendre invisible
toggleContainer.classList.add('hidden');
cross.classList.add('close');


// Dimentionnement du containeur "toggle"

// Fonction pour ajuster en direct la hauteur en fonction de la taille de la fenêtre
function adjustHeight() {
	toggleContainer.style.height = `${window.innerHeight}px`
}

// Ecouteur du resize pour ajuster la hauteur
window.addEventListener('resize', adjustHeight)

// init
adjustHeight();



(function () {
	const siteNavigation = document.getElementById('site-navigation');

	// Return early if the navigation doesn't exist.
	if (!siteNavigation) {
		return;
	}

	const button = siteNavigation.getElementsByTagName('button')[0];

	// Return early if the button doesn't exist.
	if ('undefined' === typeof button) {
		return;
	}


	const menu = siteNavigation.getElementsByTagName('ul')[0];

	// Hide menu toggle button if menu is empty and return early.
	if ('undefined' === typeof menu) {
		button.style.display = 'none';
		return;
	}

	if (!menu.classList.contains('nav-menu')) {
		menu.classList.add('nav-menu');
	}

	// Events each time the button is clicked.
	button.addEventListener('click', function () {
		siteNavigation.classList.toggle('toggled');
		toggleContainer.classList.remove('hidden');
		toggleContainer.classList.add('visible');
		button.classList.toggle('close');
		cross.classList.toggle('close');
		siteNavigation.classList.toggle('open');
		document.body.classList.toggle('overflow');


		if (button.getAttribute('aria-expanded') === 'true') {
			button.setAttribute('aria-expanded', 'false');
		} else {
			button.setAttribute('aria-expanded', 'true');
		}
	});

	// Events each time the cross is clicked.
	cross.addEventListener('click', function () {
		siteNavigation.classList.toggle('toggled');
		toggleContainer.classList.remove('visible');
		toggleContainer.classList.add('hidden');
		button.classList.toggle('close');
		cross.classList.toggle('close');
		siteNavigation.classList.toggle('open');
		document.body.classList.toggle('overflow');


		if (button.getAttribute('aria-expanded') === 'true') {
			button.setAttribute('aria-expanded', 'false');
		} else {
			button.setAttribute('aria-expanded', 'true');
		}
	});

	/* 	// Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.
		document.addEventListener( 'click', function( event ) {
			const isClickInside = siteNavigation.contains( event.target );
	
			if ( ! isClickInside ) {
				siteNavigation.classList.remove( 'toggled' );
				toggleContainer.classList.toggle( 'close' );
				button.classList.toggle( 'close' );
				siteNavigation.classList.toggle( 'open' );
				document.body.classList.toggle( 'overflow' );
				button.setAttribute( 'aria-expanded', 'false' );
			}
		} ); */

	// Get all the link elements within the menu.
	const links = menu.getElementsByTagName('a');

	// Itérer sur chaque lien
	Array.from(links).forEach(function (link) {
		link.addEventListener("click", function () {
			siteNavigation.classList.toggle('toggled');
			toggleContainer.classList.remove('visible');
			toggleContainer.classList.add('hidden');
			button.classList.toggle('close');
			cross.classList.toggle('close');
			siteNavigation.classList.toggle('open');
			document.body.classList.toggle('overflow');
		});
	});

	document.addEventListener('click', function () {


		if (button.getAttribute('aria-expanded') === 'true') {
			button.setAttribute('aria-expanded', 'false');
		} else {
			button.setAttribute('aria-expanded', 'true');
		}
	});



	// Get all the link elements with children within the menu.
	const linksWithChildren = menu.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');

	// Toggle focus each time a menu link is focused or blurred.
	for (const link of links) {
		link.addEventListener('focus', toggleFocus, true);
		link.addEventListener('blur', toggleFocus, true);
	}

	// Toggle focus each time a menu link with children receive a touch event.
	for (const link of linksWithChildren) {
		link.addEventListener('touchstart', toggleFocus, false);
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus(event) {
		if (event.type === 'focus' || event.type === 'blur') {
			let self = this;
			// Move up through the ancestors of the current link until we hit .nav-menu.
			while (!self.classList.contains('nav-menu')) {
				// On li elements toggle the class .focus.
				if ('li' === self.tagName.toLowerCase()) {
					self.classList.toggle('focus');
				}
				self = self.parentNode;
			}
		}

		if (event.type === 'touchstart') {
			const menuItem = this.parentNode;
			event.preventDefault();
			for (const link of menuItem.parentNode.children) {
				if (menuItem !== link) {
					link.classList.remove('focus');
				}
			}
			menuItem.classList.toggle('focus');
		}
	}
}());
