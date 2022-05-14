const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const rewire = require('rewire');

var { Sequelize } = require('sequelize');

var designations = rewire('../controller/designation.controller');
var Designation = require('../models/designation.model');

var sandbox = sinon.sandbox.createSandbox();

describe('designations', () => {
    let findStub;
    let sampleDesignation; Tt

    beforeEach(() => {
        sampleDesignation = {
            id: 123,
            title: 'CTO',
            parent_id: 0,
            description: null,
            save: sandbox.stub().resolves()
        }

        findStub = sandbox.stub(Designation, 'findOne').resolves(sampleDesignation);
    })

    afterEach(() => {
        sandbox.restore();
        users = rewire('../controller/designation.controller.js');
    })

    context('get', () => {
        it('should check for an id', (done) => {
            users.get(null, (err, result) => {
                expect(err).to.exist;
                expect(err.message).to.equal('Invalid user id');
                done();
            })
        })

        it('should call findDesignationById with id and return result', (done) => {
            sandbox.restore();
            let stub = sandbox.stub(Designation, 'findOne').yields(null, { title: 'foo' });

            users.get(123, (err, result) => {
                expect(err).to.not.exist;
                expect(stub).to.have.been.calledOnce;
                expect(stub).to.have.been.calledWith(123);
                expect(result).to.be.a('object');
                expect(result).to.have.property('title').to.equal('foo');
                expect(result).to.have.property('parent_id').to.equal(0);

                done();
            })
        });
    });

})