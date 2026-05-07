import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, ChevronLeft, ChevronRight, Check, Download, FileText,
  Settings, Award, Truck, Shield, Clock, Phone, Mail,
  Star, Share2, Sparkles, Package,
  FlaskConical, Play, Pause, Maximize2, BadgeCheck,
  MessageCircle, X, BookOpen, Layers, Globe, Users,
  TrendingUp, Zap, HeartHandshake, ChevronDown, ExternalLink,
  Building2, BarChart3, Microscope, Tag, ThumbsUp
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ─── Font Import ─── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }

    .font-serif { font-family: 'Cormorant Garamond', serif; }
    .font-sans  { font-family: 'Plus Jakarta Sans', sans-serif; }

    .gradient-text {
      background: linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 50%, #38bdf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .gradient-text-warm {
      background: linear-gradient(135deg, #92400e 0%, #d97706 50%, #fbbf24 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .blue-overlay {
      background: linear-gradient(135deg, rgba(30,58,138,0.85) 0%, rgba(14,165,233,0.75) 100%);
    }

    .image-scrollbar::-webkit-scrollbar { height: 4px; }
    .image-scrollbar::-webkit-scrollbar-track { background: #e2e8f0; border-radius: 10px; }
    .image-scrollbar::-webkit-scrollbar-thumb { background: linear-gradient(135deg, #1e3a8a, #0ea5e9); border-radius: 10px; }

    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(14,165,233,0.15); }
      50%       { box-shadow: 0 0 40px rgba(14,165,233,0.25); }
    }
    .glow-effect { animation: pulse-glow 3s ease-in-out infinite; }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-8px); }
    }
    .float-anim { animation: float 4s ease-in-out infinite; }

    .brand-card-gradient {
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f0fdf4 100%);
    }

    .recommended-card:hover .rec-img { transform: scale(1.08); }
    .rec-img { transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94); }

    .tab-underline {
      position: relative;
    }
    .tab-underline::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(135deg, #1e3a8a, #0ea5e9);
      border-radius: 2px;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    .tab-underline.active::after { transform: scaleX(1); }

    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .accordion-content.open { max-height: 500px; }
  `}</style>
);

/* ─── Product Data ─── */
const productData = {
  /* ── Weighing & Measurement ── */
  'analytical-balances': {
    id: 'analytical-balances',
    name: 'Analytical Balances',
    brand: 'Sartorius',
    category: 'Weighing & Measurement',
    shortDesc: 'High-precision analytical balances for accurate laboratory measurements with 0.1 mg readability.',
    fullDesc: `The Sartorius Analytical Balance represents the pinnacle of precision weighing technology. Engineered for the most demanding laboratory environments, this instrument delivers unparalleled accuracy with readability down to 0.1 mg. Its isoCAL automatic internal adjustment ensures continuous accuracy without interrupting workflow, while the intuitive 7" TFT touchscreen provides a seamless user experience. Built with GMP compliance in mind, every measurement is traceable and audit-ready.`,
    img: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3735711/pexels-photo-3735711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      readability: "0.1 mg",
      capacity: "60 g – 520 g",
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
      "Underfloor weighing capability",
      "GLP compliant printouts",
      "Password protection with user profiles",
      "Multiple weighing units"
    ],
    applications: [
      "Pharmaceutical quality control",
      "Chemical analysis",
      "Research laboratories",
      "Environmental testing",
      "Food safety testing"
    ],
    faqs: [
      { q: "What is the recommended environment for this balance?", a: "This balance performs best in a draft-free, vibration-free environment with stable temperature between 10–30°C and relative humidity below 80%. An anti-vibration table is recommended for ultra-precise weighing." },
      { q: "Does this balance support 21 CFR Part 11 compliance?", a: "Yes, the balance supports electronic records and audit trails compliant with 21 CFR Part 11, making it suitable for regulated pharmaceutical and life science environments." },
      { q: "How often should internal calibration be performed?", a: "The isoCAL system automatically triggers internal calibration when temperature drift or time thresholds are exceeded, ensuring continuous accuracy without manual intervention." },
      { q: "What connectivity options are available for data export?", a: "The balance supports USB-C, Ethernet, Wi-Fi, and Bluetooth, enabling direct connectivity to LIMS, ERP systems, label printers, and PCs." }
    ],
    highlights: [
      { icon: "zap", label: "≤ 3s Stabilization", desc: "Fastest in class" },
      { icon: "shield", label: "GMP Compliant", desc: "Audit-ready output" },
      { icon: "globe", label: "4 Connectivity Modes", desc: "Wi-Fi, BT, USB, LAN" },
      { icon: "award", label: "3-Year Warranty", desc: "Industry-leading coverage" }
    ],
    warranty: "3 years",
    leadTime: "2–3 weeks",
    inStock: true,
    rating: 4.9,
    reviews: 128,
    sku: "SART-ANB-220",
    certifications: ["ISO 9001:2015", "CE Certified", "GMP Compliant"]
  },

  'laboratory-balances': {
    id: 'laboratory-balances',
    name: 'Laboratory Balances',
    brand: 'Sartorius',
    category: 'Weighing & Measurement',
    shortDesc: 'Versatile laboratory balances for everyday weighing with exceptional precision.',
    fullDesc: `Sartorius laboratory balances combine precision engineering with user-friendly operation, making them ideal for routine laboratory applications. With a capacity of up to 14.2 kg and readability down to 1 mg, they handle diverse workflows with ease. The chemical-resistant design and built-in level indicator make these balances a reliable choice for any lab setting.`,
    img: "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      readability: "1 mg – 0.1 g",
      capacity: "Up to 14.2 kg",
      panSize: "180 × 180 mm",
      repeatability: "±1 mg",
      linearity: "±2 mg",
      stabilizationTime: "≤ 2 seconds",
      display: "4.5\" LCD backlit",
      interfaces: "RS232, USB"
    },
    features: [
      "Multiple application modes",
      "Chemical resistant design",
      "Level indicator with alarm",
      "Overload protection"
    ],
    applications: [
      "Educational laboratories",
      "Production quality control",
      "Material testing",
      "General laboratory weighing"
    ],
    faqs: [
      { q: "Can this balance be used for legal-for-trade applications?", a: "Yes, selected models are OIML approved and can be used for legal-for-trade applications. Contact us for model-specific approval details." },
      { q: "Is the pan removable for cleaning?", a: "Yes, the weighing pan is easily removable for cleaning and the housing is chemical-resistant for wipe-down maintenance." }
    ],
    highlights: [
      { icon: "zap", label: "≤ 2s Stabilization", desc: "Fast and reliable" },
      { icon: "shield", label: "ISO 9001:2015", desc: "Quality certified" },
      { icon: "layers", label: "14.2 kg Capacity", desc: "Versatile range" },
      { icon: "award", label: "2-Year Warranty", desc: "Reliable coverage" }
    ],
    warranty: "2 years",
    leadTime: "1–2 weeks",
    inStock: true,
    rating: 4.7,
    reviews: 86,
    sku: "SART-LAB-120",
    certifications: ["ISO 9001:2015", "CE Certified"]
  },

  'micro-balances': {
    id: 'micro-balances',
    name: 'Micro & Ultra-Micro Balances',
    brand: 'Sartorius',
    category: 'Weighing & Measurement',
    shortDesc: 'Ultra-precise micro balances with readability down to 0.1 µg for critical research.',
    fullDesc: `Sartorius micro and ultra-micro balances deliver exceptional measurement precision for the smallest sample quantities, supporting the most rigorous research demands. Active Vibration Compensation (AVC) ensures stability even in challenging environments, while motor-driven draft shield doors and integrated ionisers minimise electrostatic interference. 21 CFR Part 11 compliance makes these balances fully audit-ready.`,
    img: "https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3735711/pexels-photo-3735711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      readability: "0.1 µg",
      capacity: "2.1 g / 6.1 g",
      panSize: "26 mm diameter",
      repeatability: "±0.15 µg",
      linearity: "±0.5 µg",
      stabilizationTime: "≤ 8 seconds",
      display: "5\" TFT touchscreen",
      interfaces: "USB, RS232, Ethernet",
      dimensions: "290 × 490 × 320 mm",
      weight: "8.4 kg"
    },
    features: [
      "Active vibration compensation (AVC)",
      "Automatic internal calibration",
      "Draft shield with motor-driven doors",
      "Ioniser for static elimination",
      "Smart balance assistant",
      "21 CFR Part 11 compliant"
    ],
    applications: [
      "Nano-material research",
      "Pharmaceutical API weighing",
      "Forensic analysis",
      "Semiconductor quality control",
      "High-precision formulation"
    ],
    faqs: [
      { q: "How does Active Vibration Compensation work?", a: "AVC uses integrated sensors to detect and counteract external vibrations in real-time, ensuring stable readings even on benches with mechanical disturbances." },
      { q: "What is the smallest sample that can be reliably weighed?", a: "With 0.1 µg readability and ±0.15 µg repeatability, samples as small as 1 µg can be accurately and reproducibly weighed under controlled conditions." }
    ],
    highlights: [
      { icon: "microscope", label: "0.1 µg Readability", desc: "Ultra-micro precision" },
      { icon: "zap", label: "Active Vibration Comp", desc: "AVC technology" },
      { icon: "shield", label: "21 CFR Part 11", desc: "Fully compliant" },
      { icon: "award", label: "3-Year Warranty", desc: "Research-grade support" }
    ],
    warranty: "3 years",
    leadTime: "3–4 weeks",
    inStock: true,
    rating: 4.9,
    reviews: 54,
    sku: "SART-MCR-310",
    certifications: ["ISO 9001:2015", "CE Certified", "GMP Compliant", "21 CFR Part 11"]
  },

  'industrial-scales': {
    id: 'industrial-scales',
    name: 'Industrial Scales',
    brand: 'Sartorius',
    category: 'Weighing & Measurement',
    shortDesc: 'Heavy-duty industrial scales engineered for harsh environments and high-capacity weighing.',
    fullDesc: `Sartorius industrial scales combine robust construction with laboratory-grade accuracy to support demanding production, logistics, and process-control environments. IP65/IP69K-rated stainless-steel housings withstand harsh washdown conditions, while multiple fieldbus interfaces enable seamless integration into automated production lines.`,
    img: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      readability: "1 g – 50 g",
      capacity: "30 kg – 1500 kg",
      panSize: "400 × 500 mm",
      protection: "IP65 / IP69K",
      material: "Stainless steel AISI 304",
      display: "Large LED / TFT",
      interfaces: "RS232, Ethernet, Profibus, Modbus",
      powerSupply: "90–264 V AC / PoE",
      dimensions: "Various platform sizes",
      operatingTemp: "−10 °C to +40 °C"
    },
    features: [
      "IP65/IP69K protection for washdowns",
      "Stainless-steel housing",
      "Multiple fieldbus connectivity",
      "Legal-for-trade OIML/NTEP approved",
      "Remote display support",
      "Battery backup option"
    ],
    applications: [
      "Incoming goods inspection",
      "Production process control",
      "Logistics and shipping",
      "Food processing",
      "Chemical batching"
    ],
    faqs: [
      { q: "Can these scales be integrated with PLCs?", a: "Yes, Profibus and Modbus interfaces allow direct integration with Siemens, Allen-Bradley, and other major PLC systems for automated process control." },
      { q: "Are these scales approved for legal-for-trade use?", a: "Yes, selected models carry OIML and NTEP approvals for legal-for-trade applications in trade, logistics, and food processing." }
    ],
    highlights: [
      { icon: "shield", label: "IP65/IP69K Rated", desc: "Washdown ready" },
      { icon: "layers", label: "Up to 1500 kg", desc: "High capacity" },
      { icon: "globe", label: "Fieldbus Ready", desc: "PLC integration" },
      { icon: "award", label: "OIML Approved", desc: "Legal-for-trade" }
    ],
    warranty: "2 years",
    leadTime: "2–4 weeks",
    inStock: true,
    rating: 4.6,
    reviews: 72,
    sku: "SART-IND-640",
    certifications: ["ISO 9001:2015", "OIML Approved", "CE Certified"]
  },

  /* ── Filtration ── */
  'membrane-filters': {
    id: 'membrane-filters',
    name: 'Membrane Filters',
    brand: 'Sartorius',
    category: 'Filtration',
    shortDesc: 'High-performance membrane filters for sterile and particle-free filtration across diverse applications.',
    fullDesc: `Sartorius membrane filters offer consistent retention, high flow rates, and excellent chemical compatibility for sterile filtration, particle analysis, and quality-control workflows. Available in a wide range of materials and pore sizes, they are optimised for both aqueous and organic solvent applications, with FDA-compliant materials ensuring suitability for regulated pharmaceutical use.`,
    img: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      poreSizes: "0.1 µm – 10 µm",
      materials: "CN, CA, PTFE, PES, Nylon, MCE",
      diameters: "13 mm – 293 mm",
      maxPressure: "Up to 5 bar",
      sterilisation: "Autoclavable (121 °C)",
      extractables: "Ultra-low",
      packagingOptions: "Bulk, individually wrapped, sterile",
      shelfLife: "5 years"
    },
    features: [
      "Consistent batch-to-batch retention",
      "High flow rate with low protein binding",
      "Wide chemical compatibility",
      "FDA-compliant materials",
      "Available sterile or non-sterile",
      "Multiple diameter and pore-size options"
    ],
    applications: [
      "Sterile filtration of biologics",
      "Particle monitoring",
      "Environmental water analysis",
      "QC microbiology testing",
      "Solvent filtration for HPLC"
    ],
    faqs: [
      { q: "Which membrane material is best for HPLC sample prep?", a: "PTFE membranes are ideal for aggressive organic solvents, while PES and CA membranes are preferred for aqueous HPLC samples due to low protein binding and high flow rates." },
      { q: "Can these filters be autoclaved?", a: "Yes, compatible membrane types (CN, CA, MCE) can be autoclaved at 121°C for steam sterilisation. PTFE membranes require alternative sterilisation methods." }
    ],
    highlights: [
      { icon: "zap", label: "Ultra-Low Extractables", desc: "Purity assured" },
      { icon: "shield", label: "USP Class VI", desc: "Biocompatible" },
      { icon: "layers", label: "6 Membrane Types", desc: "Wide compatibility" },
      { icon: "award", label: "5-Year Shelf Life", desc: "Long-term storage" }
    ],
    warranty: "Per lot specification",
    leadTime: "1 week",
    inStock: true,
    rating: 4.8,
    reviews: 210,
    sku: "SART-MF-200",
    certifications: ["ISO 9001:2015", "FDA 21 CFR", "USP Class VI"]
  },

  'syringe-filters': {
    id: 'syringe-filters',
    name: 'Syringe Filters',
    brand: 'Sartorius',
    category: 'Filtration',
    shortDesc: 'Ready-to-use syringe filters for quick, reliable sample clarification and sterile filtration.',
    fullDesc: `Sartorius syringe filters combine high-quality membrane technology with ergonomic housing for fast, reproducible filtration of small sample volumes in routine and critical applications. Color-coded by membrane type for instant identification, they support both aqueous and organic solvent matrices with minimal hold-up volume.`,
    img: "https://images.pexels.com/photos/4033147/pexels-photo-4033147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/4033147/pexels-photo-4033147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      poreSizes: "0.2 µm, 0.45 µm",
      membraneTypes: "PES, PVDF, CA, RC, PTFE, Nylon",
      housingDiameters: "4 mm, 13 mm, 17 mm, 25 mm, 33 mm",
      maxVolume: "Up to 100 mL",
      inletFitting: "Luer-lock / Luer-slip",
      outletFitting: "Luer-slip",
      sterilisation: "EO sterile options available",
      extractables: "Low"
    },
    features: [
      "Color-coded by membrane type",
      "Low hold-up volume",
      "Non-pyrogenic and DNase/RNase-free",
      "Individual sterile packaging available",
      "Female Luer-lock inlet",
      "Suitable for aqueous and organic solvents"
    ],
    applications: [
      "HPLC sample preparation",
      "Cell culture media filtration",
      "Protein clarification",
      "API dissolution testing",
      "Environmental sample prep"
    ],
    faqs: [
      { q: "What syringe filter size do I need for HPLC prep?", a: "For HPLC sample preparation, 0.2 µm or 0.45 µm pore size with 13 mm or 25 mm diameter filters are standard. 0.2 µm is recommended for LC-MS to prevent column contamination." },
      { q: "Are sterile packaging options available?", a: "Yes, individually wrapped EO-sterilised options are available for all membrane types, suitable for sterile cell culture and pharmaceutical applications." }
    ],
    highlights: [
      { icon: "zap", label: "Low Hold-Up Volume", desc: "Minimal sample loss" },
      { icon: "shield", label: "DNase/RNase Free", desc: "Biology ready" },
      { icon: "layers", label: "6 Membrane Types", desc: "Any matrix" },
      { icon: "award", label: "Color-Coded", desc: "Error-free selection" }
    ],
    warranty: "Per lot specification",
    leadTime: "3–5 days",
    inStock: true,
    rating: 4.7,
    reviews: 185,
    sku: "SART-SF-450",
    certifications: ["ISO 9001:2015", "FDA 21 CFR", "USP Class VI"]
  },

  'ultrafiltration-systems': {
    id: 'ultrafiltration-systems',
    name: 'Ultrafiltration Systems',
    brand: 'Sartorius',
    category: 'Filtration',
    shortDesc: 'Scalable ultrafiltration systems for concentration, diafiltration, and buffer exchange of biologics.',
    fullDesc: `Sartorius ultrafiltration systems provide high-throughput, reproducible performance from lab to manufacturing scale, supporting downstream processing of proteins, antibodies, and vaccines. Single-use and reusable cassette options simplify validation and cleaning, while tight MWCO distributions ensure high selectivity and product integrity.`,
    img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      mwco: "1 kDa – 1000 kDa",
      membraneArea: "10 cm² – 2.5 m²",
      maxFlowRate: "Up to 2000 L/h (manufacturing scale)",
      operatingPressure: "≤ 4 bar",
      compatibility: "Aqueous buffers, fermentation broths",
      sterileDesign: "Single-use and reusable options",
      certifications: "USP Class VI, FDA compliant",
      cleaningValidation: "CIP / SIP compatible"
    },
    features: [
      "Single-use and reusable cassette options",
      "Tight MWCO distribution for high selectivity",
      "Scalable from 10 cm² to full manufacturing",
      "Minimal hold-up volume",
      "Easy sanitisation and cleaning",
      "Full traceability documentation"
    ],
    applications: [
      "Monoclonal antibody concentration",
      "Vaccine downstream processing",
      "Recombinant protein purification",
      "Buffer exchange / diafiltration",
      "Virus removal filtration"
    ],
    faqs: [
      { q: "What MWCO should I choose for antibody concentration?", a: "For monoclonal antibodies (~150 kDa), a 30 kDa MWCO cassette is standard, providing a good balance of retention and throughput while allowing buffer components to pass through." },
      { q: "Are single-use cassettes compatible with GMP manufacturing?", a: "Yes, single-use cassettes are pre-validated, come with full traceability documentation, and eliminate CIP/SIP validation burden, making them ideal for GMP biopharmaceutical manufacturing." }
    ],
    highlights: [
      { icon: "zap", label: "2000 L/h Flow Rate", desc: "Manufacturing scale" },
      { icon: "shield", label: "USP Class VI", desc: "Biocompatible" },
      { icon: "layers", label: "1 kDa–1000 kDa MWCO", desc: "Wide selectivity" },
      { icon: "award", label: "Single-Use Ready", desc: "GMP compatible" }
    ],
    warranty: "1 year (hardware)",
    leadTime: "2–3 weeks",
    inStock: false,
    rating: 4.9,
    reviews: 41,
    sku: "SART-UF-850",
    certifications: ["ISO 9001:2015", "USP Class VI", "FDA 21 CFR", "GMP Compliant"]
  },

  /* ── Bioprocess ── */
  'bioreactors': {
    id: 'bioreactors',
    name: 'Bioreactors & Fermenters',
    brand: 'Sartorius',
    category: 'Bioprocess',
    shortDesc: 'Fully instrumented bioreactors for cell culture and fermentation from lab to production scale.',
    fullDesc: `Sartorius bioreactors offer precise control of critical process parameters—pH, DO, temperature, and agitation—combined with single-use or glass vessel options to accelerate bioprocess development and manufacturing. The BIOSTAT® controller platform provides an intuitive, 21 CFR Part 11-compliant interface for process monitoring, recipe management, and data logging across parallel bioreactor setups.`,
    img: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      workingVolume: "0.1 L – 5000 L",
      vesselOptions: "Single-use, glass, stainless steel",
      agitationRange: "20 – 1500 rpm",
      phControl: "±0.01 pH",
      doControl: "±1 % saturation",
      tempControl: "±0.1 °C",
      gasControl: "Mass flow controllers",
      dataLogger: "Integrated SCADA / BIOSTAT® controller"
    },
    features: [
      "Single-use BioBLU® vessels",
      "Parallel bioreactor setups available",
      "Integrated pH, DO, temperature sensors",
      "Automated feeding strategies",
      "21 CFR Part 11 compliant software",
      "Scalable from development to GMP"
    ],
    applications: [
      "Mammalian cell culture (CHO, HEK293)",
      "Microbial fermentation (E. coli, yeast)",
      "Viral vector production",
      "Monoclonal antibody development",
      "Biosimilar manufacturing"
    ],
    faqs: [
      { q: "Can I run parallel bioreactor experiments?", a: "Yes, the BIOSTAT® system supports parallel setups with up to 24 vessels simultaneously, enabling high-throughput process development and Design of Experiment (DoE) workflows." },
      { q: "What is the advantage of single-use BioBLU vessels?", a: "Single-use vessels eliminate cleaning and sterilisation between runs, reducing turnaround time, cross-contamination risk, and validation burden—critical advantages for multi-product facilities." }
    ],
    highlights: [
      { icon: "zap", label: "0.1 L – 5000 L", desc: "Full scale range" },
      { icon: "shield", label: "21 CFR Part 11", desc: "GMP compliant" },
      { icon: "microscope", label: "±0.01 pH Control", desc: "Precise process" },
      { icon: "award", label: "2-Year Warranty", desc: "Hardware coverage" }
    ],
    warranty: "2 years",
    leadTime: "4–8 weeks",
    inStock: false,
    rating: 4.9,
    reviews: 63,
    sku: "SART-BR-500",
    certifications: ["ISO 9001:2015", "GMP Compliant", "21 CFR Part 11", "CE Certified"]
  },

  'cell-culture-media': {
    id: 'cell-culture-media',
    name: 'Cell Culture Media & Supplements',
    brand: 'Sartorius',
    category: 'Bioprocess',
    shortDesc: 'Chemically defined and animal-component-free media optimised for high-yield cell culture.',
    fullDesc: `Sartorius cell culture media and supplements are formulated to support robust growth and productivity of mammalian cell lines in bioprocess development and cGMP manufacturing. Chemically defined, animal-component-free formulations provide regulatory-friendly consistency and are cGMP manufactured for use in vaccine, antibody, and gene therapy production.`,
    img: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      format: "Liquid and powder",
      volume: "500 mL – 200 L bags",
      cellLines: "CHO, HEK293, Vero, BHK21, hybridoma",
      pH: "7.0 – 7.4 (buffered)",
      osmolality: "280 – 320 mOsm/kg",
      acf: "Animal-component free",
      sterility: "0.1 µm sterile filtered",
      shelfLife: "18 months at 2–8 °C"
    },
    features: [
      "Animal-component free formulations",
      "Chemically defined for regulatory compliance",
      "Optimised for fed-batch and perfusion",
      "Consistent lot-to-lot performance",
      "Custom formulation services available",
      "cGMP manufactured"
    ],
    applications: [
      "Recombinant protein production",
      "Viral vector manufacturing",
      "Vaccine production",
      "Monoclonal antibody production",
      "Gene therapy research"
    ],
    faqs: [
      { q: "Are custom media formulations available?", a: "Yes, Sartorius offers custom formulation services to optimise media for specific cell lines or process requirements. Contact our technical team to discuss your project." },
      { q: "What is the recommended storage condition?", a: "Liquid media should be stored at 2–8 °C and used within 18 months of manufacture. Powder formats can be stored at room temperature for up to 3 years." }
    ],
    highlights: [
      { icon: "shield", label: "Animal-Component Free", desc: "Regulatory ready" },
      { icon: "zap", label: "18-Month Shelf Life", desc: "Long-term stability" },
      { icon: "layers", label: "5 Cell Line Types", desc: "Broad compatibility" },
      { icon: "award", label: "cGMP Manufactured", desc: "Quality assured" }
    ],
    warranty: "Per certificate of analysis",
    leadTime: "1–2 weeks",
    inStock: true,
    rating: 4.8,
    reviews: 97,
    sku: "SART-CCM-700",
    certifications: ["ISO 9001:2015", "cGMP Compliant", "FDA 21 CFR", "USP <1043>"]
  },

  /* ── Lab Instruments ── */
  'pipettes': {
    id: 'pipettes',
    name: 'Electronic Pipettes',
    brand: 'Sartorius',
    category: 'Lab Instruments',
    shortDesc: 'Ergonomic electronic pipettes with programmable dispensing for high-accuracy liquid handling.',
    fullDesc: `Sartorius electronic pipettes combine advanced motor-driven dispensing with intuitive programming, reducing repetitive strain and delivering consistent accuracy across every application. The lightweight SoftGrip® design, autoclavable lower part, and OLED display make these pipettes the preferred choice for high-throughput genomics, ELISA, and cell culture workflows.`,
    img: "https://images.pexels.com/photos/3735711/pexels-photo-3735711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/3735711/pexels-photo-3735711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      volumeRanges: "0.5 µL – 10 mL",
      channels: "Single, 8-channel, 12-channel",
      accuracy: "±0.6 % (at max volume)",
      cv: "< 0.2 %",
      battery: "Rechargeable Li-Ion, 8 h runtime",
      display: "OLED display",
      autoclavable: "Yes (tip ejector & lower part)",
      weight: "110 g – 170 g"
    },
    features: [
      "Programmable dispensing modes (pipette, multi-dispense, mix)",
      "Ergonomic lightweight design",
      "Autoclavable lower part",
      "USB charging dock",
      "Quiet motor for low noise",
      "SoftGrip® for reduced fatigue"
    ],
    applications: [
      "Genomics and PCR setup",
      "ELISA plate preparation",
      "Cell culture liquid handling",
      "Drug discovery workflows",
      "Clinical diagnostics"
    ],
    faqs: [
      { q: "Is the pipette compatible with universal tips?", a: "Sartorius pipettes are optimised for use with Sartorius tips for guaranteed accuracy, but are also compatible with most standard universal tips. Using certified tips is recommended for ISO 8655 compliance." },
      { q: "How long does the battery last on a full charge?", a: "A fully charged Li-Ion battery provides up to 8 hours of continuous use. The USB charging dock restores full charge in approximately 3 hours." }
    ],
    highlights: [
      { icon: "zap", label: "8-Hour Battery Life", desc: "All-day operation" },
      { icon: "shield", label: "ISO 8655 Compliant", desc: "Accuracy verified" },
      { icon: "layers", label: "0.5 µL – 10 mL", desc: "Full volume range" },
      { icon: "award", label: "2-Year Warranty", desc: "Instrument grade" }
    ],
    warranty: "2 years",
    leadTime: "1 week",
    inStock: true,
    rating: 4.8,
    reviews: 142,
    sku: "SART-PP-800",
    certifications: ["ISO 9001:2015", "CE Certified", "ISO 8655 Compliant"]
  },

  'water-purification': {
    id: 'water-purification',
    name: 'Water Purification Systems',
    brand: 'Sartorius',
    category: 'Lab Instruments',
    shortDesc: 'Integrated water purification systems delivering Type 1, 2, and 3 laboratory-grade water on demand.',
    fullDesc: `Sartorius water purification systems use multi-stage purification—RO, EDI, UV, and polishing—to supply ultrapure water meeting ASTM, ISO 3696, and CLRW standards for sensitive analytical and biological applications. Real-time quality monitoring, automatic sanitisation cycles, and mobile app connectivity make these systems the gold standard for modern laboratory water supply.`,
    img: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      waterQuality: "Type 1 (0.055 µS/cm), Type 2, Type 3",
      flowRate: "0.5 – 10 L/min",
      toc: "< 1 ppb (Type 1)",
      resistivity: "18.2 MΩ·cm at 25 °C",
      bacteria: "< 0.001 CFU/mL",
      endotoxin: "< 0.001 EU/mL",
      display: "7\" touchscreen",
      tankCapacity: "10 L – 200 L"
    },
    features: [
      "Multi-stage RO + EDI + UV + polishing",
      "Real-time water quality monitoring",
      "Automatic sanitisation cycle",
      "Data logging for 21 CFR Part 11",
      "Remote monitoring via mobile app",
      "Modular cartridge design for easy maintenance"
    ],
    applications: [
      "HPLC & LC-MS mobile phase",
      "Cell culture and media preparation",
      "Molecular biology (PCR, electrophoresis)",
      "Clinical chemistry analysers",
      "Glassware rinsing"
    ],
    faqs: [
      { q: "What is the difference between Type 1, 2, and 3 water?", a: "Type 1 (ultrapure, 18.2 MΩ·cm) is used for the most sensitive applications like LC-MS and molecular biology. Type 2 suits general analytical and microbiological use, and Type 3 is appropriate for glassware rinsing and feed water." },
      { q: "How often do cartridges need replacement?", a: "Cartridge life depends on feed water quality and usage volume, typically 6–12 months. The system provides predictive maintenance alerts via the touchscreen and mobile app." }
    ],
    highlights: [
      { icon: "zap", label: "18.2 MΩ·cm Purity", desc: "ASTM Type 1" },
      { icon: "shield", label: "< 1 ppb TOC", desc: "Trace organics free" },
      { icon: "globe", label: "Mobile App Control", desc: "Remote monitoring" },
      { icon: "award", label: "2-Year Warranty", desc: "System coverage" }
    ],
    warranty: "2 years",
    leadTime: "2–3 weeks",
    inStock: true,
    rating: 4.7,
    reviews: 58,
    sku: "SART-WP-180",
    certifications: ["ISO 9001:2015", "CE Certified", "ASTM Type 1 Compliant", "ISO 3696"]
  },

  /* ── Lab Consumables ── */
  'centrifuge-tubes': {
    id: 'centrifuge-tubes',
    name: 'Centrifuge Tubes & Conicals',
    brand: 'Sartorius',
    category: 'Lab Consumables',
    shortDesc: 'High-clarity centrifuge tubes and conicals manufactured for maximum integrity and sample recovery.',
    fullDesc: `Sartorius centrifuge tubes and conical tubes are manufactured from high-grade polypropylene, offering excellent chemical resistance, clarity, and leak-proof sealing for reliable sample processing. Non-cytotoxic certification, DNase/RNase-free manufacture, and gamma-irradiated sterility make these tubes suitable for the most sensitive molecular biology and clinical diagnostic workflows.`,
    img: "https://images.pexels.com/photos/4033146/pexels-photo-4033146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/4033146/pexels-photo-4033146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3735711/pexels-photo-3735711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      volumes: "1.5 mL, 2 mL, 15 mL, 50 mL",
      material: "Polypropylene (PP)",
      maxRCF: "Up to 30 000 × g",
      sterility: "Gamma-irradiated sterile",
      certification: "DNase/RNase-free, Pyrogen-free",
      closure: "Snap-cap or screw-cap",
      graduation: "Moulded volume markings",
      packFormat: "Bulk, rack, or individually bagged"
    },
    features: [
      "Leak-proof sealing",
      "High transparency for visual inspection",
      "Resistant to most common laboratory solvents",
      "Write-on area for labelling",
      "Stackable for storage efficiency",
      "Non-cytotoxic certified"
    ],
    applications: [
      "Sample centrifugation",
      "PCR and molecular biology",
      "Cell culture sample collection",
      "Clinical diagnostic workflows",
      "Biobanking and sample storage"
    ],
    faqs: [
      { q: "What is the maximum centrifugation speed?", a: "These tubes are rated for up to 30,000 × g RCF, making them suitable for high-speed microcentrifuge and benchtop centrifuge applications." },
      { q: "Are these tubes suitable for long-term sample storage?", a: "Yes, the polypropylene material and snap/screw-cap closures provide excellent chemical resistance and leak-proof sealing for long-term biobanking at −80 °C and in liquid nitrogen (vapour phase)." }
    ],
    highlights: [
      { icon: "zap", label: "Up to 30,000 × g", desc: "High-speed rated" },
      { icon: "shield", label: "DNase/RNase Free", desc: "Molecular biology ready" },
      { icon: "layers", label: "4 Volume Sizes", desc: "1.5 mL to 50 mL" },
      { icon: "award", label: "Gamma Sterile", desc: "Ready to use" }
    ],
    warranty: "Per lot specification",
    leadTime: "3–5 days",
    inStock: true,
    rating: 4.6,
    reviews: 230,
    sku: "SART-CT-150",
    certifications: ["ISO 9001:2015", "CE Marked", "USP Class VI", "ISO 10993"]
  }
};

