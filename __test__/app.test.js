const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    })
})
describe('Test the sum function', () => {
    test('adds 1 + 2 to equal 3', async () => {
        const response = await request(app).get('/?a=1&b=2');
        expect(response.text).toBe('3');
    }),
    test('If one number is passed', async () => {
        const response = await request(app).get('/?a=1');
        expect(response.text).toBe('2');
    }),
    test('If no one is passed', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('2');
    })
})