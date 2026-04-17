

// ProductsPage.js - Premium Edition with Product Images
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Grid, List, ChevronRight, Sparkles, 
  X, Filter, ArrowRight, Star, Phone, CheckCircle,
  Award, Truck, Shield, Clock, Package as PackageIcon,
  TrendingUp, Zap, Heart, Eye, SlidersHorizontal,
  ChevronDown, BookOpen, Beaker, Microscope, FlaskConical
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ─── Product Data with Images ─── */
export const CATEGORIES = {
  'Weighing & Measurement': [
    { 
      name: 'Analytical Balances', 
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      link: '/product/analytical-balances', 
      brand: 'Sartorius', 
      description: 'High-precision analytical balances with 0.1mg readability', 
      featured: true, 
      rating: 4.9, 
      reviews: 128, 
      inStock: true, 
      price: '₹ 2,45,000' 
    },
    { 
      name: 'Laboratory Balances', 
      image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      link: '/product/laboratory-balances', 
      brand: 'Sartorius', 
      description: 'Versatile balances for everyday lab use', 
      featured: false, 
      rating: 4.7, 
      reviews: 86, 
      inStock: true, 
      price: '₹ 1,45,000' 
    },
    { 
      name: 'Industrial Platform Scales', 
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      link: '/product/industrial-scales', 
      brand: 'Smart Labtech', 
      description: 'Heavy-duty scales for industrial applications', 
      featured: false, 
      rating: 4.6, 
      reviews: 45, 
      inStock: true, 
      price: '₹ 3,75,000' 
    },
    { 
      name: 'Weighing Indicators', 
      image: 'https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      link: '/product/weighing-indicators', 
      brand: 'Smart Labtech', 
      description: 'Advanced indicators for process control', 
      featured: false, 
      rating: 4.5, 
      reviews: 32, 
      inStock: true, 
      price: '₹ 85,000' 
    },
  ],
  'Thermal Cooling': [
    { 
      name: 'Climate Chambers', 
      image: 'https://images.pexels.com/photos/3735711/pexels-photo-3735711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      link: '/product/climate-chambers', 
      brand: 'Memmert', 
      description: 'Precise temperature and humidity control', 
      featured: true, 
      rating: 4.8, 
      reviews: 67, 
      inStock: true, 
      price: '₹ 5,50,000' 
    },
    { 
      name: 'Drying Ovens', 
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      link: '/product/drying-ovens', 
      brand: 'Memmert', 
      description: 'Efficient drying and heating solutions', 
      featured: false, 
      rating: 4.7, 
      reviews: 54, 
      inStock: true, 
      price: '₹ 2,25,000' 
    },
    { 
      name: 'Incubators', 
      image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      link: '/product/incubators', 
      brand: 'Memmert', 
      description: 'Optimal conditions for cell growth', 
      featured: false, 
      rating: 4.8, 
      reviews: 92, 
      inStock: true, 
      price: '₹ 3,15,000' 
    },
    { 
      name: 'ULT Freezers', 
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      link: '/product/ult-freezers', 
      brand: 'Arctiko', 
      description: '-86°C storage for sensitive materials', 
      featured: true, 
      rating: 4.9, 
      reviews: 38, 
      inStock: false, 
      price: '₹ 8,75,000' 
    },
  ],
  'Chromatography': [
    { 
      name: 'Gas Chromatography', 
      image: 'https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      link: '/product/gas-chromatography', 
      brand: 'Scion', 
      description: 'High-performance GC systems', 
      featured: true, 
      rating: 4.8, 
      reviews: 52, 
      inStock: false, 
      price: '₹ 12,50,000' 
    },
    { 
      name: 'Liquid Chromatography', 
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      link: '/product/liquid-chromatography', 
      brand: 'Waters', 
      description: 'UHPLC/HPLC for advanced separation', 
      featured: true, 
      rating: 4.9, 
      reviews: 73, 
      inStock: true, 
      price: '₹ 18,75,000' 
    },
  ],
  'Isolation & Safety': [
    { 
      name: 'Biosafety Cabinets', 
      image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      link: '/product/biosafety-cabinets', 
      brand: 'ESCO', 
      description: 'Protect personnel and samples', 
      featured: true, 
      rating: 4.9, 
      reviews: 61, 
      inStock: true, 
      price: '₹ 4,25,000' 
    },
    { 
      name: 'Laminar Flow', 
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      link: '/product/laminar-flow', 
      brand: 'ESCO', 
      description: 'Clean air workstations', 
      featured: false, 
      rating: 4.7, 
      reviews: 47, 
      inStock: true, 
      price: '₹ 2,95,000' 
    },
    { 
      name: 'Fume Hoods', 
      image: 'https://images.pexels.com/photos/3735711/pexels-photo-3735711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      link: '/product/fume-hoods', 
      brand: 'ESCO', 
      description: 'Chemical fume extraction', 
      featured: false, 
      rating: 4.6, 
      reviews: 39, 
      inStock: true, 
      price: '₹ 3,45,000' 
    },
  ],
  'Laboratory Equipment': [
    { 
      name: 'Centrifuges', 
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      link: '/product/centrifuges', 
      brand: 'Eppendorf', 
      description: 'Sample separation solutions', 
      featured: true, 
      rating: 4.8, 
      reviews: 95, 
      inStock: true, 
      price: '₹ 2,85,000' 
    },
    { 
      name: 'pH Meters', 
      image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      link: '/product/ph-meters', 
      brand: 'Mettler Toledo', 
      description: 'Accurate pH measurement', 
      featured: false, 
      rating: 4.7, 
      reviews: 71, 
      inStock: true, 
      price: '₹ 45,000' 
    },
    { 
      name: 'Water Purification', 
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      link: '/product/water-purification', 
      brand: 'Millipore', 
      description: 'Ultrapure water systems', 
      featured: true, 
      rating: 4.9, 
      reviews: 48, 
      inStock: true, 
      price: '₹ 3,95,000' 
    },
  ],
};

