import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from '@/components/Footer';

const FounderProfile = ({ name, image, description, reverse, direction }) => (
  <motion.div
    initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.3, ease: "easeOut" }}
    viewport={{ once: true }}
    className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center mb-16`}
  >
    <div className={`md:w-1/2 mb-6 ${reverse ? "md:pl-8" : "md:pr-8"} flex justify-center`}>
      <motion.div
        transition={{ duration: 0.3 }}
      >
        <Image
          src={image}
          alt={`${name}'s Picture`}
          width={300}
          height={300}
          className="rounded-2xl"
        />
      </motion.div>
    </div>
    {/*md:w-1/2*/}
    <div className="">
      <h3 className="text-2xl font-semibold mb-4 text-[#2E414B] text-center md:text-left">{name}</h3>
      <p className="lg:text-xl text-lg text-gray-700 leading-relaxed ">{description}</p>
    </div>
  </motion.div>
);

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Our Company</title>
        <meta
          name="description"
          content="Learn about our company's mission, values, and founders."
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

          {/* Founders Section */}
          <section className="lg:py-16 lg:px-4 py-6 px-7 sm:px-6 max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold mb-12 text-center text-[#2E414B] bg-[#C0DBE1] lg:w-1/3 w-full rounded-full p-2 mx-auto"
            >
              About Founders
            </motion.h2>
            <FounderProfile
              name="Prit Desai"
              image="/about/person.png"
              description="Prit Desai is a visionary leader with over 15 years of experience in
              the tech industry. His innovative approach and strategic thinking
              have been instrumental in our company's growth and success. Prit
              is passionate about mentoring young entrepreneurs and promoting
              diversity in the workplace."
              direction="right"
            />
            <FounderProfile
              name="Mihir Gohil"
              image="/about/person.png"
              description="Mihir Gohil brings a wealth of experience in product development
              and market strategy. With a background in both engineering and
              business, Mihir has a unique perspective that drives our company's
              innovative solutions. He is committed to creating products that
              not only meet but exceed customer expectations."
              direction="left"
              reverse
            />
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}
