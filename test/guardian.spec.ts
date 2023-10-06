import chai from "chai";
import { expect } from "chai";
import chaiHttp from 'chai-http';

import app from '../src/app';
import { guardianRoute } from "../src/guardian";

chai.use(chaiHttp);
chai.should();

describe("Tests routes", () => {
    it("should get homepage", (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                res.body.should.be.a('object');
                done();
            })
        done();
    })

    it("should get test page", (done) => {
        chai.request(app)
            .get('/test')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                res.body.should.be.a('object');
                done();
            })
        done();
    })
    
    it("should get sections", (done) => {
        chai.request(app)
            .get('/section')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                res.body.should.be.a('object');
                done();
            })
        done();
    })

    it("should get editions", (done) => {
        chai.request(app)
            .get('/edition')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                res.body.should.be.a('object');
                done();
            })
        done();
    })

    it("should get tags", (done) => {
        chai.request(app)
            .get('/tags')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                res.body.should.be.a('object');
                done();
            })
        done();
    })

    it("should get a section", (done) => {
        const sectionId = 'books';
        chai.request(app)
            .get(`/section/${sectionId}`)
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                res.body.should.be.a('object');
                done();
            })
        done();
    })

    it.only("should get an edition", (done) => {
        const editionId = 'uk';
        chai.request(guardianRoute)
            .get(`/edition/${editionId}`)
            .end((err, res) => {
                console.log(res)
                expect(res.status).to.be.equal(200);
                res.body.should.be.a('object');
                done();
            })
            done();
    })
})

