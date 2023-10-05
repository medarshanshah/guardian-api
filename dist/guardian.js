"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homepage = exports.guardianRoute = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
exports.guardianRoute = (0, express_1.Router)();
const homepage = (result) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield axios_1.default.get('https://content.guardianapis.com/search?api-key=test&section=(world|sport|business|technology|politics)')
            .then(response => {
            console.log("homepage: status:: ", response.status);
            return response.data.response.results;
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.homepage = homepage;
exports.guardianRoute.get('/', (req, res) => {
    (0, exports.homepage)((data) => {
        res.json(data);
    });
});
module.exports = {
    guardianRoute: exports.guardianRoute
};
//# sourceMappingURL=guardian.js.map