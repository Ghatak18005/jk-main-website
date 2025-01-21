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
                <title>Panel Manufacturing | High-Quality Electrical Panels</title>
                <meta
                    name="description"
                    content="Explore our expertise in panel manufacturing. We design and produce high-quality electrical panels for industrial, commercial, and residential applications."
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
                            Panel Manufacturing
                        </h2>
                        <p className="text-lg lg:text-xl text-[#2E414B] leading-relaxed px-4 lg:px-7">

                            Panel manufacturing involves the design, assembly, and production of electrical panels that distribute and control power in various applications. These panels are essential components in industrial, commercial, and residential electrical systems, ensuring the safe and efficient operation of equipment and devices.
                            <br /><br />
                            Our panel manufacturing process combines high-quality materials, advanced technology, and skilled craftsmanship to deliver reliable solutions tailored to your specific needs. Whether it is a standard panel or a custom-built system, we focus on precision, durability, and compliance with safety standards. Trust us to provide panels that power your projects with efficiency and reliability.
                        </p>
                    </motion.section>
                </div>
                <Footer />
            </div>
        </>
    );
}
