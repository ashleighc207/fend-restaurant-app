var staticCacheName = 'foodie-cache-v5';

self.addEventListener('install', function (event) {
	event.waitUntil(caches.open(staticCacheName).then(function (cache) {
		return cache.addAll([
			'/',
			'/fend-restaurant-app/',
			'/fend-restaurant-app/index.html',
			'/index.html',
			'/js/main.js',
			'/js/index.js',
			'/css/styles.css',
			'/img/sushi-king.jpg',
			'/img/ginos.jpg',
			'/img/honey-pig.jpg',
			'/img/royal-taj.jpg',
			'/img/pizza-sauce.jpg',
			'/img/pho-pasteur.jpg',
			'/img/spice-dice.jpg',
			'/img/birroteca.jpg',
			'/img/andy-nelsons.jpg',
			'/img/thb.jpg',
			'/img/favicon.png'
		]).catch(function (err) {
			console.log("Error: ", err);
		});
	}));
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			if (response) return response;
			return fetch(event.request);
		})
	);
});
