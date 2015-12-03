greet();

function greet() {
    console.log("greet hu");
}


var anony = function () {
    console.log("inside anony function")
}

anony();

function log(a) {
    a();
}

log(function () {
    console.log("hi");
});

function thisTest(){
    console.log(this);
}

thisTest();

var c = {
    name: 'This is c',
    log : function(){
        this.name = 'Updated c';
        console.log(this);
    }
};

c.log();

