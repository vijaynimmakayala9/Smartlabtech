// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const AnalyticalBalance = () => {
//   const [showBackToTop, setShowBackToTop] = useState(false);
//   const [hoveredRow, setHoveredRow] = useState(null);

//   // Features data
//   const features = [
//     {
//       icon: "🎯",
//       title: "High Precision",
//       desc: "Accuracy to the nearest milligram, ensuring even minute differences in mass are detectable",
//     },
//     {
//       icon: "📊",
//       title: "Reliable Results",
//       desc: "Accurate measurements essential for generating credible scientific data",
//     },
//     {
//       icon: "⚙️",
//       title: "Calibration",
//       desc: "Strict calibration protocols ensuring consistently precise measurements",
//     },
//     {
//       icon: "🥣",
//       title: "Weighing Pans",
//       desc: "Variety of pans and accessories for different sample types and sizes",
//     },
//     {
//       icon: "💻",
//       title: "Advanced Technology",
//       desc: "Electronic sensors, automatic internal calibration, and touchscreen interfaces",
//     },
//     {
//       icon: "🔬",
//       title: "Quality Control",
//       desc: "Highest standards maintained across all research and testing processes",
//     },
//   ];

//   // Products data
//   const products = [
//     {
//       title: "Ultra-Micro and Micro Lab Balance",
//       desc: "Offer a readability of 0.1 µg to 1 µg",
//       capacity: "2.1g to 10.1g",
//       price: "Contact for Pricing",
//       img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
//       tag: "Highest Precision",
//     },
//     {
//       title: "Ultra-High Resolution High-Capacity Micro Balance",
//       desc: "Maximum load ranges with exceptional resolution",
//       capacity: "32g to 111g",
//       price: "Contact for Pricing",
//       img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa",
//       tag: "High Capacity",
//     },
//     {
//       title: "Semi-Micro Lab Balances",
//       desc: "Readability of 0.01 mg or 10 µg",
//       capacity: "Up to 220g",
//       price: "Contact for Pricing",
//       img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
//       tag: "Most Popular",
//     },
//     {
//       title: "Analytical Lab Balances",
//       desc: "Readability of 0.1 mg",
//       capacity: "60g to 520g",
//       price: "Contact for Pricing",
//       img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa",
//       tag: "Standard",
//     },
//     {
//       title: "Precision Lab Balances and Scales",
//       desc: "Readability between 1 mg and 1 g",
//       capacity: "Up to 14.2 kg",
//       price: "Contact for Pricing",
//       img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa",
//       tag: "Versatile",
//     },
//     {
//       title: "High Capacity Lab Balances and Scales",
//       desc: "Readability of 100 mg and 1 g",
//       capacity: "Up to 70.2 kg",
//       price: "Contact for Pricing",
//       img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
//       tag: "Industrial",
//     },
//   ];

//   // Comparison data
//   const comparisons = [
//     { feature: "Readability", ultra: "0.1 µg - 1 µg", ultraHigh: "1 µg - 2 µg", semi: "0.01 mg", analytical: "0.1 mg", precision: "1 mg - 1 g", highCapacity: "100 mg - 1 g" },
//     { feature: "Max Capacity", ultra: "2.1g - 10.1g", ultraHigh: "32g - 111g", semi: "Up to 220g", analytical: "60g - 520g", precision: "Up to 14.2 kg", highCapacity: "Up to 70.2 kg" },
//     { feature: "Best Application", ultra: "Nanoparticles", ultraHigh: "Microanalysis", semi: "Pharma R&D", analytical: "QC Labs", precision: "Production", highCapacity: "Bulk Weighing" },
//     { feature: "Typical Users", ultra: "Research Labs", ultraHigh: "Advanced Research", semi: "Pharmaceutical", analytical: "Analytical Labs", precision: "Manufacturing", highCapacity: "Industrial" },
//   ];

