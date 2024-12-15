import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "motion/react";
function Cards({ data, reference }) {
  const [status, setStatus] = useState("Incomplete"); // Status

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

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.9}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden"
    >
      <FaTasks />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center py-3 px-8 justify-between mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center ">
            {data.close ? (
              <IoCloseSharp />
            ) : (
              <LuDownload size="0.7em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className="tag w-full py-3 px-3  flex items-center justify-center bg-[#fc0404]"
          >
            <h3
              className="w-full h-full text-center text-xl font-semibold"
              onClick={(e) => handleClick(e)}
            >
              {status}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
