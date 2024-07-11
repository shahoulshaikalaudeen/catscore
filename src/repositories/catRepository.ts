import fs from 'fs';
import path from 'path';

interface Cat {
    id: string;
    url: string;
    score: number;
}

const dataFilePath = path.join(__dirname, '../data/cats.json');

class CatRepository {
    private loadCats(): Cat[] {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data).images;
    }

    private saveCats(cats: Cat[]): void {
        const data = JSON.stringify({ images: cats }, null, 2);
        fs.writeFileSync(dataFilePath, data);
    }

    getAll(): Cat[] {
        return this.loadCats();
    }

    getById(id: string): Cat | undefined {
        const cats = this.loadCats();
        return cats.find(cat => cat.id === id);
    }

    update(cat: Cat): void {
        const cats = this.loadCats();
        const index = cats.findIndex(c => c.id === cat.id);
        if (index !== -1) {
            cats[index] = cat;
            this.saveCats(cats);
        }
    }
}

export default new CatRepository();
