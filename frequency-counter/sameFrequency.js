// O(N+M)
function sameFrequency(num1, num2){
    // Hash tables
    arr1 = {};
    arr2 = {};

    strNum1 = num1.toString();
    strNum2 = num2.toString();

    // Count chars in string
    for(var c of strNum1){
        if(!arr1[c]){
            arr1[c] = 1;
        }
        else{
            arr1[c]++;
        }
    }

    // Count chars in string
    for(var c of strNum2){
        if(!arr2[c]){
            arr2[c] = 1;
        }
        else{
            arr2[c]++;
        }        
    }

    // Check frequencies
    for(var k in arr1){
        if( arr1[k] !== arr2[k] ){
            return false;
        }
    }
    
    return true;
}

console.log(
    sameFrequency(123, 123)
);