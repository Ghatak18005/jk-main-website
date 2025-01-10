import Image from 'next/image'

export default function HeroAndAbout() {
  return (
    <div className="w-full bg-[#DEEDEF]">
      <section className="relative">
        <div className="relative">
          <Image
            src="/hero2.jpg"
            alt="Hero Image"
            width={600} 
            height={900} 
            objectFit="cover"
            layout="responsive"
            className='lg:block hidden'
          />
           <Image
            src="/hero2.jpg" 
            alt="Hero Image"
            width={600} 
            height={900} 
            objectFit="cover"
            layout="responsive"
            style={{
              aspectRatio: '1' 
            }}
            className='lg:hidden block'
          />
           
        </div>

        <div className="bg-[#C0DBE1] lg:py-14 py-7 px-4 sm:px-6 lg:px-8 text-[#2E414B]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex mx-auto items-center">
              <div className="mr-4">
                <Image
                  src="/JK-LOGO.png"
                  alt="JK POWER SYSTEM LOGO"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-center lg:text-3xl text-base font-bold mb-2">
                  JK POWER SYSTEM PVT LTD
                  <br />
                  <span className="lg:text-xl text-sm font-normal">Government Approved Electrical Contractor</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 px-7 sm:px-6 lg:px-8 text-[#2E414B]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-center text-xl font-bold mb-7 py-2 w-2/3 bg-[#C0DBE1] rounded-xl mx-auto block lg:hidden">What We Do ?</h2>
              <Image
                src="/hero2.jpg"
                alt="About Company"
                width={800}
                height={1200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-center lg:text-3xl text-base font-bold lg:mb-12 mb-7 py-2 w-2/3 bg-[#C0DBE1] lg:rounded-l-2xl mx-auto lg:block hidden">What We Do ?</h2>
              <p className="text-lg ">
                JK Power Industry is a leading provider of industrial and commercial electrical solutions, specializing in the installation and maintenance of electrical systems. As a government-approved contractor, we ensure efficient and safe operations across various industries, backed by our expertise and commitment to quality.
              </p>
              <p className="text-lg mt-4">
                In addition to our contracting services, we offer a wide range of high-quality electrical products and custom panel manufacturing. Our focus on innovation and reliability enables us to deliver solutions that drive operational efficiency and sustainability, making JK Power Industry a trusted partner for powering progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:py-12 px-7 py-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="lg:text-3xl text-xl font-bold text-[#2E414B] lg:mb-12 mb-7 bg-[#C0DBE1] py-2 rounded-2xl lg:w-3/12 w-2/3 mx-auto">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-4">

            {/* First Service */}
            <div className="overflow-hidden rounded-xl transition-transform transform border-4 border-[#BD7500]">
              <div className="lg:px-5 lg:py-4 p-2">
                <div className="mb-2">
                  <Image
                    src="/h1.png"
                    alt="Service 1"
                    width={300}
                    height={200}
                    className="mx-auto rounded-lg lg:block hidden"
                  />
                  <Image
                    src="/h1.png"
                    alt="Service 1"
                    width={250}
                    height={100}
                    className="mx-auto rounded-lg block lg:hidden"
                  />
                </div>
                <h3 className="lg:text-xl text-base font-semibold text-gray-900 mb-2 text-center">
                  - Electrical Contracting Service <br />
                  - Project Activity <br />
                  - Maintenance Activity
                </h3>
              </div>
            </div>

            {/* Second Service */}
            <div className="overflow-hidden rounded-xl transition-transform transform border-4 border-[#BD7500]">
              <div className="lg:px-5 lg:py-4 p-2">
                <div className="mb-4">
                  <Image
                    src="/h2.png"
                    alt="Service 2"
                    width={300}
                    height={200}
                    className="mx-auto rounded-lg lg:block hidden"
                  />
                  <Image
                    src="/h2.png"
                    alt="Service 2"
                    width={250}
                    height={100}
                    className="mx-auto rounded-lg block lg:hidden"
                  />
                </div>
                <h3 className="lg:text-xl text-base font-semibold text-gray-900 mb-2 text-center">
                  - All Types of Industrial <br />and Commercial Material Supply
                </h3>
              </div>
            </div>

            {/* Third Service */}
            <div className="overflow-hidden rounded-xl transition-transform transform border-4 border-[#BD7500]">
              <div className="lg:px-5 lg:py-4 p-2">
                <div className="mb-4">
                  <Image
                    src="/h3.png"
                    alt="Service 3"
                    width={300}
                    height={200}
                    className="mx-auto rounded-lg lg:block hidden"
                  />
                  <Image
                    src="/h3.png"
                    alt="Service 3"
                    width={250}
                    height={100}
                    className="mx-auto rounded-lg block lg:hidden"
                  />
                </div>
                <h3 className="lg:text-xl text-base font-semibold text-gray-900 mb-2 text-center">
                  - Panel Manufacturing
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

