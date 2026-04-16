import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Complete Product Data with all details
const productData = {
  // Weighing & Measurement
  'analytical-balances': {
    id: 'analytical-balances',
    name: 'Analytical Balances',
    brand: 'Sartorius',
    category: 'Weighing & Measurement',
    shortDesc: 'High-precision analytical balances for accurate laboratory measurements',
    fullDesc: `Sartorius analytical balances are designed for the highest standards of precision and accuracy. These instruments are essential for any laboratory requiring reliable mass measurements with readability down to 0.1 mg.

    Key features include:
    • Fully automatic internal calibration
    • High-resolution color touch display
    • Static charge detection and automatic neutralization
    • Built-in application packages for specific tasks
    • GLP-compliant data recording
    • User management with customizable access rights
    
    Ideal for pharmaceutical research, chemical analysis, and quality control laboratories.`,
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837"
    ],
    specifications: {
      readability: "0.1 mg",
      capacity: "60g - 520g",
      panSize: "90 mm diameter",
      repeatability: "±0.1 mg",
      linearity: "±0.2 mg",
      stabilizationTime: "≤ 3 seconds",
      display: "7\" TFT touchscreen",
      interfaces: "USB-C, Ethernet, Wi-Fi, Bluetooth",
      dimensions: "210 × 340 × 120 mm",
      weight: "5.2 kg"
    },
    features: [
      "Automatic internal calibration",
      "Static charge detection",
      "Underfloor weighing",
      "GLP compliant printouts",
      "Password protection",
      "Multiple user profiles"
    ],
    applications: [
      "Pharmaceutical quality control",
      "Chemical analysis",
      "Research laboratories",
      "Environmental testing",
      "Food safety testing"
    ],
    accessories: [
      "Draft shield",
      "Printer",
      "Calibration weight set",
      "Density determination kit",
      "Weighing pans (various sizes)"
    ],
    price: "Contact for pricing",
    warranty: "3 years manufacturer warranty",
    leadTime: "2-3 weeks",
    documents: [
      { name: "Product Brochure", link: "#" },
      { name: "Technical Manual", link: "#" },
      { name: "Specification Sheet", link: "#" }
    ]
  },

  'laboratory-balances': {
    id: 'laboratory-balances',
    name: 'Laboratory Balances',
    brand: 'Sartorius',
    category: 'Weighing & Measurement',
    shortDesc: 'Versatile laboratory balances for everyday weighing needs',
    fullDesc: `Sartorius laboratory balances combine precision with ease of use for routine laboratory applications. These balances offer exceptional value without compromising on quality.

    Key features include:
    • Intuitive user interface with large display
    • Internal calibration option
    • Multiple weighing units
    • Percent weighing, counting, and density determination
    • Animal weighing function
    • Chemical resistant housing
    
    Perfect for educational labs, production facilities, and general laboratory use.`,
    img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa",
    gallery: [
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
    ],
    specifications: {
      readability: "1 mg - 0.1 g",
      capacity: "Up to 14.2 kg",
      panSize: "180 × 180 mm",
      repeatability: "±1 mg",
      linearity: "±2 mg",
      stabilizationTime: "≤ 2 seconds",
      display: "4.5\" LCD backlit",
      interfaces: "RS232, USB",
      dimensions: "210 × 340 × 95 mm",
      weight: "4.8 kg"
    },
    features: [
      "Multiple application modes",
      "Chemical resistant design",
      "Level indicator",
      "Overload protection",
      "Fast stabilization"
    ],
    applications: [
      "Educational laboratories",
      "Production quality control",
      "Material testing",
      "General laboratory weighing"
    ],
    accessories: [
      "Draft shield",
      "Printer",
      "Calibration weight",
      "RS232 cable"
    ],
    price: "Contact for pricing",
    warranty: "2 years",
    leadTime: "1-2 weeks",
    documents: [
      { name: "Product Brochure", link: "#" },
      { name: "Quick Start Guide", link: "#" }
    ]
  },

  'industrial-scales': {
    id: 'industrial-scales',
    name: 'Industrial Platform Scales',
    brand: 'Smart Labtech',
    category: 'Weighing & Measurement',
    shortDesc: 'Heavy-duty industrial scales for demanding environments',
    fullDesc: `Smart Labtech industrial platform scales are built for harsh industrial environments requiring rugged durability and high accuracy.

    Key features include:
    • Heavy-duty stainless steel construction
    • IP65/67 rated for washdown applications
    • Large LCD display with backlight
    • Multiple weighing ranges available
    • Optional data logging and connectivity
    • Legal for trade certified models available
    
    Ideal for manufacturing, warehousing, and industrial processing.`,
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    gallery: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa"
    ],
    specifications: {
      readability: "0.1 kg - 1 kg",
      capacity: "Up to 3000 kg",
      platformSize: "500 × 600 mm to 1500 × 1500 mm",
      repeatability: "±0.1 kg",
      linearity: "±0.2 kg",
      stabilizationTime: "≤ 3 seconds",
      display: "6-digit LED",
      interfaces: "RS232, Ethernet",
      dimensions: "Varies by model",
      weight: "50-200 kg"
    },
    features: [
      "IP65/67 waterproof rating",
      "Heavy-duty load cells",
      "Anti-vibration design",
      "Optional mobile stand",
      "Legal for trade options"
    ],
    applications: [
      "Manufacturing",
      "Warehousing",
      "Shipping and receiving",
      "Industrial processing",
      "Bulk material handling"
    ],
    accessories: [
      "Remote display",
      "Printer",
      "Data logger",
      "Mobile stand",
      "Roller conveyor integration"
    ],
    price: "Contact for pricing",
    warranty: "2 years",
    leadTime: "3-4 weeks",
    documents: [
      { name: "Industrial Scales Catalog", link: "#" },
      { name: "Installation Guide", link: "#" }
    ]
  },

  'weighing-indicators': {
    id: 'weighing-indicators',
    name: 'Weighing Indicators',
    brand: 'Smart Labtech',
    category: 'Weighing & Measurement',
    shortDesc: 'Advanced weighing indicators for process control',
    fullDesc: `Smart Labtech weighing indicators provide precise measurement display and control for industrial weighing systems.

    Key features include:
    • High-resolution display
    • Multiple communication protocols
    • Programmable setpoints for batching
    • Data logging capabilities
    • User-friendly menu navigation
    • Optional remote connectivity
    
    Perfect for integration into existing systems and process automation.`,
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837"
    ],
    specifications: {
      readability: "Up to 100,000 divisions",
      inputSensitivity: "0.5 µV/d",
      excitationVoltage: "5V DC",
      display: "7-segment LED or LCD",
      interfaces: "RS232/485, Ethernet, USB",
      powerSupply: "100-240V AC",
      operatingTemp: "-10°C to 40°C",
      enclosure: "IP65 rated",
      dimensions: "210 × 170 × 90 mm"
    },
    features: [
      "Programmable setpoints",
      "Multi-interval weighing",
      "Peak hold function",
      "Checkweighing mode",
      "Totalization",
      "Remote display support"
    ],
    applications: [
      "Process control",
      "Batching systems",
      "Checkweighing stations",
      "Inventory management",
      "Data acquisition systems"
    ],
    accessories: [
      "Remote display",
      "Printer",
      "Ethernet module",
      "Analog output card"
    ],
    price: "Contact for pricing",
    warranty: "2 years",
    leadTime: "1-2 weeks",
    documents: [
      { name: "Indicator Manual", link: "#" }
    ]
  },

  // Add more products for other categories...
  'gas-chromatography': {
    id: 'gas-chromatography',
    name: 'Gas Chromatography Systems',
    brand: 'Scion',
    category: 'Chromatography',
    shortDesc: 'High-performance gas chromatography for advanced analysis',
    fullDesc: `Scion gas chromatography systems deliver exceptional performance for complex analytical challenges.

    Key features include:
    • Advanced temperature control
    • Multiple detector options (FID, ECD, TCD, MS)
    • Automated sample handling
    • Intelligent software for data analysis
    • Low maintenance design
    • Compliance with regulatory standards
    
    Ideal for environmental, petrochemical, and food safety applications.`,
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    gallery: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
    ],
    specifications: {
      temperatureRange: "4°C to 450°C",
      temperatureStability: "±0.01°C",
      detectors: "FID, ECD, TCD, NPD, MS",
      injectionSystems: "Split/Splitless, PTV, On-column",
      carrierGas: "Hydrogen, Helium, Nitrogen",
      software: "CompassCDS",
      dimensions: "600 × 500 × 500 mm",
      weight: "45 kg"
    },
    features: [
      "Fast oven cooling",
      "Programmable temperature vaporization",
      "Electronic pneumatic control",
      "Autosampler compatibility",
      "Comprehensive validation tools"
    ],
    applications: [
      "Environmental analysis",
      "Petrochemical testing",
      "Food safety",
      "Forensic science",
      "Pharmaceutical QC"
    ],
    accessories: [
      "Autosampler",
      "Sample preparation kit",
      "Column selection set",
      "Service kit"
    ],
    price: "Contact for pricing",
    warranty: "1 year",
    leadTime: "6-8 weeks",
    documents: [
      { name: "GC Brochure", link: "#" },
      { name: "Specification Sheet", link: "#" }
    ]
  },

  'liquid-chromatography': {
    id: 'liquid-chromatography',
    name: 'Liquid Chromatography Systems',
    brand: 'Waters',
    category: 'Chromatography',
    shortDesc: 'Premium UHPLC and HPLC systems for superior separation',
    fullDesc: `Waters liquid chromatography systems set the standard for separation science with unmatched performance and reliability.

    Key features include:
    • Ultra-high pressure capabilities (up to 15000 psi)
    • Advanced quaternary pump design
    • High-sensitivity detectors
    • Intelligent system monitoring
    • Regulatory compliance tools
    • Method development automation
    
    Essential for demanding analytical applications requiring high resolution and sensitivity.`,
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"
    ],
    specifications: {
      pressureRange: "Up to 15000 psi",
      flowRate: "0.001 - 5 mL/min",
      gradientAccuracy: "±0.5%",
      detectors: "PDA, FLR, ELSD, QDa, MS",
      columnHeater: "4°C - 90°C",
      software: "Empower 3",
      dimensions: "650 × 550 × 600 mm",
      weight: "65 kg"
    },
    features: [
      "Intelligent solvent management",
      "Flow-through needle design",
      "Column management system",
      "Automated method scouting",
      "Comprehensive system suitability"
    ],
    applications: [
      "Pharmaceutical development",
      "Biopharmaceutical analysis",
      "Food and beverage testing",
      "Clinical research",
      "Environmental monitoring"
    ],
    accessories: [
      "Sample manager",
      "Column heater/cooler",
      "Fraction collector",
      "Method validation kit"
    ],
    price: "Contact for pricing",
    warranty: "1 year",
    leadTime: "8-10 weeks",
    documents: [
      { name: "HPLC Brochure", link: "#" },
      { name: "Technical Specifications", link: "#" }
    ]
  }
};

