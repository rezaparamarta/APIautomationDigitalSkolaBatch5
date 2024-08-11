const request = require('supertest');
const baseUrl = require('../env1');

describe('This is unit Test API for calling get methode', function() {
    it('Get objects', async() => {
        const { expect } = await import('chai');
        const response = await request(baseUrl())
        .get('objects')
        .set('Content-Type', 'application-json')

        expect(response.status).to.equal(200);
        expect(response.body[0].id).to.equal('1');
        expect(response.body[0].name).to.equal('Google Pixel 6 Pro');
        console.log('response status is ', response.status);
        console.log('response body are ', response.body);
    });
});