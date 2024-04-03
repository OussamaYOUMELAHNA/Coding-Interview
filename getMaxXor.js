function getMaxXor (n) {
    if ( n % 4 !== 0 ) return null
    
    // Get Possible Values
    let x = n ;
    const possbileValues = [];
    while (true) {
        if( n.toString(2).length === x.toString(2).length ){
            possbileValues.push(x);
            x++;
        }else{
            break;
        }
    }
    // -------------

    let v = n;
    let binResult = "";
    const results = [];

    possbileValues.forEach( (i, index) => {
        if (index == 0) results.push(v); // add first element to results
        binResult = ""; // Make binResult variable empty

        const bin1 = v.toString(2); // Convert To Binary
        const bin2 = (i+1).toString(2); // Convert To Binary

        
        if (bin1.length === bin2.length) { // Compare Between First and Second Binary
            for (let i = 0; i < n.toString(2).length; i++) { // loop through element in binary string
                // Creating Binary String
                if (bin1[i] == bin2[i]) binResult += "0";  // if first element of binary1 is equal to first element of binary2 we add a '0' to our binary String (binResult) 
                else binResult += "1"; //if not we add '1'
            }
            v = binResult; // assign value of binResult to the v variable 
            results.push(parseInt(binResult, 2)) // Convert binary to number and push it to results array
        }
    })

    // Logic of  "The maximmum value of v is achieved when x = ?"
    let maxIndex = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i] > results[maxIndex]) maxIndex = i
    }
    return possbileValues[maxIndex] 
}
console.log(getMaxXor(12));