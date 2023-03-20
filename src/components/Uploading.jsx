import Card from '../UI/Card';
import {motion} from 'framer-motion';

const Uploading = () => {
  return (
    <Card className='py-9 px-8'>
      <h1>Uploading...</h1>

      <div className='w-96 h-2 bg-slate-200 rounded-full mt-4 relative'>
        <motion.div
          className='absolute w-1/4 bg-blue-500 h-full rounded-full -translate-x-full'
          animate={{
            x: ['0%', '100%', '200%', '300%'],
            width: ['0%', '25%', '25%', '25%'],
          }}
          transition={{
            ease: 'linear',
            repeat: Infinity,
            duration: 1.5,
          }}
        ></motion.div>
      </div>
    </Card>
  );
};

export default Uploading;
