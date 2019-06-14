// in the file create a new function called "average"
// It should take a single parameter: an array of test scores (all numbers)
// It should return the average score in the array, rounded to the nearest whole number

function average(scoresArray) {
    var scoresAggregate = 0;

    for (var i = 0; i < scoresArray.length; i++) {
      scoresAggregate += Number(scoresArray[i]);
	}
	
	console.log(Math.round(scoresAggregate/scoresArray.length));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores); // should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2); // should return 68