/* ─── Brand Profile ─── */
const brandInfo = {
  Sartorius: {
    name: "Sartorius",
    tagline: "Turning Science Into Solutions",
    founded: "1870",
    hq: "Göttingen, Germany",
    employees: "17,000+",
    countries: "110+",
    description: "Sartorius is a leading international partner of the biopharmaceutical industry and research. With innovative laboratory instruments and consumables, Sartorius supports scientific research and pharmaceutical development — from promising molecules to approved medical treatments.",
    logo: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2",
    stats: [
      { label: "Years of Innovation", value: "150+", icon: "award" },
      { label: "Countries Served", value: "110+", icon: "globe" },
      { label: "Employees Worldwide", value: "17,000+", icon: "users" },
      { label: "R&D Investment", value: "~15%", icon: "trending" }
    ],
    website: "https://www.sartorius.com"
  }
};

/* ─── Recommendation Engine ─── */
const getRecommendedProducts = (product, allProducts) => {
  const sameCat = Object.values(allProducts).filter(p => p.category === product.category && p.id !== product.id);
  const diffCat = Object.values(allProducts).filter(p => p.category !== product.category && p.brand === product.brand);
  const combined = [...sameCat.slice(0, 2), ...diffCat.slice(0, 2)].slice(0, 4);
  return combined;
};

