function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;

    while(i < str1.length && j < str2.length){
        if( str1.charAt(i) === str2.charAt(j) ){
            i++;
            j++;
        }
        else{
            j++;
        }
    }

    if(i === str1.length) return true;

    return false;
}

var a = isSubsequence('hello', 'hello world');
var b = isSubsequence('sing', 'sting');
var c = isSubsequence('abc', 'acb');

console.log(a);
console.log(b);
console.log(c);