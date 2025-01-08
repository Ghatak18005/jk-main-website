import Image from "next/image";
import { useEffect, useState } from "react";

export default function Products() {
  const categoryData = [
    {
      title: "Screwdrivers",
      description: "Professional-grade screwdrivers for various applications",
      imgSrc: "/products/white_img.png",
      products: [
        {
          name: "Phillips Screwdriver",
          imgSrc: "/products/white_img.png",
        },
        {
          name: "Flathead Screwdriver",
          imgSrc: "/products/white_img.png",
        },
        {
          name: "Precision Screwdriver",
          imgSrc: "/products/white_img.png",
        }
      ]
    },
    {
      title: "Power Drills",
      description: "High-performance power drills for professional use",
      imgSrc: "/products/white_img.png",
      products: [
        {
          name: "Cordless Drill Pro",
          imgSrc: "/products/white_img.png",
        },
        {
          name: "Impact Drill Max",
          imgSrc: "/products/white_img.png",
        },
        {
          name: "Compact Drill Lite",
          imgSrc: "/products/white_img.png",
        }
      ]
    },
    // ... Add more categories
  ];

  const [filteredCategories, setFilteredCategories] = useState(categoryData);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = categoryData.filter((category) =>
      category.title.toLowerCase().includes(query) || 
      category.description.toLowerCase().includes(query)
    );
    setFilteredCategories(filtered);
  };

  const showOverlay = (category) => {
    setSelectedCategory(category);
    setIsOverlayVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const hideOverlay = () => {
    setIsOverlayVisible(false);
    setSelectedCategory(null);
    document.body.style.overflow = 'auto';
  };

  // Handle click outside of overlay cards
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('overlay-background')) {
      hideOverlay();
    }
  };

  return (
    <div className="bg-[#DEEDEF] min-h-screen relative">
      <nav className="bg-[#F2F9F9] h-14 sticky top-0 z-10">
        <ul className="flex gap-24 text-2xl p-2 text-[#2E414B] font-normal">
          <a href="/"><li className="hover:font-medium">Home</li></a>
          <a href="/products"><li className="hover:font-medium">Product</li></a>
          <a href="/services"><li className="hover:font-medium">Services</li></a>
          <a href="/clients"><li className="hover:font-medium">Clients</li></a>
          <a href="/certificates"><li className="hover:font-medium">Certificates</li></a>
        </ul>
      </nav>

      <div className={`p-6 transition-all duration-300 ${isOverlayVisible ? 'blur-sm' : ''}`}>
        <div className="flex justify-center mb-6 bg-[#C0DBE1] rounded-full mx-64">
          <div className="relative flex w-full">
            <button className="px-4 py-2">
              <Image src="/products/hamburger.png" alt="Menu" width={24} height={24} />
            </button>
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Search products..."
              className="w-full px-4 py-2 bg-[#C0DBE1] focus:outline-none"
            />
            <button className="px-4 py-2">
              <Image src="/products/search_button.png" alt="Search" width={24} height={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-[#2D5F6B] text-white rounded-lg shadow-md overflow-hidden flex flex-col p-5 transform transition-transform hover:scale-105"
            >
              <Image 
                src={category.imgSrc} 
                alt={category.title} 
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
              <div className="pt-4">
                <h3 className="text-[#DEEDEF] text-lg font-semibold mb-2">{category.title}</h3>
                <p className="text-sm text-[#C0DBE1] mb-4">{category.description}</p>
                <button 
                  className="bg-[#EFAA00] text-[#2E414B] px-4 py-2 rounded-full w-full hover:bg-yellow-600 transition-colors"
                  onClick={() => showOverlay(category)}
                >
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOverlayVisible && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 z-20 flex items-center justify-center overlay-background"
          onClick={handleOverlayClick}
        >
          <div className="flex gap-6 p-4">
            {selectedCategory?.products.map((product, index) => (
              <div 
                key={index}
                className="w-80 h-96 bg-[#598088] rounded-lg flex flex-col justify-between p-4 shadow-md transform transition-transform hover:scale-105"
              >
                <div className="text-center bg-[#C0DBE1] h-full rounded-lg p-4">
                  <Image 
                    src={product.imgSrc} 
                    alt={product.name}
                    width={200}
                    height={200}
                    className="mx-auto mb-4 rounded-lg"
                  />
                </div>
                <div className="text-[#DEEDEF] text-center py-2 text-xl">{product.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
