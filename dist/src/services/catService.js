"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catRepository_1 = __importDefault(require("../repositories/catRepository"));
class CatService {
    getAllCats() {
        return catRepository_1.default.getAll();
    }
    voteCat(id, vote) {
        const cat = catRepository_1.default.getById(id);
        if (cat) {
            cat.score += vote;
            catRepository_1.default.update(cat);
        }
        else {
            throw new Error('Chat non trouvé');
        }
    }
}
exports.default = new CatService();
