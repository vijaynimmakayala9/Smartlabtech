import React from "react";
import tree from "../assets/tree.png";
import sartorius from "../assets/Logos/sartorius.png";
import horiba from "../assets/Logos/horiba.png";
import memmert from "../assets/Logos/memmert.png";
import velp from "../assets/Logos/velp.png";
import brookfield from "../assets/Logos/brookfield.png";
import bs from "../assets/Logos/bellingham.png";
import scion from "../assets/Logos/scion.png";
import spectro from "../assets/Logos/spectro.png";
import escomedical from "../assets/Logos/esco.png";
import vacuubrand from "../assets/Logos/vaccuband.png";
import nabertherm from "../assets/Logos/nabertherm.png";
import waters from "../assets/Logos/waters.png";
import plaslabs from "../assets/Logos/plaslabs.png";
import esco from "../assets/Logos/escolife.png";
import buchi from "../assets/Logos/buchi.png";
import zeiss from "../assets/Logos/zeiss.png";
import analytikjena from "../assets/Logos/alaytikjena.png";
import arctiko from "../assets/Logos/arctiko.png";

// Original container dimensions: 620px × 660px
const CONTAINER_W = 620;
const CONTAINER_H = 660;

// Helper to convert px to percentage
const toPct = (px, total) => `${(px / total) * 100}%`;

const logos = [
    // Top
    { name: "SARTORIUS", img: sartorius, top: "15%", left: "50%", bg: "#ffe600", link: "https://www.sartorius.com/en" },

    // Row 2
    { name: "HORIBA", img: horiba, top: "22%", left: "34%", link: "https://www.horiba.com/en/" },
    { name: "MEMMERT", img: memmert, top: "22%", left: "66%", link: "https://www.memmert.de/en/" },

    // Row 3
    { name: "BS", img: bs, top: "28%", left: "42%", link: "https://www.bellingham.com/" },
    { name: "SCION", img: scion, top: "28%", left: "58%", link: "https://www.scioninstrument.com/" },

    // Row 4
    { name: "VELP", img: velp, top: "33%", left: "25%", link: "https://www.velp.com/" },
    { name: "ESCO MEDICAL", img: escomedical, top: "40%", left: "50%", link: "https://www.escomedical.com/" },
    { name: "BROOKFIELD", img: brookfield, top: "33%", left: "75%", link: "https://www.brookfield.com/" },

    // Row 5
    { name: "NABERTHERM", img: nabertherm, top: "48%", left: "14%", link: "https://www.nabertherm.com/" },
    { name: "SPECTRO", img: spectro, top: "42%", left: "34%", link: "https://www.spectroanalytical.in/" },
    { name: "VACUUBRAND", img: vacuubrand, top: "42%", left: "66%", link: "https://www.vacuubrand.com/" },
    { name: "WATERS", img: waters, top: "48%", left: "86%", link: "https://www.waters.com/" },

    // Row 6
    { name: "PLAS LABS", img: plaslabs, top: "50%", left: "50%", link: "https://www.plaslabs.com/" },
    { name: "ESCO", img: esco, top: "52%", left: "70%", link: "https://www.esco.com/" },

    // Bottom
    { name: "ARCTIKO", img: arctiko, top: "52%", left: "29%", link: "https://www.arctiko.com/" },
    { name: "BUCHI", img: buchi, top: "60%", left: "30%", link: "https://www.buchi.com/" },
    { name: "ZEISS", img: zeiss, top: "60%", left: "48%", link: "https://www.zeiss.com/" },
    { name: "ANALYTIKJENA", img: analytikjena, top: "60%", left: "66%", link: "https://www.analytikjena.com/" },
];

