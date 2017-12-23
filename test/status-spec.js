const request = require('supertest');
const app = require('../src/app');
const pkg = require('../package');
const os = require('os');

describe('/status endpoint', () => {
  
  it('should return API status', () => {
    
    let check = (results) => {
      expect(results.statusCode).to.equal(200);
      expect(results.body.name).to.equal(pkg.name);
      expect(results.body.description).to.equal(pkg.description);
      expect(results.body.build).to.equal(pkg.version);
      expect(results.body.server).to.be.an('object');
      expect(results.body.server.hostname).to.equal(os.hostname());
      expect(results.body.server.arch).to.equal(os.arch());
      expect(results.body.server.platform).to.equal(os.platform());
      expect(results.body.server.type).to.equal(os.type());
      expect(results.body.server.uptime).to.be.a('number');
      expect(results.body.server.loadAverage).to.be.an('array');
      expect(results.body.server.freemem).to.be.a('number');
      expect(results.body.server.totalmem).to.equal(os.totalmem());
      expect(results.body.server.cpus).to.be.an('array');
    }
    
    return request(app).get('/status').then(check);
    
  });
  
});