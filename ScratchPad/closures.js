function getArr() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i);
        });
    }
    return arr;
}

getArr()[0]();
getArr()[1]();
getArr()[2]();


var getArr2 = function () {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function (j) {
                return function () {
                    console.log(j);
                }
            }(i))
        );
    }
    return arr;
};

getArr2()[0]();
getArr2()[1]();
getArr2()[2]();

