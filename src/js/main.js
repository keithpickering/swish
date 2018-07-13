AOS.init({
	duration: 1000
});

var scroll = new SmoothScroll('a[href*="#"]', {
	easing: 'easeInOutQuad',
	speed: 1000,
	offset: 48
});

var slider = tns({
	container: '.testimonials',
	items: 1,
	slideBy: 1,
	controls: false,
	autoplayButtonOutput: false,
	autoplay: true,
	speed: 1000,
	edgePadding: 24,
	responsive: {
		500: {
			edgePadding: 48
		},
		800: {
			items: 2
		},
		1200: {
			items: 3
		}
	}
});