// Features data (existing)
const features = [
  { icon: "🎯", title: "High Precision", desc: "Accuracy to the nearest milligram, ensuring even minute differences in mass are detectable" },
  { icon: "📊", title: "Reliable Results", desc: "Accurate measurements essential for generating credible scientific data" },
  { icon: "⚙️", title: "Calibration", desc: "Strict calibration protocols ensuring consistently precise measurements" },
  { icon: "🥣", title: "Weighing Pans", desc: "Variety of pans and accessories for different sample types and sizes" },
  { icon: "💻", title: "Advanced Technology", desc: "Electronic sensors, automatic internal calibration, and touchscreen interfaces" },
  { icon: "🔬", title: "Quality Control", desc: "Highest standards maintained across all research and testing processes" },
];

const applications = [
  { area: "Pharmaceuticals", examples: "Analyzing drug formulations, measuring active ingredients, ensuring product quality" },
  { area: "Environmental Science", examples: "Determining pollutant concentrations, analyzing soil and water samples, air quality assessments" },
  { area: "Chemistry", examples: "Precisely measuring reagents, conducting titrations, synthesizing compounds" },
  { area: "Biotechnology", examples: "Weighing microorganisms, cell cultures, biopharmaceutical materials" },
  { area: "Food and Beverage", examples: "Ensuring product quality, regulatory standards, controlling ingredient ratios" },
  { area: "Materials Science", examples: "Characterizing nanomaterials, polymers, composites" },
];

