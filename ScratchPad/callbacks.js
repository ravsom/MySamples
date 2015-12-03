var person = {
    firstName: 'P1',
    lastName: 'P2',
    greetPersonObj: function () {
        return "Hello " + this.firstName + ' ' + this.lastName;
    },
    sayHelloLang: function (lang) {
        if (lang == 'en') {
            return 'Hello ' + this.firstName + ' ' + this.lastName + ' in english';
        }
        else if (lang == 'es') {
            return 'Hola ' + this.firstName + ' ' + this.lastName + ' in spanish';
        }

        return 'lang not mentioned';
    }
};

var person2 = {
    firstName: 'xyz',
    lastName: 'lmn'
};


var greet = function (lang) {
    console.log(this);
    console.log(this.greetPersonObj());
    console.log(this.sayHelloLang('es'));
    console.log(this.sayHelloLang(lang));
};

var greetPerson = greet.bind(person);


console.log('---no arguments to greetPerson---');
greetPerson();
console.log('____');
greetPerson('en');
console.log('---en lang to greetPerson---');

greet.call(person);

greet.call(person, 'es');

function greetPersonObj() {
    return ("Hello from the inside");
}

function sayHelloLang(lang) {
    return ('Hello is the same in all languages.');
}

console.log('called greet person obj on person 2');

console.log(person.sayHelloLang.apply(person2, ['es']));

//console.log(' ---greet called with person2---- ');
//greet.apply(person2);

