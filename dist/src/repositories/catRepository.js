"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dataFilePath = path_1.default.join(__dirname, '../data/cats.json');
class CatRepository {
    loadCats() {
        const data = fs_1.default.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data).images;
    }
    saveCats(cats) {
        const data = JSON.stringify({ images: cats }, null, 2);
        fs_1.default.writeFileSync(dataFilePath, data);
    }
    getAll() {
        return this.loadCats();
    }
    getById(id) {
        const cats = this.loadCats();
        return cats.find(cat => cat.id === id);
    }
    update(cat) {
        const cats = this.loadCats();
        const index = cats.findIndex(c => c.id === cat.id);
        if (index !== -1) {
            cats[index] = cat;
            this.saveCats(cats);
        }
    }
}
exports.default = new CatRepository();
