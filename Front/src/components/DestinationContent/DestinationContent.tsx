import React from "react";
import DestinationCard from "../DestinationCard/DestinationCard";
import { Destination } from "../../Interfaces/DestinationType";
import "./DestinationContent.css";

interface DestinationContentProps {
  cards: Destination[];
  openEdit: (destination: Destination) => void;
  onToggleBlock: (destination: Destination) => void;
  onDelete: (destination: Destination) => void;
}

function DestinationContent({
  onToggleBlock,
  cards,
  onDelete,
  openEdit,
}: DestinationContentProps) {
  if (!cards || cards.length === 0) {
    return <div>No destinations available.</div>;
  }

  // Affichage de la liste des destinations en utilisant le composant DestinationCard pour chaque destination.
  return (
    <div className="destination-content-container">
      {cards.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
          onToggleBlock={onToggleBlock}
          onDelete={onDelete}
          openEdit={openEdit} // <-- Changez ceci de openEdit à onEdit
        />
      ))}
    </div>
  );
}

export default DestinationContent;
