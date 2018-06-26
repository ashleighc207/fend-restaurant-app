navigator.serviceWorker.register('./sw.js').then(function(reg) {
	console.log("Registration Successful..");
}).catch(function(err){
	console.log("Error:", err);
});
