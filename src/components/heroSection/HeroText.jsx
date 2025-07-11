import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Front-End Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Karan <br className="sm:hidden md:block" />
        Kumar D
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 mb-5 md:translate-x-[-40px]"
      >
        A Passionate Web Developer <br />
        
      <button className="mt-3 md:ml-12 sm:ml-0 px-4 py-2 rounded-full text-xl font-bold font-body
       text-white border-cyan border bg-gradient-to-r
       from-darkCyan to-orange transition-all duration-500 hover:scale-110
       hover:border-orange cursor-pointer hover:shadow-cyanShadow" 
       onClick={() => window.location.href = 'https://www.canva.com/design/DAGq9NU2CLk/g26n4_bOR1_UBX7Q1AfyTQ/view?utm_content=DAGq9NU2CLk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h45d02f846f'}>
      Resume
    </button>

      </motion.p>
    </div>
  );
};

export default HeroText;
