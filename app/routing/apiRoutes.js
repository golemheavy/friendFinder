var path = require("path");

var friendData = require("../data/friends.js");
//should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

module.exports = function(app) {
	
	function rankMatches(scoresArr) {
		
		return friendData.friendsArr.map(x => {
			return x.scores.map((y, index) => {return Math.abs(y - scoresArr[index]);});
		});
	}
	
	app.get("/api/friends", function(req, res) {
		//res.sendFile(path.join(__dirname, '../data/friends.js'));
		res.json(friendData);
	});
	
	app.post("/api/friends", function(req, res) {
		// ingest survey results, and handle matching logic
		// push req.body into object and rewrite whole file
		// friendData.friendsArr.push(req.body); this works but is not needed because we are not going to add user to friends data object
		//res.json(true);
		//console.log(req.body.scores);
		console.log(rankMatches(req.body.scores));
		//rankMatches(req.body.scores);
		
	});
};