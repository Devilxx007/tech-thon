import { useState } from "react";
import { motion } from "framer-motion";
import EventModal from "./EventModal";
import Technology from "@/assets/icons/Technology";

const EventCard = ({ title, description, importantDates, quote, mode, platform, platformLink, prizes, contacts, registerLink }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="bg-white flex flex-col items-center justify-center text-black w-[270px] h-[273px] rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:bg-gradient-to-b from-[#0d1417] via-[#1c2a33] to-[#374850] hover:text-white cursor-pointer"
        
        onClick={() => setModalOpen(true)}
      >
        <div className="flex items-center">
          <Technology />
        </div>
        <p className="mt-2 text-xl font-semibold">{title}</p>
      </motion.div>

      {/* Event Modal */}
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={title}
        description={description}
        dates={importantDates.join(", ")}
        quote={quote}
        mode={mode}
        platform={platform}
        platformLink={platformLink}
        prizes={prizes}
        contacts={contacts}
        registerLink={registerLink}
      />
    </>
  );
};

export default EventCard;