const stats = [
  { value: "500+", label: "Products", icon: PackageIcon },
  { value: "25+", label: "Global Brands", icon: Award },
  { value: "10k+", label: "Happy Clients", icon: TrendingUp },
  { value: "24/7", label: "Support", icon: Clock },
];

const features = [
  { icon: Shield, title: "Certified", desc: "ISO & GMP Compliant" },
  { icon: Truck, title: "Free Shipping", desc: "On orders above ₹50k" },
  { icon: Award, title: "Warranty", desc: "Up to 3 years" },
  { icon: CheckCircle, title: "Installation", desc: "Free on-site setup" },
];

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } }
};

/* ─── Product Card Component with Images ─── */
const ProductCard = ({ product, viewMode, index }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2";

  if (viewMode === "list") {
    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: index * 0.02 }}
        onClick={() => navigate(product.link)}
        className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row">
          {/* Image Section */}
          <div className="relative sm:w-64 h-44 sm:h-auto overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-sky-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />
            <img 
              src={imageError ? fallbackImage : product.image} 
              alt={product.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Blue Overlay on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br from-blue-900/80 to-sky-600/80 flex items-center justify-center transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-full text-sm flex items-center gap-2">
                View Details <Eye size={14} />
              </button>
            </div>

            {product.featured && (
              <div className="absolute top-3 left-3 z-10">
                <div className="px-2.5 py-1.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-[10px] font-bold rounded-lg flex items-center gap-1 shadow-lg">
                  <Sparkles size={10} /> FEATURED
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex-1 p-5">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg border border-blue-200">
                  {product.brand}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"} />
                  ))}
                  <span className="text-xs text-slate-500 ml-1">({product.reviews})</span>
                </div>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
                className="p-2 rounded-full hover:bg-slate-100 transition"
              >
                <Heart size={18} className={`transition ${isLiked ? 'fill-red-500 text-red-500' : 'text-slate-400'}`} />
              </button>
            </div>

            <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
              {product.name}
            </h3>
            <p className="text-slate-500 text-sm mb-3">{product.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-xl font-serif font-bold text-slate-900">{product.price}</span>
                <div className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-amber-500'} animate-pulse`} />
                  <span className="text-xs text-slate-500">{product.inStock ? 'Ready to Ship' : 'Made to Order'}</span>
                </div>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-sm font-medium rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5">
                View Details <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Grid View Card
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ delay: index * 0.02 }}
      onClick={() => navigate(product.link)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-sky-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />

      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50">
        <img 
          src={imageError ? fallbackImage : product.image} 
          alt={product.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Blue Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br from-blue-900/80 to-sky-600/80 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button className="px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-full text-sm flex items-center gap-2">
            Quick View <Eye size={14} />
          </button>
        </div>

        {product.featured && (
          <div className="absolute top-3 left-3 z-10">
            <div className="px-2.5 py-1.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-[10px] font-bold rounded-lg flex items-center gap-1 shadow-lg">
              <Sparkles size={10} /> FEATURED
            </div>
          </div>
        )}

        <button 
          onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
          className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition shadow-md"
        >
          <Heart size={14} className={`transition ${isLiked ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[10px] font-semibold rounded-full border border-blue-200">
            {product.brand}
          </span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"} />
            ))}
            <span className="text-[10px] text-slate-400 ml-0.5">({product.reviews})</span>
          </div>
        </div>

        <h3 className="font-serif text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition line-clamp-1">
          {product.name}
        </h3>
        <p className="text-slate-500 text-xs mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Starting from</p>
            <p className="text-lg font-serif font-bold text-slate-900">{product.price}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-amber-500'} animate-pulse`} />
            <span className="text-[10px] text-slate-500">{product.inStock ? 'In Stock' : 'On Order'}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main Component ─── */
const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [selectedBrand, setSelectedBrand] = useState("Brand");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const allProducts = Object.entries(CATEGORIES).flatMap(([category, products]) =>
    products.map(product => ({ ...product, category }))
  );

  const brands = ["Brand", ...new Set(allProducts.map(p => p.brand))];
  const categories = ["Category", ...Object.keys(CATEGORIES)];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Category" || product.category === selectedCategory;
    const matchesBrand = selectedBrand === "Brand" || product.brand === selectedBrand;
    return matchesSearch && matchesCategory && matchesBrand;
  });

  const featuredProducts = filteredProducts.filter(p => p.featured).slice(0, 4);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-slate-50 via-white to-white font-sans">
        
        {/* Modern Header Section */}
        <section className="relative pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-100/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-100/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-sky-100/15 rounded-full" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center">
                      <Beaker size={12} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Laboratory Equipment</span>
                  </div>
                  <div className="w-px h-4 bg-slate-300" />
                  <div className="flex items-center gap-1.5">
                    <Microscope size={14} className="text-slate-400" />
                    <span className="text-xs text-slate-500">{allProducts.length}+ Products</span>
                  </div>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                  Scientific <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Instruments</span>
                </h1>
                <p className="text-slate-500 text-sm sm:text-base max-w-xl">
                  Discover precision equipment from the world's most trusted manufacturers
                </p>
              </motion.div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex gap-3"
              >
                {stats.slice(0, 3).map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-200 text-center min-w-[80px]">
                    <p className="font-serif text-xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Search & Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by product name, brand, or application..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm text-sm"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden flex items-center justify-center gap-2 px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-700 text-sm font-medium hover:bg-slate-50 transition"
              >
                <SlidersHorizontal size={16} />
                Filters
              </button>
              <div className="hidden sm:flex items-center gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
                <div className="flex gap-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-3 rounded-xl transition ${
                      viewMode === "grid" 
                        ? "bg-blue-600 text-white shadow-md" 
                        : "bg-white border border-slate-200 text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-3 rounded-xl transition ${
                      viewMode === "list" 
                        ? "bg-blue-600 text-white shadow-md" 
                        : "bg-white border border-slate-200 text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Mobile Filters Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="sm:hidden mt-3 overflow-hidden"
                >
                  <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-3">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-sm"
                    >
                      {categories.map(cat => <option key={cat}>{cat}</option>)}
                    </select>
                    <select
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-sm"
                    >
                      {brands.map(brand => <option key={brand}>{brand}</option>)}
                    </select>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setViewMode("grid")}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition ${
                          viewMode === "grid" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        Grid View
                      </button>
                      <button
                        onClick={() => setViewMode("list")}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition ${
                          viewMode === "list" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        List View
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        

        {/* All Products Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">All Products</h2>
                <p className="text-slate-500 text-sm">{filteredProducts.length} items available</p>
              </div>
              <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-200 transition">
                <SlidersHorizontal size={14} />
                Sort by: Featured
                <ChevronDown size={14} />
              </button>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2">No products found</h3>
                <p className="text-slate-500 mb-4">Try adjusting your filters</p>
                <button
                  onClick={() => { setSearchTerm(""); setSelectedCategory("Category"); setSelectedBrand("Brand"); }}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className={viewMode === "grid" 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" 
                  : "space-y-4"
                }
              >
                {filteredProducts.map((product, index) => (
                  <ProductCard key={index} product={product} viewMode={viewMode} index={index} />
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Features Banner with Blue Overlay */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-sky-700" />
              <div className="relative z-10 p-8 sm:p-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {features.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <item.icon size={22} className="text-white" />
                      </div>
                      <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-white/70 text-xs">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-8 sm:p-12 border border-slate-200"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 rounded-full mb-6">
                <FlaskConical size={14} className="text-blue-600" />
                <span className="text-xs font-semibold text-blue-700">EXPERT CONSULTATION</span>
              </div>
              
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Need Help Selecting Equipment?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Our technical specialists will help you find the perfect instrument for your specific requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2">
                  <Phone size={18} />
                  Schedule a Call
                </button>
                <button className="px-8 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                  <BookOpen size={18} />
                  Download Catalog
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40"
            >
              <ArrowRight size={18} className="sm:w-5 sm:h-5 rotate-[-90deg]" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;