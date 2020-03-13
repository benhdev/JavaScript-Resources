function maxSubstring(s) {
    // create an array to store the substrings
    let substrings = [];

    // loop through for each character in the string
    for(let i = 0; i < s.length; i++) {

        // get the remaining string, excluding the characters before the current
        let remainingString = s.substring(i);
        // get the length of the remaining string
        let remainingLength = remainingString.length;

        // loop through each remaining character after the current
        // This loop will get all of the possible substrings
        for(let r = 0; r < remainingLength; r++) {
            // calculate the length of the required substring
            let subLength = r + 1;
            // create the remaining substring 
            let sub = remainingString.substring(0, subLength);

            // push the substring to the array
            substrings.push(sub);
        }
    }

    // sort the array in ascending alphabetical order
    substrings.sort();

    // return the last item from the array
    return substrings.pop();
}