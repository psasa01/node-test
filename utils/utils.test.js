const utils = require('./utils');
const expect = require('expect');

it('should add 2 numbers', () => {
    var res = utils.add(33, 11);

    expect(2).toBeA('number');
    expect(res)
        .toBe(44);

});

it('should square a number', () => {
    var res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
});

it('should verify first and last names are set', () => {
    var user = {
        location: "Sarajevo",
        age: 38
    };

    var res = utils.setName(user, "Saša Petrović");

    utils.setName("Sale", "Saša Petrović");

    expect(user).toInclude({
        firstName: 'Saša',
        lastName: 'Petrović'
    });

})
