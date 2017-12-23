const request = require('supertest');
const app = require('../src/app');
const pkg = require('../package');

describe('/ endpoint', () => {
  
  it('should return api info', () => {
    
    let check = (results) => {
      expect(results.statusCode).to.equal(200);
      expect(results.body.name).to.equal(pkg.name);
      expect(results.body.description).to.equal(pkg.description);
      expect(results.body.build).to.equal(pkg.version);
    }
    
    return request(app).get('/').then(check);
    
  });
  
});