import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import SerCar3 from "@/components/SerCar3";

export default function Service() {
    const [activePanel, setActivePanel] = useState("PCC");

    // Panel data
    const panels = [
        {
            name: "PCC Panel",
            image: "/products/sub/sub12/img1.jpg", // Replace with actual image path
            description:
                "The Power Control Center (PCC) panel is designed to manage electrical power distribution and ensure protection against faults. It is commonly used in industrial and commercial applications, providing an efficient way to control electrical systems while maintaining safety and reliability.",
        },
        {
            name: "MCC Panel",
            image: "/products/sub/sub12/img2.jpg", // Replace with actual image path
            description:
                "The Motor Control Center (MCC) panel is used to control electric motors. It allows easy monitoring and control of motors, ensuring they operate efficiently and safely in various applications.",
        },
        {
            name: "APFC Panel",
            image: "/products/sub/sub12/img3.jpg", // Replace with actual image path
            description:
                "The Automatic Power Factor Correction (APFC) panel helps improve the power factor of an electrical system. It automatically adjusts the power factor to ensure optimal performance and efficiency.",
        },
        {
            name: "VFD Panel",
            image: "/products/sub/sub12/img4.jpg", // Replace with actual image path
            description:
                "The Variable Frequency Drive (VFD) panel is used to control the speed and torque of electric motors by adjusting the frequency and voltage. It enhances motor efficiency and performance.",
        },
    ];

    // Function to handle panel selection
    const handlePanelSelect = (panelName) => {
        setActivePanel(panelName);
    };

    // Find the active panel
    const activePanelData = panels.find((panel) => panel.name === activePanel);

    // Fallback image in case activePanelData is not found or image is missing
    const fallbackImage = "/products/sub/sub12/img1.jpg"; // Replace with an actual fallback image path

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
                    <SerCar3 />

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

                    {/* Types of Panels Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:py-16 lg:px-4 max-w-7xl mx-auto py-6 px-4"
                    >
                        <h2 className="text-xl md:text-3xl font-bold mb-6 text-center text-[#2E414B] bg-[#C0DBE1] lg:w-1/2 w-full rounded-full p-2 mx-auto">
                            Types of Panels
                        </h2>

                        <div className="lg:flex">
                            {/* Left side: List of panel headings */}
                            <div className="lg:w-1/4 w-full mb-8 lg:mb-0 space-y-4">
                                {panels.map((panel) => (
                                    <div
                                        key={panel.name}
                                        onClick={() => handlePanelSelect(panel.name)}
                                        className={`cursor-pointer text-xl text-[#2E414B] p-2 rounded-md hover:bg-[#C0DBE1] ${activePanel === panel.name ? "font-bold bg-[#C0DBE1]" : ""
                                            }`}
                                    >
                                        {panel.name}
                                    </div>
                                ))}
                            </div>

                            {/* Right side: Panel Image and Description */}
                            <div className="lg:w-3/4 w-full px-4">
                                <div className="flex flex-col items-center lg:flex-row">
                                    <div className="w-full lg:w-1/2 mb-4 lg:mb-0 flex justify-center">
                                        {/* Image component with fallback */}
                                        <Image
                                            src={activePanelData?.image || fallbackImage}
                                            alt={activePanelData?.name || "Panel"}
                                            width={300}
                                            height={200}
                                            className="rounded-lg w-full"
                                        />
                                    </div>
                                    <div className="lg:w-1/2 px-4">
                                        <h3 className="text-2xl font-semibold text-[#2E414B] mb-4 px-28">{activePanelData?.name}</h3>
                                        <p className="text-lg lg:text-xl text-[#2E414B] leading-relaxed px-10">
                                            {activePanelData?.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </div>
                <Footer />
            </div>
        </>
    );
}
