function fizzBuzz(n) {
    
    // loop from 1 to n
    for(let i = 1; i <= n; i++) {

        // create an empty output string
        let strOutput = "";

        // check if `i` is a multiple of 3
        if(i%3 === 0) {
            // append Fizz to the output string
            strOutput += "Fizz";
        }

        // check if `i` is a multiple of 5
        if(i%5 === 0) {
            // append Buzz to the output string
            strOutput += "Buzz";
        }

        // log either the output string, or the number if strOutput is empty
        console.log(strOutput ? strOutput : i);
    }
}

fizzBuzz(15);