// Related products mapping
const getRelatedProducts = (currentCategory, currentId) => {
  return Object.values(productData)
    .filter(product => product.category === currentCategory && product.id !== currentId)
    .slice(0, 3);
};

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    
    // Simulate loading product data
    setLoading(true);
    setTimeout(() => {
      const foundProduct = productData[productId];
      if (foundProduct) {
        setProduct(foundProduct);
      }
      setLoading(false);
    }, 300);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [productId]);

  const handleInquiry = () => {
    alert(`📞 Request Quote for ${product?.name}\n\n📧 Email: info@smartlabtech.com\n📞 Phone: +91-XXXXXXXXXX\n\nOur team will contact you within 24 hours.`);
  };

  const handleBackToCategory = () => {
    navigate('/products');
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#0f2b3d] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading product details...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been moved.</p>
            <button 
              onClick={handleBackToCategory}
              className="bg-[#0f2b3d] text-white px-6 py-3 rounded-lg hover:bg-[#1a4a6f] transition"
            >
              Browse All Products
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const relatedProducts = getRelatedProducts(product.category, product.id);

  return (
    <>
      <Navbar />
      <div className="font-body bg-gray-50 text-slate-900 leading-relaxed">

        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100 py-3 px-5">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm">
              <button onClick={() => navigate('/')} className="text-gray-500 hover:text-[#0f2b3d]">Home</button>
              <span className="text-gray-400">/</span>
              <button onClick={() => navigate('/products')} className="text-gray-500 hover:text-[#0f2b3d]">Products</button>
              <span className="text-gray-400">/</span>
              <button onClick={() => navigate(`/category/${product.category}`)} className="text-gray-500 hover:text-[#0f2b3d]">{product.category}</button>
              <span className="text-gray-400">/</span>
              <span className="text-[#0f2b3d] font-semibold">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Hero Section */}
        <section className="py-10 px-5">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4">
                  <img 
                    src={product.gallery?.[selectedImage] || product.img} 
                    alt={product.name}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                {product.gallery && product.gallery.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {product.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === idx ? 'border-[#0f2b3d] shadow-md' : 'border-gray-200'
                        }`}
                      >
                        <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div>
                <div className="mb-2">
                  <span className="text-sm text-[#1a4a6f] font-semibold">{product.brand}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#0f2b3d] mb-4">{product.name}</h1>
                <p className="text-gray-600 text-lg mb-6">{product.shortDesc}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">In Stock</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Authorized Dealer</span>
                  </div>
                  
                  <div className="border-t border-b border-gray-200 py-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Warranty:</span>
                      <span className="font-semibold">{product.warranty}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Lead Time:</span>
                      <span className="font-semibold">{product.leadTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Price:</span>
                      <span className="text-xl font-bold text-[#0f2b3d]">{product.price}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <label className="text-gray-600">Qty:</label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-center"
                    />
                  </div>
                  <button 
                    onClick={handleInquiry}
                    className="flex-1 bg-[#0f2b3d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a4a6f] transition-all transform hover:scale-105"
                  >
                    Request Quote →
                  </button>
                  <button className="px-6 py-3 border-2 border-[#0f2b3d] text-[#0f2b3d] rounded-lg font-semibold hover:bg-[#0f2b3d] hover:text-white transition">
                    Add to Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="bg-white py-10 px-5">
          <div className="max-w-7xl mx-auto">
            <div className="border-b border-gray-200 mb-8">
              <div className="flex flex-wrap gap-2">
                {['overview', 'specifications', 'features', 'applications', 'accessories', 'documents'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 font-semibold transition-all ${
                      activeTab === tab 
                        ? 'text-[#0f2b3d] border-b-2 border-[#0f2b3d]' 
                        : 'text-gray-500 hover:text-[#0f2b3d]'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="prose max-w-none">
              {activeTab === 'overview' && (
                <div>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{product.fullDesc}</p>
                </div>
              )}

              {activeTab === 'specifications' && product.specifications && (
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-semibold text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'features' && product.features && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <span className="text-xl">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'applications' && product.applications && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'accessories' && product.accessories && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.accessories.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <span className="text-xl">🔧</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'documents' && product.documents && (
                <div className="space-y-3">
                  {product.documents.map((doc, idx) => (
                    <a key={idx} href={doc.link} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <span className="text-2xl">📄</span>
                      <span className="text-[#0f2b3d] font-medium">{doc.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section (existing) */}
        <section className="bg-gray-50 py-16 px-5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#0f2b3d] mb-12">Why Choose Smart Labtech?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl text-center p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="text-5xl mb-4">{f.icon}</div>
                  <h3 className="text-xl font-semibold text-[#0f2b3d] mb-3">{f.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 px-5">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-[#0f2b3d] mb-12">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((related) => (
                  <div 
                    key={related.id}
                    onClick={() => navigate(`/product/${related.id}`)}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    <img src={related.img} alt={related.name} className="w-full h-48 object-cover" />
                    <div className="p-5">
                      <h3 className="font-bold text-lg text-[#0f2b3d] mb-2">{related.name}</h3>
                      <p className="text-gray-500 text-sm mb-3">{related.brand}</p>
                      <p className="text-gray-600 text-sm line-clamp-2">{related.shortDesc}</p>
                      <button className="mt-4 text-[#0f2b3d] font-semibold hover:underline">Learn More →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Applications Section (existing) */}
        <section className="bg-white py-16 px-5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#0f2b3d] mb-12">Industry Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app, i) => (
                <div key={i} className="p-6 rounded-2xl border-l-4 border-[#1a4a6f] shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#0f2b3d] mb-3">{app.area}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{app.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0f2b3d] to-[#1a4a6f] text-white py-16 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Expert Advice?</h2>
            <p className="text-lg text-white/90 mb-8">Our technical team is ready to help you select the perfect equipment for your needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleInquiry}
                className="bg-white text-[#0f2b3d] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105"
              >
                Request Consultation
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
                Download Brochure
              </button>
            </div>
          </div>
        </section>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-[#0f2b3d] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1a4a6f] transition-all hover:scale-110 z-50"
          >
            ↑
          </button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;