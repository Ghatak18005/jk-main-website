import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import VisionMission from "@/components/VisionCard";

export default function HeroAndAbout() {
  const sectors = [
    { title: "Power Division", image: "/home/a1.png" },
    {
      title: "Petro & Chemical Industry",
      image: "/home/a1.png",
    },
    { title: "Oil & Gas Industry", image: "/home/a3.png" },
    {
      title: "Water/ETP/MEE Plant",
      image: "/home/a1.png",
    },
    {
      title: "Eletrification Sctivities",
      image: "/home/a1.png",
    },
    {
      title: "Food & Beverage Industry",
      image: "/home/a1.png",
    },
    {
      title: "Pigment/Refinery Industry",
      image: "/home/a1.png",
    },
    {
      title: "Machine Engineering",
      image: "/home/a1.png",
    },
    {
      title: "Refrigeration Division",
      image: "/home/a1.png",
    },
    { title: "Pharma Industry", image: "/home/a1.png" },
  ];
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <div className="w-full bg-[#DEEDEF]">
      <section className="relative w-full">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/hero2.jpg"
              alt="Hero Image"
              width={600}
              height={900}
              objectFit="cover"
              layout="responsive"
              className="lg:block hidden"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
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
          </motion.div>
        </div>

        <motion.div
          className="bg-[#C0DBE1] lg:py-8 py-7 px-4 sm:px-6 lg:px-4 text-[#2E414B]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="flex mx-auto items-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="mb-0">
                <Image
                  src="/JK-LOGO.png"
                  alt="JK POWER SYSTEM LOGO"
                  width={100}
                  height={100}
                  className="w-3/4 mx-auto mb-2"
                />
                <motion.span
                  className="lg:text-xl text-sm font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  Government Approved Electrical Contractor
                </motion.span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-6 px-7 sm:px-6 lg:px-8 text-[#2E414B]">
        {/* Desktop View (lg:block hidden) */}
        <div className="max-w-7xl mx-auto lg:block hidden">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -100, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src="/hero2.jpg"
                alt="About Company"
                width={800}
                height={1200}
                className="rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-center lg:text-3xl text-base font-bold lg:mb-12 mb-7 py-2 w-2/3 bg-[#C0DBE1] lg:rounded-l-2xl mx-auto lg:block hidden">
                What We Do ?
              </h2>

              <motion.p
                className="text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <b>JK Power System</b> is a leading provider of industrial and
                commercial electrical solutions, specializing in the
                installation and maintenance of electrical systems. As a
                <b> government-approved contractor</b>, we ensure efficient and
                safe operations across various industries, backed by our
                expertise and commitment to quality.
              </motion.p>

              <motion.p
                className="text-lg mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                In addition to our <b>contracting services</b>, we offer a wide
                range of{" "}
                <b>
                  high-quality electrical products and custom panel
                  manufacturing
                </b>
                . Our focus on innovation and reliability enables us to deliver
                solutions that drive <b>operational efficiency</b> and
                <b> sustainability</b>, making JK Power System a trusted partner
                for powering progress.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Mobile View (lg:hidden) */}
        <div className="max-w-7xl mx-auto lg:hidden">
          <div className="flex flex-col items-center gap-8">
            <motion.div
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-center text-xl font-bold mb-7 py-2 w-2/3 bg-[#C0DBE1] rounded-xl mx-auto block">
                What We Do ?
              </h2>
              <motion.img
                src="/hero2.jpg"
                alt="About Company"
                width={800}
                height={1200}
                className="rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </motion.div>

            <motion.div
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2 className="text-center lg:text-3xl text-base font-bold lg:mb-12 mb-7 py-2 w-2/3 bg-[#C0DBE1] lg:rounded-l-2xl mx-auto lg:block">
                What We Do ?
              </h2>

              <motion.p
                className="text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <b>JK Power System</b> is a leading provider of industrial and
                commercial electrical solutions, specializing in the
                installation and maintenance of electrical systems. As a
                <b> government-approved contractor</b>, we ensure efficient and
                safe operations across various industries, backed by our
                expertise and commitment to quality.
              </motion.p>

              <motion.p
                className="text-lg mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                In addition to our <b>contracting services</b>, we offer a wide
                range of{" "}
                <b>
                  high-quality electrical products and custom panel
                  manufacturing
                </b>
                . Our focus on innovation and reliability enables us to deliver
                solutions that drive <b>operational efficiency</b> and
                <b> sustainability</b>, making JK Power System a trusted partner
                for powering progress.
              </motion.p>
            </motion.div>
          </div>
        </div>

      </section>

      <section className="lg:py-12 px-7 py-6 lg:px-8">
        import {motion} from 'framer-motion';
        import Image from 'next/image';

        <div className="max-w-7xl mx-auto text-center">
          <h2 className="lg:text-3xl text-xl font-bold text-[#2E414B] lg:mb-12 mb-7 bg-[#C0DBE1] py-2 rounded-2xl lg:w-3/12 w-3/4 mx-auto">
            CORE SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-4">

            {/* Service 1 */}
            <motion.div
              className="overflow-hidden rounded-xl transition-transform transform border-4 border-[#BD7500]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 100, damping: 25 }}
            >
              <div className="lg:px-5 lg:py-4 p-2">
                <div className="mb-2">
                  <Image
                    src="/h1.png"
                    alt="Service 1"
                    width={300}
                    height={200}
                    className="mx-auto rounded-lg"
                  />
                </div>
                <h3 className="lg:text-xl text-base font-semibold text-gray-900 mb-2 text-center">
                  - Electrical Contracting Service <br />
                  - Project Activity <br />- Maintenance Activity
                </h3>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="overflow-hidden rounded-xl transition-transform transform border-4 border-[#BD7500]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 100, damping: 25, delay: 0.2 }}
            >
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
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="overflow-hidden rounded-xl transition-transform transform border-4 border-[#BD7500]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 100, damping: 25, delay: 0.4 }}
            >
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
            </motion.div>

          </div>
        </div>

      </section>

      <section className="lg:py-28 px-7 py-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center lg:hidden block">
          <div className="w-full">
            <h2 className="text-xl font-bold text-[#2E414B] mb-7 bg-[#C0DBE1] lg:py-5 py-2 rounded-2xl lg:w-2/3 w-3/4 mx-auto">
              OUR AREA OF WORK
            </h2>

            <div className="grid grid-cols-2 gap-4 justify-center mb-7">
              {sectors.slice(0, 4).map((sector, index) => (
                <div key={index} className="relative">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    width={150}
                    height={100}
                    className="rounded-md opacity-85"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-base font-bold">{sector.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 justify-center mb-7">
              <div className="relative">
                <Image
                  src={sectors[4].image}
                  alt={sectors[4].title}
                  width={150}
                  height={100}
                  className="rounded-md opacity-85"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-base font-bold">{sectors[4].title}</p>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={sectors[5].image}
                  alt={sectors[5].title}
                  width={150}
                  height={100}
                  className="rounded-md opacity-85"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-base font-bold">{sectors[5].title}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 justify-center mb-7">
              {sectors.slice(6).map((sector, index) => (
                <div key={index} className="relative">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    width={150}
                    height={100}
                    className="rounded-md opacity-85"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-base font-bold">{sector.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>




        <div className="max-w-7xl mx-auto text-center lg:block hidden">
          <div className="w-full">
            <div className="flex flex-wrap justify-center mb-7" ref={ref}>
              {sectors.slice(0, 4).map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="relative mx-2"
                >

                  <Image
                    src={sector.image}
                    alt={sector.title}
                    width={300}
                    height={200}
                    className="rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-lg font-bold">
                      {sector.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              ref={ref}
              className="flex flex-wrap justify-center items-center mb-6"
            >
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={
                  inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }
                }
                transition={{ duration: 0.5 }}
                className="relative mx-4"
              >
                <Image
                  src={sectors[4].image}
                  alt={sectors[4].title}
                  width={300}
                  height={200}
                  className="rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-lg font-bold">
                    {sectors.title}
                  </p>
                </div>
              </motion.div>

              <motion.h2
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 1, scale: 0.8 }
                }
                className="lg:text-3xl text-xl font-bold text-[#2E414B] lg:mb-12 mb-7 bg-[#C0DBE1] py-7 rounded-2xl lg:w-2/6 w-3/4 m-auto"
              >
                OUR AREA OF WORK
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={
                  inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }
                }
                transition={{ duration: 0.5 }}
                className="relative mx-4"
              >
                <Image
                  src={sectors[5].image}
                  alt={sectors[5].title}
                  width={300}
                  height={200}
                  className="rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-lg font-bold">
                    {sectors[5].title}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <div
              className="flex flex-wrap justify-center lg:mb-12 mb-7"
              ref={ref}
            >
              {sectors.slice(6).map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -50 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="relative mx-2"
                >
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    width={300}
                    height={200}
                    className="rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-lg font-bold">
                      {sector.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-0 px-7 py-6 lg:px-8">
        <VisionMission />
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
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
              <Image
                src="/JK-LOGO.png"
                alt="Logo"
                width={112}
                height={112}
                className="mb-4 mx-auto md:mx-0 w-full h-44"
              />

              <p className="text-base text-white mb-4 text-left">
                JK Power System Pvt Ltd is a government-approved electrical contractor specializing in industrial and commercial electrical solutions.
                We are committed to delivering efficient and sustainable solutions across various industries.
              </p>

              <div className="text-white lg:mt-4">
                <a
                  href="home/footer/brochure.pdf" // Path to your PDF
                  download // Add the download attribute here
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

            <div className="flex-1 mb-8 md:mb-0 ">
              <div className="flex flex-col mb-3 text-white text-base lg:mx-28 mx-0">
                <h3 className="text-lg font-semibold mb-3">Contact :</h3>
                <div className="flex items-center hover:text-[#BD7500] transition-all duration-300">
                  <Image src="/phone.png" alt="Phone" width={24} height={24} />
                  <a href="tel:+918320072668" className="pl-2 hover:underline">
                    +91 8320072668
                  </a>
                </div>
                <div className="flex items-center mt-2 hover:text-[#BD7500] transition-all duration-300">
                  <Image src="/home/footer/phone.svg" alt="Phone" width={24} height={24} />
                  <a href="tel:+917016932856" className="pl-2 hover:underline ">
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
                  <a href="#">
                    <Image
                      src="/home/footer/insta.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/home/footer/linkd.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/home/footer/fb.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/home/footer/x.svg"
                      alt="X (Twitter)"
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-1 mb-8 md:mb-0">
              <div className="mb-2 items-start flex flex-col lg:w-4/5 w-full">
                <h3 className="text-lg lg:text-xl font-semibold mb-3 w-full">Office Address:</h3>
                <div className="flex items-start ">
                  <Image
                    src="/home/footer/location.svg"
                    alt="Location"
                    width={24}
                    height={24}
                  />
                  <p className="text-bae pl-2 hover:underline hover:text-[#BD7500] cursor-pointer">
                    FF-107 ATRIA-2 OPP. SHREYAS SCHOOL NR.DAWAT RESTAURANT,
                    MANJALPUR, VADODARA-390011
                  </p>
                </div>
              </div>

              <div className="flex-1 mt-8 md:mt-0 md:justify-center w-full h-60">
                <iframe
                  className="w-full h-full md:h-full rounded-lg shadow-lg"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3692.0046815516084!2d73.1966131!3d22.2778125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc58250393a0d%3A0xcf7edc53c8636367!2sAtria%20Complex!5e0!3m2!1sen!2sin!4v1734245432820!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
