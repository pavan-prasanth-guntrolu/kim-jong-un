import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CurtainLanding = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleLaunch = () => {
    setOpen(true);

    // Wait for curtains to slide away, then hide overlay + navigate
    setTimeout(() => {
      setHidden(true); // remove curtains
      navigate("/");
    }, 1500);
  };

  if (hidden) return null; // completely remove after animation

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden bg-black flex items-center justify-center">
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

      {/* Launch Button */}
      {!open && (
        <button
          onClick={handleLaunch}
          className="z-20 px-8 py-4 text-black font-bold rounded-full shadow-lg hover:scale-110 transition"
          style={{
            background: "linear-gradient(135deg, #ffd700, #ffcc00, #e6b800)", // golden look
          }}
        >
          🎬 Launch Website
        </button>
      )}
    </div>
  );
};

export default CurtainLanding;
