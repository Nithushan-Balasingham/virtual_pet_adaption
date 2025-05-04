import * as petService from '../services/petService.js';

export const getAllPets = async (req, res) => {
    const mood = req.query.mood;
    try {
      const pets = await petService.getAllPets(mood); 
      res.json(pets);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving pets", error: error.message });
    }
  };
  
  export const getPetById = async (req, res) => {
    try {
      const pet = await petService.getPetById(req.params.id); 
      if (!pet) return res.status(404).json({ error: 'Pet not found' });
      res.json(pet);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving pet", error: error.message });
    }
  };
  

export const addPet = async (req, res) => {
  try {
    const { name, species, age, personality } = req.body;

    if (!name || !species || !age || !personality) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newPet = await petService.addPet({ name, species, age, personality });

    return res.status(201).json({
      message: "Pet is added successfully",
      pet: newPet
    });
  } catch (error) {
    console.error("Add Pet Error:", error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const updatePet = async (req, res) => {
    try {
      const updated = await petService.updatePet(req.params.id, req.body); 
      if (!updated) return res.status(404).json({ error: 'Pet not found' });
      res.json(updated);
    } catch (error) {
      res.status(500).json({ message: 'Error updating pet', error: error.message });
    }
  };
  
  export const adoptPet = async (req, res) => {
    try {
      const adopted = await petService.adoptPet(req.params.id); 
      if (!adopted) return res.status(404).json({ error: 'Pet not found' });
      res.json({ message: 'Pet adopted', pet: adopted });
    } catch (error) {
      res.status(500).json({ message: 'Error adopting pet', error: error.message });
    }
  };
  

  export const deletePet = async (req, res) => {
    try {
      const deleted = await petService.deletePet(req.params.id); 
      if (!deleted) return res.status(404).json({ error: 'Pet not found' });
      res.json({ message: 'Pet deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting pet', error: error.message });
    }
  };
  
