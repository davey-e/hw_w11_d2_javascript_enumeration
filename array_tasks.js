const arrayTasks = {

	concat: function (arr1, arr2) {
    newArray = [];
    return newArray.concat(arr1, arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
    arrayLeft = arr.slice(0, index);
    arrayRight = arr.slice(index, arr.length);
    arrayLeft.push(itemToAdd);
    return arrayTasks.concat(arrayLeft, arrayRight);
	},

	square: function (arr) {
    return arr.map(function(item){
      return item ** 2;
    });
	},

	// sum: function (arr) {

	// },

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