// Spacers converted to percentages
const spacers = [
    { top: toPct(60, CONTAINER_H), left: toPct(130, CONTAINER_W), w: toPct(90, CONTAINER_W), h: toPct(60, CONTAINER_H) },
    { top: toPct(10, CONTAINER_H), left: toPct(320, CONTAINER_W), w: toPct(90, CONTAINER_W), h: toPct(70, CONTAINER_H) },
    { top: toPct(160, CONTAINER_H), left: toPct(80, CONTAINER_W), w: toPct(100, CONTAINER_W), h: toPct(70, CONTAINER_H) },
    { top: toPct(190, CONTAINER_H), left: toPct(220, CONTAINER_W), w: toPct(80, CONTAINER_W), h: toPct(60, CONTAINER_H) },
    { top: toPct(260, CONTAINER_H), left: toPct(440, CONTAINER_W), w: toPct(110, CONTAINER_W), h: toPct(80, CONTAINER_H) },
    { top: toPct(240, CONTAINER_H), left: toPct(130, CONTAINER_W), w: toPct(100, CONTAINER_W), h: toPct(70, CONTAINER_H) },
    { top: toPct(100, CONTAINER_H), left: toPct(430, CONTAINER_W), w: toPct(90, CONTAINER_W), h: toPct(70, CONTAINER_H) },
];

export default function LabTechTree() {
    return (
        <div className="w-full flex items-center justify-center bg-transparent p-2 sm:p-4">
            {/* Responsive container with aspect ratio */}
            <div
                className="relative w-full max-w-[620px] mx-auto bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xl"
                style={{ aspectRatio: "620 / 660" }}
            >
                {/* Background Tree - responsive */}
                <div className="absolute inset-0 z-0 flex justify-center items-end pointer-events-none">
                    <img
                        src={tree}
                        alt="Tree Branches"
                        className="w-[92%] h-auto select-none opacity-95 object-contain"
                        loading="lazy"
                    />
                </div>

                {/* Spacer Bubbles - decorative, hidden on small screens */}
                {spacers.map((s, i) => (
                    <div
                        key={`spacer-${i}`}
                        className="absolute bg-white/60 backdrop-blur-[1px] border border-gray-50/50 z-10 hidden sm:block"
                        style={{
                            top: s.top,
                            left: s.left,
                            width: s.w,
                            height: s.h,
                            borderRadius: "9999px",
                        }}
                    />
                ))}

                {/* Logo Bubbles - positioned as leaves */}
                <div className="relative z-20 w-full h-full">
                    {logos.map((logo, index) => (
                        <button
                            key={index}
                            className="absolute flex items-center justify-center transition-all duration-300 hover:scale-110 hover:z-40 focus:scale-110 focus:z-40 cursor-pointer group outline-none"
                            style={{
                                top: logo.top,
                                left: logo.left,
                                // Center the bubble at the coordinate point
                                transform: "translate(-50%, -50%)",
                                width: "clamp(50px, 14vw, 100px)",
                                height: "clamp(50px, 14vw, 100px)",
                            }}
                            onClick={() => window.open(logo.link, "_blank")}
                            aria-label={`Visit ${logo.name} website`}
                            type="button"
                        >
                            {/* Oval Bubble Background */}
                            <div
                                className="absolute inset-0 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-gray-700/80 group-hover:border-blue-300/60 group-hover:shadow-[0_8px_24px_rgba(59,130,246,0.15)] transition-all rounded-full"
                                style={{
                                    backgroundColor: logo.bg || "#ffffff",
                                    backgroundImage: "radial-gradient(circle at 35% 35%, #ffffff 0%, #f8fbff 100%)",
                                }}
                            />

                            {/* Logo Image - responsive sizing */}
                            <img
                                src={logo.img}
                                alt={logo.name}
                                className="relative z-30 max-h-[35%] max-w-[85%] object-contain px-2 sm:px-3 transition-transform group-hover:scale-105"
                                loading="lazy"
                            />

                            {/* Subtle hover glow */}
                            <div className="absolute inset-0 rounded-[9999px] bg-blue-400/0 group-hover:bg-blue-400/10 transition-colors" />
                        </button>
                    ))}
                </div>

                {/* Optional: Subtle animated leaf particles for visual polish */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={`particle-${i}`}
                            className="absolute w-1.5 h-1.5 bg-blue-300/20 rounded-full animate-pulse"
                            style={{
                                top: `${15 + i * 12}%`,
                                left: `${10 + i * 14}%`,
                                animationDelay: `${i * 0.4}s`,
                                animationDuration: "3s",
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}