import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Picture: FC = () => {
  return (
    <motion.div
      className="py-12 px-8 md:px-24 flex flex-col items-center"
      layout
    >
      <motion.div
        className="rounded-full overflow-hidden border-2 border-indigo-500 drop-shadow-lg transition-all hover:brightness-110 aspect-square"
        animate={{y:10, transition:{duration: 2, ease: "easeInOut", repeat:Infinity, repeatType: "reverse"}}}
        initial={{y: -10}}
        >
        <Image
          src="/splatboy-dev.webp"
          alt="Profile"
          width={200}
          height={110}
          priority
        />
      </motion.div>
      <motion.h1
        className="font-openSans text-center text-3xl md:text-4xl font-bold mt-6 leading-tight tracking-tighter gradient-text"
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        initial={{ opacity: 0 }}
      >
        HOLA, soy José Domingo Aranda calambás. 
      </motion.h1>
      <motion.h5
        className="font-openSans text-right text-2xl md:text-2xl font-bold mt-6 leading-tight tracking-tighter gradient-text"
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        initial={{ opacity: 0 }}
      >
        Desarrollador Web y Junior en Android
      </motion.h5>
      <motion.h5
        className="font-openSans text-right text-2xl md:text-2xl font-bold mt-6 leading-tight tracking-tighter gradient-text"
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        initial={{ opacity: 0 }}
      >
        📌 Colombia, Popayán 
      </motion.h5>

      <motion.p
        className="md:w-1/2 mx-auto text-center mt-6 text-sky-100"
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5}
        }}
        initial={{ opacity: 0, y: -30 }}
      >
        Bienvenido a mi portafolio..<br />
        ¿Quieres saber más acerca de mí?
      </motion.p>
      <motion.arguments>
      <a
        href="#"
      >
        <FaGithub size={30} color="#3b82f6" />
      </a>
      <a
        href="https://www.facebook.com/aranda.josed/"
      >
        <FaFacebook size={30} color="#3b82f6" />
      </a>
      <a
        href="#"        
      >
        <FaLinkedin size={30} color="#3b82f6" />
      </a>
      <a
        href="#"
      >
        <FaTwitter size={30} color="#3b82f6" />
      </a>
      <a
        href="https://www.instagram.com/josed_aranda/"
      >
        <FaInstagram size={30} color="#3b82f6" />
      </a>
      </motion.arguments>
    </motion.div>
  );
};

export default Picture;
