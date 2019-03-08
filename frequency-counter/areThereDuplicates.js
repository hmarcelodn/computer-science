function areThereDuplicates() {
    // Hash table
    var dic = {}; 

    // Check duplicated values
    for(var i = 0; i <= arguments.length; i++){
        if( !dic[arguments[i]] ){
            dic[arguments[i]] = 1;
        }
        else{
            return true;
        }
    }

    return false;
}

console.log( areThereDuplicates(1,2,3) );
console.log( areThereDuplicates(1,2,2) );
console.log( areThereDuplicates('a', 'b', 'c', 'a') );