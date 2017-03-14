// ALGO ANSWERS
// [1] https://github.com/Rafase282/My-FreeCodeCamp-Code
// [2] https://www.gorkahernandez.com/blog/fcc-bonfire-series-index/
// [3] https://daarons.tumblr.com/
// [4] http://daarons.com/category/freecodecamp/


/*
    VALIDATE US TELEPHONE NUMBERS

    Return true if the passed string is a valid US phone number.

    The user may fill out the form field any way they choose as long as it is a valid US number.
    The following are examples of valid formats for US numbers (refer to the tests below
    for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

    For this challenge you will be presented with a string such as 800-692-7753 or
    8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any
    combination of the formats provided above.

    The area code is required.
    If the country code is provided, you must confirm that the country code is 1.
    Return true if the string is a valid US phone number; otherwise return false.

    Tests:
    telephoneCheck("555-555-5555") should return a boolean.
    telephoneCheck("1 555-555-5555") should return true.
    telephoneCheck("1 (555) 555-5555") should return true.
    telephoneCheck("5555555555") should return true.
    telephoneCheck("555-555-5555") should return true.
    telephoneCheck("(555)555-5555") should return true.
    telephoneCheck("1(555)555-5555") should return true.
    telephoneCheck("555-5555") should return false.
    telephoneCheck("5555555") should return false.
    telephoneCheck("1 555)555-5555") should return false.
    telephoneCheck("1 555 555 5555") should return true.
    telephoneCheck("1 456 789 4444") should return true.
    telephoneCheck("123**&!!asdf#") should return false.
    telephoneCheck("55555555") should return false.
    telephoneCheck("(6505552368)") should return false
    telephoneCheck("2 (757) 622-7382") should return false.
    telephoneCheck("0 (757) 622-7382") should return false.
    telephoneCheck("-1 (757) 622-7382") should return false
    telephoneCheck("2 757 622-7382") should return false.
    telephoneCheck("10 (757) 622-7382") should return false.
    telephoneCheck("27576227382") should return false.
    telephoneCheck("(275)76227382") should return false.
    telephoneCheck("2(757)6227382") should return false.
    telephoneCheck("2(757)622-7382") should return false.
    telephoneCheck("555)-555-5555") should return false.
    telephoneCheck("(555-555-5555") should return false.
    telephoneCheck("(555)5(55?)-5555") should return false.

    References:
    [1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    [2] http://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
    [3] http://stackoverflow.com/questions/1559753/regular-expression-to-match-us-phone-numbers
    [4] http://stackoverflow.com/questions/123559/a-comprehensive-regex-for-phone-number-validation
 */

    function telephoneCheck(str) {

        var regex = /^[1]{0,1}[\s]{0,1}(\d{3}|[(]\d{3}[)])[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/;

        // DEBUG the regex
        // console.log(regex.test(''));

        return regex.test(str);
    }


    /*
        SYMMETRIC DIFFERENCE

        Create a function that takes two or more arrays and returns an array of the symmetric
        difference (△ or ⊕) of the provided arrays.

        Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical
        term "symmetric difference" of two sets is the set of elements which are in either of the
        two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference
        you take (say on a set D = {2, 3}), you should get the set with elements which are in either
        of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

        Examples:
        A = [1,2,3,4], B = [3,4,5,6,], C = [2,4,6,7]
        A△B = [1,2,5,6]
        A△B△C = [1,4,5,6]

        Tests:
        sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
        sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
        sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
        sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
        sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
        sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
        sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
        sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
        sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
        sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.

        References:
        [1] https://www.youtube.com/watch?v=PxffSUQRkG4


        // determine symetric difference of two arrays - from intermediate algorithms
        function diffArray(arr1, arr2) {
            var newArr = [];

            // compare arr1 v arr2
            arr1.filter(function (value) {
                if (arr2.indexOf(value) === -1) {
                    newArr.push(value);
                }
            });

            // compare arr2 v arr1, saving values that are in arr2 not in arr1
            arr2.filter(function (value) {
                if (arr1.indexOf(value) === -1) {
                    newArr.push(value);
                }
            });

            return newArr;
        }

     */


    function sym(args) {
        args = Array.prototype.slice.call(arguments); // retrieve args as an array
        return args.reduce(function (current, next, index, args) {
            // determine symmetric diff
            var array = diffArrays(current, next);
            // filter out duplicates
            return array.filter(function (val, index, array) {
                return array.indexOf(val) == index;
            });
        });

    }

    function diffArrays(current, next) {
        var array = [];

        // compare arr1 v arr2
        current.filter(function (value) {
            if (next.indexOf(value) === -1) {
                array.push(value);
            }
        });

        // compare arr2 v arr1, saving values that are in arr2 not in arr1
        next.filter(function (value) {
            if (current.indexOf(value) === -1) {
                array.push(value);
            }
        });

        return array.sort();
    }


    /*
        EXACT CHANGE

        Design a cash register drawer function checkCashRegister() that accepts purchase price as the
        first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as
        the third argument.

        cid is a 2D array listing available currency.

        Return the string "Insufficient Funds" if cash-in-drawer is less than the change due.
        Return the string "Closed" if cash-in-drawer is equal to the change due.
        Otherwise, return change in coin and bills, sorted in highest to lowest order.

        Tests:
       1 checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10],
        ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00],
        ["ONE HUNDRED", 100.00]])

        should return an array.

       2 checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
        ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

        should return a string.

       3 checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
        ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

        should return a string.

       4 checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25],
        ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])

        should return [["QUARTER", 0.50]].

       5 checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25],
        ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])

        should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00],
        ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].

       6 checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
        ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

        should return "Insufficient Funds".

       7 checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
        ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

        should return "Insufficient Funds".

       8 checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
        ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

        should return "Closed".

        References:
        [1] http://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-in-javascript
        [2] http://daarons.com/category/freecodecamp/

     */

    function checkCashRegister(price, cash, cid) {
        var changeGiven = 0;
        var change = cash - price;
        var denominations = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
        //var currency = ['PENNY', 'NICKEL', 'DIME', 'QUARTER', 'ONE', 'FIVE', 'TEN', 'TWENTY', 'HUNDRED'];
        var result = [];
        var cashInDrawer = 0;

        for (var j = 0; j < cid.length; j++) {
            cashInDrawer += cid[j][1];
        }
        console.log('change: ' + change + ', cash in drawer: ' + cashInDrawer.toFixed(2));

        if (change.toFixed(2) === cashInDrawer.toFixed(2)) {
            return 'Closed';
        }

        else {
            var temp = [];
            for (var i = denominations.length; i >= 0; i--) {
                while (change >= denominations[i] && cid[i][1] > 0) {
                    if (cid[i][0] === 'PENNY' && change > cid[i][1]) {
                        return 'Insufficient Funds';
                    }

                    cid[i][1] -= denominations[i];
                    change = (change - denominations[i]).toFixed(2);
                    changeGiven += denominations[i];
                    // DEBUG
                    // console.log(('change: ' + change + ', change given: ' + changeGiven + ', denomination: ' + denominations[i] + ', cid: ' + cid[i][0] +':' + cid[i][1]));
                }

                // populate chang  eArray with any change given
                if(changeGiven > 0) {
                    temp.push(cid[i][0], changeGiven);
                    result.push(temp);
                    changeGiven = 0; // reset
                    temp = [];
                 }
            }

            console.log('result array length: ' + result.length);
            if (result.length > 0) {
                return result;
            } else {
                return 'Insufficient Funds';
            }
        }

    }

    /*
        INVENTORY UPDATE

        Compare and update the inventory stored in a 2D array against a second 2D array of a
        fresh delivery. Update the current existing inventory item quantities (in arr1).
        If an item cannot be found, add the new item and quantity into the inventory array.
        The function updateInventory should return an array.
        The returned inventory array should be in alphabetical order by item.

        // Example inventory lists
        var curInv = [
            [21, "Bowling Ball"],
            [2, "Dirty Sock"],
            [1, "Hair Pin"],
            [5, "Microphone"]
        ];

        var newInv = [
            [2, "Hair Pin"],
            [3, "Half-Eaten Apple"],
            [67, "Bowling Ball"],
            [7, "Toothpaste"]
        ];

        updateInventory(curInv, newInv);


        Tests:

       1 updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
        [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).

        length should return an array with a length of 6.

       2 updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
        [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])

        should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"],
        [5, "Microphone"], [7, "Toothpaste"]].

       3 updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])

        should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].

       4 updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])

        should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].

       5 updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]],
        [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])

        should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"],
        [0, "Microphone"], [1, "Toothpaste"]].


        References:
        [1] http://stackoverflow.com/questions/9206914/how-to-filter-multidimensional-javascript-array
        [2] http://stackoverflow.com/questions/16096872/how-to-sort-2-dimensional-array-by-column-value

     */


    function updateInventory(arr1, arr2) {
        // All inventory must be accounted for

        var propArray = [], matchingArray = [], temp;

        // compare arr1 v arr2
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (arr1[i][1] === arr2[j][1]) {
                    arr1[i][0] += arr2[j][0];
                    matchingArray.push(arr2[j]);
                }
            }
        }

        // compare arr2 v arr1 - generate an array of properties
        for (var k = 0; k < matchingArray.length; k++) {
            propArray.push(matchingArray[k][1]);
        }

        temp = arr2.filter(function (item, index, arr1) {
            // search for any properties is not found in arr2
            if(propArray.indexOf(item[1]) === -1) {
                return item;
            }
        });

        // combine the two arrays
        for(var l = 0; l < temp.length; l++) {
            arr1.push(temp[l]);
        }

        // sort by 2nd column
        function sortFunction(a, b) {
            if (a[1] === b[1]) {
                return 0;
            }
            else {
                return (a[1] < b[1]) ? -1 : 1;
            }
        }

        return arr1.sort(sortFunction);
    }

    /*
        NO REPEATS PLEASE

        Return the number of total permutations of the provided string that don't have repeated consecutive letters.
        Assume that all characters in the provided string are each unique.

        For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa),
        but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

        Tests:

        permAlone("aab") should return a number.
        permAlone("aab") should return 2.
        permAlone("aaa") should return 0.
        permAlone("aabb") should return 8.
        permAlone("abcdefa") should return 3600.
        permAlone("abfdefa") should return 2640.
        permAlone("zzzzzzzz") should return 0.
        permAlone("a") should return 1.
        permAlone("aaab") should return 0.
        permAlone("aaabb") should return 12.

     */

    function permAlone(str) {

        var combinations = [];
        var array = str.split('');

        transposeChars(array.length);

        function transposeChars(len) {

            if(len == 1) {
                combinations.push(array.join(''));
            }
            for (var i = 0; i < len; i++) {
                transposeChars(len - 1);
                if (len % 2 === 0)
                    swapChars(i, len - 1);
                else
                    swapChars(0, len - 1);
            }

        }

        function swapChars(a, b) {
            var char = array[a];
            array[a] = array[b];
            array[b] = char;
        }


        // filter out duplicates
        // combinations = combinations.filter(function (value, index) {
        //     return combinations.indexOf(value) === index;
        // });

        // filter out combinations with pairs of letters
        combinations = combinations.filter(function (value, index) {
            return !(value.match(/(.)\1/g));
        });

        return combinations.length;
    }


    /*
        FRIENDLY DATE RANGES

        Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.
        The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).
        Do not display information that is redundant or that can be inferred by the user: if the date range ends in less
        than a year from when it begins, do not display the ending year.

        Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends
        within one year, the year should not be displayed at the beginning of the friendly range.

        If the range ends in the same month that it begins, do not display the ending year or month.

        Examples:

        makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]
        makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].

        Tests:

        1 makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].
        2 makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].
        3 makeFriendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].
        4 makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]
        5 makeFriendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].
        6 makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].
        7 makeFriendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].

     */

    function makeFriendlyDatesV1(arr) {

        var tense = ['st', 'nd', 'rd', 'th'];

        arr = arr.map(function (value) {
            var temp = value.split('-');
            switch(temp[1]) {
                case '01':
                    temp[1] = 'January';
                    break;
                case '02':
                    temp[1] = 'February';
                    break;
                case '03':
                    temp[1] = 'March';
                    break;
                case '04':
                    temp[1] = 'April';
                    break;
                case '05':
                    temp[1] = 'May';
                    break;
                case '06':
                    temp[1] = 'June';
                    break;
                case '07':
                    temp[1] = 'July';
                    break;
                case '08':
                    temp[1] = 'August';
                    break;
                case '09':
                    temp[1] = 'September';
                    break;
                case '10':
                    temp[1] = 'October';
                    break;
                case '11':
                    temp[1] = 'November';
                    break;
                case '12':
                    temp[1] = 'December';
                    break;
            }
            switch(temp[2]) {
                case '01': case '02': case '03': case '04': case '05': case '06': case '07': case '08': case '09':
                    temp[2] = temp[2].slice(1);
                    break;
            }
            switch(temp[2]) {
                case '1': case '21': case '31':
                    temp[2] += tense[0];
                    break;
                case '2': case '22':
                    temp[2] += tense[1];
                    break;
                case '3': case '23':
                    temp[2] += tense[2];
                    break;
                default:
                    temp[2] += tense[3];
            }

            var year = temp[0];
            var month = temp[1];
            var day = temp[2];
            temp[0] = month;
            temp[1] = day;
            temp[2] = year;

            return temp;
        });

        return arr;
        // return diffDates(arr);

        /////////////////////////////////////////////////////////////////////////

        // ['December', '1st', '2016'], ['February', '3rd', '2017'] => ["December 1st","February 3rd"]
        // ['December', '1st', '2016'], ['February', '3rd', '2018'] => ["December 1st, 2016","February 3rd, 2018"] // everything else
        // ['September', '5th', '2022'], ['September', '4th', '2023'] => ["September 5th, 2022","September 4th"]
        // ['September', '5th', '2022'], ['September', '5th', '2023'] => ["September 5th, 2022","September 5th, 2023"]

        function diffDates(arr) {
            var first = arr[0];
            var second = arr[1];
            var result = '';

            // same year and same month
            if (first[2] === second[2]) {
                if (first[0] === second[0]) {
                    if (first[1] === second[1]) {
                        if (first[2] === '2016') {
                            result = [first[0] + ' ' + first[1]];
                        } else {
                            result = [first[0] + ' ' + first[1] +', ' + first[2]];
                        }
                    } else {
                        if (first[2] === '2016') {
                            result = [first[0] + ' ' + first[1], second[1]];
                        } else {
                            result = [first[0] + ' ' + first[1] + ', ' + first[2], second[0] + ' ' + second[1]];
                        }
                    }
                } else {
                    result = [first[0] + ' ' + first[1] + ', ' + first[2], second[0] + ' ' + second[1]];
                }
            }
            return result;
        }



    }



    function makeFriendlyDates(arr) {

        var result = '';


        var sYr = (new Date(arr[0])).getFullYear(), sMth = (new Date(arr[0])).getMonth(), sDay = (new Date(arr[0])).getDate();
        var eYr = (new Date(arr[1])).getFullYear(), eMth = (new Date(arr[1])).getMonth(), eDay = (new Date(arr[1])).getDate();

        if (arr[0] === arr[1]) {
            if(sYr === 2016) {
                result = [getMonth(sMth) + ' ' + getDay(sDay)];
            } else {
                result = [getMonth(sMth) + ' ' + getDay(sDay) + ', ' + sYr];
            }
        }
        else if((sYr === 2016 && (eYr === 2016 || eYr === 2017)) && sMth !== eMth) {
            result = [getMonth(sMth) + ' ' + getDay(sDay), getMonth(eMth) + ' ' + getDay(eDay)];
        }
        else if (sYr === eYr && sMth === eMth){
            result = [getMonth(sMth) + ' ' + getDay(sDay), getDay(eDay)];
        }
        else if ((sYr === eYr && sMth !== eMth) || ((sYr === eYr - 1) && sMth === eMth && sDay !== eDay)){
            result = [getMonth(sMth) + ' ' + getDay(sDay) + ', ' + sYr, getMonth(eMth) + ' ' + getDay(eDay)];
        }

        else { // everything else
            result = [getMonth(sMth) + ' ' + getDay(sDay) + ', ' + sYr,
                getMonth(eMth) + ' ' + getDay(eDay) + ', ' + eYr];
        }

        return result;
    }

    function getMonth(value) {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'];
        var month = '';
        switch(value) {
            case 0:
                month = months[0];
                break;
            case 1:
                month = months[1];
                break;
            case 2:
                month = months[2];
                break;
            case 3:
                month = months[3];
                break;
            case 4:
                month = months[4];
                break;
            case 5:
                month = months[5];
                break;
            case 6:
                month = months[6];
                break;
            case 7:
                month = months[7];
                break;
            case 8:
                month = months[8];
                break;
            case 9:
                month = months[9];
                break;
            case 10:
                month = months[10];
                break;
            case 11:
                month = months[11];
                break;
        }
        return month;
    }

    function getDay(value) {
        var tense = ['st', 'nd', 'rd', 'th'];

        switch(value) {
            case 1: case 21: case 31:
                value += tense[0];
                break;
            case 2: case 22:
                value += tense[1];
                break;
            case 3: case 23:
                value += tense[2];
                break;
            default:
                value += tense[3];
        }

        return value;
    }


    /*
        MAKE A PERSON

        Fill in the object constructor with the following methods below:

        getFirstName()
        getLastName()
        getFullName()
        setFirstName(first)
        setLastName(last)
        setFullName(firstAndLast)

        Run the tests to see the expected output for each method.
        The methods that take an argument must accept only one argument and it has to be a string.
        These methods must be the only available means of interacting with the object.

        Example:
        var bob = new Person('Bob Ross');
        bob.getFullName();

        Tests:

        Object.keys(bob).length should return 6.
        bob instanceof Person should return true.
        bob.firstName should return undefined.
        bob.lastName should return undefined.
        bob.getFirstName() should return "Bob".
        bob.getLastName() should return "Ross".
        bob.getFullName() should return "Bob Ross".
        bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
        bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
        bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
        bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
        bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").



     */

    var Person = function(firstAndLast) {

        // declaring variables with var makes them private
        var fullName = firstAndLast.split(' ');
        var firstName = fullName[0];
        var lastName = fullName[1];

        this.getFirstName = function () {
            return firstName;
        };
        this.getLastName = function () {
            return lastName;
        };
        this.getFullName = function () {
            return firstName + ' ' + lastName;
        };
        this.setFirstName = function(first) {
            firstName = first;
        };
        this.setLastName = function(last) {
            lastName = last;
        };
        this.setFullName = function(firstAndLast) {
            fullName = firstAndLast.split(' ');
            firstName = fullName[0];
            lastName = fullName[1];
        };

    };


    /*
        MAP THE DEBRIS

        Return a new array that transforms the element's average altitude into their orbital periods.
        The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
        You can read about orbital periods on wikipedia.
        The values should be rounded to the nearest whole number. The body being orbited is Earth.
        The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

        wiki:
        The orbital period is the time taken for a given object to make one complete orbit around another object.
        Formula:

        T = 2 * Pi * square root((radius pow 3)/GM)


     Example:
        orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

        Tests:
        orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].

        orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
        should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].


    */

    function orbitalPeriod(arr) {

        var GM = 398600.4418;
        var earthRadius = 6367.4447;
        return arr.map(function (item) {
            var temp = {};
            temp.name = item.name;
            temp.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow((earthRadius + item.avgAlt), 3)/GM));
            return temp;
        });

    }


    /*
        PAIRWISE

        Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

        If multiple pairs are possible that have the same numeric elements but different indices,
        return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

        For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11].
        We can then write out the array with their indices and values.

        Index	0	1	2	3	4
        Value	7	9	11	13	15

        Below we'll take their corresponding indices and add them.

        7 + 13 = 20 → Indices 0 + 3 = 3
        9 + 11 = 20 → Indices 1 + 2 = 3
        3 + 3 = 6 → Return 6

        Tests:
        pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
        pairwise([1, 3, 2, 4], 4) should return 1.
        pairwise([1, 1, 1], 2) should return 1.
        pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
        pairwise([], 100) should return 0.

     */

    function pairwise(arr, arg) {
        if (arr.length < 1) return 0;

        var indicies = [];
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (i !== j && arr[i] + arr[j] == arg) {

                    // var addIndicies = true;
                    // for (var k = 0; k < indicies.length; k++) {
                    //     if (indicies[k] == i || indicies[k] == j) {
                    //         addIndicies = false;
                    //     }
                    // }
                    // if (addIndicies) {
                    //     indicies.push(i);
                    //     indicies.push(j);
                    // }

                    // if the indicies have not ben added to the array, add them
                    if (indicies.indexOf(i) == -1 && indicies.indexOf(j) == -1) {
                        indicies.push(i, j);
                    }
                }
            }
        }
        //if (indicies.length > 0) {
            return indicies.reduce(function (current, next) {
                return current + next;
            });
        //}

    }
