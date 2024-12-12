import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';
 
export function GradualSpacing() {

  const textArray = [ "Full-Stack Developer", "Web Designer", "Problem Solver", "Product Planner", "Learner", "Gamer", "Dog Lover", "Minimalist", "Normal Person" ];

  const [ count, setCount ] = React.useState(0);

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    const interval = setInterval(() => {
      if(count < textArray.length - 1){
        setCount(prev => prev + 1)
      }else{
        setCount(0)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [count]);


  return (
      <AnimatePresence mode='wait' key={`animate-${count}`}>
        {textArray[count]?.split('').map((char, i) => (
          <motion.span
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="tracking-tighter text-accent"
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </AnimatePresence>
  );
}