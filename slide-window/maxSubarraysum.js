function maxSubarraySum(arr, len){
    var i = 0;
    var j = 0;
    var acum = 0;
    var max = 0;

    if(len > arr.length) return null;

    // First Sum
    while(j < len){
        acum += arr[j];
        j++;
    }

    max = acum;

    // Slide Window
    while(j < arr.length){
        acum = acum - arr[i] + arr[j];
        
        if(acum > max) max = acum;

        i++;
        j++;
    }

    return max;
}

var a = maxSubarraySum([100, 200, 300, 400], 2);

console.log(a);