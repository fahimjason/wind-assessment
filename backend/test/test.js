const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const rewire = require('rewire');

var sequelize = require('');

var users = rewire('./users');
var User = require('./models/user');

var sandbox = sinon.sandbox.create();

describe('users', ()=>{
    let findStub;
    let deleteStub;
    let sampleUser;
    let mailerStub;

    beforeEach(()=>{
        sampleDesignation = {
            id: 123,
            title: 'foo',
            email: 'foo@bar.com',
            save: sandbox.stub().resolves()
        }

        findStub = sandbox.stub(mongoose.Model, 'findById').resolves(sampleUser);
        deleteStub = sandbox.stub(mongoose.Model, 'remove').resolves('fake_remove_result');
    })

    afterEach(()=>{
        sandbox.restore();
        users = rewire('./users');
    })

    context('get', ()=>{
        it('should check for an id', (done)=>{
            users.get(null, (err, result)=>{
                expect(err).to.exist;
                expect(err.message).to.equal('Invalid user id');
                done();
            })
        })

        it('should call findDesignationById with id and return result', (done)=>{
            sandbox.restore();
            let stub = sandbox.stub(mongoose.Model, 'findById').yields(null, {name: 'foo'});

            users.get(123, (err, result)=>{
                expect(err).to.not.exist;
                expect(stub).to.have.been.calledOnce;
                expect(stub).to.have.been.calledWith(123);
                expect(result).to.be.a('object');
                expect(result).to.have.property('name').to.equal('foo');

                done();
            })
        })

        it('should catch error if there is one', (done)=>{
            sandbox.restore();
            let stub = sandbox.stub(mongoose.Model,'findById').yields(new Error('fake'));

            users.get(123, (err, result)=>{
                expect(result).to.not.exist;
                expect(err).to.exist;
                expect(err).to.be.instanceOf(Error);
                expect(stub).to.have.been.calledWith(123);
                expect(err.message).to.equal('fake');

                done();
            })

        })
    })

})