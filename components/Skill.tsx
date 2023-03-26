import React from 'react'
import {motion} from "framer-motion"

type Props = {
    directionLeft?: boolean;
};

function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            x:directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{
            duration:1
        }}
        whileInView={{
            opacity:1,
            x:0
        }}
        src="https://media.newyorker.com/photos/63826120196c8ef692b4eba5/3:4/w_1277,h_1703,c_limit/Ronaldo_WC22.png"
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300'
        />
    </div>
  )
}

export default Skill