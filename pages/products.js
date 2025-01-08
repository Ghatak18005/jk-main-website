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
    <div className="bg-[#DEEDEF] min-h-screen overflow-hidden">
      

      <div className={`p-6 transition-all duration-300 ${isOverlayVisible ? 'blur-sm' : ''}`}>
        <div className="flex justify-center mb-6 bg-[#C0DBE1] rounded-full lg:mx-64 md:mx-32 mx-auto">
          <div className="relative flex w-full">
            <button className="px-2 py-2">
              <Image src="/products/hamburger.svg" alt="Menu" width={56} height={56} />
            </button>
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Search products..."
              className="w-full py-2 bg-[#C0DBE1] focus:outline-none text-black"
            />
            <button className="px-4 py-2">
              <Image src="/products/search.svg" alt="Search" width={56} height={56} />
            </button>

          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#2D5F6B] text-white rounded-lg shadow-md flex flex-col p-4 transform transition-transform "
            >
              <Image
                src={category.imgSrc}
                alt={category.title}
                width={300}
                height={200}
                className="object-cover w-full rounded-lg"
              />
              <div className="pt-4 flex-grow ">
                <h3 className="text-[#DEEDEF] text-base md:text-lg font-semibold lg:mb-2 mb-1">
                  {category.title}
                </h3>
                <p className="text-sm lg:text-base text-[#C0DBE1] lg:mb-4 mb-2">
                  {category.description}
                </p>
              </div>
              <button
                className="bg-[#EFAA00] text-[#2E414B] px-4 py-2 mx-auto rounded-full lg:w-full w-40 hover:bg-yellow-600 transition-colors lg:text-sm text-xs"
                onClick={() => showOverlay(category)}
              >
                Explore More
              </button>
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
