function validAnagram(word1, word2){
    // Two hash tables
    var dict1 = {};
    var dict2 = {};

    // Chars from first word
    for(var char of word1){
        if(!dict1[char]){
            dict1[char] = 1;
        }
        else{
            dict1[char]++;
        }
    }
    
    // Chars from second word
    for(var char of word2){
        if(!dict2[char]){
            dict2[char] = 1;
        }
        else{
            dict2[char]++;
        }
    }
    
    // Check if all chars are included in second word
    for(var k in dict1){
        if(!dict2[k] || dict1[k] !== dict2[k]){
            return false;
        }
    }

    // Check if all chars are included in first world
    for(var k in dict2){
        if(!dict1[k] || dict1[k] !== dict2[k]){
            return false;
        }
    }    
    
    return true;    
}

// Test cases
console.log(validAnagram('', ''));
console.log(validAnagram('abc', 'cba'));
console.log(validAnagram('abc', 'abcd'));