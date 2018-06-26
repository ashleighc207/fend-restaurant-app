var staticCacheName = 'foodie-cache-v5';

self.addEventListener('install', function (event) {
	event.waitUntil(caches.open(staticCacheName).then(function (cache) {
		return cache.addAll([
			'/fend-restaurant-app/',
			'/fend-restaurant-app/index.html',
			'/fend-restaurant-app/index.html',
			'/fend-restaurant-app/js/main.js',
			'/fend-restaurant-app/js/index.js',
			'/fend-restaurant-app/css/styles.css',
			'/fend-restaurant-app/img/sushi-king.jpg',
			'/fend-restaurant-app/img/ginos.jpg',
			'/fend-restaurant-app/img/honey-pig.jpg',
			'/fend-restaurant-app/img/royal-taj.jpg',
			'/fend-restaurant-app/img/pizza-sauce.jpg',
			'/fend-restaurant-app/img/pho-pasteur.jpg',
			'/fend-restaurant-app/img/spice-dice.jpg',
			'/fend-restaurant-app/img/birroteca.jpg',
			'/fend-restaurant-app/img/andy-nelsons.jpg',
			'/fend-restaurant-app/img/thb.jpg',
			'/fend-restaurant-app/img/favicon.png'
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
