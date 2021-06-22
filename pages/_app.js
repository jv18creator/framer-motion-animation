import { motion, AnimatePresence } from 'framer-motion'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            // opacity: 0,
          },
          pageAnimate: {
            // opacity: 1,
          },
          pageExit: {
            // backgroundColor: `white`,
            // opacity: 0,
            filter: `hue-rotate(180deg)`,
            transition: {
              duration: 0,
            },
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp
