"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callGuardianAPI = exports.guardianRoute = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
exports.guardianRoute = (0, express_1.Router)();
const callGuardianAPI = (route_origin, api_url) => {
    try {
        return axios_1.default.get(api_url)
            .then(response => {
            console.log(route_origin, ": status:: ", response.status);
            return response.data.response.results;
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.callGuardianAPI = callGuardianAPI;
// export const sections = () => {
//     try {
//         return axios.get('https://content.guardianapis.com/sections?api-key=test')
//         .then(response => {
//             console.log("sections: status::",response.status)
//             return response.data.response.results;
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
//Routes
//home
exports.guardianRoute.get('/', (req, res) => {
    const home_url = 'https://content.guardianapis.com/search?api-key=test&section=(world|sport|business|technology|politics)';
    (0, exports.callGuardianAPI)('homepage', home_url).then(data => {
        res.json(data);
    });
});
//section
exports.guardianRoute.get('/section', (req, res) => {
    const section_url = 'https://content.guardianapis.com/sections?api-key=test';
    (0, exports.callGuardianAPI)('section', section_url).then(data => {
        res.json(data);
    });
});
exports.guardianRoute.get('/section/:sectionId', (req, res) => {
    console.log(req.params.sectionId);
    const sectionId = req.params.sectionId;
    const section_url = `https://content.guardianapis.com/${sectionId}?api-key=test`;
    (0, exports.callGuardianAPI)('section', section_url).then(data => {
        res.json(data);
    });
});
module.exports = {
    guardianRoute: exports.guardianRoute
};
//# sourceMappingURL=guardian.js.map