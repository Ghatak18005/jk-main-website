import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const scrollToClients = () => {
    if (window.location.pathname !== '/') {
      sessionStorage.setItem('scrollToClients', 'true');
      window.location.href = '/';
    } else {
      const clientsSection = document.getElementById('clients-section');
      if (clientsSection) {
        clientsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-[#DEEDEF] shadow-md fixed w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/JK-LOGO.jpeg"
                alt="JK POWER SYSTEM LOGO"
                width={100}
                height={100}
                className="rounded-md"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-[#2E414B] hover:text-[#BD7500] px-3 py-2 rounded-md text-lg font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-[#2E414B] hover:text-[#BD7500] px-3 py-2 rounded-md text-lg font-medium transition-colors">
                About
              </Link>
              <Link href="/products" className="text-[#2E414B] hover:text-[#BD7500] px-3 py-2 rounded-md text-lg font-medium transition-colors">
                Products
              </Link>
              <Link href="/certificate" className="text-[#2E414B] hover:text-[#BD7500] px-3 py-2 rounded-md text-lg font-medium transition-colors">
                Certificates
              </Link>
              <button 
                onClick={scrollToClients}
                className="text-[#2E414B] hover:text-[#BD7500] px-3 py-2 rounded-md text-lg font-medium transition-colors"
              >
                Clients
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 