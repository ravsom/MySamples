function greet() {
    return {
        h: "there"
    };
}

console.log(greet());

var address = {
    firstLine: function (line) {
        return "Door Number: " + line;
    },
    secondLine: {
        addr: "Prestige Green Woods"
    }
};

(function (name, addr) {
    console.log("hello " + name);
    console.log(addr.firstLine(23) + '  ' + addr.secondLine.addr);
})(greet().h, address);