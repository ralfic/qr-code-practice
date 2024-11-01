import { Routes, Route } from 'react-router-dom';
import { QrCodeGeneration } from './QrCodeDeneration';
import { QrCodeScanner } from './QrCodeScanner';
import { ScanHistory } from './ScanHistory';
import { GenerateHistory } from './GenerateHistory';
import { Navigation } from './navigation';

export const Layout = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/generate" element={<QrCodeGeneration />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/scanHistory" element={<ScanHistory />} />
        <Route path="/generateHistory" element={<GenerateHistory />} />
      </Routes>
    </>
  );
};
