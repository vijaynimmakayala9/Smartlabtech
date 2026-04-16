import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Blog data (in a real app, this would come from an API)
const blogPosts = {
    1: {
        title: "Introduction to Gas Chromatography",
        content: `
            Gas chromatography (GC) is an analytical technique used to separate and analyze compounds that can be vaporized without decomposition. 
            It is widely used in laboratories for quality control, research, and environmental monitoring.
            
            The process involves injecting a sample into a heated inlet where it is vaporized and carried by an inert gas (the mobile phase) 
            through a column coated with a stationary phase. Different compounds interact differently with the stationary phase, 
            causing them to elute at different times, known as retention times.
            
            GC is essential in pharmaceutical testing, food safety analysis, environmental monitoring, and forensic science.
        `,
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        date: "March 10, 2026",
        category: "Technology",
        readTime: "5 min read",
        author: "Dr. Sarah Chen",
        authorRole: "Senior Chromatography Specialist",
        authorImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    2: {
        title: "Importance of Calibration in Labs",
        content: `
            Calibration ensures that laboratory instruments produce accurate and reliable results. Regular calibration is crucial for maintaining 
            compliance with industry standards and regulatory requirements.
            
            Without proper calibration, measurements can drift over time due to factors like wear and tear, environmental changes, or component aging. 
            This can lead to inaccurate results, failed audits, and compromised research integrity.
            
            Best practices include establishing calibration schedules, using certified reference materials, maintaining detailed records, 
            and training staff on proper procedures.
        `,
        img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa",
        date: "March 5, 2026",
        category: "Insights",
        readTime: "4 min read",
        author: "Prof. Michael Rodriguez",
        authorRole: "Quality Assurance Expert",
        authorImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    3: {
        title: "Top Laboratory Equipment Trends",
        content: `
            The laboratory equipment industry is rapidly evolving with automation, AI integration, and IoT connectivity. 
            Smart labs are becoming the norm, with instruments that can self-diagnose, predict maintenance needs, and integrate with LIMS systems.
            
            Key trends include miniaturization for point-of-care testing, green lab initiatives reducing solvent consumption, 
            and cloud-based data management enabling remote monitoring and collaboration.
            
            Laboratories adopting these technologies see improved efficiency, reduced errors, and faster time-to-results.
        `,
        img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
        date: "Feb 28, 2026",
        category: "Updates",
        readTime: "6 min read",
        author: "Emma Watson",
        authorRole: "Lab Technology Analyst",
        authorImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    4: {
        title: "How to Maintain Lab Equipment",
        content: `
            Proper maintenance extends equipment lifespan and ensures consistent performance. A proactive maintenance program includes daily, weekly, 
            monthly, and annual tasks tailored to each instrument type.
            
            Essential practices include regular cleaning, filter replacement, software updates, performance verification, and calibration checks. 
            Documentation of all maintenance activities is crucial for audits and troubleshooting.
            
            Partnering with OEM-certified service providers can reduce downtime and ensure access to genuine parts and expert support.
        `,
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        date: "Feb 20, 2026",
        category: "Maintenance",
        readTime: "7 min read",
        author: "David Kim",
        authorRole: "Field Service Engineer",
        authorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    5: {
        title: "Spectrometry: The Future of Analysis",
        content: `
            Mass spectrometry has revolutionized molecular analysis with unprecedented sensitivity and specificity. 
            Modern MS instruments can detect compounds at parts-per-trillion levels and identify thousands of molecules in a single run.
            
            Applications range from proteomics and metabolomics to environmental screening and clinical diagnostics. 
            The combination of MS with chromatography (GC-MS, LC-MS) provides both separation and identification power.
            
            Recent advances include high-resolution MS for unknown identification, ion mobility for isobaric separation, 
            and ambient ionization for direct sample analysis.
        `,
        img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa",
        date: "Feb 15, 2026",
        category: "Technology",
        readTime: "5 min read",
        author: "Dr. Lisa Patel",
        authorRole: "Analytical Chemist",
        authorImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    },
    6: {
        title: "Lab Safety Protocols",
        content: `
            Laboratory safety is paramount in any research or testing environment. A comprehensive safety program includes chemical hygiene plans, 
            personal protective equipment (PPE) requirements, emergency response procedures, and regular training.
            
            Key elements include proper chemical storage, fume hood usage, waste disposal protocols, and ergonomic considerations. 
            Safety data sheets (SDS) must be accessible for all chemicals, and safety showers/eyewash stations should be regularly tested.
            
            A strong safety culture, where all team members feel empowered to speak up about concerns, reduces incidents and improves overall lab operations.
        `,
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        date: "Feb 10, 2026",
        category: "Safety",
        readTime: "4 min read",
        author: "James Wilson",
        authorRole: "Lab Safety Officer",
        authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
};

const BlogDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        const blogData = blogPosts[id];
        if (blogData) {
            setBlog(blogData);
            // Get related posts from same category
            const related = Object.entries(blogPosts)
                .filter(([key, post]) => key !== id && post.category === blogData.category)
                .slice(0, 3)
                .map(([key, post]) => ({ id: parseInt(key), ...post }));
            setRelatedPosts(related);
        }
    }, [id]);

    if (!blog) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0f2356] mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading article...</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="bg-gray-50">
                {/* Hero Section */}
                <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
                    <img
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-6 pb-12 text-white">
                        <div className="flex items-center gap-3 text-sm mb-4">
                            <span className="px-3 py-1 bg-[#2563eb] rounded-full text-white font-semibold">
                                {blog.category}
                            </span>
                            <span>{blog.date}</span>
                            <span>•</span>
                            <span>{blog.readTime}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            {blog.title}
                        </h1>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-4xl mx-auto px-6 py-12 lg:py-16">
                    {/* Author Info */}
                    <div className="flex items-center gap-4 mb-10 pb-8 border-b border-gray-200">
                        <img
                            src={blog.authorImg}
                            alt={blog.author}
                            className="w-14 h-14 rounded-full object-cover"
                        />
                        <div>
                            <p className="font-semibold text-gray-900">{blog.author}</p>
                            <p className="text-sm text-gray-500">{blog.authorRole}</p>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none">
                        {blog.content.split('\n\n').map((paragraph, idx) => (
                            <p key={idx} className="text-gray-700 leading-relaxed mb-6">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Share Section */}
                    <div className="flex flex-wrap justify-between items-center mt-12 pt-8 border-t border-gray-200">
                        <div className="flex items-center gap-3">
                            <span className="text-gray-500 text-sm">Share this article:</span>
                            <div className="flex gap-2">
                                {["LinkedIn", "Twitter", "Facebook"].map((platform) => (
                                    <button
                                        key={platform}
                                        className="px-4 py-2 bg-gray-100 hover:bg-[#0f2356] hover:text-white rounded-lg text-sm transition-colors"
                                    >
                                        {platform}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={() => navigate('/blogs')}
                            className="text-[#0f2356] font-medium hover:underline flex items-center gap-1"
                        >
                            ← Back to all articles
                        </button>
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedPosts.map((post) => (
                                    <div
                                        key={post.id}
                                        onClick={() => navigate(`/blog/${post.id}`)}
                                        className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all group"
                                    >
                                        <img
                                            src={post.img}
                                            alt={post.title}
                                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="p-4">
                                            <span className="text-xs text-[#2563eb] font-semibold">{post.category}</span>
                                            <h3 className="font-semibold text-gray-900 mt-1 line-clamp-2">{post.title}</h3>
                                            <span className="text-xs text-gray-400 mt-2 block">{post.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-[#0f2356] to-[#2563eb] mt-12">
                    <div className="max-w-4xl mx-auto text-center py-16 px-6">
                        <h2 className="text-3xl font-bold text-white mb-3">
                            Need Laboratory Solutions?
                        </h2>
                        <p className="text-blue-100 mb-8">
                            Our experts are ready to help you find the right equipment and support.
                        </p>
                        <button className="bg-white text-[#0f2356] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                            Contact Our Team
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default BlogDetailsPage;