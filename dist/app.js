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
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const cors = require('cors');
app.use(cors());
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield axios_1.default.get('https://content.guardianapis.com/search?q=debates&api-key=test')
        .then(response => {
        console.log("status ---->  ", response.status);
        console.log("response ---->  ", response);
        return response.data;
    });
    res.send(data);
}));
app.listen(port, () => {
    console.log('listening to port: ', port);
});
//# sourceMappingURL=app.js.map