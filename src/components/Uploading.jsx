import Card from '../UI/Card';

const Uploading = () => {
  return (
    <Card className='py-9 px-8'>
      <h1>Uploading...</h1>
      <div className='w-96 h-2 bg-slate-200 rounded-full mt-4 relative'>
        <div className='absolute w-1/4 bg-blue-500 h-full rounded-full loader -translate-x-full'></div>
      </div>
    </Card>
  );
};

export default Uploading;
