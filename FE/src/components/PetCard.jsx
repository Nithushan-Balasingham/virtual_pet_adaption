import { motion, AnimatePresence } from "framer-motion";
import { getMoodColor, formatDate } from "../utils/helpers";
import { adoptPet, deletePet } from "../services/api";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import PetForm from "./AddPetForm";

export default function PetCard({
  pet,
  isEditing,
  onEdit,
  onCancelEdit,
  refreshPets,
}) {
  const generateAdoptionCertificate = (pet) => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text(" Adoption Certificate", 20, 30);

    doc.setFontSize(16);
    doc.text(
      `This certifies that ${pet.name}, a ${pet.species}, has been officially adopted.`,
      20,
      50
    );
    doc.text(`Age: ${pet.age}`, 20, 80);
    doc.text(`Personality: ${pet.personality}`, 20, 90);
    doc.text(`Mood at adoption: ${pet.mood}`, 20, 100);

    const date = formatDate(new Date());
    doc.text(`Adoption Date: ${date}`, 20, 120);

    doc.text("Congratulations and thank you for adopting!", 20, 140);

    doc.save(`${pet.name}_Adoption_Certificate.pdf`);
  };

  const handleDeletePet = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this pet?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete();
        Swal.fire("Deleted!", "The pet has been removed.", "success");
      }
    });
  };
  const handleAdoptPet = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to adopt this pet?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, adopt!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        handleAdopt();
        Swal.fire(
          "Adopted!",
          "The pet has been successfully adopted.",
          "success"
        );
      }
    });
  };

  const handleAdopt = async () => {
    await adoptPet(pet._id);
    generateAdoptionCertificate(pet);
    refreshPets();
  };

  const handleDelete = async () => {
    await deletePet(pet._id);
    refreshPets();
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      layout
    >
      {isEditing ? (
        <PetForm
          existingPet={pet}
          onSuccess={() => {
            refreshPets();
            onCancelEdit();
          }}
          onCancel={onCancelEdit}
        />
      ) : (
        <>
          <h3>
            {pet.name} ({pet.species})
          </h3>
          <div className="card-button">
            {!pet.adopted && (
              <button className="add-button" onClick={handleAdoptPet}>
                Adopt
              </button>
            )}
            <button
              className="delete-button"
              onClick={handleDeletePet}
              style={{ color: "white" }}
            >
              Delete
            </button>
            <button className="add-button" onClick={onEdit}>
              Edit
            </button>
          </div>
          <p>Age: {pet.age}</p>
          <p>Personality: {pet.personality}</p>

          <AnimatePresence mode="wait">
            <motion.p
              key={pet.mood}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, color: getMoodColor(pet.mood) }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              Mood: {pet.mood}
            </motion.p>
          </AnimatePresence>

          <p>Status: {pet.adopted ? "Adopted" : "Available"}</p>
          {pet.adoption_date && (
            <p>Adopted On: {formatDate(pet.adoption_date)}</p>
          )}
        </>
      )}
    </motion.div>
  );
}
