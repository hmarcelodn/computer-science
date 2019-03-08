function averagePair(arr, avg){
    var i = 0;
    var j = arr.length;

    while(i < j){
        var calcAvg = (arr[i] + arr[j]) / 2;

        if(calcAvg === avg) return true;

        if(calcAvg < avg){
            i++;
        }
        else{
            j--;
        }
    }

    return false;
}

console.log( averagePair([1, 2, 3], 2.5) );