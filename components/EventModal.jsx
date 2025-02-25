import React from "react";
import { motion } from "framer-motion";
import { BiCross } from "react-icons/bi";
import { FaCross } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";

const EventModal = ({ isOpen, onClose, title, description, dates, quote, mode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-black">
          <CgClose size={20}/>
        </button>
        <h2 className="text-2xl text-black font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-2 text-lg">{description}</p>
        <p className="text-gray-500 mb-2 text-lg"><strong>Dates:</strong> {dates}</p>
        <p className="italic text-gray-600 mb-2 text-2xl">"{quote}"</p>
        <p className="text-gray-800 text-xl"><strong>Mode:</strong> {mode}</p>
      </motion.div>
    </div>
  );
};

export default EventModal;
