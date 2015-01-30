var homeController = function(server){

	server.route('/')
	.get(function(req, res){
		res.render('login');
	});

	server.route('/login')
	.post(function(req, res){
		console.log('logeando..');
	});
};

module.exports = homeController;