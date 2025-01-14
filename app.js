"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Middleware
app.use((req, res, next) => {
    req.locale = 'en';
    next();
});
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=app.js.map