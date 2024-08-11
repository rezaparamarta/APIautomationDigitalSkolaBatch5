const request = require('supertest');
const baseUrl = require('../env1');

describe('This is unit Test API for calling post methode', function() {
    this.timeout(10000); // Tambahkan ini untuk meningkatkan timeout lebih besar lagi

    it('Post store objects', async() => {
        const body = {
            "name": "Macbook Pro 2024",
            "data": {
                "year": 2024,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }
        const { expect } = await import('chai');
        
        try {
            const response = await request(baseUrl())
                .post('objects')
                .set('Content-Type', 'application/json')
                .send(body);
            
            console.log('Response received');
            expect(response.status).to.equal(200);
            console.log('response status is ', response.status);
            console.log('response body are ', response.body);
        } catch (error) {
            console.error('Error occurred:', error);
            throw error;
        }
    });
});