//   // Applications data
//   const applications = [
//     { area: "Pharmaceuticals", examples: "Analyzing drug formulations, measuring active ingredients, ensuring product quality" },
//     { area: "Environmental Science", examples: "Determining pollutant concentrations, analyzing soil and water samples, air quality assessments" },
//     { area: "Chemistry", examples: "Precisely measuring reagents, conducting titrations, synthesizing compounds" },
//     { area: "Biotechnology", examples: "Weighing microorganisms, cell cultures, biopharmaceutical materials" },
//     { area: "Food and Beverage", examples: "Ensuring product quality, regulatory standards, controlling ingredient ratios" },
//     { area: "Materials Science", examples: "Characterizing nanomaterials, polymers, composites" },
//   ];

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Show/hide back to top button
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowBackToTop(window.scrollY > 400);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Styles
//   const styles = {
//     container: {
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//       backgroundColor: "#f8fafc",
//       color: "#1a202c",
//       lineHeight: 1.6,
//     },
//     // Hero Banner
//     hero: {
//       background: "linear-gradient(135deg, #0f2b3d 0%, #1a4a6f 50%, #2c6e9e 100%)",
//       color: "white",
//       padding: "100px 20px",
//       textAlign: "center",
//       position: "relative",
//       overflow: "hidden",
//     },
//     heroOverlay: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
//     },
//     heroContent: {
//       maxWidth: "1000px",
//       margin: "0 auto",
//       position: "relative",
//       zIndex: 2,
//     },
//     heroBadge: {
//       display: "inline-block",
//       background: "rgba(255,255,255,0.15)",
//       backdropFilter: "blur(10px)",
//       padding: "8px 24px",
//       borderRadius: "50px",
//       fontSize: "14px",
//       fontWeight: "600",
//       marginBottom: "24px",
//     },
//     heroTitle: {
//       fontSize: "52px",
//       fontWeight: "800",
//       marginBottom: "24px",
//       letterSpacing: "-0.02em",
//       lineHeight: 1.2,
//     },
//     heroSubtitle: {
//       fontSize: "18px",
//       opacity: 0.95,
//       maxWidth: "800px",
//       margin: "0 auto 20px",
//       lineHeight: 1.7,
//     },
//     heroText: {
//       fontSize: "16px",
//       opacity: 0.9,
//       maxWidth: "850px",
//       margin: "20px auto 0",
//       lineHeight: 1.7,
//     },
//     // Section Common
//     section: {
//       padding: "70px 20px",
//       maxWidth: "1200px",
//       margin: "0 auto",
//     },
//     sectionDark: {
//       backgroundColor: "#ffffff",
//       padding: "70px 20px",
//     },
//     sectionGray: {
//       backgroundColor: "#f1f5f9",
//       padding: "70px 20px",
//     },
//     sectionTitle: {
//       textAlign: "center",
//       fontSize: "36px",
//       fontWeight: "700",
//       marginBottom: "16px",
//       color: "#0f2b3d",
//       letterSpacing: "-0.01em",
//     },
//     sectionSubtitle: {
//       textAlign: "center",
//       fontSize: "18px",
//       color: "#64748b",
//       marginBottom: "48px",
//       maxWidth: "700px",
//       marginLeft: "auto",
//       marginRight: "auto",
//     },
//     // Features Grid
//     featuresGrid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//       gap: "30px",
//       marginTop: "20px",
//     },
//     featureCard: {
//       background: "white",
//       padding: "30px",
//       borderRadius: "20px",
//       textAlign: "center",
//       boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
//       transition: "transform 0.3s, boxShadow 0.3s",
//       cursor: "pointer",
//     },
//     featureIcon: {
//       fontSize: "48px",
//       marginBottom: "16px",
//     },
//     featureTitle: {
//       fontSize: "20px",
//       fontWeight: "600",
//       marginBottom: "12px",
//       color: "#0f2b3d",
//     },
//     featureDesc: {
//       fontSize: "14px",
//       color: "#64748b",
//       lineHeight: 1.6,
//     },
//     // Products Grid
//     productsGrid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//       gap: "30px",
//     },
//     productCard: {
//       background: "white",
//       borderRadius: "20px",
//       overflow: "hidden",
//       boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
//       transition: "all 0.3s",
//     },
//     productImage: {
//       width: "100%",
//       height: "200px",
//       objectFit: "cover",
//     },
//     productTag: {
//       position: "absolute",
//       top: "15px",
//       right: "15px",
//       background: "linear-gradient(135deg, #1a4a6f, #2c6e9e)",
//       color: "white",
//       padding: "5px 12px",
//       borderRadius: "20px",
//       fontSize: "12px",
//       fontWeight: "600",
//     },
//     productContent: {
//       padding: "20px",
//       position: "relative",
//     },
//     productTitle: {
//       fontSize: "20px",
//       fontWeight: "700",
//       marginBottom: "10px",
//       color: "#0f2b3d",
//     },
//     productDesc: {
//       fontSize: "14px",
//       color: "#64748b",
//       marginBottom: "12px",
//       lineHeight: 1.5,
//     },
//     productCapacity: {
//       fontSize: "14px",
//       fontWeight: "600",
//       color: "#1a4a6f",
//       marginBottom: "8px",
//     },
//     productPrice: {
//       fontSize: "16px",
//       fontWeight: "600",
//       color: "#2c6e9e",
//       marginTop: "12px",
//     },
//     // Comparison Table
//     comparisonTable: {
//       width: "100%",
//       background: "white",
//       borderRadius: "20px",
//       overflow: "auto",
//       boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
//     },
//     tableHeader: {
//       background: "linear-gradient(135deg, #0f2b3d, #1a4a6f)",
//       color: "white",
//       padding: "16px",
//     },
//     tableRow: {
//       display: "grid",
//       gridTemplateColumns: "repeat(7, 1fr)",
//       borderBottom: "1px solid #e2e8f0",
//       transition: "background 0.2s",
//       minWidth: "800px",
//     },
//     tableCell: {
//       padding: "16px",
//       textAlign: "center",
//       fontSize: "14px",
//     },
//     // Applications
//     appGrid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
//       gap: "24px",
//     },
//     appCard: {
//       background: "white",
//       padding: "24px",
//       borderRadius: "16px",
//       boxShadow: "0 4px 6px rgba(0,0,0,0.07)",
//       transition: "all 0.2s",
//       cursor: "pointer",
//       borderLeft: "4px solid #1a4a6f",
//     },
//     appArea: {
//       fontSize: "20px",
//       fontWeight: "700",
//       marginBottom: "12px",
//       color: "#0f2b3d",
//     },
//     appExamples: {
//       fontSize: "14px",
//       color: "#64748b",
//       lineHeight: 1.6,
//     },
//     // Quote Box
//     quoteBox: {
//       background: "linear-gradient(135deg, #0f2b3d, #1a4a6f)",
//       color: "white",
//       padding: "50px",
//       borderRadius: "20px",
//       textAlign: "center",
//       marginTop: "40px",
//     },
//     quoteText: {
//       fontSize: "20px",
//       fontStyle: "italic",
//       marginBottom: "20px",
//       lineHeight: 1.6,
//     },
//     // CTA
//     cta: {
//       background: "linear-gradient(135deg, #0f2b3d 0%, #1a4a6f 100%)",
//       color: "white",
//       textAlign: "center",
//       padding: "80px 20px",
//     },
//     ctaTitle: {
//       fontSize: "42px",
//       fontWeight: "800",
//       marginBottom: "20px",
//     },
//     ctaButton: {
//       background: "white",
//       color: "#1a4a6f",
//       border: "none",
//       padding: "16px 40px",
//       borderRadius: "50px",
//       fontSize: "18px",
//       fontWeight: "600",
//       cursor: "pointer",
//       marginTop: "32px",
//       transition: "transform 0.2s",
//     },
//     // Back to Top
//     backToTop: {
//       position: "fixed",
//       bottom: "30px",
//       right: "30px",
//       background: "linear-gradient(135deg, #0f2b3d, #1a4a6f)",
//       color: "white",
//       width: "50px",
//       height: "50px",
//       borderRadius: "25px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       cursor: "pointer",
//       boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
//       transition: "all 0.3s",
//       zIndex: 1000,
//       fontSize: "24px",
//       fontWeight: "bold",
//     },
//     // Brand Strip
//     brandStrip: {
//       background: "#f1f5f9",
//       padding: "20px",
//       textAlign: "center",
//       borderTop: "1px solid #e2e8f0",
//     },
//     brandText: {
//       fontSize: "14px",
//       color: "#64748b",
//     },
//   };

