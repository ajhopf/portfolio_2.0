'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Header from './ui/header/header';

const variants = {
  hidden: { opacity: 0, x: 1000, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 }
};

const TransitionPage = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ ease: 'easeOut', duration: 0.3 }}
      exit={{ opacity: 0 }}
      className="transition-page"
    >
      <div className="line"></div>
    </motion.div>
  );
};

export default function Template({ children }: { children: React.ReactNode }) {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowPage(true), 700);
  }, []);

  const content = (
    <motion.main
      variants={{
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 }
      }}
      initial="hidden"
      animate="enter"
      transition={{ ease: 'easeOut', duration: 0.5 }}
    >
      <Header />
      {children}
    </motion.main>
  );

  return <>{showPage ? content : <TransitionPage />}</>;
}
