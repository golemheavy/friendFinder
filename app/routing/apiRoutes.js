let distance = require('euclidean-distance'); // this is to find the distances from user's response vetor and that of all the potential friends in the datastore, in order to determine the closest

let friendData = require("../data/friends.js");

module.exports = function(app) {
	
	app.get("/api/friends", function(req, res) {
		res.json(friendData);
	});
	
	app.post("/api/friends", function(req, res) {
		// ingest survey results, and handle matching logic
		
		// note: we could push req.body into object and/or append it to the friends object in the data store file, if we wanted to save the user's inputed data
		// friendData.friendsArr.push(req.body); this works but is not needed because we are not going to add user to friends data object
		
		let distArr = [];
		for (let x in friendData.friendsArr)
		{
			let dist = distance(req.body.scores, friendData.friendsArr[x].scores);
			distArr.push([friendData.friendsArr[x].name, dist, x]);
		}
		console.log("\nassuming total orthogonality of measured personality dimensions, measuring distance using n-dimensional euclidean distance, where n is the number of questions in the personality inventory.");
		console.log("total distance array:\n");
		let sortedArr = distArr.sort(function(a,b){return a[1] - b[1]});
		console.log(sortedArr);
		res.send({
			name: sortedArr[0][0],
			photo: friendData.friendsArr[sortedArr[0][2]].photo,
			score: sortedArr[0][1]
			});
	});
};