//   return (
//     <>
//     <Navbar/>
//     <div style={styles.container}>
//       {/* HERO BANNER */}
//       <section style={styles.hero}>
//         <div style={styles.heroOverlay}></div>
//         <div style={styles.heroContent}>
//           <div style={styles.heroBadge}>🏆 World Renowned Weighing Solutions</div>
//           <h1 style={styles.heroTitle}>
//             Unparalleled Precision and Quality
//           </h1>
//           <p style={styles.heroSubtitle}>
//             With a broad portfolio of world renowned weighing solutions, Smart Labtech provides you 
//             with a range of laboratory balances suited to fit your needs, including analytical balances, 
//             ultra-micro balances, high-capacity scales from Sartorius.
//           </p>
//           <p style={styles.heroText}>
//             At Smart LabTech, we take immense pride in being your premier analytical balance suppliers. 
//             We recognize the critical role that analytical balances play in scientific research and 
//             experimentation. These highly sensitive instruments are indispensable tools in our laboratory, 
//             empowering researchers to weigh substances with unparalleled accuracy and consistency.
//           </p>
//         </div>
//       </section>

//       {/* INTRODUCTION SECTION */}
//       <section style={styles.section}>
//         <h2 style={styles.sectionTitle}>Precision That Powers Discovery</h2>
//         <p style={styles.sectionSubtitle}>
//           In the dynamic world of scientific research and experimentation, precision and accuracy are paramount
//         </p>
//         <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
//           <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, marginBottom: "20px" }}>
//             Smart LabTech recognizes the crucial role that analytical balances play in ensuring the reliability 
//             of scientific results. An analytical balance is a highly sensitive instrument designed to measure 
//             the mass of substances with extreme precision.
//           </p>
//           <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8 }}>
//             It operates on the principle of a comparison between an unknown mass and a known reference mass, 
//             typically using a lever system. The balance offers readings in grams or milligrams, making it ideal 
//             for applications demanding precise measurements, such as chemical analysis, pharmaceutical research, 
//             and environmental monitoring.
//           </p>
//         </div>
//       </section>

