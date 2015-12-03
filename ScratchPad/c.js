function test1() {
    let c =0;
    for (let i = 0; i < 10; i++) {
        function hello() {
            console.log(this);
            console.log(i);
        };
    }
    hello();
}

test1();