"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const services = [
  {
    title: "1) Electrical Contracting Services",
    description:
      "We offer a wide range of professional services in project execution and maintenance activities, ensuring compliance with industry standards.",
    items: [
      "Handling electrical systems up to 33kV voltage",
      "Ensuring safety, efficiency, and precision at every stage",
      "Providing innovative solutions for the industry",
    ],
  },
  {
    title: "2) Project Activities",
    description:
      "From system design to installation and commissioning, we handle all aspects of electrical project implementation.",
    items: [
      "Designing system architecture and selecting field instruments for seamless integration",
      "Preparing panel engineering layouts and detailed loop diagrams",
      "Installing control instruments, electrical components, and performing loop testing",
      "On-site commissioning of systems and instruments for optimal operation",
    ],
  },
  {
    title: "3) Maintenance Activities",
    description:
      "We provide comprehensive maintenance services, including annual contracts, daily operations, and periodic system upkeep.",
    items: [
      "Managing daily operations and periodic maintenance of electrical systems",
      "Strict adherence to safety protocols, including work permits and hot permits",
      "Performing electrical tasks such as cable laying, dressing, glanding, and termination",
      "Conducting welding tasks for fabrication, and installing instrument tubing, junction boxes, and controllers",
      "Executing instrumentation tasks, including calibration, repair, and maintenance",
      "Conducting loop testing to ensure system functionality and performance",
      "Installing and maintaining control instruments and electrical panels",
      "Providing comprehensive support for instrumentation and electrical systems",
    ],
  },
  {
    title: "Documentation Services",
    description: "We ensure clear communication and compliance through comprehensive documentation services.",
    items: [
      "Preparing intermediate analysis reports to track progress and functionality",
      "Creating operation and maintenance manuals for efficient system management",
      "Delivering project completion reports to ensure clarity, compliance, and customer satisfaction",
    ],
  },
]


export default function About() {
  return (
    <div className="min-h-screen bg-[#DEEDEF] overflow-hidden">
      <Header/>
      <div className="pt-">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[60vh] w-full"
        >
          <Image
            src="/about/hero_section.png"
            alt="JK Power System Hero Image"
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
            <h1 className="text-2xl md:text-6xl font-bold text-white text-center">Welcome to JK Power System</h1>
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
            JK Power System is a government-approved contractor dedicated to excellence in electrical contracting
            services. We specialize in handling electrical systems up to 33kV voltage, focusing on safety, efficiency,
            and precision at every stage of our work. Our commitment to innovation and continuous improvement drives us
            to create solutions that make a positive impact in the industry.
          </p>
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:px-4 max-w-7xl mx-auto py-2 px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#2E414B] bg-[#C0DBE1] lg:w-1/2 w-3/4 rounded-full p-2 mx-auto">
            Our Services
          </h2>

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="lg:text-2xl text-xl font-bold mb-4 text-[#2E414B] p-2">{service.title}</h3>
              <p className="lg:text-xl text-lg text-[#2E414B] mb-4 p-2">{service.description}</p>
              <ul className="list-disc pl-6 space-y-2 lg:text-xl text-lg">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-[#2E414B]">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.section>
      </div>
      <Footer/>
    </div>
  )
}
