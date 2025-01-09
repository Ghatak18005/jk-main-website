import Image from "next/image";
import { useEffect, useState } from "react";
export default function Products() {
  const categoryData = [
    {
      title: "Switchgear and Automation",
      description: "Switchgear ensures safe power control and protection, while automation enhances efficiency and monitoring in electrical systems.",
      imgSrc: "/products/head_img/head1.jpg",
      products: [
        {
          name: "Phillips Screwdriver",
          imgSrc: "/products/pro_img/img1.png",
        },
        {
          name: "Flathead Screwdriver",
          imgSrc: "/products/pro_img/img1.png",
        },
        {
          name: "Precision Screwdriver",
          imgSrc: "/products/pro_img/img1.png",
        }
      ]
    },
    {
      title: "Wires and Cables",
      description: "Wires and cables are essential for transmitting electrical power and signals, offering reliable and durable connections for diverse applications in industries, homes, and infrastructure.",
      imgSrc: "/products/head_img/head2.jpg",
      products: [
        {
          name: "Cordless Drill Pro",
          imgSrc: "/products/pro_img/img1.png",
        },
        {
          name: "Impact Drill Max",
          imgSrc: "/products/pro_img/img1.png",
        },
        {
          name: "Compact Drill Lite",
          imgSrc: "/products/pro_img/img1.png",
        }
      ]
    },
    {
      title: "Industrial Light",
      description: "Industrial lights provide bright, energy-efficient illumination for large-scale environments, enhancing safety and productivity.",
      imgSrc: "/products/head_img/head3.jpg",
      products: [
        {
          name: "Cordless Drill Pro",
          imgSrc: "/products/pro_img/img1.png",
        },
        {
          name: "Impact Drill Max",
          imgSrc: "/products/pro_img/img1.png",
        },
        {
          name: "Compact Drill Lite",
          imgSrc: "/products/pro_img/img1.png",
        },
        {
          name: "Impact Drill Max",
          imgSrc: "/products/pro_img/img1.png",
        },
        {
          name: "Compact Drill Lite",
          imgSrc: "/products/pro_img/img1.png",
        },
        {
          name: "Impact Drill Max",
          imgSrc: "/products/pro_img/img1.png",
        },
        {
          name: "Compact Drill Lite",
          imgSrc: "/products/pro_img/img1.png",
        },
        {
          name: "Impact Drill Max",
          imgSrc: "/products/pro_img/img1.png",
        },
        {
          name: "Compact Drill Lite",
          imgSrc: "/products/pro_img/img1.png",
        }
      ]
    },
    {
      title: "Cable Tray",
      description: "A cable tray is a support system used to organize and protect electrical cables, ensuring safe and efficient cable management in industrial and commercial settings.",
      imgSrc: "/products/head_img/head4.jpg",
      products: [
        {
          name: "Cordless Drill Pro",
          imgSrc: "/products/pro_img/img1.png",
        },
        {
          name: "Impact Drill Max",
          imgSrc: "/products/pro_img/img1.png",
        },
        {
          name: "Compact Drill Lite",
          imgSrc: "/products/pro_img/img1.png",
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#2D5F6B] text-white rounded-lg shadow-md flex flex-col p-4 transform transition-transform"
            >
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src={category.imgSrc}
                  alt={category.title}
                  layout="fill"        
                  objectFit="cover"    
                  className="rounded-lg"
                />
              </div>

              <div className="pt-4 flex-grow ">
                <h3 className="text-[#DEEDEF] text-base md:text-lg font-semibold lg:mb-2 mb-1">
                  {category.title}
                </h3>
                <p className="text-sm lg:text-base text-[#C0DBE1] lg:mb-4 mb-2">
                  {category.description}
                </p>
              </div>
              <button
                className="bg-[#EFAA00] text-[#2E414B] px-4 py-2 mx-auto rounded-full lg:w-3/4 w-3/4 hover:bg-yellow-600 transition-colors lg:text-sm text-xs
              "
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
      <button
        className="absolute top-14 lg:top-12 right-6 lg:right-32 bg-[#EFAA00] text-[#2E414B] rounded-full px-2 py-1 lg:px-4 lg:py-2 hover:bg-yellow-600 transition-colors z-10"
        onClick={hideOverlay}
      >
        ✕
      </button>
    
      <div className="relative max-h-[75vh] lg:max-h-[80vh] overflow-y-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 bg-[#2D5F6B] rounded-lg shadow-md w-5/6 lg:w-3/4 ">
        {selectedCategory?.products.map((product, index) => (
          <div
            key={index}
            className="w-full bg-[#598088] rounded-lg flex flex-col justify-between lg:p-6 p-3 shadow-md transform transition-transform"
          >
            <div className="text-center h-full rounded-lg lg:p-2 p-1">
              <Image
                src={product.imgSrc}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto mb-2 lg:mb-4 rounded-lg"
              />
            </div>
            <div className="text-[#DEEDEF] text-center py-0 lg:py-2 lg:text-xl text-sm">{product.name}</div>
          </div>
        ))}
      </div>
    </div>
    
     
      )}

    </div>
  );
}
