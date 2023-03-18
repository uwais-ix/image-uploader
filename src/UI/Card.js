import {motion} from 'framer-motion';
const Card = ({children, className}) => {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      className={`container max-w-md shadow-lg bg-white rounded-lg ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
