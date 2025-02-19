import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function Landingpage(){
    return(
        <section id="home" className="h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white flex items-center justify-center text-center px-4 pt-20">
        <motion.div className="max-w-3xl"
            initial = {{x: -500, opacity: 0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.8, ease:"easeOut"}}
        >
          <motion.h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="text-yellow-300">Xpensa</span>
          </motion.h1>
          <p className="text-xl mb-6">
            Simplify your finances with smart expense tracking. Take control of your spending today!
          </p>
          <Link to="/signup">
          <motion.button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg hover:bg-yellow-500 transition-all"
          initial = {{ scale: 0 }}
          animate= {{scale: 1}}
          >
            Get Started
          </motion.button>
          </Link>
        </motion.div>
      </section>
    );
}
