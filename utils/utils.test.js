const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {


    it('should add 2 numbers', () => {
        var res = utils.add(33, 11);

        expect(2).toBeA('number');
        expect(res)
            .toBe(44);

    });


    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });

    it('should async square a number', (done) => {
        utils.squareAsync(5, (square) => {
            expect(square).toBe(25);
            done();
        });
    });

    it('should square a number', () => {
        var res = utils.square(3);

        expect(res).toBe(9).toBeA('number');
    });

})


it('should verify first and last names are set', () => {
    var user = {
        age: 38,
        location: "Sarajevo"
    };

    var res = utils.setName(user, 'Saša Petrović');

    expect(res).toInclude({
        firstName: 'Saša',
        lastName: 'Petrović'
    }).toEqual(user)

});
