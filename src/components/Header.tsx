import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">MyWebsite</Link>
        </div>
        <nav>
          <Link href="/" className="text-white ml-4">Home</Link>
          <Link href="/services" className="text-white ml-4">Services</Link>
          <Link href="/about" className="text-white ml-4">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
