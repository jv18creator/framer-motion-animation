import React from "react";
import { motion, useViewportScroll } from "framer-motion";

const unknow = () => {
  const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };
const { scrollYProgress } = useViewportScroll();
  return (
    <div className="mx-auto max-w-7xl bg-gray-900">
      <motion.div
        initial="pageInitial"
        animate="animatePage"
        variants={{
          pageInitial: {
            //   opacity: 0,
          },
          animatePage: {
            //   opacity: 1,
          },
        }}
        className="h-screen overflow-x-hidden w-full flex flex-col justify-center items-center"
      >
        <div>
          <h1 className="mb-20">
            <span className="font-bold text-4xl text-white">Location:</span>
            <motion.div
              className="inline"
              initial="setText"
              animate="animateText"
              variants={{
                setText: {
                  scaleY: 0.3,
                },
                animateText: {
                  scaleY: 1,
                },
                transition: {
                  duration: 0.3,
                  delay: 10,
                },
              }}
            >
              <span className="font-thin text-4xl text-green-400 ml-4 uppercase">
                personnals
              </span>
            </motion.div>
          </h1>
        </div>
        <motion.div className="max-w-full h-96 bg-cover bg-top flex justify-center items-center relative">
          {/*         <motion.p
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          className="text-green-400 uppercase font-thin absolute -right-1 bottom-3 transform rotate-90"
        >
          MORE
        </motion.p> */}
          <motion.img
            initial="pageInitial"
            animate="animatePage"
            variants={{
              pageInitial: {
                opacity: 0.1,
                scaleX: 0.1,
              },
              animatePage: {
                opacity: 1,
                scaleX: 1,
                transition: {
                  duration: 0.6,
                },
              },
            }}
            className="object-contain bg-center w-full h-full"
            transition={transition}
            src="https://images.unsplash.com/photo-1611697522020-f44d4e818698?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8NGslMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-screen flex items-center justify-center"
      >
        <p className="font-thin uppercase text-lg text-green-400 max-w-md text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aperiam
          voluptates in et amet reprehenderit? Iure modi consequuntur qui dolore
          nemo rem architecto in delectus aliquid illum debitis, quidem quia.
          Possimus unde accusantium eum, libero maxime cupiditate aperiam.
          Quisquam ex saepe expedita rerum vero nostrum quam voluptate
          accusantium perferendis fugit, nihil minima quis, quae excepturi!
          Corporis ad exercitationem beatae ducimus error sapiente laudantium
          eos accusantium nemo dicta, quas, consequuntur, quia assumenda eveniet
          veniam mollitia quisquam nam omnis atque nesciunt illum.
        </p>
      </motion.div>
    </div>
  );
};

export default unknow;
