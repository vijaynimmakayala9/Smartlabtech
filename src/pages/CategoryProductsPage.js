import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CATEGORIES } from "./ProductsPage";

const CategoryProductsPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    // Decode URL parameter and find category
    const decodedCategory = decodeURIComponent(categoryName);
    const categoryProducts = CATEGORIES[decodedCategory] || [];
    setProducts(categoryProducts);
  }, [categoryName]);

  // Filter and sort products
  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "brand") return a.brand.localeCompare(b.brand);
      return 0;
    });

  const categoryTitle = categoryName?.replace(/-/g, ' ') || '';
  const categoryIcon = products[0]?.icon || "📦";

  // Get all categories for sidebar
  const allCategories = Object.keys(CATEGORIES);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#0f2b3d] to-[#1a4a6f] text-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{categoryIcon}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">{categoryTitle}</h1>
                <p className="text-blue-100 mt-2">
                  Explore our complete range of {categoryTitle.toLowerCase()} products
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-200 mt-4">
              <button onClick={() => navigate('/')} className="hover:text-white">Home</button>
              <span>/</span>
              <button onClick={() => navigate('/products')} className="hover:text-white">Products</button>
              <span>/</span>
              <span className="text-white">{categoryTitle}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  Categories
                </h3>
                <div className="space-y-2">
                  {allCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => navigate(`/category/${encodeURIComponent(category)}`)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        category === categoryTitle
                          ? "bg-[#1a4a6f] text-white"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-lg text-gray-800 mb-4">Need Help?</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Can't find what you're looking for? Our experts are here to help.
                  </p>
                  <button className="w-full bg-[#1a4a6f] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0f2b3d] transition">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search and Sort */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Search products in this category..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4a6f]"
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4a6f]"
                    >
                      <option value="name">Product Name</option>
                      <option value="brand">Brand</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Results */}
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-xl shadow-md p-12 text-center">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                  <p className="text-gray-500">Try adjusting your search or browse other categories</p>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <p className="text-gray-600">
                      Showing <span className="font-semibold">{filteredProducts.length}</span> products
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProducts.map((product, index) => (
                      <div
                        key={index}
                        onClick={() => navigate(product.link)}
                        className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1 group"
                      >
                        <div className="flex h-40">
                          <div className="w-32 bg-gradient-to-br from-[#0f2b3d] to-[#1a4a6f] flex items-center justify-center">
                            <span className="text-4xl">{product.icon}</span>
                          </div>
                          <div className="flex-1 p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-[#1a4a6f] font-semibold bg-blue-50 px-2 py-1 rounded">
                                {product.brand}
                              </span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[#1a4a6f] transition line-clamp-2">
                              {product.name}
                            </h3>
                            <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
                            <button className="text-[#1a4a6f] font-semibold text-sm hover:underline">
                              View Details →
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Category Features */}
              {products.length > 0 && (
                <div className="mt-12 bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-4">Why Choose Our {categoryTitle}?</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">Certified Quality</h4>
                        <p className="text-sm text-gray-500">All products meet international standards</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">Expert Support</h4>
                        <p className="text-sm text-gray-500">Technical assistance from qualified engineers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">Warranty Included</h4>
                        <p className="text-sm text-gray-500">Comprehensive warranty on all equipment</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryProductsPage;