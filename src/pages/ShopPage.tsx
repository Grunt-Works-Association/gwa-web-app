import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ShoppingBag, ChevronDown, Tag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "GWA Training T-Shirt",
    price: 29.99,
    image: "https://images.pexels.com/photos/6615186/pexels-photo-6615186.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Apparel"
  },
  {
    id: 2,
    name: "Tactical Cap",
    price: 24.99,
    image: "https://images.pexels.com/photos/6046183/pexels-photo-6046183.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Apparel"
  },
  {
    id: 3,
    name: "GWA Water Bottle",
    price: 19.99,
    image: "https://images.pexels.com/photos/6690583/pexels-photo-6690583.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Accessories"
  },
  {
    id: 4,
    name: "Fitness Journal",
    price: 15.99,
    image: "https://images.pexels.com/photos/6045024/pexels-photo-6045024.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Accessories"
  },
  {
    id: 5,
    name: "Performance Hoodie",
    price: 49.99,
    image: "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Apparel"
  },
  {
    id: 6,
    name: "Tactical Backpack",
    price: 89.99,
    image: "https://images.pexels.com/photos/4873320/pexels-photo-4873320.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Gear"
  },
  {
    id: 7,
    name: "Training Gloves",
    price: 34.99,
    image: "https://images.pexels.com/photos/4754139/pexels-photo-4754139.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Gear"
  },
  {
    id: 8,
    name: "GWA Military Cap",
    price: 27.99,
    image: "https://images.pexels.com/photos/6608942/pexels-photo-6608942.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Apparel"
  }
];

const categories = ["All", "Apparel", "Gear", "Accessories"];

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-20 pb-16 bg-gray-50 min-h-screen">
      {/* Shop Hero */}
      <section className="relative py-16 bg-center bg-cover" style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }}>
        <div className="absolute inset-0 bg-[#182940] bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop GWA Gear</h1>
            <div className="w-20 h-1 bg-[#D6C7A9] mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Quality apparel and gear to support your training and our mission.
              Every purchase helps fund our programs for veterans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button 
              className="w-full py-3 px-4 bg-white border border-gray-300 rounded-md flex justify-between items-center"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <span className="flex items-center text-[#182940]">
                <Filter size={18} className="mr-2" /> Filter Products
              </span>
              <ChevronDown 
                size={18} 
                className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {isFilterOpen && (
              <div className="mt-2 p-4 bg-white border border-gray-300 rounded-md shadow-md">
                <h3 className="font-bold text-lg mb-3 text-[#182940]">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category 
                          ? 'bg-[#2C5530] text-white' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="font-bold text-xl mb-4 text-[#182940]">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                      selectedCategory === category 
                        ? 'bg-[#2C5530] text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-bold text-xl mb-4 text-[#182940]">Support Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  All proceeds contribute to our veteran programs and community initiatives.
                </p>
                <a 
                  href="/donate" 
                  className="block w-full py-2 px-4 bg-[#D6C7A9] text-[#182940] text-center rounded-md font-medium hover:bg-opacity-90 transition-all"
                >
                  Make a Donation
                </a>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-[#182940]">
                {selectedCategory === "All" ? "All Products" : selectedCategory}
                <span className="ml-2 text-gray-500 text-lg font-normal">({filteredProducts.length})</span>
              </h2>
              
              <div className="flex items-center gap-2">
                <Tag size={18} className="text-[#2C5530]" />
                <select className="border-gray-300 rounded-md focus:ring-[#2C5530] focus:border-[#2C5530]">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group"
                  >
                    <div className="aspect-square overflow-hidden relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all p-4">
                        <button className="bg-[#2C5530] text-white px-4 py-2 rounded-md transform translate-y-4 group-hover:translate-y-0 transition-transform w-full flex items-center justify-center gap-2">
                          <ShoppingBag size={18} />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-[#182940] mb-1">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-[#2C5530] font-bold">${product.price.toFixed(2)}</span>
                        <span className="text-sm text-gray-500">{product.category}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-gray-600 mb-4">No products found in this category.</p>
                <button 
                  onClick={() => setSelectedCategory("All")}
                  className="px-4 py-2 bg-[#2C5530] text-white rounded-md"
                >
                  View All Products
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;