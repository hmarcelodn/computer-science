function countUniqueValues(arr){
    var i = 0;
    var j = 1;

    if(arr.length == 0) return 0;
    
    while(j < arr.length){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j];
        }
        
        j++;
    }
    
    return i + 1;
}

console.log( countUniqueValues( [1, 1, 1, 1, 1, 2] ) );
console.log( countUniqueValues( [] ) );