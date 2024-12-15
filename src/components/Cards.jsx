import React, { useState, useRef } from "react";
import { FaTasks } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "motion/react";
function Cards({reference, onDelete }) {
  let desc = "Enter text";
  // Hooks ong
  const [status, setStatus] = useState("Incomplete");
  const [description, setDescription] = useState(desc);
  const [isEditing, setIsEditing] = useState(false);
  const descriptionRef = useRef(null);

  const handleDescriptionChange = (e) => {
    const newDescription = e.target.innerText;

    // Remember the Cursor
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const cursorOffset = range.startOffset;

    // Update state
    setDescription(newDescription);

    // Restore Cursor position
    setTimeout(() => {
      const newRange = document.createRange();
      const textNode = descriptionRef.current.firstChild;

      if (textNode) {
        newRange.setStart(textNode, Math.min(cursorOffset, textNode.length));
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
      }
    }, 0);
  };

  const handleClick = (e) => {
    const parentDiv = e.target.parentElement; // Get the parent div
    let newStatus;
    let newColor;
    

    // Cycle through states:
    if (status === "Incomplete") {
      newStatus = "In Progress";
      newColor = "Blue";
    } else if (status === "In Progress") {
      newStatus = "Complete";
      newColor = "Green";
    } else {
      newStatus = "Incomplete";
      newColor = "Red";
    }

    // Set the new status and background color
    setStatus(newStatus);
    parentDiv.style.backgroundColor = newColor;
    e.target.textContent = newStatus;
  };

  // Starts editing
  const handleEditStart = () => {
    setIsEditing(true);
  };

  // Stops editing
  const handleEditEnd = () => {
    setIsEditing(false);
  };

  // Remove edit mode when Enter is pressed
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false); // Exit edit mode
      e.preventDefault(); // Prevent newline by Enter key
    }
  };

  // Set edit mode when clicked
  const handleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <motion.div
      drag={!isEditing}
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.9}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden"
    >
      <FaTasks />
      <p
        ref={descriptionRef}
        contentEditable={isEditing}
        suppressContentEditableWarning={true}
        onInput={handleDescriptionChange}
        onFocus={handleEditStart} // Start editing
        onBlur={handleEditEnd} // End editing
        onKeyDown={handleKeyDown} // Enter key to exit edit mode
        className="text-sm leading-tight mt-5 font-semibold"
        style={{
          padding: "5px",
          minHeight: "50px",
          cursor: "text",
          textDecoration: isEditing ? "underline" : "none",
        }}
      >
        {desc}
      </p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center py-3 px-8 justify-between mb-3">
          <h5 className="bg-blue-900 p-0.5 rounded" onClick={handleEditMode}>
            Edit
          </h5>

          <span
            onClick={() => onDelete(data.id)}
            className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center "
          >
            <IoCloseSharp />
          </span>
        </div>

        <div className="tag w-full py-3 px-3  flex items-center justify-center bg-[#fc0404]">
          <h3
            className="w-full h-full text-center text-xl font-semibold"
            onClick={(e) => handleClick(e)}
          >
            {status}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default Cards;
