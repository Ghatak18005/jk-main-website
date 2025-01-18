import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#125767]">
      <div className="text-[#DEEDEF] py-8 px-6">
        <div className="flex flex-col md:flex-row md:space-x-10">
          <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
            <Image
              src="/JK.svg"
              alt="Logo"
              width={112}
              height={112}
              className="mb-4 mx-auto md:mx-0 w-full h-44 bg-white p-2 rounded-lg"
            />

            <p className="text-base text-white mb-4 text-left">
              JK Power System Pvt Ltd is a government-approved electrical contractor specializing in industrial and commercial electrical solutions.
              We are committed to delivering efficient and sustainable solutions across various industries.
            </p>

            <div className="text-white lg:mt-4">
              <a
                href="home/footer/brochure.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:underline"
              >
                <div className="icon-placeholder">
                  <Image
                    src="/home/footer/download.svg"
                    alt="Brochure"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-lg hover:underline hover:text-[#BD7500] transition-all duration-300">
                  Our Brochure
                </p>
              </a>
            </div>
          </div>

          <div className="flex-1 mb-8 md:mb-0">
            <div className="flex flex-col mb-3 text-white text-base lg:mx-28 mx-0">
              <h3 className="text-lg font-semibold mb-3">Contact :</h3>
              <div className="flex items-center hover:text-[#BD7500] transition-all duration-300">
                <Image src="/home/footer/phone.svg" alt="Phone" width={24} height={24} />
                <a href="tel:+918320072668" className="pl-2 hover:underline">
                  +91 8320072668
                </a>
              </div>
              <div className="flex items-center mt-2 hover:text-[#BD7500] transition-all duration-300">
                <Image src="/home/footer/phone.svg" alt="Phone" width={24} height={24} />
                <a href="tel:+917016932856" className="pl-2 hover:underline">
                  +91 7016932856
                </a>
              </div>
            </div>

            <div className="mb-5 lg:mx-28 mx-0 lg:mt-7 mt-5">
              <h3 className="text-lg font-semibold mb-2">Email :</h3>
              <div className="flex items-center">
                <Image
                  src="/home/footer/mail.svg"
                  width={24}
                  height={24}
                  className="mr-3"
                />
                <a
                  href="mailto:jkpowersystempvtltd@gmail.com"
                  className="text-base lg:text-lg hover:underline hover:text-[#BD7500] transition-all duration-300"
                >
                  jkpowersystempvtltd@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start lg:mx-28 mx-0 lg:mt-7 mt-5">
              <h3 className="text-lg font-semibold mb-3 w-full">Follow Us On :</h3>
              <div className="flex space-x-4 mb-5">
                <a href="#" className="hover:scale-110 transition-transform">
                  <Image src="/home/footer/insta.svg" alt="Instagram" width={24} height={24} />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <Image src="/home/footer/linkd.svg" alt="LinkedIn" width={24} height={24} />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <Image src="/home/footer/fb.svg" alt="Facebook" width={24} height={24} />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <Image src="/home/footer/x.svg" alt="X (Twitter)" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 mb-8 md:mb-0">
            <div className="mb-2 items-start flex flex-col lg:w-4/5 w-full">
              <h3 className="text-lg lg:text-xl font-semibold mb-3 w-full">Office Address:</h3>
              <div className="flex items-start">
                <Image
                  src="/home/footer/location.svg"
                  alt="Location"
                  width={24}
                  height={24}
                />
                <p className="text-base pl-2 hover:underline hover:text-[#BD7500] cursor-pointer">
                  Office No: 401 & 402 Mangla Trade Hub, Nr. Billabong School, Vadsar Ring Road, Vadodara, Gujarat 390012
                </p>
              </div>
            </div>

            <div className="flex-1 mt-8 md:mt-0 md:justify-center w-full h-60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.4127140376154!2d73.16788007474827!3d22.262350844270948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc731ee762685%3A0x7066ca4dd82bd16c!2sMangla%20Trade%20Hub!5e0!3m2!1sen!2sin!4v1736791453900!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full md:h-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 