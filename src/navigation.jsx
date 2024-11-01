import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="flex gap-2 container mx-auto py-5 justify-center">
      <Link
        className="py-1.5 px-2.5 bg-teal-500 rounded-2xl text-sm text-white font-medium"
        to="/generate"
      >
        Generate QR code
      </Link>
      <Link
        className="py-1.5 px-2.5 bg-teal-500 rounded-2xl text-sm text-white font-medium"
        to="/scan"
      >
        Scan QR code
      </Link>
      <Link
        className="py-1.5 px-2.5 bg-teal-500 rounded-2xl text-sm text-white font-medium"
        to="/generateHistory"
      >
        History of generating
      </Link>
      <Link
        className="py-1.5 px-2.5 bg-teal-500 rounded-2xl text-sm text-white font-medium"
        to="/scanHistory"
      >
        History of scanning
      </Link>
    </nav>
  );
};
