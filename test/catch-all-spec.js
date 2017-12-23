const request = require('supertest');
const app = require('../src/app');


describe('/* catch all', () => {
  
  it('should return 404 error message', () => {
    
    let check = (results) => {
      expect(results.body).to.be.an('Object');
      expect(results.statusCode).to.equal(404);
      expect(results.body.name).to.equal('NotFound');
      expect(results.body.message).to.equal('Not found');
    }
    
    return request(app).post('/').then(check);
    
  });
  
});