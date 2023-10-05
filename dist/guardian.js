"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homepage = exports.guardianRoute = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
exports.guardianRoute = (0, express_1.Router)();
const homepage = () => {
    try {
        return axios_1.default.get('https://content.guardianapis.com/search?api-key=test&section=(world|sport|business|technology|politics)')
            .then(response => {
            console.log("homepage: status:: ", response.status);
            return response.data.response.results;
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.homepage = homepage;
exports.guardianRoute.get('/', (req, res) => {
    (0, exports.homepage)().then(data => {
        res.json(data);
    });
});
module.exports = {
    guardianRoute: exports.guardianRoute
};
//# sourceMappingURL=guardian.js.map