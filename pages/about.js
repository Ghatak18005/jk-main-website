import Image from "next/image";

export default function about() {
  return (
    <div className="min-h-screen bg-[#DEEDEF] overflow-hidden">
      <section className="relative h-[60vh] w-full">
        <Image
          src="/about_us/hero_section.png"
          alt="Company Hero Image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Welcome to Our Company
          </h1>
        </div>
      </section>
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className=" text-3xl md:text-5xl font-bold mb-6 text-center text-[#2E414B]">
          About Our Company
        </h2>
        <p className="text-xl text-[#2E414B] leading-relaxed">
          Our company is dedicated to innovation and excellence in every aspect
          of our work. We strive to create solutions that make a positive impact
          on the world, focusing on sustainability, technology, and
          human-centered design. With a team of passionate experts and a
          commitment to continuous improvement, we're shaping the future of our
          industry.
        </p>
      </section>
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className=" text-3xl md:text-5xl font-bold mb-12 text-center text-[#2E414B]">
          Our Founders
        </h2>
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <Image
              src="/about_us/person_placeholder.png"
              alt="Founder 1"
              width={300}
              height={300}
              className="rounded-full hover:scale-105 transition-transform duration-200 "
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-[#2E414B]">
              Jane Doe
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Jane Doe is a visionary leader with over 15 years of experience in
              the tech industry. Her innovative approach and strategic thinking
              have been instrumental in our company's growth and success. Jane
              is passionate about mentoring young entrepreneurs and promoting
              diversity in the workplace.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-6 md:pl-8 flex justify-center">
            <Image
              src="/about_us/person_placeholder.png"
              alt="Founder 2"
              width={300}
              height={300}
              className="rounded-full hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-[#2E414B]">
              John Smith
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              John Smith brings a wealth of experience in product development
              and market strategy. With a background in both engineering and
              business, John has a unique perspective that drives our company's
              innovative solutions. He is committed to creating products that
              not only meet but exceed customer expectations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
