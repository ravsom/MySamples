var mapForEach = function (arr, fn) {
    console.log(arr.length);
    for (var count = 0; count < arr.length; count++) {
        console.log(arr[count]);
        fn(arr[count]);
    }
};

var arr1 = [3, 4, 9];

mapForEach(arr1, function (item) {
    console.log("item is : " + item);
});


var mapFunction = function (limiter, item) {
    return item > limiter;
};


var checkPassedLimit = function (limiter) {
    return function (limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPassedLimit(2));