/**
 * Created by rs on 20/12/15.
 */
//
//var g = G$('Ravi', 'Somayaji', 'en');
//
//g.greet();
//g.setLang('es');
//g.greet(true);



$('#login').click(function () {
    var person = G$('Ravi', 'Somayaji');
    $('#logindiv').hide();

    person.setLang($('#lang').val()).HTMLGreeting($("#greeting"), true).log();

});