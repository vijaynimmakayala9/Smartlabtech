// AdminPanel.jsx - Complete Admin Dashboard
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Package, FolderTree, MessageCircle,
  FileText, Users, Settings, LogOut, Search, Plus,
  Edit, Trash2, Eye, EyeOff, CheckCircle, XCircle,
  ChevronDown, ChevronRight, Star, TrendingUp, Clock,
  Phone, Mail, MapPin, Building2, User, Calendar,
  BarChart3, PieChart, Activity, AlertCircle, Check,
  X, ArrowRight, Filter, Download, Upload, Save,
  Image, Link, DollarSign, Tag, Layers, Archive,
  Truck, Shield, Award, Zap, Sparkles, MoreVertical,
  Grid, List, RefreshCw, Home, Bell, Menu, Send
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register ChartJS
ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement,
  BarElement, ArcElement, Title, Tooltip, Legend, Filler
);

/* ─── Mock Data (Replace with API calls) ─── */
const mockContactSubmissions = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    phone: '9876543210',
    email: 'rajesh.kumar@researchlab.com',
    company: 'Advanced Research Labs',
    message: 'Need information about analytical balances for our new facility.',
    status: 'pending',
    createdAt: '2024-01-15T10:30:00',
    read: false
  },
  {
    id: 2,
    name: 'Priya Sharma',
    phone: '9988776655',
    email: 'priya.sharma@biotech.in',
    company: 'BioTech Solutions',
    message: 'Looking for chromatography systems with installation support.',
    status: 'replied',
    createdAt: '2024-01-14T14:20:00',
    read: true
  },
  {
    id: 3,
    name: 'Dr. Suresh Menon',
    phone: '9845612378',
    email: 'suresh.menon@pharma.co',
    company: 'PharmaCorp Ltd',
    message: 'Require multiple incubators and climate chambers.',
    status: 'pending',
    createdAt: '2024-01-16T09:15:00',
    read: false
  }
];

const mockQuoteRequests = [
  {
    id: 1,
    name: 'Amit Patel',
    phone: '9856741230',
    email: 'amit.patel@industries.com',
    company: 'Precision Industries',
    city: 'Mumbai',
    product: 'Analytical Balances',
    quantity: '3',
    usage: 'Quality Control',
    status: 'pending',
    createdAt: '2024-01-15T11:45:00',
    read: false
  },
  {
    id: 2,
    name: 'Dr. Meera Iyer',
    phone: '9745632189',
    email: 'meera.iyer@university.edu',
    company: 'Central University',
    city: 'Bangalore',
    product: 'Liquid Chromatography',
    quantity: '1',
    usage: 'Research',
    status: 'sent',
    createdAt: '2024-01-14T16:30:00',
    read: true
  },
  {
    id: 3,
    name: 'Vikram Singh',
    phone: '9812345678',
    email: 'vikram.singh@foodtech.com',
    company: 'FoodTech Solutions',
    city: 'Delhi',
    product: 'Climate Chambers',
    quantity: '2',
    usage: 'Production',
    status: 'pending',
    createdAt: '2024-01-16T13:20:00',
    read: false
  }
];

const mockCategories = [
  {
    id: 1,
    name: 'Weighing & Measurement',
    slug: 'weighing-measurement',
    description: 'Precision weighing and measurement instruments',
    icon: '⚖️',
    active: true,
    productCount: 12
  },
  {
    id: 2,
    name: 'Chromatography',
    slug: 'chromatography',
    description: 'Advanced separation and analysis systems',
    icon: '🧪',
    active: true,
    productCount: 8
  },
  {
    id: 3,
    name: 'Thermal Cooling',
    slug: 'thermal-cooling',
    description: 'Temperature control and cooling solutions',
    icon: '🌡️',
    active: true,
    productCount: 15
  }
];

const mockProducts = [
  {
    id: 1,
    name: 'Analytical Balance XPR',
    sku: 'SART-ANB-220',
    category: 'Weighing & Measurement',
    brand: 'Sartorius',
    price: 245000,
    stock: 15,
    status: 'active',
    featured: true,
    inStock: true,
    description: 'High-precision analytical balance with 0.1mg readability',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
    createdAt: '2024-01-01'
  },
  {
    id: 2,
    name: 'Gas Chromatography System',
    sku: 'SCION-GC-890',
    category: 'Chromatography',
    brand: 'Scion',
    price: 1250000,
    stock: 3,
    status: 'active',
    featured: true,
    inStock: true,
    description: 'High-performance GC system with multiple detectors',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    createdAt: '2024-01-05'
  },
  {
    id: 3,
    name: 'ULT Freezer -86°C',
    sku: 'ARCT-ULT-500',
    category: 'Thermal Cooling',
    brand: 'Arctiko',
    price: 875000,
    stock: 0,
    status: 'active',
    featured: false,
    inStock: false,
    description: 'Ultra-low temperature freezer for sensitive storage',
    image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg',
    createdAt: '2024-01-10'
  }
];

