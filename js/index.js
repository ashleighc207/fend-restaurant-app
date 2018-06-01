if(navigator.serviceWorker){
	navigator.serviceWorker.register('/sw.js').then(function(reg){
		console.log('Registration Successful');
	}).catch(function(err){
		console.log('There was an error:', err);
	});
}


