import Image from "next/image";
import { motion } from "framer-motion";

export default function Certificate() {
  // Dictionary of certificates
  const certificates = [
    {
      src: "/certificates/c1.png",
      alt: "Certificate 1",
    },
    {
      src: "/certificates/c2.png",
      alt: "Certificate 2",
    },
    {
      src: "/certificates/c3.png",
      alt: "Certificate 3",
    },
  ];

  return (
    <div className="bg-[#DEEDEF] p-10 min-h-screen">
      <h1 className="text-[#2E414B] bg-[#C0DBE1] py-2 rounded-2xl lg:w-1/5 w-3/4 text-center lg:text-3xl text-xl font-semibold mb-10 mx-auto">
        Certificates
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 * index }}
          >
            <Image
              src={certificate.src}
              alt={certificate.alt}
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
