function hello() {

    var arr = [
        1, 2, 3, {d: "dss"}, function (val) {
            console.log("hello " + val);
        }
    ]

    var x = {
        y: function () {
            console.log(arr[0]);
        },

        z: function () {
            console.log(arr[1]);
        }
    };
    
    arr[4](arr[3].d);

    function getX(){
        return x;
    }
}
hello();
console.log(hello().getX().y());


