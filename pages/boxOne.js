import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const boxOne = () => {
  const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };

  return (
    <>
      <motion.div
        initial={{ clipPath: `circle(0% at 50% 50%)` }}
        animate={{ clipPath: `circle(100% at 50% 50%)` }}
        transition={{ duration: 1 }}
        className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white"
      >
        <motion.div
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            },
          }}
        >
          <motion.h1
            whileHover={{
              transition: {transition},
              scale: [1.1, 0.9, 1],
            }}
            
            className="text-6xl font-bold"
          >
            Welcome to
            <Link href="/unknow">
              <span className="font-thin text-6xl text-green-400 ml-4 uppercase">
                Personnnnals
              </span>
            </Link>
          </motion.h1>
        </motion.div>

        <Link href="/unknow">
          <div className="cursor-pointer w-40 h-52 overflow-hidden flex justify-center items-center relative">
            {/*             <div className="animate-pulse h-6 w-6 bg-green-900 absolute -right-2 -top-2 rounded-full z-50"></div> */}
            <motion.img
              initial="imgInitail"
              animate="animateImg"
              whileHover={{
                scale: 1.3,
              }}
              variants={{
                imgInitail: {
                  opacity: 0.1,
                  y: 200,
                },
                animateImg: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                  },
                },
              }}
              className="w-full h-full object-cover"
              transition={transition}
              src="https://images.unsplash.com/photo-1611697522020-f44d4e818698?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8NGslMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default boxOne;