/* ─── Icon Helper ─── */
const getIcon = (name, size = 20) => {
  const icons = { zap: Zap, shield: Shield, globe: Globe, award: Award, layers: Layers, users: Users, trending: TrendingUp, microscope: Microscope };
  const Icon = icons[name] || Sparkles;
  return <Icon size={size} />;
};

/* ─── Auto-Scroll Gallery Component ─── */
const AutoScrollGallery = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isPlaying && !isMobile) {
      intervalRef.current = setInterval(() => setCurrentIndex(prev => (prev + 1) % images.length), 3500);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, images.length, isMobile]);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollAmount = currentIndex * (scrollRef.current.scrollWidth / images.length);
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  }, [currentIndex, images.length]);

  const nextImage = () => { setCurrentIndex(prev => (prev + 1) % images.length); setIsPlaying(false); };
  const prevImage = () => { setCurrentIndex(prev => (prev - 1 + images.length) % images.length); setIsPlaying(false); };

  return (
    <>
      <div className="relative">
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200">
          <img src={images[currentIndex]} alt={`${productName} - View ${currentIndex + 1}`}
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-contain" />
          <button onClick={prevImage} className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white transition-all">
            <ChevronLeft size={20} className="text-slate-700" />
          </button>
          <button onClick={nextImage} className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white transition-all">
            <ChevronRight size={20} className="text-slate-700" />
          </button>
          <div className="absolute bottom-3 right-3 flex gap-2">
            <button onClick={() => setIsPlaying(!isPlaying)} className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all">
              {isPlaying ? <Pause size={14} className="text-slate-700" /> : <Play size={14} className="text-slate-700" />}
            </button>
            <button onClick={() => setIsFullscreen(true)} className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all">
              <Maximize2 size={14} className="text-slate-700" />
            </button>
          </div>
          <div className="absolute bottom-3 left-3 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-700 text-xs">
            {currentIndex + 1} / {images.length}
          </div>
          <div className="absolute inset-x-0 bottom-12 flex justify-center sm:hidden">
            <div className="flex gap-1.5">
              {images.map((_, idx) => (
                <div key={idx} className={`h-1.5 rounded-full transition-all ${currentIndex === idx ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-400'}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden sm:block mt-4 relative">
          <div ref={scrollRef} className="flex gap-3 overflow-x-auto pb-2 image-scrollbar snap-x snap-mandatory">
            {images.map((img, idx) => (
              <button key={idx} onClick={() => { setCurrentIndex(idx); setIsPlaying(false); }}
                className={`relative flex-shrink-0 w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-lg overflow-hidden snap-start transition-all ${currentIndex === idx ? 'ring-2 ring-blue-500 ring-offset-2' : 'opacity-60 hover:opacity-100'}`}>
                <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isFullscreen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}>
            <button onClick={() => setIsFullscreen(false)} className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition z-10">
              <X size={20} />
            </button>
            <div className="relative w-full max-w-6xl">
              <img src={images[currentIndex]} alt={`Fullscreen ${currentIndex + 1}`} className="w-full h-auto max-h-[85vh] object-contain" />
              <button onClick={e => { e.stopPropagation(); prevImage(); }} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition">
                <ChevronLeft size={20} />
              </button>
              <button onClick={e => { e.stopPropagation(); nextImage(); }} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition">
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button key={idx} onClick={e => { e.stopPropagation(); setCurrentIndex(idx); }}
                  className={`h-2 rounded-full transition-all ${currentIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/40'}`} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ─── FAQ Accordion ─── */
const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
          className="border border-slate-200 rounded-xl overflow-hidden bg-white">
          <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-50 transition-colors">
            <span className="font-semibold text-slate-800 text-sm sm:text-base pr-4">{faq.q}</span>
            <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
              <ChevronDown size={18} className="text-blue-600" />
            </motion.div>
          </button>
          <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
            <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
              {faq.a}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/* ─── Main Component ─── */
const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSpec, setActiveSpec] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeDetailTab, setActiveDetailTab] = useState('overview');

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const smoothScrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    setLoading(true);
    setTimeout(() => {
      const found = productData[productId] || productData['analytical-balances'];
      setProduct(found);
      setLoading(false);
    }, 500);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [productId]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center">
          <div className="text-center">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full border-2 border-blue-200 border-t-blue-600" />
            <p className="text-slate-600 font-sans text-base sm:text-lg">Loading Premium Experience...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const brand = brandInfo[product.brand];
  const brandProducts = Object.values(productData).filter(p => p.brand === product.brand && p.id !== product.id).slice(0, 6);
  const recommendedProducts = getRecommendedProducts(product, productData);

  const detailTabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'specs', label: 'Specifications', icon: Settings },
    { id: 'features', label: 'Features', icon: Sparkles },
    { id: 'faqs', label: 'FAQs', icon: MessageCircle }
  ];

  return (
    <>
      <FontLink />
      <Navbar />
      <div ref={containerRef} className="bg-white font-sans">

        {/* ── Hero Section ── */}
        <section className="relative min-h-[90vh] flex items-center py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-sky-100/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

              {/* Gallery */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <AutoScrollGallery images={product.gallery} productName={product.name} />
              </motion.div>

              {/* Product Info */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-slate-800">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs sm:text-sm mb-4 text-slate-500">
                  <button onClick={() => navigate('/')} className="hover:text-blue-600 transition">Home</button>
                  <ChevronRight size={12} />
                  <button onClick={() => navigate('/products')} className="hover:text-blue-600 transition">Products</button>
                  <ChevronRight size={12} />
                  <span className="text-slate-700">{product.category}</span>
                </div>

                {/* Brand & Rating */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold tracking-wider border border-blue-200">
                    {product.brand}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-300"} />
                    ))}
                    <span className="text-slate-500 text-xs sm:text-sm ml-1">({product.reviews} reviews)</span>
                  </div>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight text-slate-900">
                  <span className="gradient-text">{product.name}</span>
                </h1>
                <p className="text-slate-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">{product.shortDesc}</p>

                {/* Highlights */}
                {product.highlights && (
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {product.highlights.map((h, i) => (
                      <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                        <div className="text-blue-600 flex-shrink-0">{getIcon(h.icon, 16)}</div>
                        <div>
                          <p className="text-slate-800 text-xs font-semibold leading-tight">{h.label}</p>
                          <p className="text-slate-500 text-xs">{h.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* SKU & Stock */}
                <div className="flex flex-wrap gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <Package size={14} className="text-blue-600" />
                    <span className="text-slate-500 text-xs sm:text-sm">SKU: <span className="text-slate-700 font-medium">{product.sku}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
                    <span className="text-slate-600 text-xs sm:text-sm">{product.inStock ? 'In Stock' : 'Made to Order'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-blue-600" />
                    <span className="text-slate-500 text-xs sm:text-sm">Lead time: <span className="text-slate-700">{product.leadTime}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={14} className="text-blue-600" />
                    <span className="text-slate-500 text-xs sm:text-sm">Warranty: <span className="text-slate-700">{product.warranty}</span></span>
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {product.certifications.map((cert, i) => (
                    <span key={i} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-50 rounded-lg text-xs text-blue-700 border border-blue-200 flex items-center gap-1.5">
                      <BadgeCheck size={12} className="text-blue-600" />{cert}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
                  <button onClick={() => smoothScrollTo("contact")}
                    className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-700 to-sky-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all text-sm sm:text-base glow-effect focus:outline-none focus:ring-2 focus:ring-sky-400">
                    <Mail size={16} />Contact Us
                  </button>
                  <button onClick={() => smoothScrollTo("contact")}
                    className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 active:bg-blue-100 transition-all text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <Phone size={16} />Request a Quote
                  </button>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-slate-200">
                  <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition text-xs sm:text-sm"><Phone size={14} /><span>Call Expert</span></button>
                  <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition text-xs sm:text-sm"><MessageCircle size={14} /><span>Live Chat</span></button>
                  <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition text-xs sm:text-sm"><Share2 size={14} /><span>Share</span></button>
                  <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition text-xs sm:text-sm"><Download size={14} /><span>Datasheet</span></button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div style={{ opacity }} className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="text-slate-400 text-xs tracking-widest uppercase">Scroll</span>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-slate-400">
                <ChevronRight size={16} className="rotate-90" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ── Tabbed Detail Section ── */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Product <span className="gradient-text">Details</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base">Everything you need to know about this product</p>
            </motion.div>

            {/* Tabs */}
            <div className="flex gap-1 sm:gap-2 mb-8 overflow-x-auto pb-1 border-b border-slate-200">
              {detailTabs.map(tab => {
                const Icon = tab.icon;
                const isActive = activeDetailTab === tab.id;
                return (
                  <button key={tab.id} onClick={() => setActiveDetailTab(tab.id)}
                    className={`flex items-center gap-2 px-4 sm:px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all rounded-t-lg tab-underline ${isActive ? 'text-blue-700 bg-white shadow-sm active' : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'}`}>
                    <Icon size={15} />{tab.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              {/* Overview Tab */}
              {activeDetailTab === 'overview' && (
                <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                  <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                    <div className="lg:col-span-2">
                      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-4">About This Product</h3>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{product.fullDesc}</p>
                        <div className="mt-6 pt-6 border-t border-slate-100">
                          <h4 className="font-semibold text-slate-800 mb-3 text-sm sm:text-base">Applications</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {product.applications.map((app, i) => (
                              <div key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />{app}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6">
                        <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2 text-sm sm:text-base">
                          <Truck size={16} className="text-blue-600" />Shipping & Delivery
                        </h4>
                        <div className="space-y-3 text-sm text-slate-600">
                          <div className="flex items-start gap-2"><Clock size={14} className="text-blue-500 mt-0.5 flex-shrink-0" /><span>Lead time: <strong className="text-slate-800">{product.leadTime}</strong></span></div>
                          <div className="flex items-start gap-2"><Package size={14} className="text-blue-500 mt-0.5 flex-shrink-0" /><span>Professional packaging with foam inserts</span></div>
                          <div className="flex items-start gap-2"><Shield size={14} className="text-blue-500 mt-0.5 flex-shrink-0" /><span>Fully insured shipping</span></div>
                          <div className="flex items-start gap-2"><Award size={14} className="text-blue-500 mt-0.5 flex-shrink-0" /><span>Factory calibration certificate included</span></div>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6">
                        <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2 text-sm sm:text-base">
                          <HeartHandshake size={16} className="text-blue-600" />Support & Warranty
                        </h4>
                        <div className="space-y-3 text-sm text-slate-600">
                          <div className="flex items-start gap-2"><Shield size={14} className="text-blue-500 mt-0.5 flex-shrink-0" /><span>Warranty: <strong className="text-slate-800">{product.warranty}</strong></span></div>
                          <div className="flex items-start gap-2"><Phone size={14} className="text-blue-500 mt-0.5 flex-shrink-0" /><span>Dedicated technical support team</span></div>
                          <div className="flex items-start gap-2"><FileText size={14} className="text-blue-500 mt-0.5 flex-shrink-0" /><span>On-site installation & commissioning</span></div>
                          <div className="flex items-start gap-2"><Sparkles size={14} className="text-blue-500 mt-0.5 flex-shrink-0" /><span>Annual maintenance contracts available</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Specifications Tab */}
              {activeDetailTab === 'specs' && (
                <motion.div key="specs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {Object.entries(product.specifications).map(([key, value], i) => (
                      <motion.div key={key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
                        className="relative group cursor-pointer" onMouseEnter={() => setActiveSpec(key)} onMouseLeave={() => setActiveSpec(null)}>
                        <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 bg-white border ${activeSpec === key ? 'border-blue-300 shadow-lg' : 'border-slate-200 shadow-sm'}`}>
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                              <p className="text-slate-800 text-base sm:text-lg font-semibold">{value}</p>
                            </div>
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${activeSpec === key ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                              <Settings size={14} />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Features Tab */}
              {activeDetailTab === 'features' && (
                <motion.div key="features" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.features.map((feature, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Check size={16} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="text-slate-800 font-medium text-sm sm:text-base">{feature}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* FAQs Tab */}
              {activeDetailTab === 'faqs' && (
                <motion.div key="faqs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                  <div className="max-w-3xl mx-auto">
                    <FAQAccordion faqs={product.faqs} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ── Brand Section ── */}
        {brand && (
          <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-4">
                  <Building2 size={14} className="text-blue-600" />
                  <span className="text-blue-700 text-xs font-semibold tracking-wider uppercase">About the Brand</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  More from <span className="gradient-text">{brand.name}</span>
                </h2>
                <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">{brand.tagline}</p>
              </motion.div>

              {/* Brand Profile Card */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="brand-card-gradient rounded-2xl sm:rounded-3xl border border-blue-100 overflow-hidden mb-10 sm:mb-12">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Brand Info */}
                  <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white border border-blue-200 flex items-center justify-center shadow-sm flex-shrink-0 float-anim">
                        <span className="font-serif text-xl sm:text-2xl font-bold gradient-text">{brand.name[0]}</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">{brand.name}</h3>
                        <p className="text-slate-500 text-sm">{brand.tagline}</p>
                        <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-500">
                          <span>Founded: <strong className="text-slate-700">{brand.founded}</strong></span>
                          <span>HQ: <strong className="text-slate-700">{brand.hq}</strong></span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">{brand.description}</p>
                    <a href={brand.website} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-700 text-white text-sm font-semibold rounded-xl hover:bg-blue-800 transition">
                      <Globe size={14} />Visit Brand Website<ExternalLink size={12} />
                    </a>
                  </div>
                  {/* Brand Stats */}
                  <div className="lg:col-span-2 bg-white/60 border-t lg:border-t-0 lg:border-l border-blue-100 p-6 sm:p-8 flex flex-col justify-center">
                    <h4 className="font-semibold text-slate-700 mb-5 text-sm uppercase tracking-wider">Brand at a Glance</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {brand.stats.map((stat, i) => (
                        <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                          className="bg-white rounded-xl p-4 border border-blue-100 text-center shadow-sm">
                          <div className="text-blue-600 flex justify-center mb-1">{getIcon(stat.icon, 18)}</div>
                          <p className="font-serif text-xl sm:text-2xl font-bold text-slate-900">{stat.value}</p>
                          <p className="text-slate-500 text-xs mt-0.5">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Brand Products Grid */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <Tag size={20} className="text-blue-600" />All {brand.name} Products
                  </h3>
                  <button onClick={() => navigate('/products')}
                    className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    View All <ArrowRight size={14} />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {brandProducts.map((item, i) => (
                    <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      onClick={() => navigate(`/product/${item.id}`)}
                      className="group flex gap-4 bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer">
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        {!item.inStock && (
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <span className="text-white text-[9px] font-bold bg-yellow-500 px-1.5 py-0.5 rounded">MTO</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-blue-600 font-medium mb-0.5">{item.category}</p>
                        <h4 className="font-semibold text-slate-900 text-sm sm:text-base leading-tight mb-1 group-hover:text-blue-700 transition-colors line-clamp-2">{item.name}</h4>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, s) => (
                            <Star key={s} size={10} className={s < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-200"} />
                          ))}
                          <span className="text-slate-400 text-xs ml-0.5">({item.reviews})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${item.inStock ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${item.inStock ? 'bg-green-500' : 'bg-yellow-500'}`} />
                            {item.inStock ? 'In Stock' : 'MTO'}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Recommended Products Section ── */}
        {recommendedProducts.length > 0 && (
          <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-4">
                  <ThumbsUp size={14} className="text-amber-600" />
                  <span className="text-amber-700 text-xs font-semibold tracking-wider uppercase">Recommended For You</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  You May Also <span className="gradient-text-warm">Like</span>
                </h2>
                <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
                  Curated products from the same category and complementary product lines
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {recommendedProducts.map((item, i) => (
                  <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="recommended-card group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all cursor-pointer">

                    {/* Image */}
                    <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                      <img src={item.img} alt={item.name} className="rec-img w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        <span className="px-2 py-0.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700 shadow-sm">
                          {item.brand}
                        </span>
                        {item.rating >= 4.8 && (
                          <span className="px-2 py-0.5 bg-amber-500 rounded-full text-xs font-bold text-white flex items-center gap-1">
                            <Star size={8} className="fill-white" />Top Rated
                          </span>
                        )}
                      </div>
                      {/* Quick category tag */}
                      <div className="absolute bottom-2 left-3">
                        <span className="text-xs text-white/90 font-medium bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">{item.category}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-4 sm:p-5">
                      <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-blue-700 transition-colors leading-tight">{item.name}</h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3 flex-1">{item.shortDesc}</p>

                      {/* Rating & Stock */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, s) => (
                            <Star key={s} size={11} className={s < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-200"} />
                          ))}
                          <span className="text-slate-400 text-xs ml-0.5">{item.rating}</span>
                        </div>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.inStock ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                          {item.inStock ? 'In Stock' : 'MTO'}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button onClick={e => { e.stopPropagation(); navigate(`/product/${item.id}`); }}
                          className="flex-1 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white text-xs font-semibold rounded-lg hover:shadow-md hover:shadow-blue-200 transition flex items-center justify-center gap-1">
                          View Details <ArrowRight size={12} />
                        </button>
                        <button onClick={e => { e.stopPropagation(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                          className="px-3 py-2 border border-blue-200 text-blue-700 text-xs font-semibold rounded-lg hover:bg-blue-50 transition flex items-center justify-center">
                          <Mail size={12} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA Banner ── */}
        <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
              <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Laboratory" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 blue-overlay" />
              <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                    Ready to Elevate Your Laboratory?
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                    Get personalised consultation and exclusive pricing for your requirements. Our experts are ready to help.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-700 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 text-sm sm:text-base">
                      <Mail size={16} />Contact Us
                    </button>
                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/80 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 text-sm sm:text-base">
                      <Phone size={16} />Request Callback
                    </button>
                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/80 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 text-sm sm:text-base">
                      <FileText size={16} />Download Datasheet
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-50">
              <ArrowRight size={18} className="rotate-[-90deg]" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;