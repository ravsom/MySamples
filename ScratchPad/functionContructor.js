var Person = function () {
    this.firstName = "Ravi";
    this.secondName = "Somayaji";
};

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.secondName;
};

var ravi = new Person();
console.log(ravi.getFullName());

Person.prototype.getFormalFullName = function () {
    return this.secondName + ", " + this.firstName;
};

console.log(ravi.getFormalFullName());
