// ALGO ANSWERS
// [1] https://github.com/Rafase282/My-FreeCodeCamp-Code
// [2] https://www.gorkahernandez.com/blog/fcc-bonfire-series-index/
// [3] https://daarons.tumblr.com/
// [4] http://daarons.com/category/freecodecamp/

/*
 We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

 The lowest number will not always come first.
 */

    function sumAll(arr) {
        if (arr.length < 2) return arr[0];

        var min = arr[0] < arr[1] ? arr[0] : arr[1] ;
        var max = arr[1] > arr[0] ? arr[1] : arr[0];

        //console.log('min: ' + min + ', max: ' + max);
        var sum = 0;
        for(var i = min; i <= max; i++) {
            sum += i;
        }
        return sum;
    }


/*
 Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
 In other words, return the symmetric difference of the two arrays.

 References:
 [1] http://stackoverflow.com/questions/1187518/javascript-array-difference
*/

    function diffArray(arr1, arr2) {
        var newArr = [];
        // compare arr1 v arr2, saving values that are in arr1 and not arr2
        // for(var i = 0; i < arr1.length; i++) {
        //     if (arr2.indexOf(arr1[i]) === -1) {
        //         newArr.push(arr1[i]);
        //     }
        // }

        arr1.filter(function (value) {
            if (arr2.indexOf(value) === -1) {
                newArr.push(value);
            }
        });

        // compare arr2 v arr1, saving values that are in arr2 not in arr1
        // for(var j = 0; j < arr2.length; j++) {
        //     if (arr1.indexOf(arr2[j]) === -1) {
        //         newArr.push(arr2[j]);
        //     }
        // }

        arr2.filter(function (value) {
            if (arr1.indexOf(value) === -1) {
                newArr.push(value);
            }
        });

        return newArr;
    }


/*
 Convert the given number into a roman numeral.

 All roman numerals answers should be provided in upper-case.

 References:
 [1] http://www.mathsisfun.com/roman-numerals.html
 [2] http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
 [3] http://www.w3resource.com/javascript-exercises/javascript-math-exercise-21.php
 [4] http://codereview.stackexchange.com/questions/36664/number-to-roman-numeral
 [5] https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki/Bonfire-Roman-Numeral-Converter

*/

    function convertToRoman(num) {

        if (typeof num !== 'number') return false;

        // var lookup = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1},
        //     roman = '',
        //     i;
        // for ( i in lookup ) {
        //     while ( num >= lookup[i] ) {
        //         roman += i;
        //         num -= lookup[i];
        //     }
        // }

        // var lookup = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X',
        //                 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC', 100: 'C',
        //                 200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM'};

        //var decimalArray = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
        //var romanArray = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
        var decimalArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var romanArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        var roman = '';

        for (var i = 0; i < decimalArray.length; i++) {
            // iterate through the decimal array, when you find a number that is less than
            // or equal to the num value, retrieve it's roman equivalent and add it to the array.
            // Subtract the decimal value from num value and repeat the process.
            while (decimalArray[i] <= num) {
                roman += romanArray[i];
                num -= decimalArray[i];
            }
        }

        return roman;
    }


/*
    Wherefore Art Thou

    Make a function that looks through an array of objects (first argument) and returns an array of all objects that have
    matching property and value pairs (second argument). Each property and value pair of the source object has to be
    present in the object from the collection if it is to be included in the returned array.

    For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" },
    then you must return the third object from the array (the first argument), because it contains the property
    and its value, that was passed on as the second argument.

    Example:
    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


    Tests:
    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
    should return [{ first: "Tybalt", last: "Capulet" }]

    whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })
    should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]

    whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
    should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]

    whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })
    should return [{ "a": 1, "b": 2, "c": 2 }]

    References:
    [1] http://stackoverflow.com/questions/31129925/search-for-matching-properties-and-equivalent-property-values (old solution)
    [2] http://stackoverflow.com/questions/34899684/searching-for-matching-property-and-value-pairs-in-an-array-of-objects/34900009 (updated solution)

 */

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line

    // retrieve properties from source
    var props = Object.keys(source);

    // works for source's which only have a single key/value pair
    //     for (var j = 0; j < collection.length; j++) {
    //         // check if the object possess the property and if the values match, add the object to the array
    //         if (collection[j].hasOwnProperty(props[0]) && collection[j][props[0]] === source[props[0]]) {
    //             arr.push(collection[j]);
    //         }
    //     }

    // UPDATED SOLUTION for source objects with more than one key/value pair
    // Only add those objects which contain matching props and values
    arr = collection.filter(function(obj) {
        // use every() to check if every property in the props array passes the test, is exists and matches value
        return props.every(function(property) {
            // Check if the object has the property and the same value.
            return obj.hasOwnProperty(property) && obj[property] === source[property];
        });
    });

    // Only change code above this line
    return arr;
}

