import React from "react";
import { motion } from "framer-motion";

//

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="mt-80 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:mt-0 md:w-64 md:h-64  xl:w-[300px] xl:h-[500px] xl:mt-0"
        src="https://media.newyorker.com/photos/63826120196c8ef692b4eba5/3:4/w_1277,h_1703,c_limit/Ronaldo_WC22.png"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold mt-10 md:mt-20">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="tx-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          aliquam iure optio officia magni eum voluptatum suscipit quo veritatis
          vitae temporibus architecto tempora consequuntur cupiditate commodi
          adlor. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ratione, debitis! Adipisci fuga perferendis cum. Perspiciatis minima
          rem, corrupti eum doloribus nisi repellendus error sit veniam facilis
          totam? Exercitationem, expedita quaerat.
        </p>
      </div>
    </motion.div>
  );
}
