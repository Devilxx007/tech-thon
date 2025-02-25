"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { BiCalendar, BiGlobe, BiPhone } from "react-icons/bi";
import { TbMessageFilled } from "react-icons/tb";
import { FaLocationPin } from "react-icons/fa6";
import Logo from "@/assets/icons/Logo"
import EventCard from "@/components/EventCard"
import { Link } from "react-scroll";
import "./futuristic-tessellation.css";
export default function Home() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const SectionWrapper = ({ id, children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });

    return (
      <motion.section
        ref={ref}
        id={id}
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0d1417] via-[#1c2a33] to-[#374850]"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        {children}
      </motion.section>
    );
  };

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


  const Prizes = [
    { "title": "₹8L+", "subtitle": "Worth Prizes" },
    { "title": "₹14K", "subtitle": "Worth Cash Prizes" },
    { "title": "SWAGS", "subtitle": "Winner Get" }
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
  };


  const [events, setEvents] = useState([]);
  const [partners, setPartners] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all three API endpoints in parallel
        const [eventsRes, partnersRes, galleryRes] = await Promise.all([
          fetch(`${BASE_URL}/events`).then((res) => res.json()),
          fetch(`${BASE_URL}/partners`).then((res) => res.json()),
          fetch(`${BASE_URL}/gallery`).then((res) => res.json()),
        ]);

        // Set the fetched data to state
        setEvents(eventsRes.data);
        setPartners(partnersRes.data);
        setGallery(galleryRes.data);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Runs only once when component mounts

  // Log updated state
  useEffect(() => {
    console.log("Updated Events:", events);
    console.log("Updated Partners:", partners);
    console.log("Updated Gallery:", gallery);
  }, [events, partners, gallery]);




  return (
    <div className="bg-[#0d1417] text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="w-full top-0 left-0 p-4 flex justify-center items-center shadow-lg z-50 fixed">
        <ul className="flex space-x-6 items-center justify-center">
          <li><Link to="home" smooth={true} duration={1000} className="cursor-pointer hover:text-blue-400 transition duration-300">Home</Link></li>
          <li><Link to="Events" smooth={true} duration={1000} className="cursor-pointer hover:text-blue-400 transition duration-300">Events</Link></li>
          <li><Link to="Prizes" smooth={true} duration={1000} className="cursor-pointer hover:text-blue-400 transition duration-300">Prizes</Link></li>
          <li><Link to="About Us" smooth={true} duration={1000} className="cursor-pointer hover:text-blue-400 transition duration-300">About Us</Link></li>
          <li><Link to="Contact Us" smooth={true} duration={1000} className="cursor-pointer hover:text-blue-400 transition duration-300">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://files.oaiusercontent.com/file-MLLC9rG3YJdPtJYqUG6B5v?se=2025-02-16T15%3A21%3A19Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D4e2ae300-8212-4b9e-8180-f6c08ca90357.webp&sig=eQloX/09BOhVJ1taT0%2B2D6DEeTgd69WKaxcfXk7df4A%3D"
            alt="Futuristic Computer Science"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col gap-4 justify-center items-center"
        >
          <Logo width={150} height={150} />
          <h1 className=" text-8xl font-saman font-extrabold text-white">Sanganak Vimrash 2024</h1>
          <div className=" bg-white cursor-pointer hover:scale-110 duration-150 rounded-lg px-3 py-3 flex items-center gap-3 w-fit">
            <div>
              <BiCalendar color="black" size={30} />
            </div>
            <div>
              <p className="text-xl text-black">4th March, 2025</p>
            </div>
          </div>
          <motion.a
            href="https://www.instagram.com/techathonarsd?igsh=MWN4NTJjamllZ2phZw=="
            className="bg-[linear-gradient(to_right,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)] mt-6 inline-block  px-8 py-3 rounded-full text-lg hover:bg-blue-800 duration-150 hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <div className=" flex items-center gap-3">
              <div>
                <BsInstagram size={30} />
              </div>
              <div>
                <text>Follow Us On Instagram</text>
              </div>
            </div>


          </motion.a>
        </motion.div>
        <div className="tessellation"></div>
        <div className="glow-lines"></div>
        <div className="neon-pulses"></div>
      </section>

      <SectionWrapper id="info">
        <div className="space-y-16 mb-14">

          {/* Events */}
          <div id="Events" className=" flex flex-col ">
            <h2 className="text-4xl font-bold mb-8 text-white">Events</h2>
            <div className="grid grid-cols-3 gap-8">
              {events.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </div>

          {/* Prizes */}
          <div id="Prizes" className="text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Prizes</h2>
            <div className=" flex items-center gap-5">
              {Prizes.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white hover:text-white hover:bg-gradient-to-b from-[#0d1417] via-[#1c2a33] to-[#374850] flex flex-col items-center justify-center w-[280px] h-[273px] text-black rounded-lg shadow-lg max-w-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 "
                  
                >
                  <h3 className="text-[76px]  font-semibold">{item.title}</h3>
                  <p className="mt-2 text-2xl font-bold ">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="About Us">
        <div className="relative w-full max-w-6xl h-full mx-auto overflow-hidden rounded-lg">
          {/* Image Carousel */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {gallery.map((photo, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={photo.imageUrl}
                  alt={`Slide ${index}`}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1))}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            ◀
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0))}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            ▶
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {gallery.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* About Us Section */}
        <div id="About" className="text-center mt-10 mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white">About Us</h2>
          <p className="max-w-2xl text-2xl leading-relaxed mx-auto text-gray-300">
            Tech-a-thon, the Computer Science society of Atma Ram Sanatan Dharma College, University of Delhi, brings to you its annual technical fest, Sanganak Vimarsh. The event is a platform for students to showcase their technical skills and creativity. The events are open to students of all educational institutions.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id={"Partners"}>
  <div id="Partners" className="text-center flex flex-col gap-8">
    <h2 className="text-6xl font-bold mb-10 text-white">Partners</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
      {partners.map((item, index) => (
        <a 
          key={index} 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="no-underline"
        >
          <motion.div
            className="bg-white flex flex-col items-center justify-center text-black rounded-lg shadow-lg p-4 hover:bg-gradient-to-b from-[#0d1417] via-[#1c2a33] to-[#374850] hover:text-white transition duration-300 transform hover:scale-105 w-[280px] h-[273px] cursor-pointer"
            
          >
            <img src={item.logo} alt={item.name} className="w-[200px] h-[200px] mb-4 rounded-full shadow-md" />
            <p className="text-lg font-semibold text-center">{item.name}</p>
          </motion.div>
        </a>
      ))}
    </div>
  </div>
</SectionWrapper>




      <SectionWrapper id="Contact Us">
        <div>
          <h2 className=" text-6xl text-white font-bold">Contact Us</h2>
        </div>
        <div className=" flex items-center px-3 mt-10 justify-between  w-full">
          <div className=" flex flex-col items-center">
            <Logo />
            <h1 className=" text-6xl font-saman font-extrabold text-white">Sanganak
              <br />Vimrash 2024</h1>
          </div>

          <div className=" flex flex-col items-start gap-5">
            <div className=" flex items-center gap-5">
              <TbMessageFilled size={35} />
              <text className=" text-2xl">techathon@arsd.du.ac.in</text>
            </div>
            <div className=" flex items-center gap-5">
              <BiPhone size={35} />
              <text className=" text-2xl">+917042496540; +919811689644</text>
            </div>
            <div className=" flex items-start gap-5">
              <FaLocationPin size={35} />
              <text className=" text-2xl">Atma Ram Sanatan Dharma College, Dhaula Kuan,
                <br />New Delhi, INDIA 110021</text>
            </div>
            <a href="https://arsdcollege.ac.in/" className=" flex items-center gap-5">
              <BiGlobe size={35} />
              <text className=" text-2xl">arsdcollege.ac.in</text>
            </a>
          </div>
        </div>

      </SectionWrapper>

    </div>
  );
}
