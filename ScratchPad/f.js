(function () {

    var arr1 = [1, 2, 3];
    var arr2Add3 = _.map(arr1, function (item) {
        return item + 3;
    }, this);

    console.log(arr2Add3);


    var arr2 = [1, 2, 3, 8, 5, 2, 23, 45, 6];

    var arr2Filter = _.filter(arr2, function (item) {
        return item % 2 === 0;
    });

}());