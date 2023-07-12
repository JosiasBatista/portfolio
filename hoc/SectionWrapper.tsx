import { motion } from 'framer-motion';

import { staggerContainer } from '@/utils/motion';
import { ReactNode } from 'react';

const SectionWrapper = (Component: () => React.JSX.Element, idName: string) =>
function HOC() {
  return (
    <motion.section
      variants={staggerContainer(Component, idName)}
      initial='hidden'
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.25
      }}
      className='padding max-w-7xl mx-auto relative z-0'
    >
      <span className='hash-span' id={idName}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
  )
}

export default SectionWrapper