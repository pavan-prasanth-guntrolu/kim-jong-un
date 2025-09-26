import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CurtainLanding = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleLaunch = () => {
    setOpen(true);

    // Reveal welcome content just after curtain opens
    setTimeout(() => {
      setShowContent(true);
    }, 1300); // same as curtain animation duration

    // After 5s, remove curtain overlay + navigate
    setTimeout(() => {
      setHidden(true);
      navigate("/");
    }, 5000);
  };

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[999999] overflow-hidden flex items-center justify-center bg-black">
      {/* Stage Background (blocked until curtains open) */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-black via-purple-950 to-black"
        >
          {/* Spotlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
          {/* Accent lights */}
          <div className="absolute inset-0 animate-pulse opacity-20 bg-[radial-gradient(circle_at_20%_30%,#00ffff_0%,transparent_30%),radial-gradient(circle_at_70%_60%,#ff00ff_0%,transparent_25%)]" />
        </motion.div>
      )}

      {/* Welcome Content (appears only after curtains open) */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            🎉 Welcome to{" "}
            <span className="text-purple-400">
              Qiskit Fall Fest Website Launch
            </span>
          </h1>
          <h2 className="mt-3 text-xl md:text-2xl text-gray-300 font-light">
            RGUKT Quantum Computing Festival 2025
          </h2>
        </motion.div>
      )}

      {/* Launch Button (only visible before opening) */}
      {!open && (
        <motion.button
          onClick={handleLaunch}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="z-20 px-8 py-4 text-black font-bold rounded-full shadow-lg"
          style={{
            background: "linear-gradient(135deg, #ffd700, #ffcc00, #e6b800)",
            boxShadow: "0 0 25px rgba(255,215,0,0.6)",
          }}
        >
          🎬 Launch Website
        </motion.button>
      )}

      {/* Left Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: open ? "-100%" : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-full w-1/2"
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
        className="absolute top-0 right-0 h-full w-1/2"
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
