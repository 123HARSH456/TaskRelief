import React from "react";

function DeleteArea({ onDrop, onDragOver }) {
  return (
    <div
      className="z-[5] fixed right-0 bottom-0 p-5 w-30 h-10 bg-red-600 opacity-[50%] text-white rounded-lg flex items-center justify-center"
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <p>Drop here to delete</p>
    </div>
  );
}

export default DeleteArea;
