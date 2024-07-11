"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.voteCat = exports.getAllCats = void 0;
const catService_1 = __importDefault(require("../services/catService"));
const getAllCats = (req, res) => {
    try {
        const cats = catService_1.default.getAllCats();
        res.json(cats);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getAllCats = getAllCats;
const voteCat = (req, res) => {
    const { id, vote } = req.body;
    try {
        catService_1.default.voteCat(id, vote);
        res.status(200).json({ message: 'Vote enregistré' });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
};
exports.voteCat = voteCat;
