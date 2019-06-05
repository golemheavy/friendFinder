//should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		//display all people in ./app/data/friends.js
	});
	
	app.post("/api/friends", function(req, res) {
		// ingest survey results, and handle matching logic
	});
};