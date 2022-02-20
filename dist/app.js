"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
// · INICIALIZATIONS ·
const app = (0, express_1.default)();
// · SETTINGS ·
app.set('port', process.env.PORT || 3001);
// · MIDDLEWARES ·
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// · ROUTES ·
app.use(routes_1.default);
app.use(function HandlingErrorRoutes(err, req, res, next) {
    res.status(500).send(err);
});
exports.default = app;
