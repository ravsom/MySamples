function a() {
    function b() {
        console.log(myVar)
    }
    var myVar = 5;
    b();
}

function waitFor3Seconds(){
    var ms = 3000+new Date().getTime();

    while(new Date()<ms){
        //do nothing
    }
    console.log('finished wait function.');
}
function clickHandler() {
    console.log('click handled.');
}

document.addEventListener('click', clickHandler);
waitFor3Seconds();

var myVar = 2;
a();
console.log(myVar);

