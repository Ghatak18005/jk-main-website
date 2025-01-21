import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import SerCar1 from "@/components/SerCar1";

export default function Service() {
  return (
    <>
      <Head>
        <title>Our Services | Electrical Solutions</title>
        <meta
          name="description"
          content="Discover our core services, including Electrical Contracting Service, Project Activity, Maintenance Activity, Industrial and Commercial Material Supply, and Panel Manufacturing. We deliver high-quality, reliable electrical solutions for every need."
        />
      </Head>

      <div className="min-h-screen bg-[#DEEDEF] overflow-hidden">
        <Header />
        <div className="pt-16">

          <SerCar1 />
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:py-16 lg:px-4 max-w-7xl mx-auto py-6 px-4"
          >
            <h2 className="text-xl md:text-3xl font-bold mb-6 text-center text-[#2E414B] bg-[#C0DBE1] lg:w-1/2 w-full rounded-full p-2 mx-auto">
              Electrical Contracting Service
            </h2>
            <p className="text-lg lg:text-xl text-[#2E414B] leading-relaxed px-4 lg:px-7">

              We offer a wide range of electrical services for homes, businesses, and industries. From installations to repairs, our skilled team delivers top-quality work tailored to your needs. Whether it's a new project, routine maintenance, or urgent repairs, we ensure safe and reliable solutions. Trust us for professional service and long-lasting results.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:py-16 lg:px-4 max-w-7xl mx-auto py-6 px-4"
          >
            <h2 className="text-xl md:text-3xl font-bold mb-6 text-center text-[#2E414B] bg-[#C0DBE1] lg:w-1/2 w-1/2 rounded-full p-2 mx-auto">
              Project Activity
            </h2>
            <p className="text-lg lg:text-xl text-[#2E414B] leading-relaxed px-4 lg:px-7">

              We offer a wide range of electrical services for businesses and industries. From installations to repairs, our skilled team delivers top-quality work tailored to your needs. Whether it's a new project, routine maintenance, We provide complete management for electrical projects, handling everything from planning to execution. Our team specializes in managing complex installations, upgrades, and system improvements with precision and efficiency. Whether it's a new project or modernizing existing systems, we deliver expert solutions tailored to your needs. Trust us for seamless project execution and top-quality results. or urgent repairs, we ensure safe and reliable solutions. Trust us for professional service and long-lasting results.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:py-16 lg:px-4 max-w-7xl mx-auto py-6 px-4"
          >
            <h2 className="text-xl md:text-3xl font-bold mb-6 text-center text-[#2E414B] bg-[#C0DBE1] lg:w-1/2 w-full rounded-full p-2 mx-auto">
              Maintenance Activity
            </h2>
            <p className="text-lg lg:text-xl text-[#2E414B] leading-relaxed px-4 lg:px-7">
              Ensure your systems operate flawlessly with our preventive maintenance services. We provide regular inspections, identify potential issues early, and offer timely solutions to avoid disruptions. Our skilled team responds quickly to all electrical problems, keeping your operations running smoothly. Trust us for reliable, hassle-free maintenance and peace of mind.
            </p>
          </motion.section>
        </div>
        <Footer />
      </div>
    </>
  );
}
