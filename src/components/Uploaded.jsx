import Card from '../UI/Card';
import Button from '../UI/Button';
import {MdDone} from 'react-icons/md';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Uploaded = ({imageData}) => {
  return (
    <Card className='flex flex-col items-center py-9 px-8'>
      <MdDone className='text-4xl text-white rounded-full bg-green-600' />
      <h1 className='text-lg font-medium mt-3'>Uploaded Successfully!</h1>
      <img
        src={imageData.data_url}
        alt=''
        className='w-full object-contain mt-6 rounded-lg'
      />

      <div className='bg-slate-100 text-slate-500 w-full flex items-center justify-between rounded-lg mt-6 p-1'>
        <input
          type='text'
          value={imageData.url}
          disabled
          className='text-ellipsis text-xs ml-2'
        />

        <CopyToClipboard text={imageData.url}>
          <Button className='mt-0 rounded-lg font-poppins text-sm'>
            Copy Link
          </Button>
        </CopyToClipboard>
      </div>
    </Card>
  );
};

export default Uploaded;