//       {/* FEATURES SECTION */}
//       <section style={styles.sectionDark}>
//         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//           <h2 style={styles.sectionTitle}>Features and Benefits</h2>
//           <p style={styles.sectionSubtitle}>
//             Smart LabTech integrates analytical balances into our laboratory workflow due to their impressive features
//           </p>
//           <div style={styles.featuresGrid}>
//             {features.map((f, i) => (
//               <div
//                 key={i}
//                 style={styles.featureCard}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-8px)";
//                   e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.08)";
//                 }}
//               >
//                 <div style={styles.featureIcon}>{f.icon}</div>
//                 <h3 style={styles.featureTitle}>{f.title}</h3>
//                 <p style={styles.featureDesc}>{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PRODUCTS SECTION */}
//       <section style={styles.sectionGray}>
//         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//           <h2 style={styles.sectionTitle}>Our Product Range</h2>
//           <p style={styles.sectionSubtitle}>
//             From ultra-micro to high-capacity - find the perfect balance for your application
//           </p>
//           <div style={styles.productsGrid}>
//             {products.map((p, i) => (
//               <div
//                 key={i}
//                 style={{ ...styles.productCard, position: "relative" }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-10px)";
//                   e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.08)";
//                 }}
//               >
//                 <div style={{ position: "relative" }}>
//                   <img src={p.img} alt={p.title} style={styles.productImage} />
//                   <div style={styles.productTag}>{p.tag}</div>
//                 </div>
//                 <div style={styles.productContent}>
//                   <h3 style={styles.productTitle}>{p.title}</h3>
//                   <p style={styles.productDesc}>{p.desc}</p>
//                   <div style={styles.productCapacity}>📦 Capacity: {p.capacity}</div>
//                   <div style={styles.productPrice}>{p.price}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* COMPARISON TABLE */}
//       <section style={styles.section}>
//         <h2 style={styles.sectionTitle}>Product Comparison</h2>
//         <p style={styles.sectionSubtitle}>
//           Compare specifications across our complete range
//         </p>
//         <div style={styles.comparisonTable}>
//           <div style={{ ...styles.tableRow, ...styles.tableHeader }}>
//             <div style={styles.tableCell}><strong>Feature</strong></div>
//             <div style={styles.tableCell}><strong>Ultra-Micro</strong></div>
//             <div style={styles.tableCell}><strong>Ultra-High Resolution</strong></div>
//             <div style={styles.tableCell}><strong>Semi-Micro</strong></div>
//             <div style={styles.tableCell}><strong>Analytical</strong></div>
//             <div style={styles.tableCell}><strong>Precision</strong></div>
//             <div style={styles.tableCell}><strong>High Capacity</strong></div>
//           </div>
//           {comparisons.map((item, i) => (
//             <div
//               key={i}
//               style={{
//                 ...styles.tableRow,
//                 background: hoveredRow === i ? "#f8fafc" : "white",
//               }}
//               onMouseEnter={() => setHoveredRow(i)}
//               onMouseLeave={() => setHoveredRow(null)}
//             >
//               <div style={{ ...styles.tableCell, fontWeight: "600", textAlign: "left" }}>
//                 {item.feature}
//               </div>
//               <div style={styles.tableCell}>{item.ultra}</div>
//               <div style={styles.tableCell}>{item.ultraHigh}</div>
//               <div style={styles.tableCell}>{item.semi}</div>
//               <div style={styles.tableCell}>{item.analytical}</div>
//               <div style={styles.tableCell}>{item.precision}</div>
//               <div style={styles.tableCell}>{item.highCapacity}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* APPLICATIONS SECTION */}
//       <section style={styles.sectionDark}>
//         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//           <h2 style={styles.sectionTitle}>Applications in Smart LabTech</h2>
//           <p style={styles.sectionSubtitle}>
//             Smart LabTech employs analytical balances across a broad spectrum of research areas
//           </p>
//           <div style={styles.appGrid}>
//             {applications.map((app, i) => (
//               <div
//                 key={i}
//                 style={styles.appCard}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-5px)";
//                   e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.12)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.07)";
//                 }}
//               >
//                 <div style={styles.appArea}>{app.area}</div>
//                 <div style={styles.appExamples}>{app.examples}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* QUALITY ASSURANCE SECTION */}
//       <section style={styles.sectionGray}>
//         <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
//           <h2 style={styles.sectionTitle}>Quality Assurance at Smart LabTech</h2>
//           <div style={styles.quoteBox}>
//             <p style={styles.quoteText}>
//               "Analytical balances are not merely tools at Smart LabTech; they are the bedrock of our 
//               precision and excellence in scientific research. These instruments underpin our commitment 
//               to accuracy, reliability, and quality in the work we do."
//             </p>
//             <p style={{ fontSize: "16px", opacity: 0.9 }}>
//               Smart LabTech continues to invest in the latest analytical balance technology to stay at the 
//               forefront of scientific innovation and offer the best services to our clients.
//             </p>
//           </div>
//           <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, marginTop: "30px" }}>
//             Our commitment to maintaining the highest standards of quality control is exemplified through the 
//             use of analytical balances. We acknowledge the role of these instruments in every step of our 
//             research and testing processes, ultimately contributing to the success of our clients' projects.
//           </p>
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section style={styles.cta}>
//         <h2 style={styles.ctaTitle}>Choose Smart LabTech as Your Partner</h2>
//         <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
//           When you choose Smart LabTech as your analytical balance suppliers, you choose a partner dedicated 
//           to providing you with the finest instruments for your scientific endeavours.
//         </p>
//         <button
//           style={styles.ctaButton}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "translateY(-3px)";
//             e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "translateY(0)";
//             e.currentTarget.style.boxShadow = "none";
//           }}
//           onClick={() => alert("📞 Contact Smart LabTech\n📧 Email: info@smartlabtech.com\n🌐 www.smartlabtech.com")}
//         >
//           Request a Quote →
//         </button>
//       </section>

