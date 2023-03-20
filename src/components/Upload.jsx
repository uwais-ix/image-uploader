import {useState} from 'react';
import ReactImageUploading from 'react-images-uploading';
import Card from '../UI/Card';
import {SlClose} from 'react-icons/sl';
import Button from '../UI/Button';

const Upload = ({imageUploadHandler}) => {
  const [image, setImage] = useState([]);

  const onChange = (imageList) => {
    setImage(imageList);
  };

  const imageActive = image.length > 0;

  return (
    <ReactImageUploading
      value={image}
      onChange={onChange}
      dataURLKey='data_url'
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        isDragging,
        dragProps,
      }) => (
        // UI for the image upload
        <Card className='flex flex-col items-center justify-center py-9 px-8'>
          <h1 className='font-medium text-lg'>Upload your image</h1>
          <span className='font-medium text-xs text-slate-500 mt-4'>
            Files Jpeg, Png or Gif
          </span>

          <div
            {...dragProps}
            className={`relative w-96 flex flex-col justify-center items-center h-72 mt-8 border-2 border-dashed border-blue-200 rounded-lg cursor-grab bg-slate-50 transition duration-500 
              ${!imageActive ? '' : 'border-none'} 
              ${isDragging ? 'border-blue-400' : ''}`}
          >
            <img
              src={image[0]?.data_url || 'image.svg'}
              alt=''
              className={!imageActive ? '' : 'object-contain h-full w-full'}
            />
            {!imageActive && (
              <span className='mt-9 text-slate-400 opacity-95 text-xs'>
                Drag & Drop your image here
              </span>
            )}
            {image.length > 0 && (
              <SlClose
                className='absolute -top-8 -right-5 text-2xl'
                onClick={() => onChange([])}
              />
            )}
          </div>

          <span className='mt-4 text-xs text-slate-300'>Or</span>
          {!imageActive ? (
            <Button onClick={onImageUpload}>Choose File</Button>
          ) : (
            <Button onClick={() => imageUploadHandler(image[0])}>
              Upload
            </Button>
          )}
        </Card>
      )}
    </ReactImageUploading>
  );
};

export default Upload;
