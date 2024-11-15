import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion';
import "./ComingSoon.css"
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
const Coming_soon = () => {

  const text = "Coming\u00A0Soon";

  const text2 = "Blitzschlag'25";

  const getRandomPosition = () => ({
    x: Math.floor(Math.random() * 200 - 100), // Random x position between -100 and 100
    y: Math.floor(Math.random() * 200 - 100), // Random y position between -100 and 100
  });

  return (
    <div className="fixed top-0 left-0 bottom-0 w-full  bg-[#121212]">
              <div className="w-full grid grid-rows-12 grid-cols-12 overflow-clip">

              </div>
              {/* Blitzschlag'25 */}
              <div className="mx-auto font-extrabold text-5xl text-white mt-[14vw] cursor-pointer">
                  {text2.split('').map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ x: 0, y: 0, opacity: 1 }} // Start at original position
                      whileHover={{ ...getRandomPosition(), opacity: 0.5 }} // Scatter and partially fade on hover
                      transition={{
                        duration: 0.5, // Duration of scatter effect
                        ease: "easeOut",
                      }}
                      style={{ display: 'inline-block' }}
                    >
                      {char}
                    </motion.span>
                  ))}
              </div>

              {/* Coming Soon */}
              <div className="mx-auto font-bold text-4xl text-[#FFFFFF70] mt-14 cursor-pointer">
                    {text.split('').map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}           
                      animate={{ opacity: 1 }}           
                      transition={{
                        duration: 2,                   
                        delay: index*0.3,           
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
              </div>

              {/* Timer */}
              <div className="flex justify-center items-center mt-5">
                  <FlipClockCountdown 
                      to={new Date("2024-12-31T23:59:59")}
                      className='flip-clock'
                      labels={["Days","HOURS","MINUTES","SECONDS"]}
                      duration={0.5}
                    />
              </div>
        </div>
  );
};

export default Coming_soon;