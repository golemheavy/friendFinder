let path = require("path");

let friendData = require("../data/friends.js");
//should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

module.exports = function(app) {
	
	function distance(arr) {
		let distSquared = 0;
		for (let x in arr) {
			distSquared += Math.pow(arr[x],2);
		}
		return Math.sqrt(distSquared);
	}
	
	function rankMatches(scoresArr) {
		
		return friendData.friendsArr.map(x => {
			
			let difArr = [];
			for (let z in x.scores) {
				difArr.push(Math.abs(x.scores[z] - scoresArr[z]));
			}
			return difArr;
			//return x.scores.map((y, index) => {return Math.abs(y - scoresArr[index]);});
		});
		
		/*
		return distArr.map(a => {
			let sumD = 0;
			for (b in a) {
				sumD += parseInt(b);
			}
			return sumD;
		});
		*/
			
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
		let difArr = rankMatches(req.body.scores);
		let distArr = [];
		console.log("\n\tnames and distance:\n");
		for (let x in difArr)
		{
			dist = distance(difArr[x]);
			console.log("user distance from " + friendData.friendsArr[x].name + "\t" + difArr[x] + "\t=>\t" + dist);
			distArr.push([friendData.friendsArr[x].name, dist]);
		}
		//rankMatches(req.body.scores);
		console.log("\nassuming total orthogonality of measured personality dimensions, total distance array:");
		console.log(distArr);
		// need to sort array and then output results to page.
		console.log(distArr.sort(function(a,b){return a[1] - b[1]}));
		
		
		
	});
};