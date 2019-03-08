// O(N+M)
function validAnagram(word1, word2){
    // add whatever parameters you deem necessary - good luck!
    var dict1 = {};
    var dict2 = {};

    // Chars in Word1
    for(var char of word1){
        if(!dict1[char]){
            dict1[char] = 1;
        }
        else{
            dict1[char]++;
        }
    }
    
    // Chars in Word2
    for(var char of word2){
        if(!dict2[char]){
            dict2[char] = 1;
        }
        else{
            dict2[char]++;
        }
    }
    
    // Valid Anagram First Comparison
    for(var k in dict1){
        if(!dict2[k] || dict1[k] !== dict2[k]){
            return false;
        }
    }

    // Valid Anagram Second Comparison
    for(var k in dict2){
        if(!dict1[k] || dict1[k] !== dict2[k]){
            return false;
        }
    }    
    
    return true;    
}

console.log(validAnagram('', ''));
console.log(validAnagram('abc', 'cba'));
console.log(validAnagram('abc', 'abcd'));