//       {/* BRAND STRIP */}
//       <div style={styles.brandStrip}>
//         <p style={styles.brandText}>
//           We "Smart Labtech" Laboratory equipment suppliers offers quality products from globally renowned 
//           Manufacturers including IVF Equipment from ESCO Medical & Glove Boxes from Plas-Labs.
//         </p>
//       </div>

//       {/* BACK TO TOP BUTTON */}
//       {showBackToTop && (
//         <div
//           style={styles.backToTop}
//           onClick={scrollToTop}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "scale(1.1)";
//             e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.3)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "scale(1)";
//             e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
//           }}
//         >
//           ↑
//         </div>
//       )}
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default AnalyticalBalance;


import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  { icon: "🎯", title: "High Precision",       desc: "Accuracy to the nearest milligram, ensuring even minute differences in mass are detectable" },
  { icon: "📊", title: "Reliable Results",     desc: "Accurate measurements essential for generating credible scientific data" },
  { icon: "⚙️", title: "Calibration",          desc: "Strict calibration protocols ensuring consistently precise measurements" },
  { icon: "🥣", title: "Weighing Pans",        desc: "Variety of pans and accessories for different sample types and sizes" },
  { icon: "💻", title: "Advanced Technology",  desc: "Electronic sensors, automatic internal calibration, and touchscreen interfaces" },
  { icon: "🔬", title: "Quality Control",      desc: "Highest standards maintained across all research and testing processes" },
];

