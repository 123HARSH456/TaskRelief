import React, { useState, useRef } from "react";
import Cards from "./Cards";
function Foreground() {

  // const generateID = () => Date.now() + Math.random();

  // const [data, setData] = useState([
  //   { id: generateID() },
  //   { id: generateID() },
  //   { id: generateID() },
  // ]);

  // const handleDelete = (id) => {
  //   console.log("Deleting card with ID:", id);
  //   setData((prevData) => prevData.filter((item) => item.id !== id));
  // };
  // const [cards, setCards] = useState([
  //   { id: Date.now() + Math.random() },
  //   { id: Date.now() + Math.random() },
  //   { id: Date.now() + Math.random() },
  // ]);

  // Function to add a new card
  const addCard = () => {
    const newCard = { id: Date.now() + Math.random() }; // Create a new card with a unique id
    setCards((prevCards) => [...prevCards, newCard]); // Add the new card to the list
  };

  return (
    <div
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap"
    >
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}

export default Foreground;
