import React, { useState, useRef } from "react";
import Cards from "./Cards";
import DeleteArea from "./DeleteArea";
function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "lorem ipsum dolor got lots of work to do but dont have time to do so ill lock myself up in a room",
      filesize: "edit",
      close: true,
      tag: { isOpen: true, tagTitle: "Completed Now", tagColor: "Green" },
    },
    {
      desc: "lorem ipsum dolor got lots of work to do but dont have time to do so ill lock myself up in a room",
      filesize: "edit",
      close: true,
      tag: { isOpen: true, tagTitle: "Incomplete", tagColor: "Red" },
    },
    {
      desc: "lorem ipsum dolor got lots of work to do but dont have time to do so ill lock myself up in a room",
      filesize: "edit",
      close: true,
      tag: { isOpen: true, tagTitle: "In Progress", tagColor: "Blue" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap"
    >
      {data.map((item, index) => (
        <Cards data={item} reference={ref} />
      ))}
      <DeleteArea />
    </div>
  );
}

export default Foreground;
