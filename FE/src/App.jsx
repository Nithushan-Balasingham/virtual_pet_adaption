import React, { useState, useEffect } from 'react';
import { getAllPets } from './services/api';
import PetList from './components/PetList';
import FilterBar from './components/FilterBar';
import PetForm from './components/AddPetForm';

export default function App() {
  const [pets, setPets] = useState([]);
  const [filterMood, setFilterMood] = useState('');

  const fetchPets = async (mood = '') => {
    const data = await getAllPets(mood);
    setPets(data);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div className="container">
      <h1>Virtual Pet Adoption</h1>
      <FilterBar filterMood={filterMood} setFilterMood={setFilterMood} fetchPets={fetchPets} />
      <PetForm onSuccess={fetchPets} />
      
      <PetList pets={pets} refreshPets={fetchPets} />
    </div>
  );
}
