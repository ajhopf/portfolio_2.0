import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: '100vh' },
  enter: { opacity: 1, x: 0, y: '-100vh' }
};

const TransitionPage = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ ease: 'easeIn', duration: 0.5 }}
      style={{
        backgroundColor: '#101010',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          height: '70vh',
          width: '1px',
          backgroundColor: '#4ade80'
        }}
      ></div>
    </motion.div>
  );
};

export default TransitionPage;
