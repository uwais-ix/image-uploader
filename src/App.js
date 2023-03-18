import Upload from './components/Upload';
import Uploading from './components/Uploading';
import {motion} from 'framer-motion';

function App() {
  return (
    <motion.div >
      {/* <Upload /> */}
      <Uploading />
    </motion.div>
  );
}

export default App;
