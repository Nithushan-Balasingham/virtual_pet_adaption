import React, { useState } from "react";
import PetCard from "./PetCard";

export default function PetList({ pets, refreshPets }) {
  const [editingId, setEditingId] = useState(null);

  return (
    <div className="grid">
      {pets.length === 0 ? (
        <div className="text-title">No Virutal Pets available...</div>
      ) : (
        pets?.map((pet) => (
          <PetCard
            key={pet._id}
            pet={pet}
            isEditing={editingId === pet._id}
            onEdit={() => setEditingId(pet._id)}
            onCancelEdit={() => setEditingId(null)}
            refreshPets={refreshPets}
          />
        ))
      )}
    </div>
  );
}
