
function printVowels(string){
    var vowels = ['a','e','i','o','u','A','E','I','O','U'];
    var stringToArray =string.split("");
    var vowelArr = [];
    var consonants =[];
    for (var i in stringToArray) {
      if (vowels.includes(stringToArray[i])){
        vowelArray.push(stringToArray[i]);
      } else {consonants.push(stringToArray[i]);
      }
    }
    console.log(vowelArray);
    } 
    printVowels(anyword);
    
    