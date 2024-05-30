import React from 'react'
import {motion} from 'framer-motion'

function FramerAnimation() {
  return (
    <motion.p className='font-serif text-blue-900 text-[32px] tracking-wider flex justify-center items-center'
    initial={{x:0}}
    animate={{x:[1000,0,]}}
    transition={{
        duration:"3",
        delay:"1",
    }}
    
    >
        WORKING FOR A CAUSE ALWAYS
    </motion.p>
  )
}

export default FramerAnimation