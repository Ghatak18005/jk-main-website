import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Products() {
  const categoryData = [
    {
      title: "Switchgear and Automation",
      description:
        "Switchgear ensures safe power control and protection, while automation enhances efficiency and monitoring in electrical systems.",
      imgSrc: "/products/head/switchgear.png",
      products: [
        { name: "ACB", imgSrc: "/products/sub/img1.png" },
        { name: "MCB", imgSrc: "/products/sub/img1.png" },
        { name: "DB", imgSrc: "/products/sub/img1.png" },
        { name: "MCCB", imgSrc: "/products/sub/img1.png" },
        { name: "RCCB", imgSrc: "/products/sub/img1.png" },
        { name: "Contactor", imgSrc: "/products/sub/img1.png" },
        { name: "MPCB", imgSrc: "/products/sub/img1.png" },
        { name: "Capacitor", imgSrc: "/products/sub/img1.png" },
        { name: "Relays", imgSrc: "/products/sub/img1.png" },
        { name: "Starter", imgSrc: "/products/sub/img1.png" },
        { name: "Fuse", imgSrc: "/products/sub/img1.png" },
        { name: "Switch Disconnectors", imgSrc: "/products/sub/img1.png" },
        { name: "Push Buttons", imgSrc: "/products/sub/img1.png" },
        { name: "Change Over Switches", imgSrc: "/products/sub/img1.png" },
        {
          name: "Electronic Overcurrent Relays",
          imgSrc: "/products/sub/img1.png",
        },
        { name: "Terminals", imgSrc: "/products/sub/img1.png" },
        { name: "Limit Switches", imgSrc: "/products/sub/img1.png" },
        { name: "Meters", imgSrc: "/products/sub/img1.png" },
        {
          name: "Surge Protection Devices",
          imgSrc: "/products/sub/img1.png",
        },
        { name: "Plugs & Sockets", imgSrc: "/products/sub/img1.png" },
        { name: "VFD", imgSrc: "/products/sub/img1.png" },
      ],
    },
    {
      title: "Wires and Cables",
      description:
        "Wires and cables are essential for transmitting electrical power and signals, offering reliable and durable connections for diverse applications in industries, homes, and infrastructure.",
      imgSrc: "/products/head/wires.png",
      products: [
        {
          name: "Copper & Aluminium Armoured Cables",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "Multicore Flexible Cables",
          imgSrc: "/products/sub/img1.png",
        },
        { name: "High Tension Cables", imgSrc: "/products/sub/img1.png" },
        { name: "CCTV Cable", imgSrc: "/products/sub/img1.png" },
        { name: "Coxial Cables", imgSrc: "/products/sub/img1.png" },
        { name: "JFTC Cable", imgSrc: "/products/sub/img1.png" },
        { name: "LAN Cable", imgSrc: "/products/sub/img1.png" },
      ],
    },
    {
      title: "Industrial Light",
      description:
        "Industrial lights provide bright, energy-efficient illumination for large-scale environments, enhancing safety and productivity.",
      imgSrc: "/products/head/industrial.jpg",
      products: [
        { name: "High Bay Light", imgSrc: "/products/sub/img1.png" },
        { name: "Well Glass", imgSrc: "/products/sub/img1.png" },
        { name: "High Bay - Canopy", imgSrc: "/products/sub/img1.png" },
        { name: "Standard Baselight", imgSrc: "/products/sub/img1.png" },
        { name: "Linear Light", imgSrc: "/products/sub/img1.png" },
        {
          name: "System Ceiling Baselight",
          imgSrc: "/products/sub/img1.png",
        },
        { name: "Cleanroom Baselight", imgSrc: "/products/sub/img1.png" },
        { name: "Industrial Battern", imgSrc: "/products/sub/img1.png" },
        {
          name: "Downlight Surface Mounted",
          imgSrc: "/products/sub/img1.png",
        },
        { name: "Panel Light", imgSrc: "/products/sub/img1.png" },
        { name: "Street Light", imgSrc: "/products/sub/img1.png" },
        { name: "Suspended Light", imgSrc: "/products/sub/img1.png" },
        { name: "Floodlight", imgSrc: "/products/sub/img1.png" },
        { name: "Bollard Light", imgSrc: "/products/sub/img1.png" },
        { name: "Bulkhead Light", imgSrc: "/products/sub/img1.png" },
        { name: "Trunking Light", imgSrc: "/products/sub/img1.png" },
        { name: "FLP Well Glass Light", imgSrc: "/products/sub/img1.png" },
        { name: "FLP Well Glass Light", imgSrc: "/products/sub/img1.png" },
        { name: "FLP Hand Lamp", imgSrc: "/products/sub/img1.png" },
        { name: "FLP Floodlight", imgSrc: "/products/sub/img1.png" },
      ],
    },
    {
      title: "Induction Motor and Gearbox",
      description:
        "An induction motor is a reliable electric motor driven by AC, while a gearbox adjusts the motor's speed and torque for optimal performance in various applications. Together, they offer efficient",
      imgSrc: "/products/head/gearbox.png",
      products: [
        {
          name: "3Phase Induction Motor",
          imgSrc: "/products/sub/img1.png",
        },
        { name: "Servo Motor", imgSrc: "/products/sub/img1.png" },
        {
          name: "Worm Reduction Gearbox",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "Inline Helical Gearbox",
          imgSrc: "/products/sub/img1.png",
        },
        { name: "Bevel Helical Gearbox", imgSrc: "/products/sub/img1.png" },
        {
          name: "Parallel Helical Gearbox",
          imgSrc: "/products/sub/img1.png",
        },
        { name: "Motor Canopy", imgSrc: "/products/sub/img1.png" },
      ],
    },
    {
      title: "Cable Tray",
      description:
        "A cable tray organizes and supports electrical cables, protecting them from damage and simplifying installation and maintenance.",
      imgSrc: "/products/head/cabletray.jpg",
      products: [
        { name: "Perforated Cable Tray", imgSrc: "/products/sub/img1.png" },
        { name: "Ladder Cable Tray", imgSrc: "/products/sub/img1.png" },
        { name: "Raceway Cable Tray", imgSrc: "/products/sub/img1.png" },
        {
          name: "Embossed Perforated Cable Tray",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "Heavy Duty Ladder Cable Tray",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "FRP Perforated Cable Tray",
          imgSrc: "/products/sub/img1.png",
        },
        { name: "FRP Ladder Cable Tray", imgSrc: "/products/sub/img1.png" },
        {
          name: "FRP Moulded & Pultruded",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "Polygonal or Octagonal Lighting Poles",
          imgSrc: "/products/sub/img1.png",
        },
        { name: "Swaged Lighting Poles", imgSrc: "/products/sub/img1.png" },
        { name: "Conical Poles", imgSrc: "/products/sub/img1.png" },
        { name: "High Mast Poles", imgSrc: "/products/sub/img1.png" },
        { name: "Flag Mast Pole", imgSrc: "/products/sub/img1.png" },
      ],
    },
    {
      title: "Cable Gland and Conduit",
      description:
        "A cable gland secures and protects electrical cables as they enter equipment, while conduit is a protective tube that houses and shields electrical wiring.",
      imgSrc: "/products/head/cable1.jpg",
      products: [
        {
          name: "Nylon Type Cable Glands",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "Double Compression Cable Gland",
          imgSrc: "/products/sub/img1.png",
        },
        { name: "Reducer", imgSrc: "/products/sub/img1.png" },
        { name: "Stop Plugs", imgSrc: "/products/sub/img1.png" },
        { name: "Flexible Conduit", imgSrc: "/products/sub/img1.png" },
        {
          name: "Stainless Steel Conduit",
          imgSrc: "/products/sub/img1.png",
        },
      ],
    },
    {
      title: "Instrument Product",
      description:
        "Instrument products refer to devices used for measuring, controlling, or monitoring physical quantities, such as pressure, temperature, or flow, in industrial and laboratory applications.",
      imgSrc: "/products/head/instrument.jpg",
      products: [
        { name: "Pressure Measurement", imgSrc: "/products/sub/img1.png" },
        {
          name: "Temperature Measurement Instruments with Indicators",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "Non-contact Type Level Measurement Instruments",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "Magnetic Flow type Flow Measurement Instruments",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "Vortex type Flow Measurement Instruments",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "PH/TDS/Conductivity type Analytical Instruments",
          imgSrc: "/products/sub/img1.png",
        },
      ],
    },
    {
      title: "Lug",
      description:
        "A lug is a type of electrical connector used to attach a wire to a terminal, such as a bolt or a screw. It is commonly used in electrical systems for secure, reliable connections in various applications.",
      imgSrc: "/products/head/lug.jpg",
      products: [
        {
          name: "Insulted Cord & Terminals",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "Insulted Twin Cord End Terminals",
          imgSrc: "/products/sub/img1.png",
        },
        { name: "Snap On Terminals", imgSrc: "/products/sub/img1.png" },
        {
          name: "Copper Insulted Pin Type Cable Terminal Ends",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "Copper Pin Type Cable Terminal Ends",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "Long Barrel Tinned Copper Cable Terminal Ends",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "High Voltage Copper Terminals - 33 KV",
          imgSrc: "/products/sub/img1.png",
        },
      ],
    },
    {
      title: "Earthing",
      description:
        "Earthing ensures safety by connecting electrical systems to the ground, preventing electrical shocks, equipment damage, and fire hazards during faults.",
      imgSrc: "/products/head/earthing.png",
      products: [
        {
          name: "Copper Bonded Grounding Rods",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "Grounding Enhancing Chemical Compounds",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "Polymer Earth Pit Chambers",
          imgSrc: "/products/sub/img1.png",
        },
        { name: "Earth Rod Seals", imgSrc: "/products/sub/img1.png" },
        {
          name: "Lighting Protection Air Terminal",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "Earth Bars For Earth Pits",
          imgSrc: "/products/sub/img1.png",
        },
      ],
    },
    {
      title: "HT Product",
      description:
        "HT (High Tension) products are electrical components designed for high-voltage applications, ensuring the safe transmission and distribution of electricity in power systems. They include equipment such as transformers, circuit breakers, and switchgears",
      imgSrc: "/products/head/ht.png",
      products: [
        { name: "VCB Panel", imgSrc: "/products/sub/img1.png" },
        {
          name: "Outdoor type VCB Panel",
          imgSrc: "/products/sub/img1.png",
        },
        { name: "GOAB Switch", imgSrc: "/products/sub/img1.png" },
        { name: "Drop Out Fuse", imgSrc: "/products/sub/img1.png" },
        { name: "Isolater", imgSrc: "/products/sub/img1.png" },
        { name: "Porcelain Insulators", imgSrc: "/products/sub/img1.png" },
        { name: "Polymer Insulators", imgSrc: "/products/sub/img1.png" },
        { name: "LT & HT Insulators", imgSrc: "/products/sub/img1.png" },
        { name: "Discharging Rod", imgSrc: "/products/sub/img1.png" },
        {
          name: "Transmission Line Material",
          imgSrc: "/products/sub/img1.png",
        },
        {
          name: "Overhead Line Material",
          imgSrc: "/products/sub/img1.png",
        },
        { name: "HT HRC Fuse", imgSrc: "/products/sub/img1.png" },
        { name: "Rubber Sheet", imgSrc: "/products/sub/img1.png" },
        { name: "HT Hand Gloves", imgSrc: "/products/sub/img1.png" },
      ],
    },
    {
      title: "Other Product",
      description:
        "Other products include cable joining kits, junction boxes, design flanges, floating connectors, and more. These items are designed to enhance electrical connectivity, ensure safety, and improve system reliability in various installations.",
      imgSrc: "/products/head/other.png",
      products: [
        { name: "Infrared Thermometer", imgSrc: "/products/sub/img1.png" },
        { name: "Clamp On Meter", imgSrc: "/products/sub/img1.png" },
        { name: "Junction Box", imgSrc: "/products/sub/img1.png" },
        { name: "Cable Joining Kit", imgSrc: "/products/sub/img1.png" },
        { name: "Design A Flange", imgSrc: "/products/sub/img1.png" },
        { name: "Floating Connector", imgSrc: "/products/sub/img1.png" },
        { name: "Grommets", imgSrc: "/products/sub/img1.png" },
      ],
    },
  ];

  const [filteredCategories, setFilteredCategories] = useState(categoryData);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = categoryData.filter(
      (category) =>
        category.title.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query)
    );
    setFilteredCategories(filtered);
  };

  const showOverlay = (category) => {
    setSelectedCategory(category);
    setIsOverlayVisible(true);
    document.body.style.overflow = "hidden";
  };

  const hideOverlay = () => {
    setIsOverlayVisible(false);
    setSelectedCategory(null);
    document.body.style.overflow = "auto";
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay-background")) {
      hideOverlay();
    }
  };

  return (
    <div className="bg-[#DEEDEF] min-h-screen overflow-hidden lg:px-5 px-3">
      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`p-6 ${isOverlayVisible ? "blur-sm" : ""}`}
      >
        <div className="flex justify-center mb-6 bg-[#C0DBE1] rounded-full lg:w-1/2 w-full mx-auto">
          <div className="relative flex w-full">
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Search products..."
              className="w-full py-2 px-8 bg-[#C0DBE1] focus:outline-none text-black rounded-full"
            />
            <button className="px-4 py-2">
              <Image
                src="/products/search.svg"
                alt="Search"
                width={56}
                height={56}
              />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Categories Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
      >
        {filteredCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-[#2D5F6B] text-white rounded-lg shadow-md flex flex-col p-4 w-full mx-auto"
          >
            <motion.div
              className="relative w-full lg:h-60 h-44 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Image
                src={category.imgSrc}
                alt={category.title}
                width={500}
                height={300}
                className="rounded-lg"
              />
            </motion.div>
            <div className="pt-4 flex-grow">
              <h3 className="text-[#DEEDEF] text-base md:text-lg font-semibold lg:mb-2 mb-1">
                {category.title}
              </h3>
              <p className="text-base lg:text-base text-[#C0DBE1] lg:mb-4 mb-2">
                {category.description}
              </p>
            </div>
            <button
              className="bg-[#EFAA00] text-[#2E414B] px-4 py-2 mx-auto rounded-full lg:w-3/4 w-3/4 hover:bg-yellow-600 transition-colors lg:text-sm text-sm"
              onClick={() => showOverlay(category)}
            >
              Explore More
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Overlay */}
      <AnimatePresence>
        {isOverlayVisible && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-20 flex items-center justify-center overlay-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          >
            <motion.div
              className="relative overflow-y-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-20 px-5 bg-[#2D5F6B] rounded-lg shadow-md w-5/6 lg:w-3/4 max-h-[75vh] lg:max-h-1/2 "
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <div className="absolute top-0 left-0 right-0 bg-[#EFAA00] text-[#2E414B] text-lg lg:text-2xl font-bold p-4 text-center">
                {selectedCategory?.title}
              </div>

              {selectedCategory?.products.map((product, index) => (
                <div
                  key={index}
                  className="w-full bg-[#598088] rounded-lg flex flex-col justify-between lg:p-6 p-3 shadow-md"
                >
                  <Image
                    src={product.imgSrc}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="mx-auto mb-2 lg:mb-4 rounded-lg"
                  />
                  <div className="text-[#DEEDEF] text-center py-0 lg:py-2 lg:text-xl text-sm flex-grow">
                    {product.name}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
