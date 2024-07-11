import { Request, Response } from 'express';
import catService from '../services/catService';

export const getAllCats = (req: Request, res: Response): void => {
    try {
        const cats = catService.getAllCats();
        res.json(cats);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const voteCat = (req: Request, res: Response): void => {
    const { id, vote } = req.body;
    try {
        catService.voteCat(id, vote);
        res.status(200).json({ message: 'Vote enregistré' });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};
