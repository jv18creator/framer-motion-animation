import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900"
      // style={{
      //   backgroundImage: `url("https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60")`,
      //   backgroundRepeat: `no-repeat`,
      //   backgroundSize: `cover`,
      //   backgroundPosition: `center`,
      // }}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: 80,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.4,
                ease: [0.6, 0.01, -0.05, 0.9],
              },
            },
          }}
        >
          <h1 className="text-6xl font-bold text-white">
            Welcome to
            <a
              className="font-thin text-6xl text-green-400 ml-4 uppercase"
              href="#"
            >
              Personnnnals
            </a>
          </h1>
        </motion.div>
        <motion.div
          exit={{ opacity: 0 }}
          className="grid grid-cols-3 w-full h-96 gap-5 my-10"
        >
          <Link href="/boxOne">
            <motion.div
              whileHover={{
                scale: [1, 1.2, 1.05],
                transition: {
                  duration: 0.5,
                },
              }}
              className="bg-gray-400 w-full "
            ></motion.div>
          </Link>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.3,
              },
            }}
            className="bg-gray-400 w-full "
          ></motion.div>
          <motion.div className="bg-gray-400 w-full "></motion.div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="bg-gray-400 w-full "
          ></motion.div>
          <motion.div
            whileHover={{ rotate: [0, 15, -15, 0] }}
            className="bg-gray-400 w-full "
          ></motion.div>
        </motion.div>
      </main>
    </div>
  );
}
