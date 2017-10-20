const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
    describe('GET/', () => {
        it('should return hello world', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Todo App v1.0'
                    });
                })
                .end(done);
        });
    });
    describe('GET/users', () => {
        it('should assert that i exist', (done) => {
            request(app)
                .get('/users')
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Emina',
                        role: 'Ljubav',
                        age: 33
                    });
                })
                .end(done);
        });
    });

});
