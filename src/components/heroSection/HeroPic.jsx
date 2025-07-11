import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiCircleThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative flex items-center justify-center"
    >
      {/* Neon Glowing Ring */}
      <div className="absolute w-[370px] h-[370px] rounded-full border-4 border-[#00f0ff] shadow-[0_0_30px_#00f0ff] animate-[spin_20s_linear_infinite] z-0" />

      {/* Profile Image */}
      <div className='w-[360px] h-[360px] rounded-full overflow-hidden z-10'>
        <img
          src="\images\HexaPic.png" // Change this to your formal suited image
          alt="Karan Kumar D"
          className='w-full h-full object-cover scale-110'
        />
      </div>
    </motion.div>
  );
};

export default HeroPic;
