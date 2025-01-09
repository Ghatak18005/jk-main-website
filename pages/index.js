import Image from 'next/image'

export default function HeroAndAbout() {
  return (
    <div className="w-full bg-[#DEEDEF]">
      <section className="relative">
        <div className="w-full h-[50vh] relative">
          <Image
            src="/about_us/hero_section.png"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="bg-[#C0DBE1] py-12 px-4 sm:px-6 lg:px-8 text-[#2E414B]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex mx-auto">
              <h2 className="text-3xl font-semibold  mb-2 ">
                JK POWER SYSTEM PVT LTD
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-[#2E414B]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-end">
            <h2 className="text-3xl font-bold mb-12 p-5 bg-[#C0DBE1] rounded-l-2xl">
              ABOUT JK POWER SYSTEM PVT LTD
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/about_us/hero_section.png"
                alt="About Company"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg ">
                JK Power Industry is a leading provider of industrial and commercial electrical solutions, specializing in the installation and maintenance of electrical systems. As a government-approved contractor, we ensure efficient and safe operations across various industries, backed by our expertise and commitment to quality.

              </p>
              <p className="text-lg  mt-4">
                In addition to our contracting services, we offer a wide range of high-quality electrical products and custom panel manufacturing. Our focus on innovation and reliability enables us to deliver solutions that drive operational efficiency and sustainability, making JK Power Industry a trusted partner for powering progress
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#2E414B] mb-12 bg-[#C0DBE1] p-4 rounded-2xl w-1/3 mx-auto">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {/* First Service */}
            <div className="overflow-hidden rounded-xl transition-transform transform border-4 border-[#BD7500]">
              <div className="px-5 py-4">
                <div className="mb-3">
                  <Image
                    src="/h1.png"
                    alt="Electrical Contracting Service"
                    width={300}
                    height={200}
                    className="mx-auto rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  Electrical Contracting Service <br />
                  Project Activity <br />
                  Maintenance Activity
                </h3>
              </div>
            </div>

            {/* Second Service */}
            <div className="overflow-hidden rounded-xl transition-transform transform border-4 border-[#BD7500]">
              <div className="p-6">
                <div className="mb-4">
                  <Image
                    src="/h2.png"
                    alt="Service 2"
                    width={300}
                    height={200}
                    className="mx-auto rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  All Types of Industrial <br />and Commercial Material Supply
                </h3>
              </div>
            </div>

            {/* Third Service */}
            <div className="overflow-hidden rounded-xl transition-transform transform border-4 border-[#BD7500]">
              <div className="p-6">
                <div className="mb-4">
                  <Image
                    src="/h3.png"
                    alt="Service 3"
                    width={300}
                    height={200}
                    className="mx-auto rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  Panel Manufacturing
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

