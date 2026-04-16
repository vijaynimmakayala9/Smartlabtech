import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const blogs = [
    {
        id: 1,
        title: "Introduction to Gas Chromatography",
        desc: "Learn how gas chromatography helps detect substances in laboratories with precision and speed.",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        date: "March 10, 2026",
        category: "Technology",
        readTime: "5 min read",
        featured: true,
    },
    {
        id: 2,
        title: "Importance of Calibration in Labs",
        desc: "Why calibration ensures accurate and reliable lab results for critical research.",
        img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa",
        date: "March 5, 2026",
        category: "Insights",
        readTime: "4 min read",
        featured: false,
    },
    {
        id: 3,
        title: "Top Laboratory Equipment Trends",
        desc: "Discover the latest innovations in lab technology shaping the future of science.",
        img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
        date: "Feb 28, 2026",
        category: "Updates",
        readTime: "6 min read",
        featured: false,
    },
    {
        id: 4,
        title: "How to Maintain Lab Equipment",
        desc: "Best practices to increase equipment lifespan and maintain peak performance.",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        date: "Feb 20, 2026",
        category: "Maintenance",
        readTime: "7 min read",
        featured: false,
    },
    {
        id: 5,
        title: "Spectrometry: The Future of Analysis",
        desc: "Exploring how mass spectrometry is revolutionizing molecular analysis.",
        img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa",
        date: "Feb 15, 2026",
        category: "Technology",
        readTime: "5 min read",
        featured: false,
    },
    {
        id: 6,
        title: "Lab Safety Protocols",
        desc: "Essential safety measures every laboratory must implement.",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        date: "Feb 10, 2026",
        category: "Safety",
        readTime: "4 min read",
        featured: false,
    },
];

const categories = ["All", "Technology", "Insights", "Maintenance", "Updates", "Safety"];

const BlogsPage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredBlogs = blogs.filter((blog) => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             blog.desc.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const featuredBlog = blogs.find(blog => blog.featured);
    const regularBlogs = filteredBlogs.filter(blog => !blog.featured);

    const handleBlogClick = (blogId) => {
        navigate(`/blogDetails/${blogId}`);
    };

    return (
        <>
            <Navbar />
            <main className="bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section - Premium */}
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#0f2356] to-[#1e3a8a] text-white">
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
                    <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
                        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
                            Knowledge Hub
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            Insights & Innovations
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
                            Expert perspectives on laboratory technology, industry trends, and scientific breakthroughs.
                        </p>
                    </div>
                    {/* Decorative elements */}
                    {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div> */}
                </div>

                <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
                    {/* Search and Filter Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        activeCategory === category
                                            ? "bg-[#0f2356] text-white shadow-lg shadow-blue-900/20"
                                            : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-80">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0f2356] focus:border-transparent transition-all"
                            />
                            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Main Content - Blog Posts */}
                        <div className="lg:col-span-2 space-y-10">
                            {/* Featured Blog - Premium Card */}
                            {featuredBlog && (
                                <div
                                    onClick={() => handleBlogClick(featuredBlog.id)}
                                    className="group cursor-pointer bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                                >
                                    <div className="relative h-80 overflow-hidden">
                                        <img
                                            src={featuredBlog.img}
                                            alt={featuredBlog.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0f2356] text-xs font-semibold rounded-full">
                                                Featured
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                            <span className="text-[#2563eb] font-semibold">{featuredBlog.category}</span>
                                            <span>•</span>
                                            <span>{featuredBlog.date}</span>
                                            <span>•</span>
                                            <span>{featuredBlog.readTime}</span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#0f2356] transition-colors">
                                            {featuredBlog.title}
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed">{featuredBlog.desc}</p>
                                        <div className="mt-6 flex items-center text-[#0f2356] font-medium">
                                            Read Article
                                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Blog Grid */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                {regularBlogs.map((blog) => (
                                    <div
                                        key={blog.id}
                                        onClick={() => handleBlogClick(blog.id)}
                                        className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={blog.img}
                                                alt={blog.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                                                <span className="text-[#2563eb] font-semibold">{blog.category}</span>
                                                <span>•</span>
                                                <span>{blog.readTime}</span>
                                            </div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#0f2356] transition-colors line-clamp-2">
                                                {blog.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm line-clamp-2">{blog.desc}</p>
                                            <div className="mt-4 flex justify-between items-center">
                                                <span className="text-xs text-gray-400">{blog.date}</span>
                                                <span className="text-[#0f2356] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                                    Read more →
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {regularBlogs.length === 0 && (
                                <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
                                    <p className="text-gray-500">No articles found matching your criteria.</p>
                                </div>
                            )}
                        </div>

                        {/* Sidebar - Premium */}
                        <div className="space-y-8">
                            {/* Newsletter Card */}
                            <div className="bg-gradient-to-br from-[#0f2356] to-[#1e3a8a] rounded-2xl p-6 text-white shadow-xl">
                                <h3 className="text-xl font-bold mb-2">Newsletter</h3>
                                <p className="text-blue-100 text-sm mb-4">Get the latest insights delivered to your inbox.</p>
                                <div className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                                    />
                                    <button className="w-full bg-white text-[#0f2356] font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                        Subscribe
                                    </button>
                                </div>
                            </div>

                            {/* Categories Card */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#0f2356]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l5 5a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-5-5A2 2 0 013 13V7a2 2 0 012-2z" />
                                    </svg>
                                    Categories
                                </h3>
                                <div className="space-y-2">
                                    {categories.slice(1).map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveCategory(cat)}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                                activeCategory === cat
                                                    ? "bg-[#0f2356]/10 text-[#0f2356] font-medium"
                                                    : "text-gray-600 hover:bg-gray-50"
                                            }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Posts Card */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#0f2356]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Recent Posts
                                </h3>
                                <div className="space-y-4">
                                    {blogs.slice(0, 4).map((blog) => (
                                        <div
                                            key={blog.id}
                                            onClick={() => handleBlogClick(blog.id)}
                                            className="flex gap-3 cursor-pointer group"
                                        >
                                            <img
                                                src={blog.img}
                                                alt={blog.title}
                                                className="w-16 h-16 rounded-lg object-cover group-hover:opacity-90 transition"
                                            />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-900 group-hover:text-[#0f2356] transition-colors line-clamp-2">
                                                    {blog.title}
                                                </p>
                                                <span className="text-xs text-gray-400">{blog.date}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Popular Tags */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["HPLC", "GC-MS", "Lab Safety", "Calibration", "Spectrometry", "Quality Control"].map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-[#0f2356] hover:text-white cursor-pointer transition-colors">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section - Premium */}
                <div className="relative overflow-hidden bg-gradient-to-r from-[#0f2356] to-[#2563eb]">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
                    <div className="relative max-w-4xl mx-auto text-center py-20 px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Never Miss an Update
                        </h2>
                        <p className="text-blue-100 text-lg mb-8">
                            Join 10,000+ lab professionals who receive our weekly newsletter.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-5 py-3 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button className="bg-white text-[#0f2356] font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default BlogsPage;