const products = [
  { title: "Ultra-Micro and Micro Lab Balance",                    desc: "Offer a readability of 0.1 µg to 1 µg",              capacity: "2.1g to 10.1g",   tag: "Highest Precision", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80" },
  { title: "Ultra-High Resolution High-Capacity Micro Balance",    desc: "Maximum load ranges with exceptional resolution",    capacity: "32g to 111g",     tag: "High Capacity",     img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&q=80" },
  { title: "Semi-Micro Lab Balances",                              desc: "Readability of 0.01 mg or 10 µg",                   capacity: "Up to 220g",      tag: "Most Popular",      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80" },
  { title: "Analytical Lab Balances",                              desc: "Readability of 0.1 mg",                             capacity: "60g to 520g",     tag: "Standard",          img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&q=80" },
  { title: "Precision Lab Balances and Scales",                    desc: "Readability between 1 mg and 1 g",                  capacity: "Up to 14.2 kg",   tag: "Versatile",         img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&q=80" },
  { title: "High Capacity Lab Balances and Scales",                desc: "Readability of 100 mg and 1 g",                     capacity: "Up to 70.2 kg",   tag: "Industrial",        img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80" },
];

const comparisons = [
  { feature: "Readability",      ultra: "0.1 µg - 1 µg",  ultraHigh: "1 µg - 2 µg",   semi: "0.01 mg",     analytical: "0.1 mg",    precision: "1 mg - 1 g",  highCapacity: "100 mg - 1 g" },
  { feature: "Max Capacity",     ultra: "2.1g - 10.1g",   ultraHigh: "32g - 111g",     semi: "Up to 220g",  analytical: "60g - 520g", precision: "Up to 14.2 kg", highCapacity: "Up to 70.2 kg" },
  { feature: "Best Application", ultra: "Nanoparticles",  ultraHigh: "Microanalysis",  semi: "Pharma R&D",  analytical: "QC Labs",   precision: "Production",  highCapacity: "Bulk Weighing" },
  { feature: "Typical Users",    ultra: "Research Labs",  ultraHigh: "Advanced Research", semi: "Pharmaceutical", analytical: "Analytical Labs", precision: "Manufacturing", highCapacity: "Industrial" },
];

const applications = [
  { area: "Pharmaceuticals",    examples: "Analyzing drug formulations, measuring active ingredients, ensuring product quality" },
  { area: "Environmental Science", examples: "Determining pollutant concentrations, analyzing soil and water samples, air quality assessments" },
  { area: "Chemistry",          examples: "Precisely measuring reagents, conducting titrations, synthesizing compounds" },
  { area: "Biotechnology",      examples: "Weighing microorganisms, cell cultures, biopharmaceutical materials" },
  { area: "Food and Beverage",  examples: "Ensuring product quality, regulatory standards, controlling ingredient ratios" },
  { area: "Materials Science",  examples: "Characterizing nanomaterials, polymers, composites" },
];

const AnalyticalBalance = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hoveredRow, setHoveredRow]       = useState(null);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className="font-body bg-slate-50 text-slate-900 leading-relaxed">

        {/* ── HERO ── */}
        <section className="relative text-white text-center py-24 sm:py-32 px-5 overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#0f2b3d 0%,#1a4a6f 50%,#2c6e9e 100%)' }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 50%,rgba(255,255,255,0.1) 0%,transparent 50%)' }} />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-block bg-white/15 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6">
              🏆 World Renowned Weighing Solutions
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              Unparalleled Precision and Quality
            </h1>
            <p className="text-base sm:text-lg text-white/95 max-w-3xl mx-auto leading-relaxed mb-5">
              With a broad portfolio of world renowned weighing solutions, Smart Labtech provides you with a range of laboratory balances suited to fit your needs, including analytical balances, ultra-micro balances, high-capacity scales from Sartorius.
            </p>
            <p className="text-sm sm:text-base text-white/90 max-w-3xl mx-auto leading-relaxed">
              At Smart LabTech, we take immense pride in being your premier analytical balance suppliers. We recognize the critical role that analytical balances play in scientific research and experimentation.
            </p>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="py-16 sm:py-20 px-5">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-[#0f2b3d] mb-4 tracking-tight">Precision That Powers Discovery</h2>
            <p className="text-center text-slate-400 font-body text-base max-w-xl mx-auto mb-10">In the dynamic world of scientific research, precision and accuracy are paramount</p>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-slate-500 leading-relaxed mb-5">Smart LabTech recognizes the crucial role that analytical balances play in ensuring the reliability of scientific results. An analytical balance is a highly sensitive instrument designed to measure the mass of substances with extreme precision.</p>
              <p className="text-slate-500 leading-relaxed">It operates on the principle of a comparison between an unknown mass and a known reference mass, typically using a lever system. The balance offers readings in grams or milligrams, making it ideal for applications demanding precise measurements.</p>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="bg-white py-16 sm:py-20 px-5">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-[#0f2b3d] mb-3 tracking-tight">Features and Benefits</h2>
            <p className="text-center text-slate-400 font-body text-base max-w-xl mx-auto mb-12">Smart LabTech integrates analytical balances into our laboratory workflow due to their impressive features</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {features.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl text-center p-8 transition-all duration-300 cursor-default"
                  style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)'; }}
                >
                  <div className="text-5xl mb-4">{f.icon}</div>
                  <h3 className="font-display text-xl font-semibold text-[#0f2b3d] mb-3">{f.title}</h3>
                  <p className="text-sm text-slate-400 font-body leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section className="bg-slate-100 py-16 sm:py-20 px-5">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-[#0f2b3d] mb-3 tracking-tight">Our Product Range</h2>
            <p className="text-center text-slate-400 font-body text-base max-w-xl mx-auto mb-12">From ultra-micro to high-capacity — find the perfect balance for your application</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {products.map((p, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden relative transition-all duration-300 cursor-default"
                  style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)'; }}
                >
                  <div className="relative">
                    <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
                    <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg,#1a4a6f,#2c6e9e)' }}>
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-[#0f2b3d] mb-2 leading-snug">{p.title}</h3>
                    <p className="text-sm text-slate-400 font-body mb-3 leading-relaxed">{p.desc}</p>
                    <p className="text-sm font-semibold text-[#1a4a6f] font-body mb-1">📦 Capacity: {p.capacity}</p>
                    <p className="text-base font-semibold text-[#2c6e9e] font-body mt-3">Contact for Pricing</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="py-16 sm:py-20 px-5">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-[#0f2b3d] mb-3 tracking-tight">Product Comparison</h2>
            <p className="text-center text-slate-400 font-body text-base max-w-xl mx-auto mb-10">Compare specifications across our complete range</p>
            <div className="bg-white rounded-2xl overflow-auto" style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
              {/* Header row */}
              <div className="grid text-center text-white text-sm font-semibold font-body" style={{ gridTemplateColumns: 'repeat(7,1fr)', minWidth: 800, background: 'linear-gradient(135deg,#0f2b3d,#1a4a6f)' }}>
                {['Feature','Ultra-Micro','Ultra-High Res','Semi-Micro','Analytical','Precision','High Capacity'].map(h => (
                  <div key={h} className="p-4">{h}</div>
                ))}
              </div>
              {comparisons.map((row, i) => (
                <div key={i}
                  className="grid border-b border-slate-100 transition-colors duration-200 cursor-default text-sm font-body"
                  style={{ gridTemplateColumns: 'repeat(7,1fr)', minWidth: 800, background: hoveredRow === i ? '#f8fafc' : '#fff' }}
                  onMouseEnter={() => setHoveredRow(i)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <div className="p-4 font-semibold text-[#0f2b3d]">{row.feature}</div>
                  {[row.ultra, row.ultraHigh, row.semi, row.analytical, row.precision, row.highCapacity].map((val, j) => (
                    <div key={j} className="p-4 text-center text-slate-500">{val}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APPLICATIONS ── */}
        <section className="bg-white py-16 sm:py-20 px-5">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-[#0f2b3d] mb-3 tracking-tight">Applications in Smart LabTech</h2>
            <p className="text-center text-slate-400 font-body text-base max-w-xl mx-auto mb-12">Smart LabTech employs analytical balances across a broad spectrum of research areas</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app, i) => (
                <div key={i}
                  className="bg-white p-6 rounded-2xl border-l-4 border-[#1a4a6f] transition-all duration-200 cursor-default"
                  style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.07)'; }}
                >
                  <h3 className="font-display text-xl font-bold text-[#0f2b3d] mb-3">{app.area}</h3>
                  <p className="text-sm text-slate-400 font-body leading-relaxed">{app.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUALITY ASSURANCE ── */}
        <section className="bg-slate-100 py-16 sm:py-20 px-5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0f2b3d] mb-8 tracking-tight">Quality Assurance at Smart LabTech</h2>
            <div className="rounded-2xl p-10 sm:p-12 text-white"
              style={{ background: 'linear-gradient(135deg,#0f2b3d,#1a4a6f)' }}>
              <p className="text-lg italic leading-relaxed mb-5">
                "Analytical balances are not merely tools at Smart LabTech; they are the bedrock of our precision and excellence in scientific research. These instruments underpin our commitment to accuracy, reliability, and quality in the work we do."
              </p>
              <p className="text-sm text-white/90 leading-relaxed font-body">
                Smart LabTech continues to invest in the latest analytical balance technology to stay at the forefront of scientific innovation and offer the best services to our clients.
              </p>
            </div>
            <p className="text-slate-400 text-sm font-body leading-relaxed mt-8">
              Our commitment to maintaining the highest standards of quality control is exemplified through the use of analytical balances. We acknowledge the role of these instruments in every step of our research and testing processes.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="text-white text-center py-20 px-5"
          style={{ background: 'linear-gradient(135deg,#0f2b3d 0%,#1a4a6f 100%)' }}>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mb-5 tracking-tight">Choose Smart LabTech as Your Partner</h2>
          <p className="text-base text-white/90 max-w-xl mx-auto leading-relaxed">
            When you choose Smart LabTech as your analytical balance suppliers, you choose a partner dedicated to providing you with the finest instruments for your scientific endeavours.
          </p>
          <button
            className="mt-8 bg-white text-[#1a4a6f] px-10 py-4 rounded-full text-lg font-bold font-body border-none cursor-pointer transition-all"
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            onClick={() => alert('📞 Contact Smart LabTech\n📧 info@smartlabtech.com')}
          >
            Request a Quote →
          </button>
        </section>

        {/* Brand strip */}
        <div className="bg-slate-100 text-center py-5 px-5 border-t border-slate-200">
          <p className="text-sm text-slate-400 font-body">
            We "Smart Labtech" Laboratory equipment suppliers offers quality products from globally renowned Manufacturers including IVF Equipment from ESCO Medical & Glove Boxes from Plas-Labs.
          </p>
        </div>

        {/* Back to top */}
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-7 right-7 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl font-bold border-none cursor-pointer z-[1000] transition-all"
            style={{ background: 'linear-gradient(135deg,#0f2b3d,#1a4a6f)', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)'; }}
          >
            ↑
          </button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AnalyticalBalance;