import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import VisionMission from "@/components/VisionCard";
import sectors from '../data/sectors.json';
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import ClientsCarousel from "@/components/ClientsCarousel";
import { useEffect } from "react";
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HeroAndAbout() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    // Check if we should scroll to clients section
    const shouldScroll = sessionStorage.getItem('scrollToClients');
    if (shouldScroll) {
      // Clear the flag
      sessionStorage.removeItem('scrollToClients');
      // Add a small delay to ensure the page is fully loaded
      setTimeout(() => {
        const clientsSection = document.getElementById('clients-section');
        if (clientsSection) {
          clientsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="w-full bg-[#DEEDEF]">
      <Header />
      <section className="relative w-full">
        <Carousel />

        <motion.div
          className="bg-[#C0DBE1] lg:py-5 py-7 px-4 sm:px-6 lg:px-4 text-[#2E414B]"
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
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/JK.svg"
                  alt="JK POWER SYSTEM LOGO"
                  width={100}
                  height={100}
                  className="lg:w-3/4 w-4/5 mx-auto mb-2"
                />
                <motion.span
                  className="lg:text-xl font-bold text-center"
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
                src="/home/hero2.jpg"
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
                src="/home/hero2.jpg"
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
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="lg:text-3xl text-xl font-bold text-[#2E414B] lg:mb-12 mb-7 bg-[#C0DBE1] py-2 rounded-2xl lg:w-3/12 w-3/4 mx-auto">
            CORE SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-4">

            {/* Service 1 */}
            <motion.div
              className="overflow-hidden rounded-xl border-4 border-[#BD7500] hover:bg-[#abdbe6] hover:shadow-2xl hover:scale-110 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 100, damping: 25 }}
            >
              <Link href="/service1">
                <div className="lg:px-5 lg:py-4 p-2 cursor-pointer">
                  <div className="mb-2">
                    <Image
                      src="/h1.png"
                      alt="Service 1"
                      width={250}
                      height={200}
                      className="mx-auto rounded-lg"
                    />
                  </div>
                  <h3 className="lg:text-xl text-base text-black mb-2 text-center font-ar">
                    - Electrical Contracting Service <br />
                    - Project Activity <br />
                    - Maintenance Activity
                  </h3>
                </div>
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="overflow-hidden rounded-xl border-4 border-[#BD7500] hover:bg-[#abdbe6] hover:shadow-2xl hover:scale-110 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 100, damping: 25, delay: 0.2 }}
            >
              <Link href="/service2">
                <div className="lg:px-5 lg:py-4 p-2 cursor-pointer">
                  <div className="mb-2">
                    <Image
                      src="/h2.png"
                      alt="Service 2"
                      width={250}
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
                  <h3 className="lg:text-xl text-base text-gray-900 mb-2 text-center">
                    - All Types of Industrial <br />
                    and Commercial Material Supply
                  </h3>
                </div>
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="overflow-hidden rounded-xl border-4 border-[#BD7500] hover:bg-[#abdbe6] hover:shadow-2xl hover:scale-110 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 100, damping: 25, delay: 0.4 }}
            >
              <Link href="/service3">
                <div className="lg:px-5 lg:py-4 p-2 cursor-pointer">
                  <div className="mb-2">
                    <Image
                      src="/h3.png"
                      alt="Service 3"
                      width={250}
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
                  <h3 className="lg:text-xl text-base text-gray-900 mb-2 text-center">
                    - Panel Manufacturing
                  </h3>
                </div>
              </Link>
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
                    <p className="text-white lg:text-base font-bold mx-auto md:text-sm ">{sector.title}</p>
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
                  className="rounded-md opacity-85 h-24"
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
                  className="rounded-md opacity-85 h-24"
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
                    className="rounded-md opacity-85 h-24"
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
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="relative mx-2"
                >
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    width={250}
                    height={200}
                    className="rounded-full h-44"
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
                  width={250}
                  height={200}
                  className="rounded-full h-44"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-lg font-bold">
                    {sectors[4].title}
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
                  width={250}
                  height={200}
                  className="rounded-full h-44"
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
                    width={250}
                    height={200}
                    className="rounded-full h-44"
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

      <section className="lg:py-28 px-7 py-6 lg:px-8" id="clients-section">

        <div className="text-center">
          <h2 className="lg:text-3xl text-xl font-bold text-[#2E414B] lg:mb-12 mb-7 bg-[#C0DBE1] py-2 rounded-2xl lg:w-5/12 w-2/3 mx-auto">
            OUR CLIENTS
          </h2>
          <ClientsCarousel />
        </div>
      </section>
      <Footer />
    </div>
  );
}
