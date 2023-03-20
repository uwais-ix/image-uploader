import Upload from './components/Upload';
import Uploading from './components/Uploading';
import Uploaded from './components/Uploaded';
import {useState} from 'react';
import {motion} from 'framer-motion';
import uploadImage from './api/uploadImage';

function App() {
  const [uploadStatus, setUploadStatus] = useState('');
  const [image, setImage] = useState('');

  const imageUploadHandler = async (file) => {
    setUploadStatus('uploading');
    // upload img to backend + get url ref
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const url = await uploadImage(file);
    console.log(url);
    setUploadStatus('uploaded');
    setImage({file, url});
  };

  // upload state
  const uploading = uploadStatus === 'uploading';
  const uploaded = uploadStatus === 'uploaded';
  const error = uploadStatus === 'error';
  const other = !uploading && !uploaded && !error;

  return (
    <motion.div>
      {other && <Upload imageUploadHandler={imageUploadHandler} />}
      {uploading && <Uploading />}
      {uploaded && image && <Uploaded imageData={image} />}
      {error && <p>error</p>}
    </motion.div>
  );
}

export default App;
