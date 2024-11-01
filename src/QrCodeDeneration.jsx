import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import './index.css';
import { GENERATE_DATA } from './constants';

export const QrCodeGeneration = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onCkickHendler = () => {
    const pervData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...pervData, value]));

    setResult(value);
    setValue('');
  };

  const onChangeHendler = (e) => {
    setValue(e.target.value);
    setResult('');
  };

  console.log(result);

  return (
    <div className="container mx-auto flex flex-col items-center gap-5 h-screen justify-center">
      {result !== '' && <QRCodeSVG value={value} size={200} />}
      <div className="flex flex-col gap-2 w-[365px] items-center">
        <input
          type="text"
          value={value}
          placeholder="Input text..."
          onChange={onChangeHendler}
          className="rounded-xl py-2 px-3 border-2 border-solid border-gray-900 w-full"
        />
        <button
          type="button"
          onClick={onCkickHendler}
          className="py-2 bg-gray-900 rounded-xl text-white px-3 font-medium w-1/2"
        >
          Generation QR
        </button>
      </div>
    </div>
  );
};
