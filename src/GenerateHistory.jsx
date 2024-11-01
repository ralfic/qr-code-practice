import { GENERATE_DATA } from './constants';
import { QRCodeSVG } from 'qrcode.react';

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
  return (
    <div className='flex  gap-6 container mx-auto p-8'>
      {data.map((text) => (
        <div className='flex items-center gap-3 bg-slate-400 p-3 flex-col max-w-max' key={text}>
          {<QRCodeSVG value={text} size={150} />}
          <p className='font-normal text-2xl text-white'>{text}</p>
        </div>
      ))}
    </div>
  );
};
