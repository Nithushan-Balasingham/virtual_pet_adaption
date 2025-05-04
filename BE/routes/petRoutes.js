import express from 'express';
import {
  addPet,
  getAllPets,
  getPetById,
  updatePet,
  adoptPet,
  deletePet
} from '../controllers/petController.js';

const router = express.Router();

router.post('/', addPet);
router.get('/', getAllPets);
router.get('/:id', getPetById);
router.put('/:id', updatePet);
router.patch('/:id/adopt', adoptPet);
router.delete('/:id', deletePet);

export default router;
