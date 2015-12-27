var mapForEach = function (arr, fn) {
    var arrFinal = [];
    for (var count = 0; count < arr.length; count++) {
        arrFinal.push(fn(arr[count]));
    }

    return arrFinal;
};

var arr1 = [3, 4, 9];

var mapFunction = function (limiter, item) {
    return item > limiter;
};


var checkPassedLimit = function (limiter) {
    return function (limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPassedLimit(5));

console.log('original array : ' + arr1);

console.log('arr5           : ' + arr5);