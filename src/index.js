module.exports = function longestConsecutiveLength(array) {
	if (array.length === 0) {
		return 0;
	}
 	array.sort( (a, b) => (a - b));
 	let counter = 0;
 	let length = 1;
 	for (let position = 0; position < array.length - 1; position++) {
 		let difference = array[(position + 1)] - array[position];
 		if ( difference === 1) {
 			counter++;
 		} else if (difference === 0) {
 			continue;
 		} else {
 			counter++;
 			if (counter > length) {	
 				length = counter;
 			}
 			counter = 0;
 		}
 	}
 	return length;
}
