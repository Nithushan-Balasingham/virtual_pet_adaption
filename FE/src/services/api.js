const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllPets = async (mood = '') => {
  const res = await fetch(`${BASE_URL}${mood ? `?mood=${mood}` : ''}`);
  return res.json();
};

export const addPet = async (pet) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pet)
  });
  return res.json();
};

export const updatePet = async (id, updatedData) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  });
  return res.json();
};

export const adoptPet = async (id) => {
  await fetch(`${BASE_URL}/${id}/adopt`, { method: 'PATCH' });
};

export const deletePet = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
};
