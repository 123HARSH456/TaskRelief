import React, { useState, useRef } from "react";
import Cards from "./Cards";
function Foreground() {
  const [cards, setCards] = useState([]);
  const container = useRef(null);

  // Add new card
  const addCard = () => {
    if (cards.length < 10) {
      const newCard = { id: Date.now() + Math.random() };
      setCards((prevCards) => [...prevCards, newCard]);
    } else {
      alert("You can only add a maximum of 10 tasks for now.");
    }
  };

  // Delete a card by its id
  const handleDelete = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <div
      ref={container}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap"
    >
      {cards.map((card) => (
        <Cards
          key={card.id}
          reference={container}
          cards={card}
          onDelete={() => handleDelete(card.id)}
        />
      ))}
      {/* Plus icon or button to add a new card */}
      <div
        onClick={addCard}
        className="absolute flex text-center right-0 bottom-0 px-5 h-10 items-center rounded-full bg-blue-500 text-white"
      >
        Add
      </div>
    </div>
  );
}

export default Foreground;
