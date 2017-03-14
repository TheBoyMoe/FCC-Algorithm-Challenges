/*

    Tests:

    1 makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].
    2 makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].
    3 makeFriendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].
    4 makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]
    5 makeFriendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].
    6 makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].
    7 makeFriendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].


 */
    // STUDENT SOLUTIONS

    function makeFriendlyDates(arr) {
        var startDate = new Date(arr[0]),
            endDate = new Date(arr[1]);

        var startYear = startDate.getFullYear(),
            startMonth = startDate.getMonth(),
            startDay = startDate.getDate();

        var endYear = endDate.getFullYear(),
            endMonth = endDate.getMonth(),
            endDay = endDate.getDate();

        var monthNames = ['January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'];

        if (startDate.getTime() === endDate.getTime()) {
            console.log('1st case');
            return [monthNames[startMonth] + ' ' + addEnding(startDay) + ', ' + startYear];
        } else if (startYear === endYear && startMonth === endMonth) {
            console.log('2nd case');
            return [monthNames[startMonth] + ' ' + addEnding(startDay), addEnding(endDay)];
        } else if (((startYear === new Date().getFullYear() && (startYear === endYear || startYear === endYear - 1))
            || startYear === endYear) && startMonth != endMonth) {
            console.log('3rd case');
            return [monthNames[startMonth] + ' ' + addEnding(startDay), monthNames[endMonth] + ' ' + addEnding(endDay)];
        } else {
            console.log('4th case');
            // Any other case returns something like this: ['January 25th, 2020', 'October 23rd, 2045']
            return [monthNames[startMonth] + ' ' + addEnding(startDay) + ', '
            + startYear, monthNames[endMonth] + ' ' + addEnding(endDay) + ', ' + endYear];
        }

        function addEnding(day) {
            if (day === 1 || day === 21 || day === 31) {
                return day + 'st';
            } else if (day === 2 || day === 22) {
                return day + 'nd';
            } else if (day === 3 || day === 23) {
                return day + 'rd';
            } else {
                return day + 'th';
            }
        }
    }


    var Person = function(firstAndLast) {
        var firstName, lastName;                // Initialize both variables.

        this.getFirstName = function() {
            return firstName;
        };

        this.getLastName = function() {
            return lastName;
        };

        this.getFullName = function() {
            return firstName + ' ' + lastName;  // Concatenate the first and last name to get the full name.
        };

        this.setFirstName = function(first) {
            firstName = first;
        };

        this.setLastName = function(last) {
            lastName = last;
        };

        this.setFullName = function(firstAndLast) {     // We place this logic in the setFullName method
            firstAndLast = firstAndLast.split(' ');
            firstName = firstAndLast[0];
            lastName = firstAndLast[1];
        };

        this.setFullName(firstAndLast);     // We call the setFullName method as soon as a person is created.
    };


    function pairwise(arr, arg) {
        if (arr.length === 0 || typeof arg !== 'number') { return 0; }
        var result = [];

        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (i !== j && arr[i] + arr[j] === arg && result.indexOf(i) < 0 && result.indexOf(j) < 0) {
                    result.push(i, j);
                    break;
                }
            };
        };

        return result.reduce(function(a, b) {
            return a + b;
        });
    }