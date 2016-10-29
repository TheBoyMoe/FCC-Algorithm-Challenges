/**
 * Created by theboymo on 26/10/16.
 */

// 1. reverse string
function reverseString(str) {

    var temp = "";
    for (var i = str.length - 1; i >=0; i--) {
        temp += str[i];
    }

    return temp;
}

//reverseString("hello");


// 2. factorialize a number - return a factorial of the provided number
// factorial - product of all positive ints <= to the number
// References:
// [1] https://medium.freecodecamp.com/how-to-factorialize-a-number-in-javascript-9263c89a4b38#.qwci3jxha

function factorialize(num) {

    if (num === 0 || num === 1) {
        return 1;
    }

    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }

    return num;
}

// 3. palindrome - return true if the string is a palindrome
// remove all spaces/punctuation and set to lowercase first
// References:
// [1] https://medium.freecodecamp.com/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7#.w8j2z97z0

function palindrome(str) {
    var alphaNumericStr = str.toLowerCase();
    var expression = /[^a-z0-9]/g;
    alphaNumericStr = alphaNumericStr.replace(expression, ''); // exclude everything that is not a-z 0-9

    // convert the string to an array, reverse it, turn ite back to a string
    var reverseStr = alphaNumericStr.split('').reverse().join('');

    return alphaNumericStr === reverseStr; // compare the two strings
}

// 4. find the longest word in a string
// References
// [1] https://medium.freecodecamp.com/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c#.577r7scbc

function findLongestWord(str) {

    var wordList = str.split(" ");
    var letterCount = 0;

    for (var i = 0; i <= wordList.length - 1; i++) {
        if (wordList[i].length > letterCount) {
            letterCount = wordList[i].length;
        }
    }

    return letterCount;
}


// 5. Capitalize the first letter of every word of a string
// References
// [1] https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27#.n8g2y2f5j

function titleCase(str) {

    var wordList = str.toLowerCase().split(' '); // split the str into an array of lowercase words
    var capital = "";
    var word = "";
    for (var i = 0; i <= wordList.length - 1; i++) {
        // convert the first letter of every word to upper case
        capital = wordList[i].charAt(0).toUpperCase();
        // capture the word minus the 1st char
        word = wordList[i].slice(1);
        // put them back
        wordList[i] = capital + word;
    }
    // convert the array back to string
    str = wordList.join(' ');

    return str;
}


// 6. return largest number from each array - passing in an array containing arrays of numbers
// References
// [1] https://medium.freecodecamp.com/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1#.c2fp3g2wj
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function largestOfFour(arr) {

    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        var count = 0;
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > count) {
                count = arr[i][j];
            }
        }
        newArray.push(count); // replace the current array
    }

    return newArray;
}

// 7. check if a string ends with a given target using one of the subString() methods
// confirmEnding("Bastian", "n");

function confirmEnding(str, target) {
    // grab the end char(s) from str that match the target's length, compare the two
    var targetLength = target.length;
    var stringSubSection = str.substr(str.length - targetLength);

    return stringSubSection === target;
}

// 8. Repeat a string, n times
// repeatStringNumTimes("abc", 3);

function repeatStringNumTimes(str, num) {
    if (num < 0) {
        return "";
    }

    var tempArray = [];
    for (var i = 0; i < num; i++) {
        tempArray.push(str);
    }

    return tempArray.join('');
}

// 9. Truncate a string - if it is longer than the 2nd arg value
// truncateString("A-tisket a-tasket A green and yellow basket", 11);

function truncateString(str, num) {
    var strLength = str.length;
    if (strLength > num) {
        if (num <= 3) {
            str = str.slice(0, num) + "...";
        } else {
            str = str.slice(0, (num - 3)) + "...";
        }
    }

    return str;
}

// 10. Take an array and turn it into a two-dimensional array, combine elements in the first array based on the 2nd arg num
// References
// [1] https://ironion.com/blog/2015/12/22/bonfire-chunky-monkey-solution/
// chunkArrayInGroups(["a", "b", "c", "d"], 2);

function chunkArrayInGroups(arr, size) {
    if (size <= 1) {
        return arr;
    }
    var temp = [];

    while (arr.length) {
        temp.push(arr.splice(0, size));
    }

    return temp;

}

// 11. chop off n chars from the head of an array
// it doesn't always pay to be first
// slasher([1, 2, 3], 2);

