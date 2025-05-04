import Pet from '../models/petModel.js';
import { calculateMood } from '../utils/moodLogic.js';

export async function getAllPets(filterMood = null) {
  const pets = await Pet.find();
  const withMood = pets.map(p => ({
    ...p.toObject(),
    mood: calculateMood(p.createdAt)
  }));
  return filterMood ? withMood.filter(p => p.mood === filterMood) : withMood;
}

export async function getPetById(id) {
  const pet = await Pet.findById(id);
  if (!pet) return null;
  return { ...pet.toObject(), mood: calculateMood(pet.createdAt) };
}

export async function addPet(data) {
  const newPet = new Pet({
    ...data,
    mood: 'Happy'
  });
  return await newPet.save();
}

export async function updatePet(id, updates) {
  return await Pet.findByIdAndUpdate(id, updates, { new: true });
}

export async function adoptPet(id) {
  return await Pet.findByIdAndUpdate(
    id,
    { adopted: true, adoption_date: new Date() },
    { new: true }
  );
}

export async function deletePet(id) {
  const res = await Pet.findByIdAndDelete(id);
  return !!res;
}
