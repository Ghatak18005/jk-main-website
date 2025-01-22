import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import productData from '../data/products.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from "next/head";
import DealingCarousel from "@/components/DealingCarousel";

export default function Products() {
  const [filteredCategories, setFilteredCategories] = useState(productData.categories);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = productData.categories.filter((category) => {
      // Check category title and description
      if (
        category.title.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query)
      ) {
        return true;
      }

      // Check if query matches any product names
      const hasMatchingProduct = category.products.some((product) =>
        product.name.toLowerCase().includes(query)
      );
      if (hasMatchingProduct) return true;

      // Check if query matches any search terms
      const hasMatchingSearchTerm = category.searchTerms.some((term) =>
        term.toLowerCase().includes(query)
      );
      return hasMatchingSearchTerm;
    });

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
    <div className="min-h-screen bg-[#DEEDEF]">
      <Head>
        <title>Products | JK Power System</title>
        <meta
          name="description"
          content="Browse the premium range of electrical products by JK Power System, built for safety, performance, and reliability."
        />
      </Head>

      <Header />
      <div className="pt-16 overflow-hidden lg:px-5 px-3">
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
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2314_76)">
                    <path d="M31.6 33L25.3 26.7C24.8 27.1 24.225 27.4167 23.575 27.65C22.925 27.8833 22.2333 28 21.5 28C19.6833 28 18.1458 27.3708 16.8875 26.1125C15.6292 24.8542 15 23.3167 15 21.5C15 19.6833 15.6292 18.1458 16.8875 16.8875C18.1458 15.6292 19.6833 15 21.5 15C23.3167 15 24.8542 15.6292 26.1125 16.8875C27.3708 18.1458 28 19.6833 28 21.5C28 22.2333 27.8833 22.925 27.65 23.575C27.4167 24.225 27.1 24.8 26.7 25.3L33 31.6L31.6 33ZM21.5 26C22.75 26 23.8125 25.5625 24.6875 24.6875C25.5625 23.8125 26 22.75 26 21.5C26 20.25 25.5625 19.1875 24.6875 18.3125C23.8125 17.4375 22.75 17 21.5 17C20.25 17 19.1875 17.4375 18.3125 18.3125C17.4375 19.1875 17 20.25 17 21.5C17 22.75 17.4375 23.8125 18.3125 24.6875C19.1875 25.5625 20.25 26 21.5 26Z" fill="#2E414B" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2314_76">
                      <rect x="4" y="4" width="40" height="40" rx="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              </button>

            </div>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 mb-20"
        >
          {filteredCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-[#2D5F6B] text-white rounded-lg shadow-md flex flex-col p-4 w-full mx-auto"
            >
              <motion.div
                className="relative w-full h-48 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Image
                  src={category.imgSrc}
                  alt={category.title}
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-full object-cover"
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
              className="fixed inset-0 bg-black bg-opacity-70 z-20 flex items-center justify-center overlay-background "
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
                      className="mx-auto mb-2 lg:mb-4 rounded-lg flex flex-grow"
                    />
                    <div className="text-[#DEEDEF] text-center py-0 lg:py-2 lg:text-xl text-sm ">
                      {product.name}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="text-center">
        <h2 className="lg:text-3xl text-xl font-bold text-[#2E414B] lg:mb-0 mb-7 bg-[#C0DBE1] py-2 rounded-2xl lg:w-5/12 w-2/3 mx-auto">
          Dealing In
        </h2>
      </div>
      <DealingCarousel />
      <Footer />
    </div>
  );
}
