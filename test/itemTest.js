const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Items', () => {
  it('should get all items', (done) => {
    chai.request(server)
      .get('/items')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('should create a new item', (done) => {
    const newItem = {
      name: 'xl',
      description: 'operator',
    };

    chai.request(server)
      .post('/items')
      .send(newItem)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('name').eql('xl');
        done();
      });
  });

  it('should delete an item by ID', (done) => {
    const deleteID = {id: '6569fd09717cb28358d1ba02'};
      
    chai.request(server)
      .delete('/items') 
      .send(deleteID)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('should update an item by ID', (done) => {
    const updatedItem = {
        id: '6569fe486f3c29618664f541',
        name: 'indosat',
        description: 'operator',
    };

    chai.request(server)
      .put('/items')
      .send(updatedItem)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

});
