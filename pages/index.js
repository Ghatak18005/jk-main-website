import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function HeroAndAbout() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers every time the section comes into view
    threshold: 0.2, // Trigger animation when 20% of the section is visible
  });
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
            className="lg:block hidden"
          />
          <Image
            src="/hero2.jpg"
            alt="Hero Image"
            width={600}
            height={900}
            objectFit="cover"
            layout="responsive"
            style={{
              aspectRatio: "1",
            }}
            className="lg:hidden block"
          />
        </div>

        <div className="bg-[#C0DBE1] lg:py-14 py-7 px-4 sm:px-6 lg:px-4 text-[#2E414B]">
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
                  <span className="lg:text-xl text-sm font-normal">
                    Government Approved Electrical Contractor
                  </span>
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
              <h2 className="text-center text-xl font-bold mb-7 py-2 w-2/3 bg-[#C0DBE1] rounded-xl mx-auto block lg:hidden">
                What We Do ?
              </h2>
              <Image
                src="/hero2.jpg"
                alt="About Company"
                width={800}
                height={1200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-center lg:text-3xl text-base font-bold lg:mb-12 mb-7 py-2 w-2/3 bg-[#C0DBE1] lg:rounded-l-2xl mx-auto lg:block hidden">
                What We Do ?
              </h2>
              <p className="text-lg ">
                JK Power Industry is a leading provider of industrial and
                commercial electrical solutions, specializing in the
                installation and maintenance of electrical systems. As a
                government-approved contractor, we ensure efficient and safe
                operations across various industries, backed by our expertise
                and commitment to quality.
              </p>
              <p className="text-lg mt-4">
                In addition to our contracting services, we offer a wide range
                of high-quality electrical products and custom panel
                manufacturing. Our focus on innovation and reliability enables
                us to deliver solutions that drive operational efficiency and
                sustainability, making JK Power Industry a trusted partner for
                powering progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:py-12 px-7 py-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="lg:text-3xl text-xl font-bold text-[#2E414B] lg:mb-12 mb-7 bg-[#C0DBE1] py-2 rounded-2xl lg:w-3/12 w-2/3 mx-auto">
            Core Services
          </h2>
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
                </div>
                <h3 className="lg:text-xl text-base font-semibold text-gray-900 mb-2 text-center">
                  - Electrical Contracting Service <br />
                  - Project Activity <br />- Maintenance Activity
                </h3>
              </div>
            </div>
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
                  - All Types of Industrial <br />
                  and Commercial Material Supply
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

      <section className="lg:py-28 px-7 py-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-wrap justify-center mb-7" ref={ref}>
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0 * index }}
                className="mx-2"
              >
                <Image
                  src="/power.jpg"
                  alt="Service 3"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            ref={ref}
            className="flex flex-wrap justify-center items-center mb-6"
          >
            {/* Left Image - Animated from Left */}
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="mx-4"
            >
              <Image
                src="/power.jpg"
                alt="Service 3"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </motion.div>

            {/* Heading */}
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 0.8 }
              }
              className="lg:text-3xl text-xl font-bold text-[#2E414B] lg:mb-12 mb-7 bg-[#C0DBE1] py-7 rounded-2xl lg:w-2/6 w-2/3 m-auto"
            >
              OUR AREA OF WORK
            </motion.h2>
            {/* Right Image - Animated from Right */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="mx-4"
            >
              <Image
                src="/power.jpg"
                alt="Service 3"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>

          <div
            className="flex flex-wrap justify-center lg:mb-12 mb-7"
            ref={ref}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: 0 * index }}
                className="mx-2"
              >
                <Image
                  src="/power.jpg"
                  alt="Service 3"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="lg:py-12 px-7 py-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="lg:text-3xl text-xl font-bold text-[#2E414B] lg:mb-12 mb-7 bg-[#C0DBE1] py-2 rounded-2xl lg:w-5/12 w-2/3 mx-auto">
            VISSON MISSION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:gap-8 gap-4">
            {/* First Service */}
            <div className="overflow-hidden rounded-xl transition-transform transform border-4 border-[#BD7500]">
              <div className="lg:px-5 lg:py-4 p-2">
                <div className="mb-2">
                  <Image
                    src="/vission1.png"
                    alt="Service 1"
                    width={150}
                    height={150}
                    className="mx-auto rounded-lg lg:block hidden mb-10"
                  />
                </div>
                <h3 className="lg:text-lg text-base font-semibold text-gray-900 mb-2 text-center">
                  Establish leadership in electrical solutions in a rapidly
                  growing India.
                </h3>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl transition-transform transform border-4 border-[#BD7500]">
              <div className="lg:px-5 lg:py-4 p-2">
                <div className="mb-2">
                  <Image
                    src="/vission2.png"
                    alt="Service 1"
                    width={150}
                    height={150}
                    className="mx-auto rounded-lg lg:block hidden mb-10"
                  />
                </div>
                <h3 className="lg:text-lg text-base font-semibold text-gray-900 mb-2 text-center">
                  Set industry standards for quality, innovation, and customer
                  satisfaction.
                </h3>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl transition-transform transform border-4 border-[#BD7500]">
              <div className="lg:px-5 lg:py-4 p-2">
                <div className="mb-4">
                  <Image
                    src="/vission3.png"
                    alt="Service 2"
                    width={150}
                    height={150}
                    className="mx-auto rounded-lg lg:block hidden mb-10"
                  />
                </div>
                <h3 className="lg:text-lg text-base font-semibold text-gray-900 mb-2 text-center">
                  Deliver innovative and reliable electrical solutions to
                  industries and enterprises.
                </h3>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl transition-transform transform border-4 border-[#BD7500]">
              <div className="lg:px-5 lg:py-4 p-2">
                <div className="mb-4">
                  <Image
                    src="/vission4.png"
                    alt="Service 3"
                    width={150}
                    height={150}
                    className="mx-auto rounded-lg lg:block hidden mb-10"
                  />
                </div>
                <h3 className="lg:text-lg text-base font-semibold text-gray-900 mb-2 text-center">
                  Enhance safety, efficiency, and sustainability, contributing
                  to a prosperous India.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center">
          <h2 className="lg:text-3xl text-xl font-bold text-[#2E414B] lg:mb-12 mb-7 bg-[#C0DBE1] py-2 rounded-2xl lg:w-5/12 w-2/3 mx-auto">
            OUR CLIENTS
          </h2>
        </div>
      </section>
      <footer className="w-full bg-[#125767]">
        <div className="text-[#DEEDEF] py-8 px-6">
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/jk_footer.png"
              alt="Logo"
              width={112}
              height={112}
              className="mb-4"
            />
            <h1 className="text-3xl font-semibold tracking-wide">
              JK POWER SYSTEM
            </h1>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="flex-1 px-10">
              <div className="mb-10">
                <p className="text-2xl leading-10">
                  FF-107 ATRIA-2 OPP. SHREYAS SCHOOL NR.DAWAT RESTAURANT,
                  MANJALPUR, VADODARA-390011
                </p>
              </div>

              <div className="flex items-center mb-3">
                <Image src="/phone.png" alt="Phone" width={24} height={24} />
                <p className="text-3xl pl-5">8320072668 / 7016932856</p>
              </div>

              <div className="flex items-center mb-5">
                <Image src="/mail.png" alt="Mail" width={24} height={24} />
                <p className="text-3xl pl-5">jkpowersystem99@gmail.com</p>
              </div>

              <div className="flex space-x-10">
                <a href="#">
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/x.png"
                    alt="X (Twitter)"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>

            <div className="flex-1 mt-8 md:mt-0 md:justify-center">
              <iframe
                className="w-full h-80 md:h-full rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3692.0046815516084!2d73.1966131!3d22.2778125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc58250393a0d%3A0xcf7edc53c8636367!2sAtria%20Complex!5e0!3m2!1sen!2sin!4v1734245432820!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
