var path = require("path");

// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.


module.exports = function(app) {
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, '../data/friends.js'));
	});
	
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
	
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
	
	app.get('*',function (req, res) {
        res.redirect('/');
	});
	
};