import React from 'react'
import {motion} from 'framer-motion'

function FramerAnimation() {
  return (
    <motion.p className='font-serif text-blue-900 text-[32px] text-center tracking-wider'
    initial={{x:0}}
    animate={{x:['120vw','2vw']}}
    transition={{
        duration:"4",
        delay:"0.5",
    }}
    
    >
        WORKING FOR A CAUSE ALWAYS
    </motion.p>
  )
}

export default FramerAnimation