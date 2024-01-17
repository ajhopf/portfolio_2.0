'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import TransitionPage from './ui/transition/transition-page';
import Header from './ui/header/header';
import Footer from './ui/footer/footer';

export default function Template({ children }: { children: React.ReactNode }) {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowPage(true), 600);
  }, []);

  const content = (
    <motion.main
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ ease: 'easeOut', duration: 1.5 }}
    >
      <Header />
      {children}
      <Footer />
    </motion.main>
  );

  return (
    <>
      {showPage && content}
      {!showPage && <TransitionPage />}
    </>
  );
}