function slasher(arr, howMany) {
    if (howMany <= 0) {
        return arr;
    }
    var temp = [];
    if (arr.length > howMany) {
        // arr.splice(howMany); // returns deleted elements
        temp = arr.slice(howMany);
    }

    return temp;
}

// 12. Mutations - compare the two letters in the two elements in an array-  return true if all the
// letters found in the 2nd string are found in the first
// mutation(["hello", "hey"]);

function mutation(arr) {

    // var secondString = arr.pop().toLowerCase().split('').sort().join('');
    var secondString = arr.pop().toLowerCase();
    var firstString = arr.pop().toLowerCase();
    var count = secondString.length;

    var matchCount = 0;
    for (var i = 0; i < count; i++) {
        var char = secondString[i];
        for (var j = 0; j < firstString.length; j++) {
            if (firstString[j] === char) {
                console.log('found char match: ' + char);
                matchCount++;
                break; // stop found match for that letter
            }
        }
    }

    return count === matchCount;
}


// 13. Falsy - remove all 'falsy' values from an array
// false, null, 0, "", undefined, and NaN
// bouncer([7, "ate", "", false, 9]);

function bouncer(arr) {
    return arr.filter(function (val) {
        if (typeof val === 'string' || typeof val === 'number' || val === true) {
            return val;
        }
    });
}


// 14. remove all values from the array that match any arguments supplied
// destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// References
// [1] http://stackoverflow.com/questions/960866/how-can-i-convert-the-arguments-object-to-an-array-in-javascript
// [2] http://stackoverflow.com/questions/34676822/remove-all-elements-from-the-initial-array-that-are-of-the-same-value-as-the-arg

function destroyer(arr) {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }
    args.splice(0, 1); // remove the initial array from args

    // DOESN'T WORK - causes infinite loop
    // for (var l = 0; l < args.length; l++) {
    //     var val = args[l];
    //     // iterate over the initial array, comparing tha arg values against
    //     // the initial array and removing any duplicates
    //     for (var m = 0; m < initialArray.length; m++) {
    //         if (val === initialArray[m]) {
    //             initialArray.splice(m, 1); // remove the item at that position
    //         }
    //     }
    //
    // }

    return arr.filter(function (value) {
        // iterate over the array, comparing tha arg values against it's values, ignoring any matches
        return args.indexOf(value) === -1; // keep values that DONT match
    });
}


// 15. Return the lowest index at which a value (second argument) should be inserted into an
// array (first argument) once it has been sorted. The returned value should be a number.
// References
// [1] http://stackoverflow.com/questions/31213738/function-to-sort-an-array-insert-a-value-into-that-array-and-return-the-lowest
// [2] http://stackoverflow.com/questions/38872263/how-do-i-find-the-array-position-in-which-an-integer-should-be-inserted-in-javas
// [3] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// getIndexToIns([40, 60], 50);

function getIndexToIns(arr, num) {
    // add num to the end of the array
    arr.push(num);

    // sort the number array's in ascending order
    arr.sort(function(a,b){return a-b;});

    // return the index of num in the sequence
    return arr.indexOf(num);

}

// 16. Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Based on the Caesars Cipher -shift cipher the meanings of the letters are shifted by some set amount.
//rot13("SERR PBQR PNZC");

function rot13(str) { // decode the string
    // A    B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V   W   X   Y   Z
    // 65   66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90
    // convert to unicode chars between 65 - 90, pass the others through unchanged
    // any char >= 65 & <= 77 => +13
    // any char >= 78 & <= 90 => -13
    // all others ignore and pass through
    var unicodeList = [];
    for (var i = 0; i < str.length; i++) {
        var val = str.charCodeAt(i);
        if (val >= 65 && val <= 77) {
            unicodeList.push(val + 13);
        } else if (val >= 78 && val <= 90){
            unicodeList.push(val - 13);
        } else {
            unicodeList.push(val);
        }
    }

    // covert the unicode chars back to string
    var stringList = [];
    for (var j = 0; j < unicodeList.length; j++) {
        stringList.push(String.fromCharCode(unicodeList[j]));
    }

    return stringList.join('');
}


// ADDITIONAL - get a users geo location from the browser's Navigator object
// every browser has a navigator obj that returns the users long and lat coords

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        $("#data").html("latitude: " + position.coords.latitude +
            "<br>longitude: " + position.coords.longitude);
    });
}