/*
    Search And Replace

    Perform a search and replace on the sentence using the arguments provided and return the new sentence.
    First argument is the sentence to perform the search and replace on.
    Second argument is the word that you will be replacing (before).
    Third argument is what you will be replacing the second argument with (after).

    NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to
    replace the word "Book" with the word "dog", it should be replaced as "Dog"


    Test:
    myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
    myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
    myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
    myReplace("His name is Tom", "Tom", "john") should return "His name is John".
    myReplace("Let us get back to more Coding", "Coding", "algorithms")
    should return "Let us get back to more Algorithms".



 */

    function myReplace(str, before, after) {
        var beforeLength = before.length;
        if (before.charCodeAt(0) > 64 && before.charCodeAt(0) < 91) { // check for capitalisation
            var char = after.charCodeAt(0);
            var capital = String.fromCharCode(char - 32);
            after = after.substring(1);
            after = capital + after;
        }

        var splicePosition = 0;
        var start = '', end = '';
        if (str.indexOf(before) !== -1) {
            splicePosition = str.indexOf(before);
            start = str.substring(0, splicePosition);
            end = str.substring(splicePosition + beforeLength);
        }

        return start + after + end;
    }



    /*
     PIG LATIN

     Translate the provided string to pig latin.

     Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the
     end of the word and suffixes an "ay".

     If a word begins with a vowel you just add "way" to the end.

     Input strings are guaranteed to be English words in all lowercase.

     Test:
     translatePigLatin("california") should return "aliforniacay".
     translatePigLatin("paragraphs") should return "aragraphspay".
     translatePigLatin("glove") should return "oveglay".
     translatePigLatin("algorithm") should return "algorithmway".
     translatePigLatin("eight") should return "eightway"

     */

    function translatePigLatin(str) {

        var letters, temp, count = 0;

        var firstChar = str.charAt(0);
        if (firstChar === 'a' || firstChar === 'e' || firstChar === 'i' || firstChar === 'o' || firstChar === 'u') {
            str += 'way';
        } else {
            letters = str.split('');
            isAVowel(letters);
            temp = letters.splice(0, count);
            temp.push('a', 'y');
            letters = letters.concat(temp);
            str = letters.join('');
        }

        function isAVowel(letterArray) {
            var vowels = ['a', 'e', 'i', 'o', 'u'];
            for(var i = 0; i < letterArray.length; i++) {
                for (var j = 0; j < vowels.length; j++) {
                    if (letterArray[i] === vowels[j]) {
                        console.log(letterArray[i] + ", " + vowels[j] + ", index: " + i);
                        count = i; // index where vowel was found in letter array
                        return true;
                    }
                }
            }
        }

        return str;
    }


    /*
        DNA PAIRING

     The DNA strand is missing the pairing element. Take each character, get its pair, and return the
     results as a 2d array. Base pairs are a pair of AT and CG. Match the missing element to the provided character.

     Return the provided character as the first element in each array.

     For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

     The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

     Tests:
     pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
     pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
     pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

     */

    function pairElement(str) {

        var dnaArray = [];
        var temp = str.split('');
        dnaArray = temp.map(function (letter) {
            var pair = [];
            switch (letter) {
                case 'A':
                    pair = ['A', 'T'];
                    break;
                case 'T':
                    pair = ['T', 'A'];
                    break;
                case 'C':
                    pair = ['C', 'G'];
                    break;
                case 'G':
                    pair = ['G', 'C'];
                    break;
            }
            return pair;
        });

        return dnaArray;
    }


    /*
        MISSING LETTERS

        Find the missing letter in the passed letter range and return it.

        If all letters are present in the range, return undefined.

        Tests:
         fearNotLetter("abce") should return "d".
         fearNotLetter("abcdefghjklmno") should return "i".
         fearNotLetter("bcd") should return undefined.
         fearNotLetter("yz")

     */

    function fearNotLetter(str) {

        var firstCharCode = str.charCodeAt(0);
        var lastCharCode = str.charCodeAt(str.length - 1);
        var numRange = [];
        var letterRange;
        var missing;

        for (var i = firstCharCode; i <= lastCharCode; i++) {
            numRange.push(i);
        }
        // console.log(numRange);
        if (str.length == numRange.length) return undefined;
        else {
            letterRange = numRange.map(function (value) {
                return String.fromCharCode(value);
            });
        }

        missing = letterRange.filter(function (letter) {
            // return the letters not found in str
            return str.indexOf(letter) == -1;
        });

        return missing.join('');
    }


    /*
        BOO HOO

        Check if a value is classified as a boolean primitive. Return true or false.

        Boolean primitives are true and false.

        Tests:
        booWho(true) should return true.
        booWho(false) should return true.
        booWho([1, 2, 3]) should return false.
        booWho([].slice) should return false.
        booWho({ "a": 1 }) should return false.
        booWho(1) should return false.
        booWho(NaN) should return false.
        booWho("a") should return false.
        booWho("true") should return false.
        booWho("false") should return false.


     */

    function booWho(bool) {
        // What is the new fad diet for ghost developers? The Boolean.
        return (typeof bool === 'boolean')
    }


    /*
        SORTED UNION

        Write a function that takes two or more arrays and returns a new array of unique values in the order of
        the original provided arrays. In other words, all values present from all arrays should be included in
        their original order, but with no duplicates in the final array.

        The unique numbers should be sorted by their original order, but the final array should
        not be sorted in numerical order.

        Tests:
        uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
        uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
        uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
        uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

        References:
        [1] http://stackoverflow.com/questions/840781/easiest-way-to-find-duplicate-values-in-a-javascript-array
        [2] http://stackoverflow.com/questions/18008025/remove-duplicate-item-from-array-javascript (solution)
     */

    function uniteUnique(arr) {

        var args = Array.from(arguments);

        // flatten the arrays into one array
        var array = args.reduce(function (newArray, item) {
            return Array.isArray(item) ? newArray.concat(item) : newArray.concat([item]);
        }, []);

        // filter out duplicates
        array = array.filter(function (value, index, array) {
            return array.indexOf(value) == index;
        });

        return array;
    }


    /*
        CONVERT HTML ENTITIES

        Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string
        to their corresponding HTML entities.

        Tests:
        convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
        convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
        convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
        convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
        convertHTML("Shindler's List") should return Shindler&​apos;s List.
        convertHTML("<>") should return &​lt;&​gt;.
        convertHTML("abc") should return abc.

        References:
        [1] http://www.w3schools.com/html/html_entities.asp


     */

    function convertHTML(str) {

        // '&' must appear first in the array so that it does not replace any '&' of html entities added
        var htmlEntities = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'];
        // 'g' global flag ensures the whole string is searched
        var stringEquivalent = [/&/g, /</g, />/g, /"/g, /'/g];

        // iterate through str, replace any special chars with the html equivalent
        for (var i = 0; i < htmlEntities.length; i++) {
            str = str.replace(stringEquivalent[i], htmlEntities[i]);
        }

        return str;
    }


    /*
        SPINAL TAP CASE

        Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

        Tests:
        spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
        spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
        spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
        spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
        spinalCase("AllThe-small Things") should return "all-the-small-things".

     */

    function spinalCase(str) {

        str = str.replace(/([a-z])([A-Z])/g, '$1 $2') // find lowercase letter followed by an uppercase
                .replace(/\s/g, '-') // replace spaces
                .replace(/_/g, '-') // replace any underscores
                .toLowerCase(); // do last

        return str;
    }

    /*
        SUM ALL FIBONACCI NUMBERS - ODD FIBONACCI SUM
        Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
        The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the
        sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

        For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

        Tests:
        sumFibs(1) should return a number.
        sumFibs(1000) should return 1785.
        sumFibs(4000000) should return 4613732.
        sumFibs(4) should return 5.
        sumFibs(75024) should return 60696.
        sumFibs(75025) should return 135721.


     */

    function sumFibs(num) {

        var sequence = [1,1], a = 1, b = 1, val = 0, sum = 0;

        // determine fibonacci sequence
        for (var i = 2; i <= num; i++) {
            val = a + b;
            //if (val >= num) break; // screws the count
            sequence.push(val);
            a = b;
            b = val;
        }
        console.log(sequence);
        // sum odd numbers
        for(var j = 0; j < sequence.length; j++) {
            if (sequence[j] <= num && sequence[j] % 2 !== 0) {
                sum += sequence[j];
            }
        }

        return sum;
    }


    /*
        SUM ALL PRIMES

        Sum all the prime numbers up to and including the provided number.
        A prime number is defined as a number greater than one and having only two divisors, one and itself.
        For example, 2 is a prime number because it's only divisible by one and two.

        The provided number may not be a prime.

        Tests:
        sumPrimes(10) should return a number.
        sumPrimes(10) should return 17.
        sumPrimes(977) should return 73156.

     */

        function sumPrimes(num) {

            var sum = 0;
            for (var i = 2; i <= num; i++) {

                if (isPrime(i))  {
                    sum += i;
                }
            }
            return sum;
        }


        function isPrime(value) {

            // check if the value is divisable by any value smaller than itself
            for (var j = 2; j < value; j++) {
                if (value % j === 0) {
                    return false;
                }
            }
            return true;
        }

    /*
        SMALLEST COMMON MULTIPLE

        Find the smallest common multiple of the provided parameters that can be evenly divided by both,
        as well as by all sequential numbers in the range between these parameters.

        The range will be an array of two numbers that will not necessarily be in numerical order.

        e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by
        all numbers between 1 and 3.

        Tests:
        smallestCommons([1, 5]) should return a number.
        smallestCommons([1, 5]) should return 60.
        smallestCommons([5, 1]) should return 60.
        smallestCommons([1, 13]) should return 360360.
        smallestCommons([23, 18]) should return 6056820.

        Reference:
        [1] https://www.gorkahernandez.com/blog/smallest-common-multiple-free-code-camp/

     */

    function smallestCommons(arr) {

        var found = false, lowestCommonNumber = 1, range = [];
        var min = Math.min(arr[0], arr[1]);
        var max = Math.max(arr[0], arr[1]);

        for (var i = min; i <= max; i++) {
            range.push(i);
        }
        while (!found) {
            found = range.every(function (value) {
                // find the lowest common number divisible by all numbers in the range
                return lowestCommonNumber % value === 0;
            });


            if (found) {
                return lowestCommonNumber;
            } else {
                // keep incrementing until number found
                lowestCommonNumber++;
            }
        }

    }

    /*
        FINDERS KEEPERS

        Create a function that looks through an array (first argument) and returns the first element in
        the array that passes a truth test (second argument).

        Test:

        findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
        findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

     */

    function findElement(arr, func) {
        // return an array of elements which pass the function test
        var array = arr.filter(func);
        // return the first element
        return array[0];
    }


    /*
        DROP IT

        Drop the elements of an array (first argument), starting from the front, until the
        predicate (second argument) returns true. The second argument, func, is a function you'll use to test
        the first elements of the array to decide if you should drop it or not.

        Return the rest of the array, otherwise return an empty array.

        Example:
        dropElements([1, 2, 3], function(n) {return n < 3; });

        Tests:
        dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
        dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
        dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
        dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
        dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
        dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].

     */


    function dropElements(arr, func) {

        // continue removing elements from the beginning of the array
        // until they pass the function's test
        while (!func(arr[0])) {
            arr.shift();
        }

        return arr;
    }


    /*
        STEAM ROLLER - FLATTEN A NESTED ARRAY

        Flatten a nested array. You must account for varying levels of nesting.

        Example:
        steamrollArray([1, [2], [3, [[4]]]]);

        Test:
        steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
        steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
        steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
        steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

     */


    function steamrollArray(arr) {

        // var array = arr.map(function (value) {
        //     return isAnArray(value);
        // });

        var array = [];

        for (var i = 0; i < arr.length; i++) {
            isAnArray(arr[i]);
        }

        function isAnArray(item) {

            if (Array.isArray(item)) {
                for (var i = 0; i < item.length; i++) {
                    isAnArray(item[i]);
                }

            } else {
                array.push(item);
            }

        }
        return array;
    }

    /*
        BINARY AGENTS CONVERT (FROM BINARY -> ASCII CODE -> ASCII CHAR)

        Return an English translated sentence of the passed binary string.

        The binary string will be space separated.

        Example:
        binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111
        01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

        Tests:
        binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110
        01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")

        should return "Aren't bonfires fun!?"

        binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101
        01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")

        should return "I love FreeCodeCamp!"

        References:
        [1] http://stackoverflow.com/questions/21354235/converting-binary-to-text-using-javascript

        template:
        parseInt('binary string', 2).toString(10) -> gives you ASCII char code

     */

    function binaryAgent(str) {

        var binaryArray = str.split(' ');
        var charArray = binaryArray.map(function (binaryChar) {
            // convert from binary to Ascii code then char
            return String.fromCharCode(parseInt(binaryChar, 2).toString(10));
        });

        return charArray.join('');
    }

    /*
        EVERYTHING BE TRUE

        Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

        Remember, you can access object properties through either dot notation or [] notation.

        Tests:
        truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"},
        {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.

        truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"},
        {"user": "Po", "sex": "female"}], "sex") should return false.

        truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3},
         {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.

        truthCheck([{"name": "Pete", "onBoat": true},
        {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") should return false

        truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"},
        {"name": "FastFoward", "onBoat": true}], "onBoat") should return true

        truthCheck([{"single": "yes"}], "single") should return true
        truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
        truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
        truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false


     */


    function truthCheck(collection, pre) {

        return collection.every(function (object) {
            return object[pre];
        });
    }


    /*
        ARGUMENTS OPTIONAL

        Create a function that sums two arguments together. If only one argument is provided,
        then return a function that expects one argument and returns the sum.

        For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

        Calling this returned function with a single argument will then return the sum:

        var sumTwoAnd = addTogether(2);

        sumTwoAnd(3) returns 5.

        If either argument isn't a valid number, return undefined.

        Tests:
        addTogether(2, 3) should return 5.
        addTogether(2)(3) should return 5.
        addTogether("http://bit.ly/IqT6zt") should return undefined.
        addTogether(2, "3") should return undefined.
        addTogether(2)([3]) should return undefined.

        References:
        [1] https://www.gorkahernandez.com/blog/arguments-optional-free-code-camp/
        [2] http://daarons.com/category/freecodecamp/page/2/

     */

    function addTogether() {
        var number = 0;
        var args = arguments;

        if (args.length === 2) {
            if (typeof args[0] === 'number' && typeof args[1] === 'number') {
                return args[0] + args[1];
            } else {
                return undefined;
            }
        } else if(args.length === 1) {
            if (typeof args[0] === 'number') {
                number = args[0];
                return  function(value) {
                    if (typeof value === 'number')
                        return number + value;
                };
            }
        }

    }


