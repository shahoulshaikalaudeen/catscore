import catRepository from '../repositories/catRepository';

class CatService {
    getAllCats() {
        return catRepository.getAll();
    }

    voteCat(id: string, vote: number) {
        const cat = catRepository.getById(id);
        if (cat) {
            cat.score += vote;
            catRepository.update(cat);
        } else {
            throw new Error('Chat non trouvé');
        }
    }
}

export default new CatService();
