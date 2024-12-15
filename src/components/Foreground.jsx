import React, { useState, useRef } from "react";
import Cards from "./Cards";
function Foreground() {
  const ref = useRef(null);
  let count = 0;

  const generateID = () => {
    count += 1;
    return count;
  };
  const data = [
    {
      id: generateID(),
      desc: "lorem ipsum dolor got lots of work to do but dont have time to do so ill lock myself up in a room",
      filesize: "edit",
      close: true,
      tag: { isOpen: true, tagTitle: "Completed Now" },
    },
    {
      id: generateID(),
      desc: "lorem ipsum dolor got lots of work to do but dont have time to do so ill lock myself up in a room",
      filesize: "edit",
      close: true,
      tag: { isOpen: true, tagTitle: "Incomplete" },
    },
    {
      id: generateID(),
      desc: "lorem ipsum dolor got lots of work to do but dont have time to do so ill lock myself up in a room",
      filesize: "edit",
      close: true,
      tag: { isOpen: true, tagTitle: "In Progress" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap"
    >
      {data.map((item, index) => (
        <Cards key={item.id} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
