import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#DEEDEF]/60 fixed w-full z-50 mb-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/JK.svg"
                alt="JK POWER SYSTEM LOGO"
                width={100}
                height={100}
                className="rounded-md"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
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
              <Link href="" className="text-[#2E414B] hover:text-[#BD7500] px-3 py-2 rounded-md text-lg font-medium transition-colors">
                Contact Us
              </Link>
              <Link href="https://admin.jkpowersystem.com/" className="text-[#2E414B] hover:text-[#BD7500] px-3 py-2 rounded-md text-lg font-medium transition-colors">
                Employee Login
              </Link>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#2E414B] hover:text-[#BD7500] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-14">
            <div className="px-4 pt-4 pb-5 space-y-2 sm:px-6 bg-[#DEEDEF] shadow-lg rounded-b-lg h-auto">
              <Link
                href="/"
                className="text-[#2E414B] hover:text-[#BD7500] block px-4 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[#2E414B] hover:text-[#BD7500] block px-4 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/products"
                className="text-[#2E414B] hover:text-[#BD7500] block px-4 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/certificate"
                className="text-[#2E414B] hover:text-[#BD7500] block px-4 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Certificates
              </Link>
              <button
                onClick={scrollToClients}
                className="text-[#2E414B] hover:text-[#BD7500] block px-4 py-2 rounded-md text-base font-medium transition-colors"
              >
                Clients
              </button>
              <Link
                href=""
                className="text-[#2E414B] hover:text-[#BD7500] block px-4 py-2 rounded-md text-base font-medium transition-colors"
              >
                Contact Us
              </Link>
              <div className="">
                <Link
                  href="https://admin.jkpowersystem.com/"
                  className="text-[#2E414B] hover:text-[#BD7500] block px-4 py-2 rounded-md text-base font-medium transition-colors"
                >
                  Employee Login
                </Link>
              </div>
            </div>

          </div>
        )}
      </nav>
    </header>
  );
} 