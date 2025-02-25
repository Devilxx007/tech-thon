import React from "react";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";

const EventModal = ({ isOpen, onClose, title, description, dates, quote, mode, platform, platformLink, prizes, contacts, registerLink }) => {
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
          <CgClose size={24} />
        </button>

        <h2 className="text-2xl font-bold text-black mb-4">{title}</h2>
        <p className="text-gray-700 mb-2"><strong>Description:</strong> {description}</p>
        <p className="text-gray-500 mb-2"><strong>Dates:</strong> {dates}</p>
        <p className="italic text-gray-600 text-lg mb-2">"{quote}"</p>
        <p className="text-gray-800"><strong>Mode:</strong> {mode}</p>
        <p className="text-gray-800"><strong>Platform:</strong> {platform}</p>
        <a href={platformLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Visit Platform</a>

        <div className="mt-4 text-black">
          <h3 className="font-semibold">Prizes:</h3>
          <p>🏆 Winner: {prizes.winner}</p>
          <p>🥈 Runners-Up: {prizes.runnersUp}</p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Contacts:</h3>
          {contacts.map((contact, i) => (
            <p key={i} className="text-gray-700">{contact.name}: <a href={`tel:${contact.phone}`} className="text-blue-500 hover:underline">{contact.phone}</a></p>
          ))}
        </div>

        <div className="mt-4 text-center">
          <a href={registerLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Register Now
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default EventModal;
