import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import './index.css';

import { SCAN_DATA } from './constants';

export const QrCodeScanner = () => {
  const [valueScanner, setValueScanner] = useState(null);

  const scanHeandler = (res) => {
    const link = res[0].rawValue;

    setValueScanner('');
    setValueScanner(link);

    const pervData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    localStorage.setItem(SCAN_DATA, JSON.stringify([...pervData, link]));
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-start max-w-[765px] mx-auto h-screen ">
      <div className="mx-auto">
        <Scanner
          onScan={scanHeandler}
          components={{
            audio: false,
            finder: false,
          }}
          styles={{
            container: { width: 360 },
          }}
        />
      </div>
      <a className="bg-slate-900 w-full h-10 text-white rounded-xl text-center content-center font-normal hover:underline cursor-pointer transition-all text-lg">
        {valueScanner}
      </a>
    </div>
  );
};
