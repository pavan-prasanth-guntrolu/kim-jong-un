import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Confetti from "react-confetti"; // 🎉 import confetti
import officialPoster from "../../Graphics/ibm-official-poster.jpg";

const CurtainLanding = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showPoster, setShowPoster] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const handleLaunch = () => {
    setOpen(true);

    // Step 1: Show welcome text
    setTimeout(() => {
      setShowText(true);
    }, 300);

    // Step 2: Hide text and show poster
    setTimeout(() => {
      setShowText(false);
      setShowPoster(true);
      setConfetti(true); // 🎉 Start confetti when poster appears
    }, 300 + 7000);

    // Step 3: Navigate away after 14s
    setTimeout(() => {
      setHidden(true);
      navigate("/");
    }, 14000);
  };

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[999999] overflow-hidden bg-black">
      {/* Stage Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950 to-black flex items-center justify-center">
        {/* Spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
        {/* Accent lights */}
        <div className="absolute inset-0 animate-pulse opacity-20 bg-[radial-gradient(circle_at_20%_30%,#00ffff_0%,transparent_30%),radial-gradient(circle_at_70%_60%,#ff00ff_0%,transparent_25%)]" />

        {/* Welcome Content */}
        {showText && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              🎉 Welcome to{" "}
              <span className="text-purple-400">
                Qiskit Fall Fest 2025 sponsored by IBM Quantum Website Launch
              </span>
            </h1>
            <h2 className="mt-3 text-xl md:text-2xl text-gray-300 font-light">
              Officially launched by Prof K Madhu Murthy Garu on 27-09-2025
            </h2>
          </motion.div>
        )}

        {/* Event Poster */}
        {showPoster && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center"
          >
            <img
              src={officialPoster}
              alt="Qiskit Fall Fest Poster"
              className="mx-auto max-h-[80vh] rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </div>

      {/* 🎉 Confetti Animation */}
      {confetti && (
        <Confetti recycle={false} numberOfPieces={400} gravity={0.2} />
      )}

      {/* Launch Button */}
      {!open && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <motion.button
            onClick={handleLaunch}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-black font-bold rounded-full shadow-lg"
            style={{
              background: "linear-gradient(135deg, #ffd700, #ffcc00, #e6b800)",
              boxShadow: "0 0 25px rgba(255,215,0,0.6)",
            }}
          >
            Launch Website
          </motion.button>
        </div>
      )}

      {/* Left Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: open ? "-100%" : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-full w-1/2 z-20"
        style={{
          background: `
            repeating-linear-gradient(
              to right,
              #8b0000,
              #8b0000 20px,
              #a40000 20px,
              #a40000 40px
            )
          `,
          boxShadow: "inset -10px 0 20px rgba(0,0,0,0.6)",
        }}
      />

      {/* Right Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: open ? "100%" : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 right-0 h-full w-1/2 z-20"
        style={{
          background: `
            repeating-linear-gradient(
              to left,
              #8b0000,
              #8b0000 20px,
              #a40000 20px,
              #a40000 40px
            )
          `,
          boxShadow: "inset 10px 0 20px rgba(0,0,0,0.6)",
        }}
      />
    </div>
  );
};

export default CurtainLanding;
