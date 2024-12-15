import React, { useState, useRef } from "react";
import Cards from "./Cards";
function Foreground() {
  const ref = useRef(null);

  const generateID = () => Date.now() + Math.random();

  const [data, setData] = useState([
    { id: generateID() },
    { id: generateID() },
    { id: generateID() },
  ]);

  const handleDelete = (id) => {
    console.log("Deleting card with ID:", id);
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap"
    >
      {data.map((item, index) => (
        <Cards
          key={item.id}
          data={item}
          reference={ref}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  );
}

export default Foreground;
