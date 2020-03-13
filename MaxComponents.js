function getMaxComponents(components, minLength, maxLength, maxUnique) {

	// check if components has the correct characters
	let regex = /[^A-z]/g;
	if(components.match(regex)) {
		return "Failure: Invalid characters used as components, only use A-z";
	}

	// create an object to store substring counts
	let SubCounter = {};

	// loop through for each character in components
	for(let i = 0; i < components.length; i++) {

		// get the remaining component string, excluding the previous characters
		let RemainingSubstring = components.substring(i);
		// get the length of the remaining string
		let RemainingLength = RemainingSubstring.length;

		// loop through for each character in the remaining string
		for(let r = 0; r < RemainingLength; r++) {

			// create the substring using the calculated length
			let sub = RemainingSubstring.substring(0, r + 1);

			// check if the substring is of the correct length
			if(sub.length < minLength || sub.length > maxLength) {
				continue;
			}

			// check if an entry in SubCounter already exists
			// and check if the count is less than the maximum unique substrings
			if(SubCounter[sub] && SubCounter[sub].count < maxUnique) {
				// increase the substring counter
				SubCounter[sub].count++;
				continue;
			}

			// initialize a new object counter for the substring,
			// as one doesn't already exist
			SubCounter[sub] = {count: 1};
		}
	}

	// create a variable to store the Maximum occuring substring count
	let MaxCurrent = 0;

	// Loop through each entry in the SubCounter object
	for(let key in SubCounter) {
		// get the Component object for the current substring
		let Component = SubCounter[key];

		// check if the Component substring count is bigger than the previous max set
		if(Component.count > MaxCurrent) {
			// set the MaxCurrent to the Components substring count,
			// as it is bigger than the previously set value
			MaxCurrent = Component.count;
		}
	}

	// return the highest Component count we found in the SubCounter object
	return MaxCurrent;
}

// set variables to run the function
let components = "abcdefgab";
let minLength = 2;
let maxLength = 4;
let maxUnique = 3;

// Get the max occuring component
let Result = getMaxComponents(components, minLength, maxLength, maxUnique);

// Log the result
console.log(Result);