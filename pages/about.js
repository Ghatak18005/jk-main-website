import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | JK Power System</title>
        <meta
          name="description"
          content="Learn about JK Power System's mission, values, and founders."
        />
      </Head>
      <div className="min-h-screen bg-[#DEEDEF] overflow-hidden">
        <Header />
        <div className="pt-16">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[60vh] w-full"
          >
            <Image
              src="/about/hero_section.png"
              alt="Company Hero Image"
              fill
              className="object-cover"
              priority
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                Welcome to Our Company
              </h1>
            </motion.div>
          </motion.section>

          {/* About Us Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:py-16 lg:px-4 max-w-7xl mx-auto py-6 px-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#2E414B] bg-[#C0DBE1] lg:w-1/4 w-1/2 rounded-full p-2 mx-auto">
              About Us
            </h2>
            <p className="text-lg lg:text-xl text-[#2E414B] leading-relaxed px-4 lg:px-7">
              Our company is dedicated to innovation and excellence in every
              aspect of our work. We strive to create solutions that make a
              positive impact on the world, focusing on sustainability,
              technology, and human-centered design. With a team of passionate
              experts and a commitment to continuous improvement, we're shaping
              the future of our industry.
            </p>
          </motion.section>
        </div>
        <Footer />
      </div>
    </>
  );
}
