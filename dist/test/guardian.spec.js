"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const chai_2 = require("chai");
const chai_http_1 = __importDefault(require("chai-http"));
const app_1 = __importDefault(require("../src/app"));
const guardian_1 = require("../src/guardian");
chai_1.default.use(chai_http_1.default);
chai_1.default.should();
describe("Tests routes", () => {
    it("should get homepage", (done) => {
        chai_1.default.request(app_1.default)
            .get('/')
            .end((err, res) => {
            (0, chai_2.expect)(res.status).to.be.equal(200);
            res.body.should.be.a('object');
            done();
        });
        done();
    });
    it("should get test page", (done) => {
        chai_1.default.request(app_1.default)
            .get('/test')
            .end((err, res) => {
            (0, chai_2.expect)(res.status).to.be.equal(200);
            res.body.should.be.a('object');
            done();
        });
        done();
    });
    it("should get sections", (done) => {
        chai_1.default.request(app_1.default)
            .get('/section')
            .end((err, res) => {
            (0, chai_2.expect)(res.status).to.be.equal(200);
            res.body.should.be.a('object');
            done();
        });
        done();
    });
    it("should get editions", (done) => {
        chai_1.default.request(app_1.default)
            .get('/edition')
            .end((err, res) => {
            (0, chai_2.expect)(res.status).to.be.equal(200);
            res.body.should.be.a('object');
            done();
        });
        done();
    });
    it("should get tags", (done) => {
        chai_1.default.request(app_1.default)
            .get('/tags')
            .end((err, res) => {
            (0, chai_2.expect)(res.status).to.be.equal(200);
            res.body.should.be.a('object');
            done();
        });
        done();
    });
    it("should get a section", (done) => {
        const sectionId = 'books';
        chai_1.default.request(app_1.default)
            .get(`/section/${sectionId}`)
            .end((err, res) => {
            (0, chai_2.expect)(res.status).to.be.equal(200);
            res.body.should.be.a('object');
            done();
        });
        done();
    });
    it.only("should get an edition", (done) => {
        const editionId = 'uk';
        chai_1.default.request(guardian_1.guardianRoute)
            .get(`/edition/${editionId}`)
            .end((err, res) => {
            console.log(res);
            (0, chai_2.expect)(res.status).to.be.equal(200);
            res.body.should.be.a('object');
            done();
        });
        done();
    });
});
//# sourceMappingURL=guardian.spec.js.map