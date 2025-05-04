import React from 'react';

export default function FilterBar({ filterMood, setFilterMood, fetchPets }) {
  const handleFilter = e => {
    const mood = e.target.value;
    setFilterMood(mood);
    fetchPets(mood);
  };

  return (
    <select value={filterMood} onChange={handleFilter}>
      <option value="">All Moods</option>
      <option value="Happy">Happy</option>
      <option value="Excited">Excited</option>
      <option value="Sad">Sad</option>
    </select>
  );
}