/* ─── Styling ─── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
    
    .font-serif { font-family: 'Cormorant Garamond', serif; }
    .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
    
    .gradient-text {
      background: linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 50%, #38bdf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .admin-sidebar {
      background: linear-gradient(180deg, #0f2356 0%, #1a3a7a 100%);
    }
    
    .scrollbar-thin::-webkit-scrollbar { width: 6px; height: 6px; }
    .scrollbar-thin::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 10px; }
    .scrollbar-thin::-webkit-scrollbar-thumb { background: linear-gradient(135deg, #1e3a8a, #0ea5e9); border-radius: 10px; }
  `}</style>
);

/* ─── Components ─── */

// Sidebar Navigation
const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'contacts', label: 'Contact Forms', icon: MessageCircle, badge: 2 },
    { id: 'quotes', label: 'Quote Requests', icon: FileText, badge: 2 },
    { id: 'categories', label: 'Categories', icon: FolderTree },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <motion.aside
      initial={{ x: -280 }}
      animate={{ x: sidebarOpen ? 0 : -280 }}
      transition={{ duration: 0.3 }}
      className={`fixed lg:static inset-y-0 left-0 z-50 w-72 admin-sidebar flex flex-col ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-sky-500 flex items-center justify-center">
            <Sparkles size={20} className="text-white" />
          </div>
          <div>
            <h1 className="font-serif text-xl font-bold text-white">SmartLab</h1>
            <p className="text-white/50 text-[10px] uppercase tracking-wider">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 scrollbar-thin">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (window.innerWidth < 1024) setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-blue-500 to-sky-500 text-white shadow-lg'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="flex-1 text-left text-sm font-medium">{item.label}</span>
              {item.badge && (
                <span className="px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* User */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
            <User size={18} className="text-white" />
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-medium">Admin User</p>
            <p className="text-white/50 text-xs">admin@smartlab.com</p>
          </div>
          <button className="p-2 text-white/50 hover:text-white transition">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </motion.aside>
  );
};

// Header
const Header = ({ sidebarOpen, setSidebarOpen, activeTab }) => {
  const getTitle = () => {
    const titles = {
      dashboard: 'Dashboard',
      contacts: 'Contact Form Submissions',
      quotes: 'Quote Requests',
      categories: 'Category Management',
      products: 'Product Management',
      users: 'User Management',
      settings: 'Settings'
    };
    return titles[activeTab] || 'Dashboard';
  };

  return (
    <header className="bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition"
          >
            <Menu size={22} className="text-slate-600" />
          </button>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-800">{getTitle()}</h2>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg hover:bg-slate-100 transition">
            <Bell size={20} className="text-slate-500" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 rounded-lg hover:bg-slate-100 transition">
            <RefreshCw size={20} className="text-slate-500" />
          </button>
        </div>
      </div>
    </header>
  );
};

// Stats Card
const StatsCard = ({ title, value, icon: Icon, change, color }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-slate-500 text-sm mb-1">{title}</p>
          <p className="font-serif text-3xl font-bold text-slate-800">{value}</p>
        </div>
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
          <Icon size={22} className="text-white" />
        </div>
      </div>
      {change && (
        <div className="flex items-center gap-1">
          <TrendingUp size={14} className="text-green-500" />
          <span className="text-green-500 text-sm font-medium">{change}</span>
          <span className="text-slate-400 text-sm ml-1">vs last month</span>
        </div>
      )}
    </div>
  );
};

// Dashboard View
const DashboardView = () => {
  const stats = [
    { title: 'Total Products', value: '156', icon: Package, change: '+12%', color: 'from-blue-600 to-sky-500' },
    { title: 'Pending Contacts', value: '8', icon: MessageCircle, change: '+3', color: 'from-amber-500 to-orange-500' },
    { title: 'Quote Requests', value: '24', icon: FileText, change: '+18%', color: 'from-green-500 to-emerald-500' },
    { title: 'Active Categories', value: '12', icon: FolderTree, change: '+2', color: 'from-purple-500 to-pink-500' },
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Contacts',
        data: [12, 19, 15, 22, 28, 34],
        borderColor: '#0ea5e9',
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Quotes',
        data: [8, 15, 12, 18, 24, 30],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const doughnutData = {
    labels: ['Weighing', 'Chromatography', 'Thermal', 'Safety', 'Other'],
    datasets: [{
      data: [35, 25, 20, 12, 8],
      backgroundColor: ['#0ea5e9', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444'],
      borderWidth: 0
    }]
  };

  const recentActivity = [
    { type: 'contact', user: 'Dr. Rajesh Kumar', action: 'submitted contact form', time: '10 min ago', status: 'pending' },
    { type: 'quote', user: 'Amit Patel', action: 'requested quote for Analytical Balances', time: '25 min ago', status: 'pending' },
    { type: 'product', user: 'Admin', action: 'updated product XPR Balance', time: '1 hour ago', status: 'completed' },
    { type: 'contact', user: 'Priya Sharma', action: 'contact form replied', time: '2 hours ago', status: 'completed' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <StatsCard {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200"
        >
          <h3 className="font-serif text-lg font-bold text-slate-800 mb-4">Inquiry Trends</h3>
          <Line data={chartData} options={{ responsive: true, maintainAspectRatio: true }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-6 border border-slate-200"
        >
          <h3 className="font-serif text-lg font-bold text-slate-800 mb-4">Product Categories</h3>
          <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: true }} />
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="font-serif text-lg font-bold text-slate-800">Recent Activity</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {recentActivity.map((activity, i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition">
              <div className={`w-2 h-2 rounded-full ${
                activity.status === 'pending' ? 'bg-amber-500' : 'bg-green-500'
              }`} />
              <div className="flex-1">
                <p className="text-sm text-slate-700">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{activity.time}</p>
              </div>
              {activity.type === 'contact' && <MessageCircle size={16} className="text-slate-400" />}
              {activity.type === 'quote' && <FileText size={16} className="text-slate-400" />}
              {activity.type === 'product' && <Package size={16} className="text-slate-400" />}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Contact Forms View
const ContactsView = () => {
  const [contacts, setContacts] = useState(mockContactSubmissions);
  const [selectedContact, setSelectedContact] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter(c => {
    const matchesFilter = filter === 'all' || c.status === filter;
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const markAsRead = (id) => {
    setContacts(contacts.map(c => c.id === id ? { ...c, read: true } : c));
  };

  const updateStatus = (id, status) => {
    setContacts(contacts.map(c => c.id === id ? { ...c, status } : c));
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
    if (selectedContact?.id === id) setSelectedContact(null);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Contact List */}
      <div className="lg:col-span-1 bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:border-blue-500 outline-none"
            />
          </div>
          <div className="flex gap-2 mt-3">
            {['all', 'pending', 'replied'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition ${
                  filter === f
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto scrollbar-thin">
          {filteredContacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => {
                setSelectedContact(contact);
                if (!contact.read) markAsRead(contact.id);
              }}
              className={`w-full text-left p-4 transition hover:bg-slate-50 ${
                selectedContact?.id === contact.id ? 'bg-blue-50 border-l-4 border-blue-600' : ''
              } ${!contact.read ? 'bg-slate-50' : ''}`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center flex-shrink-0">
                  <User size={16} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className={`text-sm font-medium truncate ${!contact.read ? 'text-slate-900' : 'text-slate-600'}`}>
                      {contact.name}
                    </p>
                    {!contact.read && <span className="w-2 h-2 bg-blue-600 rounded-full"></span>}
                  </div>
                  <p className="text-xs text-slate-500 truncate mb-1">{contact.company}</p>
                  <p className="text-xs text-slate-400 flex items-center gap-2">
                    <Clock size={10} />
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Contact Detail */}
      <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden">
        {selectedContact ? (
          <div>
            <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center">
                    <User size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-800">{selectedContact.name}</h3>
                    <p className="text-slate-500 text-sm">{selectedContact.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={selectedContact.status}
                    onChange={(e) => updateStatus(selectedContact.id, e.target.value)}
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm"
                  >
                    <option value="pending">Pending</option>
                    <option value="replied">Replied</option>
                    <option value="archived">Archived</option>
                  </select>
                  <button
                    onClick={() => deleteContact(selectedContact.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-slate-400" />
                  <span className="text-sm text-slate-600">{selectedContact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-slate-400" />
                  <span className="text-sm text-slate-600">{selectedContact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-slate-400" />
                  <span className="text-sm text-slate-600">
                    {new Date(selectedContact.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h4 className="font-semibold text-slate-700 mb-3">Message</h4>
              <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl">
                {selectedContact.message}
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-slate-700 mb-3">Reply</h4>
                <textarea
                  rows={4}
                  placeholder="Type your reply..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-blue-500 outline-none resize-none"
                />
                <div className="flex justify-end gap-3 mt-3">
                  <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-200 transition">
                    Save Draft
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition flex items-center gap-2">
                    <Send size={14} /> Send Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full py-16 text-slate-400">
            <MessageCircle size={48} className="mb-4 opacity-40" />
            <p>Select a contact to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Quote Requests View
const QuotesView = () => {
  const [quotes, setQuotes] = useState(mockQuoteRequests);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredQuotes = quotes.filter(q => filter === 'all' || q.status === filter);

  const updateStatus = (id, status) => {
    setQuotes(quotes.map(q => q.id === id ? { ...q, status } : q));
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <div className="flex gap-2">
            {['all', 'pending', 'sent'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition ${
                  filter === f ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto scrollbar-thin">
          {filteredQuotes.map((quote) => (
            <button
              key={quote.id}
              onClick={() => setSelectedQuote(quote)}
              className={`w-full text-left p-4 transition hover:bg-slate-50 ${
                selectedQuote?.id === quote.id ? 'bg-blue-50 border-l-4 border-blue-600' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <FileText size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-700 mb-1">{quote.name}</p>
                  <p className="text-xs text-slate-500 mb-1">{quote.product}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      quote.status === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {quote.status}
                    </span>
                    <span className="text-xs text-slate-400">{quote.quantity} unit(s)</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden">
        {selectedQuote ? (
          <div className="p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-800 mb-1">{selectedQuote.name}</h3>
                <p className="text-slate-500 text-sm">{selectedQuote.company} • {selectedQuote.city}</p>
              </div>
              <select
                value={selectedQuote.status}
                onChange={(e) => updateStatus(selectedQuote.id, e.target.value)}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm"
              >
                <option value="pending">Pending</option>
                <option value="sent">Quote Sent</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Contact</p>
                <p className="text-sm text-slate-700"><Phone size={12} className="inline mr-2" />{selectedQuote.phone}</p>
                <p className="text-sm text-slate-700 mt-1"><Mail size={12} className="inline mr-2" />{selectedQuote.email}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Product Details</p>
                <p className="text-sm text-slate-700"><Package size={12} className="inline mr-2" />{selectedQuote.product}</p>
                <p className="text-sm text-slate-700 mt-1">Quantity: {selectedQuote.quantity} • Usage: {selectedQuote.usage}</p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <h4 className="font-semibold text-slate-700 mb-3">Generate Quote</h4>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <input type="number" placeholder="Unit Price (₹)" className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                <input type="number" placeholder="Discount (%)" className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                <input type="text" placeholder="Delivery (weeks)" className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
              </div>
              <textarea rows={3} placeholder="Additional notes..." className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm resize-none mb-4" />
              <div className="flex justify-end gap-3">
                <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">Preview</button>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-lg text-sm font-medium">
                  Send Quote
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full py-16 text-slate-400">
            <FileText size={48} className="mb-4 opacity-40" />
            <p>Select a quote request to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Categories View
const CategoriesView = () => {
  const [categories, setCategories] = useState(mockCategories);
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({ name: '', slug: '', description: '', icon: '📦', active: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCategory) {
      setCategories(categories.map(c => c.id === editingCategory.id ? { ...c, ...formData } : c));
    } else {
      setCategories([...categories, { ...formData, id: Date.now(), productCount: 0 }]);
    }
    setShowModal(false);
    setEditingCategory(null);
    setFormData({ name: '', slug: '', description: '', icon: '📦', active: true });
  };

  const toggleStatus = (id) => {
    setCategories(categories.map(c => c.id === id ? { ...c, active: !c.active } : c));
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search categories..."
            className="pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm w-64 focus:border-blue-500 outline-none"
          />
        </div>
        <button
          onClick={() => { setEditingCategory(null); setFormData({ name: '', slug: '', description: '', icon: '📦', active: true }); setShowModal(true); }}
          className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:shadow-lg transition"
        >
          <Plus size={16} /> Add Category
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">Category</th>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">Slug</th>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">Products</th>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">Status</th>
              <th className="text-right text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {categories.map((cat) => (
              <tr key={cat.id} className="hover:bg-slate-50 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <div>
                      <p className="font-medium text-slate-800">{cat.name}</p>
                      <p className="text-xs text-slate-400">{cat.description}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{cat.slug}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{cat.productCount}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleStatus(cat.id)}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cat.active ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {cat.active ? 'Active' : 'Hidden'}
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => { setEditingCategory(cat); setFormData(cat); setShowModal(true); }}
                      className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => deleteCategory(cat.id)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Category Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl w-full max-w-md overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-blue-600 to-sky-500">
                <h3 className="font-serif text-lg font-bold text-white">
                  {editingCategory ? 'Edit Category' : 'Add New Category'}
                </h3>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Slug</label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm resize-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Icon</label>
                  <input
                    type="text"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.active}
                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <label className="text-sm text-slate-600">Active</label>
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-200 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition"
                  >
                    {editingCategory ? 'Update' : 'Create'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Products View
const ProductsView = () => {
  const [products, setProducts] = useState(mockProducts);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '', sku: '', category: '', brand: '', price: '', stock: '',
    description: '', image: '', featured: false, inStock: true, status: 'active'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...formData } : p));
    } else {
      setProducts([...products, { ...formData, id: Date.now(), createdAt: new Date().toISOString() }]);
    }
    setShowModal(false);
    setEditingProduct(null);
    setFormData({ name: '', sku: '', category: '', brand: '', price: '', stock: '', description: '', image: '', featured: false, inStock: true, status: 'active' });
  };

  const toggleStatus = (id) => {
    setProducts(products.map(p => p.id === id ? { ...p, status: p.status === 'active' ? 'hidden' : 'active' } : p));
  };

  const toggleStock = (id) => {
    setProducts(products.map(p => p.id === id ? { ...p, inStock: !p.inStock } : p));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm w-64 focus:border-blue-500 outline-none"
          />
        </div>
        <button
          onClick={() => { setEditingProduct(null); setFormData({ name: '', sku: '', category: '', brand: '', price: '', stock: '', description: '', image: '', featured: false, inStock: true, status: 'active' }); setShowModal(true); }}
          className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:shadow-lg transition"
        >
          <Plus size={16} /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">Product</th>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">SKU</th>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">Category</th>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">Price</th>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">Stock</th>
              <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">Status</th>
              <th className="text-right text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-slate-50 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={product.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <p className="font-medium text-slate-800">{product.name}</p>
                      <p className="text-xs text-slate-400">{product.brand}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{product.sku}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{product.category}</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-800">₹{product.price.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleStock(product.id)}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.inStock ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {product.inStock ? `${product.stock} in stock` : 'Out of Stock'}
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleStatus(product.id)}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {product.status === 'active' ? 'Active' : 'Hidden'}
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    {product.featured && <Star size={14} className="text-amber-400 fill-amber-400" />}
                    <button
                      onClick={() => { setEditingProduct(product); setFormData(product); setShowModal(true); }}
                      className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-thin"
            >
              <div className="sticky top-0 px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-blue-600 to-sky-500 z-10">
                <h3 className="font-serif text-lg font-bold text-white">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h3>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Name</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">SKU</label>
                    <input type="text" value={formData.sku} onChange={(e) => setFormData({ ...formData, sku: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Category</label>
                    <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm" required>
                      <option value="">Select</option>
                      {mockCategories.map(c => <option key={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Brand</label>
                    <input type="text" value={formData.brand} onChange={(e) => setFormData({ ...formData, brand: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Price (₹)</label>
                    <input type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Stock</label>
                    <input type="number" value={formData.stock} onChange={(e) => setFormData({ ...formData, stock: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm" required />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Description</label>
                  <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={3} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm resize-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Image URL</label>
                  <input type="text" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                </div>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={formData.featured} onChange={(e) => setFormData({ ...formData, featured: e.target.checked })} className="w-4 h-4 text-blue-600 rounded" />
                    <span className="text-sm text-slate-600">Featured</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={formData.inStock} onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })} className="w-4 h-4 text-blue-600 rounded" />
                    <span className="text-sm text-slate-600">In Stock</span>
                  </label>
                </div>
                <div className="flex gap-3 pt-4">
                  <button type="button" onClick={() => setShowModal(false)} className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">Cancel</button>
                  <button type="submit" className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-lg text-sm font-medium">{editingProduct ? 'Update' : 'Create'}</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Admin Panel Component
export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <FontLink />
      <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">
        {/* Sidebar */}
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header 
            sidebarOpen={sidebarOpen} 
            setSidebarOpen={setSidebarOpen} 
            activeTab={activeTab} 
          />

          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scrollbar-thin">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'dashboard' && <DashboardView />}
                {activeTab === 'contacts' && <ContactsView />}
                {activeTab === 'quotes' && <QuotesView />}
                {activeTab === 'categories' && <CategoriesView />}
                {activeTab === 'products' && <ProductsView />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </>
  );
}