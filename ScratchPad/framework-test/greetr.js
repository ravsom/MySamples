//framework to create a greeter - to create messages in separate languages etc.
(function (global, $) {

    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    var supportedLanguages = ['en', 'es'];

    var greetings = {'en': 'Hello', 'es': 'Hola'};

    var formalGreetings = {'en': 'Formal Hello in English', 'es': 'Spormal Hola in Spanish'};

    var logMessages = {'en': 'Logged In.', 'es': 'Slogged IN.'};

    Greetr.init = function (firstName, lastName, language) {
        self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        this.validate();
    };

    Greetr.prototype = {
        fullName: function () {
            return greetings[this.language] + '  ' + this.firstName + ' ' + this.lastName;
        },
        formalName: function () {
            return formalGreetings[this.language] + '  ' + this.lastName + ', ' + this.firstName;
        },
        validate: function () {
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw "Invalid language: " + this.language;
            }
        },
        greet: function (formal) {
            if (formal) {
                this.log(formalGreetings[this.language] + ' ' + this.formalName());
            } else {
                this.log(greetings[this.language] + ' ' + this.fullName());
            }
        },
        log: function (message) {
            if (console) {
                console.log(logMessages[this.language] + '  ' + message);
            }
            return this;
        },
        setLang: function (lang) {
            this.language = lang;
            this.validate();
            return this;
        },
        HTMLGreeting: function (selector, formal) {
            if (!$) {
                throw "jquery must be in place";
            }

            if (!selector) {
                throw "Selector must be in place";
            }

            if (formal) {
                msg = this.formalName();
            } else {
                msg = this.fullName();
            }
            $(selector).html(msg);
            return this;
        }
    };

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;
}(window, jQuery));