import {motion} from 'framer-motion';
const Card = ({children, className}) => {
  return (
    <motion.div
      initial={{opacity: 0, x: -20}}
      whileInView={{opacity: 1, x: 0}}
      className={`container max-w-md shadow-lg bg-white rounded-lg ${
        className ? className : ''
      }`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
