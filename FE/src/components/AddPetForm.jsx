import React, { useState, useEffect } from "react";
import { addPet, updatePet } from "../services/api";
import confetti from "canvas-confetti";

export default function PetForm({ existingPet = null, onSuccess, onCancel }) {
  const [form, setForm] = useState({
    name: "",
    species: "",
    age: "",
    personality: "",
  });

  useEffect(() => {
    if (existingPet) {
      setForm({
        name: existingPet.name,
        species: existingPet.species,
        age: existingPet.age,
        personality: existingPet.personality,
      });
    }
  }, [existingPet]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (existingPet) {
      await updatePet(existingPet._id, { ...form, age: Number(form.age) });
    } else {
      await addPet({ ...form, age: Number(form.age) });
      confetti({ particleCount: 120, spread: 60, origin: { y: 0.7 } });
    }

    onSuccess?.();
    if (!existingPet) {
      setForm({ name: "", species: "", age: "", personality: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* {existingPet && <div className="text-title">Update</div>} */}
      {existingPet && (<div className="text-sub">Name</div>)}
      <input className="input-box" name="name" placeholder="Name"value={form.name} onChange={handleChange} required/>

      {existingPet && (<div className="text-sub">Species</div>)}
      <input className="input-box" name="species" placeholder="Species" value={form.species} onChange={handleChange} required/>

      {existingPet && (<div className="text-sub">Age</div>)}
      <input className="input-box" name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required/>

      {existingPet && (<div className="text-sub">Personality</div>)}
      <input className="input-box" name="personality"  placeholder="Personality"  value={form.personality}  onChange={handleChange}  required/>
      <button type="submit" className="add-button">
        {existingPet ? "Update" : "Add"}
      </button>
      {existingPet && (
        <button type="button" onClick={onCancel} className="delete-button">
          Cancel
        </button>
      )}
    </form>
  );
}
