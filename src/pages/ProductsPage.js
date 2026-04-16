import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const CATEGORIES = {
  'Weighing & Measurement': [
    { name: 'Analytical Balances Sartorius', icon: '🔬', link: '/product/analytical-balances', brand: 'Sartorius', description: 'High-precision analytical balances with 0.1mg readability' },
    { name: 'Laboratory Balances Sartorius', icon: '📡', link: '/product/laboratory-balances', brand: 'Sartorius', description: 'Versatile balances for everyday lab use' },
    { name: 'Industrial Platform Scales', icon: '⚗️', link: '/product/industrial-scales', brand: 'Smart Labtech', description: 'Heavy-duty scales for industrial applications' },
    { name: 'Weighing Indicators', icon: '🧫', link: '/product/weighing-indicators', brand: 'Smart Labtech', description: 'Advanced indicators for process control' },
  ],
  'Thermal Cooling': [
    { name: 'Climate & Humidity Chambers', icon: '🌡️', link: '/product/climate-chambers', brand: 'Memmert', description: 'Precise temperature and humidity control' },
    { name: 'Drying and Heating Ovens', icon: '🔥', link: '/product/drying-ovens', brand: 'Memmert', description: 'Efficient drying and heating solutions' },
    { name: 'Incubators', icon: '🧪', link: '/product/incubators', brand: 'Memmert', description: 'Optimal conditions for cell growth' },
    { name: 'Water Baths', icon: '💧', link: '/product/water-baths', brand: 'Memmert', description: 'Precise temperature control for samples' },
    { name: 'Ultra Low Temperature Freezers', icon: '❄️', link: '/product/ult-freezers', brand: 'Arctiko', description: '-86°C storage for sensitive materials' },
    { name: 'Bio Medical Storage Solutions', icon: '🏥', link: '/product/biomedical-storage', brand: 'Arctiko', description: 'Safe storage for vaccines and biologics' },
  ],
  'Chromatography': [
    { name: 'Gas Chromatography', icon: '🔬', link: '/product/gas-chromatography', brand: 'Scion', description: 'High-performance GC systems' },
    { name: 'Liquid Chromatography', icon: '💧', link: '/product/liquid-chromatography', brand: 'Waters', description: 'UHPLC/HPLC for advanced separation' },
  ],
  'Rheology & Texture': [
    { name: 'Viscometers', icon: '⚙️', link: '/product/viscometers', brand: 'Brookfield', description: 'Measure viscosity of liquids' },
    { name: 'Rheometers', icon: '🔄', link: '/product/rheometers', brand: 'Brookfield', description: 'Advanced flow behavior analysis' },
    { name: 'Texture Analyzers', icon: '📊', link: '/product/texture-analyzers', brand: 'Brookfield', description: 'Measure texture properties' },
  ],
  'Isolation & Safety': [
    { name: 'Biological Safety Cabinets', icon: '🛡️', link: '/product/biosafety-cabinets', brand: 'ESCO', description: 'Protect personnel and samples' },
    { name: 'Laminar Flow Chambers', icon: '💨', link: '/product/laminar-flow', brand: 'ESCO', description: 'Clean air workstations' },
    { name: 'Fume Hoods', icon: '🧪', link: '/product/fume-hoods', brand: 'ESCO', description: 'Chemical fume extraction' },
    { name: 'Glove Boxes', icon: '🧤', link: '/product/glove-boxes', brand: 'Plas Labs', description: 'Isolated work environments' },
    { name: 'Desiccators', icon: '💨', link: '/product/desiccators', brand: 'Plas Labs', description: 'Moisture-free storage' },
    { name: 'PCR Chambers', icon: '🧬', link: '/product/pcr-chambers', brand: 'Plas Labs', description: 'Clean environment for PCR setup' },
  ],
  'Micro Biology': [
    { name: 'Microscopes', icon: '🔬', link: '/product/microscopes', brand: 'Various', description: 'High-resolution imaging solutions' },
    { name: 'Autoclaves', icon: '♨️', link: '/product/autoclaves', brand: 'Various', description: 'Sterilization equipment' },
    { name: 'Colony Counters', icon: '🔢', link: '/product/colony-counters', brand: 'Various', description: 'Automated colony counting' },
  ],
  'Laboratory Equipment': [
    { name: 'Centrifuges', icon: '🌀', link: '/product/centrifuges', brand: 'Various', description: 'Sample separation solutions' },
    { name: 'pH Meters', icon: '📊', link: '/product/ph-meters', brand: 'Various', description: 'Accurate pH measurement' },
    { name: 'Water Purification Systems', icon: '💧', link: '/product/water-purification', brand: 'Various', description: 'Ultrapure water systems' },
    { name: 'Mixers and Shakers', icon: '🔄', link: '/product/mixers', brand: 'Various', description: 'Sample mixing and shaking' },
  ],
};

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  // Flatten all products for search
  const allProducts = Object.entries(CATEGORIES).flatMap(([category, products]) =>
    products.map(product => ({ ...product, category }))
  );

  // Filter products based on search and category
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...Object.keys(CATEGORIES)];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#0f2b3d] to-[#1a4a6f] text-white py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Discover our comprehensive range of laboratory equipment and scientific instruments 
              from world-renowned manufacturers.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Search and Filter Bar */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search products by name, brand, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4a6f]"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-lg transition ${viewMode === "grid" ? "bg-[#1a4a6f] text-white" : "bg-gray-100 text-gray-600"}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-lg transition ${viewMode === "list" ? "bg-[#1a4a6f] text-white" : "bg-gray-100 text-gray-600"}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mt-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-[#1a4a6f] text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredProducts.length}</span> products
            </p>
          </div>

          {/* Products Display */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl shadow-md">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  onClick={() => navigate(product.link)}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1 group"
                >
                  <div className="h-48 bg-gradient-to-br from-[#0f2b3d] to-[#1a4a6f] flex items-center justify-center">
                    <span className="text-7xl">{product.icon}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#1a4a6f] font-semibold bg-blue-50 px-2 py-1 rounded">
                        {product.brand}
                      </span>
                      <span className="text-xs text-gray-400">{product.category}</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-[#1a4a6f] transition">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <button className="text-[#1a4a6f] font-semibold text-sm hover:underline">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  onClick={() => navigate(product.link)}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-32 bg-gradient-to-br from-[#0f2b3d] to-[#1a4a6f] flex items-center justify-center">
                      <span className="text-5xl">{product.icon}</span>
                    </div>
                    <div className="flex-1 p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-[#1a4a6f] font-semibold bg-blue-50 px-2 py-1 rounded">
                          {product.brand}
                        </span>
                        <span className="text-xs text-gray-400">{product.category}</span>
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-[#1a4a6f] transition">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Brands Section */}
        <div className="bg-white py-16 px-6 mt-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0f2b3d] mb-4">Trusted Brands</h2>
            <p className="text-gray-600 mb-12">We partner with world-renowned manufacturers</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {['Sartorius', 'Waters', 'Scion', 'Brookfield', 'Memmert', 'ESCO', 'Arctiko', 'Plas Labs'].map((brand) => (
                <div key={brand} className="text-center">
                  <div className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition">
                    <div className="text-3xl mb-2">🏭</div>
                    <p className="font-semibold text-gray-700">{brand}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0f2b3d] to-[#1a4a6f] text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Our technical experts are ready to assist you in finding the perfect equipment for your needs.
            </p>
            <button className="bg-white text-[#0f2b3d] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;