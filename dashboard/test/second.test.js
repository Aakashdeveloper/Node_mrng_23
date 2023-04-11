let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('User Api',() => {
    it('Should return 200 for users',(done) => {
        chai.request('http://localhost:7710')
        .get('/users')
        .then((res) => {
            expect(res).to.have.status(200)
            done()
        })
        .catch((err) => {
            throw err
        })
    })
    it('Should return 404 for user',(done) => {
        chai.request('http://localhost:7710')
        .get('/user')
        .then((res) => {
            expect(res).to.have.status(404)
            done()
        })
        .catch((err) => {
            throw err
        })
    })
    it('Should return 200 for addUser',(done) => {
        chai.request('http://localhost:7710')
        .post('/addUser')
        .send({"name":"Test User","city":"TestCity","isActive":false})
        .then((res) => {
            expect(res).to.have.status(200)
            done()
        })
        .catch((err) => {
            throw err
        })
    })
})