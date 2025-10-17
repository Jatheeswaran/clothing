import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiShoppingBag, 
  FiSearch, 
  FiUser, 
  FiHeart, 
  FiMenu, 
  FiX,
  FiStar,
  FiShoppingCart,
  FiTrash2,
  FiHome,
  FiInfo,
  FiMail,
  FiLock,
  FiCreditCard,
  FiTruck,
  FiShield,
  FiArrowRight,
  FiFilter,
  FiPhone,
  FiMapPin,
  FiSend,
  FiClock,
  FiEye,
  FiPlus,
  FiMinus,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiChevronDown,
  FiArrowLeft,
  FiArrowUp,
  FiCheck,
  FiLogOut,
  FiSettings,
  FiPackage,
  FiChevronRight,
  FiGrid,
  FiTag,
  FiShare2,
  FiZoomIn,
  FiBookmark,
  FiAward,
  FiTrendingUp,
  FiBell,
  FiGift,
  FiCalendar,
  FiRefreshCw,
  FiMessageCircle,
  FiHelpCircle,
  FiFileText
} from 'react-icons/fi';

import './App.css';

// ========== ENHANCED PREMIUM PRODUCT DATA ==========
const productsData = {
  'new-arrivals': [
    {
      id: 1,
      name: 'Designer Wool Blend Coat',
      price: 34999,
      originalPrice: 44999,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'coats',
      gender: 'women',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Camel', 'Navy'],
      description: 'Premium wool blend coat with contemporary design, perfect for modern professionals. Features include hidden pockets, reinforced stitching, and luxury lining.',
      features: ['100% Wool Blend', 'Hidden Pockets', 'Reinforced Stitching', 'Luxury Lining'],
      material: '85% Wool, 15% Cashmere',
      care: 'Dry Clean Only',
      rating: 4.9,
      reviews: 156,
      inStock: true,
      tags: ['new', 'premium', 'winter', 'limited'],
      images: [
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1554418707-3eb6d7c184cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ],
      brand: 'Premium Collection',
      delivery: 'Free Delivery',
      isPremium: true,
      isTrending: true
    },
    {
      id: 2,
      name: 'Organic Cotton Premium Tee',
      price: 4599,
      originalPrice: 5999,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'tops',
      gender: 'men',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Navy', 'Olive'],
      description: 'Ultra-soft organic cotton t-shirt with perfect fit. Made from sustainable materials with attention to comfort and durability.',
      features: ['100% Organic Cotton', 'Sustainable Material', 'Reinforced Neckline', 'Pre-shrunk'],
      material: '100% Organic Cotton',
      care: 'Machine Wash Cold',
      rating: 4.7,
      reviews: 234,
      inStock: true,
      tags: ['new', 'sustainable', 'basic', 'eco-friendly'],
      images: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ],
      brand: 'Eco Wear',
      delivery: 'Free Delivery',
      isPremium: false,
      isTrending: true
    },
    {
      id: 3,
      name: 'Silk Blend Evening Dress',
      price: 28999,
      originalPrice: 35999,
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'dresses',
      gender: 'women',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Emerald', 'Navy', 'Burgundy'],
      description: 'Elegant silk blend evening dress with intricate detailing and flowing silhouette. Perfect for special occasions.',
      features: ['Silk Blend', 'Hand Embroidered', 'Flowing Silhouette', 'Hidden Zipper'],
      material: '70% Silk, 30% Viscose',
      care: 'Dry Clean Only',
      rating: 4.8,
      reviews: 89,
      inStock: true,
      tags: ['new', 'evening', 'luxury', 'dress'],
      images: [
        'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ],
      brand: 'Evening Collection',
      delivery: 'Free Delivery',
      isPremium: true,
      isTrending: true
    },
    {
      id: 4,
      name: 'Slim Fit Chino Pants',
      price: 6999,
      originalPrice: 8999,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'pants',
      gender: 'men',
      sizes: ['28', '30', '32', '34', '36'],
      colors: ['Khaki', 'Navy', 'Black', 'Olive'],
      description: 'Versatile slim fit chino pants made from premium cotton twill. Perfect for both casual and smart casual occasions.',
      features: ['Premium Cotton Twill', 'Slim Fit', 'Stretch Comfort', 'Multiple Pockets'],
      material: '98% Cotton, 2% Elastane',
      care: 'Machine Wash',
      rating: 4.6,
      reviews: 312,
      inStock: true,
      tags: ['new', 'chino', 'casual', 'pants'],
      images: [
        'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ],
      brand: 'Urban Classic',
      delivery: 'Free Delivery',
      isPremium: false,
      isTrending: true
    }
  ],
  'bestsellers': [
    {
      id: 5,
      name: 'Luxury Cashmere Sweater',
      price: 21999,
      originalPrice: 27999,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'knitwear',
      gender: 'women',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Charcoal', 'Cream', 'Navy', 'Burgundy'],
      description: 'Exceptional 100% cashmere sweater offering unparalleled softness and warmth. Hand-finished details for ultimate luxury.',
      features: ['100% Cashmere', 'Hand-finished', 'Ribbed Cuffs', 'Classic Crewneck'],
      material: '100% Mongolian Cashmere',
      care: 'Dry Clean Recommended',
      rating: 4.9,
      reviews: 267,
      inStock: true,
      tags: ['bestseller', 'luxury', 'cashmere', 'premium'],
      brand: 'Heritage Collection',
      delivery: 'Free Delivery',
      isPremium: true,
      isTrending: false
    },
    {
      id: 6,
      name: 'Classic Denim Jacket',
      price: 8999,
      originalPrice: 11999,
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'jackets',
      gender: 'men',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Light Blue', 'Dark Blue', 'Black'],
      description: 'Timeless denim jacket with vintage wash and modern fit. Perfect for layering in any season.',
      features: ['100% Cotton Denim', 'Vintage Wash', 'Modern Fit', 'Multiple Pockets'],
      material: '100% Cotton',
      care: 'Machine Wash',
      rating: 4.6,
      reviews: 312,
      inStock: true,
      tags: ['bestseller', 'denim', 'vintage', 'casual'],
      brand: 'Denim Co.',
      delivery: 'Free Delivery',
      isPremium: false,
      isTrending: true
    },
    {
      id: 7,
      name: 'Designer Leather Handbag',
      price: 18999,
      originalPrice: 24999,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'handbags',
      gender: 'women',
      sizes: ['One Size'],
      colors: ['Black', 'Brown', 'Burgundy', 'Navy'],
      description: 'Elegant designer leather handbag with multiple compartments and adjustable strap.',
      features: ['Genuine Leather', 'Multiple Compartments', 'Adjustable Strap', 'Gold Hardware'],
      material: '100% Genuine Leather',
      care: 'Leather Conditioner',
      rating: 4.9,
      reviews: 278,
      inStock: true,
      tags: ['bestseller', 'handbag', 'leather', 'designer'],
      brand: 'Luxury Accessories',
      delivery: 'Free Delivery',
      isPremium: true,
      isTrending: true
    },
    {
      id: 8,
      name: 'Premium Running Shoes',
      price: 12999,
      originalPrice: 15999,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'footwear',
      gender: 'men',
      sizes: ['7', '8', '9', '10', '11', '12'],
      colors: ['Black/White', 'Navy/White', 'Gray/Orange'],
      description: 'High-performance running shoes with advanced cushioning and breathable mesh upper.',
      features: ['Advanced Cushioning', 'Breathable Mesh', 'Non-slip Sole', 'Lightweight'],
      material: 'Mesh & Synthetic',
      care: 'Spot Clean',
      rating: 4.7,
      reviews: 445,
      inStock: true,
      tags: ['bestseller', 'footwear', 'running', 'sports'],
      brand: 'Active Wear',
      delivery: 'Free Delivery',
      isPremium: false,
      isTrending: true
    }
  ],
  'clothing': {
    'men': [
      {
        id: 101,
        name: 'Classic Fit Dress Shirt',
        price: 5999,
        originalPrice: 7999,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'shirts',
        gender: 'men',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['White', 'Light Blue', 'Navy', 'Black'],
        description: 'Premium cotton dress shirt with classic fit. Perfect for office wear and formal occasions.',
        features: ['100% Cotton', 'Classic Fit', 'Single Needle Stitching', 'Bone Buttons'],
        material: '100% Egyptian Cotton',
        care: 'Machine Wash Cold',
        rating: 4.6,
        reviews: 189,
        inStock: true,
        tags: ['formal', 'office', 'cotton'],
        brand: 'Formal Wear',
        delivery: 'Standard Delivery',
        isPremium: false,
        isTrending: false
      },
      {
        id: 102,
        name: 'Slim Fit Blazer',
        price: 15999,
        originalPrice: 19999,
        image: 'https://images.unsplash.com/photo-1594938373333-0351916f8c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'blazers',
        gender: 'men',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Navy', 'Black', 'Charcoal', 'Brown'],
        description: 'Elegant slim fit blazer crafted from premium wool blend. Perfect for business and formal events.',
        features: ['Wool Blend', 'Slim Fit', 'Notch Lapel', 'Two Button'],
        material: '70% Wool, 30% Polyester',
        care: 'Dry Clean Only',
        rating: 4.7,
        reviews: 134,
        inStock: true,
        tags: ['blazer', 'formal', 'business'],
        brand: 'Executive Collection',
        delivery: 'Free Delivery',
        isPremium: true,
        isTrending: true
      },
      {
        id: 103,
        name: 'Casual Linen Shirt',
        price: 4599,
        originalPrice: 5999,
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'shirts',
        gender: 'men',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['White', 'Beige', 'Light Blue', 'Olive'],
        description: 'Breathable linen shirt perfect for summer. Casual yet sophisticated styling.',
        features: ['100% Linen', 'Breathable', 'Casual Fit', 'Button Down Collar'],
        material: '100% Linen',
        care: 'Machine Wash',
        rating: 4.5,
        reviews: 278,
        inStock: true,
        tags: ['casual', 'linen', 'summer'],
        brand: 'Summer Essentials',
        delivery: 'Standard Delivery',
        isPremium: false,
        isTrending: true
      }
    ],
    'women': [
      {
        id: 201,
        name: 'Floral Print Maxi Dress',
        price: 8999,
        originalPrice: 11999,
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'dresses',
        gender: 'women',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Floral Print', 'Navy Blue', 'Rose Pink'],
        description: 'Elegant floral print maxi dress with flowing silhouette. Perfect for summer occasions and beach weddings.',
        features: ['Lightweight Fabric', 'Flowing Silhouette', 'Elastic Waist', 'Hidden Pocket'],
        material: '100% Viscose',
        care: 'Hand Wash Recommended',
        rating: 4.8,
        reviews: 267,
        inStock: true,
        tags: ['dress', 'floral', 'summer'],
        brand: 'Summer Collection',
        delivery: 'Free Delivery',
        isPremium: true,
        isTrending: true
      },
      {
        id: 202,
        name: 'High-Waist Denim Jeans',
        price: 6999,
        originalPrice: 8999,
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'jeans',
        gender: 'women',
        sizes: ['24', '26', '28', '30', '32'],
        colors: ['Light Blue', 'Dark Blue', 'Black'],
        description: 'Comfortable high-waist denim jeans with perfect stretch and modern fit.',
        features: ['Stretch Denim', 'High Waist', 'Slim Fit', 'Five Pocket'],
        material: '98% Cotton, 2% Elastane',
        care: 'Machine Wash',
        rating: 4.6,
        reviews: 412,
        inStock: true,
        tags: ['jeans', 'denim', 'casual'],
        brand: 'Denim Co.',
        delivery: 'Standard Delivery',
        isPremium: false,
        isTrending: true
      },
      {
        id: 203,
        name: 'Silk Blouse',
        price: 12999,
        originalPrice: 15999,
        image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d77?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'tops',
        gender: 'women',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Cream', 'Black', 'Navy', 'Blush'],
        description: 'Luxurious silk blouse with delicate details and elegant drape. Perfect for professional settings.',
        features: ['100% Silk', 'Elegant Drape', 'French Cuffs', 'Pearl Buttons'],
        material: '100% Silk',
        care: 'Dry Clean Only',
        rating: 4.9,
        reviews: 156,
        inStock: true,
        tags: ['blouse', 'silk', 'luxury'],
        brand: 'Luxury Collection',
        delivery: 'Free Delivery',
        isPremium: true,
        isTrending: false
      }
    ]
  },
  'accessories': {
    'men': [
      {
        id: 301,
        name: 'Leather Dress Belt',
        price: 3499,
        originalPrice: 4999,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'belts',
        gender: 'men',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'Brown', 'Tan'],
        description: 'Premium leather dress belt with polished buckle. Perfect for formal and business occasions.',
        features: ['Genuine Leather', 'Polished Buckle', 'Multiple Sizes', 'Classic Design'],
        material: '100% Genuine Leather',
        care: 'Leather Conditioner',
        rating: 4.6,
        reviews: 145,
        inStock: true,
        tags: ['belt', 'leather', 'formal'],
        brand: 'Leather Craft',
        delivery: 'Standard Delivery',
        isPremium: false,
        isTrending: false
      },
      {
        id: 302,
        name: 'Designer Sunglasses',
        price: 8999,
        originalPrice: 11999,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'eyewear',
        gender: 'men',
        sizes: ['One Size'],
        colors: ['Black', 'Brown', 'Tortoise', 'Silver'],
        description: 'Premium designer sunglasses with UV protection and polarized lenses.',
        features: ['UV Protection', 'Polarized Lenses', 'Designer Frame', 'Case Included'],
        material: 'Acetate & Metal',
        care: 'Microfiber Cloth',
        rating: 4.7,
        reviews: 223,
        inStock: true,
        tags: ['sunglasses', 'eyewear', 'designer'],
        brand: 'Vision Elite',
        delivery: 'Free Delivery',
        isPremium: true,
        isTrending: true
      }
    ],
    'women': [
      {
        id: 401,
        name: 'Designer Leather Handbag',
        price: 18999,
        originalPrice: 24999,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'handbags',
        gender: 'women',
        sizes: ['One Size'],
        colors: ['Black', 'Brown', 'Burgundy', 'Navy'],
        description: 'Elegant designer leather handbag with multiple compartments and adjustable strap.',
        features: ['Genuine Leather', 'Multiple Compartments', 'Adjustable Strap', 'Gold Hardware'],
        material: '100% Genuine Leather',
        care: 'Leather Conditioner',
        rating: 4.9,
        reviews: 278,
        inStock: true,
        tags: ['handbag', 'leather', 'designer'],
        brand: 'Luxury Accessories',
        delivery: 'Free Delivery',
        isPremium: true,
        isTrending: true
      },
      {
        id: 402,
        name: 'Pearl Earrings Set',
        price: 12999,
        originalPrice: 16999,
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'jewelry',
        gender: 'women',
        sizes: ['One Size'],
        colors: ['White', 'Cream', 'Pink'],
        description: 'Exquisite set of pearl earrings with sterling silver settings. Timeless elegance.',
        features: ['Freshwater Pearls', 'Sterling Silver', 'Hypoallergenic', 'Gift Box'],
        material: 'Pearls & Sterling Silver',
        care: 'Soft Cloth',
        rating: 4.8,
        reviews: 167,
        inStock: true,
        tags: ['jewelry', 'pearls', 'earrings'],
        brand: 'Pearl Essence',
        delivery: 'Free Delivery',
        isPremium: true,
        isTrending: false
      }
    ]
  }
};

// Sample orders data
const sampleOrders = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    status: 'Delivered',
    items: [
      { ...productsData['new-arrivals'][0], quantity: 1, selectedSize: 'M', selectedColor: 'Black' }
    ],
    total: 34999,
    trackingNumber: 'TRK123456789'
  },
  {
    id: 'ORD-002',
    date: '2024-01-10',
    status: 'Processing',
    items: [
      { ...productsData['bestsellers'][0], quantity: 2, selectedSize: 'L', selectedColor: 'Charcoal' }
    ],
    total: 43998,
    trackingNumber: 'TRK987654321'
  }
];

// Flatten products for search functionality
const getAllProducts = () => {
  const allProducts = [];
  
  const processCategory = (category) => {
    if (Array.isArray(category)) {
      allProducts.push(...category);
    } else if (typeof category === 'object') {
      Object.values(category).forEach(subCategory => {
        if (Array.isArray(subCategory)) {
          allProducts.push(...subCategory);
        }
      });
    }
  };
  
  Object.values(productsData).forEach(processCategory);
  return allProducts;
};

// ========== NEW COMPONENTS ==========

// Toast Notification Component
const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      className={`toast toast-${type}`}
      initial={{ opacity: 0, y: 50, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      exit={{ opacity: 0, y: -50, x: '-50%' }}
    >
      <div className="toast-content">
        <FiCheck className="toast-icon" />
        <span>{message}</span>
      </div>
      <button className="toast-close" onClick={onClose}>
        <FiX />
      </button>
    </motion.div>
  );
};

// Customer Support Modal
const CustomerSupportModal = ({ isOpen, onClose, activeTab = 'contact' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Support form submitted:', formData);
    onClose();
  };

  const handleTrackOrder = () => {
    if (trackingNumber) {
      // Simulate tracking result
      setTrackingResult({
        status: 'In Transit',
        estimatedDelivery: '2024-01-20',
        location: 'Distribution Center, Mumbai',
        updates: [
          { date: '2024-01-15 10:30', status: 'Order Shipped', location: 'Warehouse, Delhi' },
          { date: '2024-01-16 14:20', status: 'In Transit', location: 'Mumbai Hub' }
        ]
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div 
        className="support-modal center-modal"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <button className="close-modal" onClick={onClose}>
          <FiX />
        </button>

        <div className="support-header">
          <h2>Customer Support</h2>
          <p>We're here to help you with any questions or concerns</p>
        </div>

        <div className="support-tabs">
          <button 
            className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setTrackingResult(null)}
          >
            Contact Support
          </button>
          <button 
            className={`tab-button ${activeTab === 'track' ? 'active' : ''}`}
            onClick={() => setTrackingResult(null)}
          >
            Track Order
          </button>
          <button 
            className={`tab-button ${activeTab === 'stores' ? 'active' : ''}`}
            onClick={() => setTrackingResult(null)}
          >
            Store Locator
          </button>
        </div>

        <div className="support-content">
          {activeTab === 'contact' && (
            <form className="support-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What can we help you with?"
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Please describe your issue in detail..."
                ></textarea>
              </div>
              <button type="submit" className="submit-support-btn">
                <FiSend />
                Send Message
              </button>
            </form>
          )}

          {activeTab === 'track' && (
            <div className="track-order-section">
              <div className="track-input-group">
                <input
                  type="text"
                  placeholder="Enter your tracking number"
                  className="track-input"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                />
                <button className="track-button" onClick={handleTrackOrder}>
                  <FiSearch />
                  Track Order
                </button>
              </div>
              
              {trackingResult ? (
                <div className="tracking-result">
                  <div className="tracking-status">
                    <h4>Order Status: <span className={`status-${trackingResult.status.toLowerCase().replace(' ', '-')}`}>{trackingResult.status}</span></h4>
                    <p>Estimated Delivery: {trackingResult.estimatedDelivery}</p>
                    <p>Current Location: {trackingResult.location}</p>
                  </div>
                  <div className="tracking-updates">
                    <h5>Tracking Updates:</h5>
                    {trackingResult.updates.map((update, index) => (
                      <div key={index} className="tracking-update">
                        <div className="update-date">{update.date}</div>
                        <div className="update-status">{update.status}</div>
                        <div className="update-location">{update.location}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="tracking-info">
                  <h4>How to find your tracking number:</h4>
                  <ul>
                    <li>Check your order confirmation email</li>
                    <li>Look in your order history in your account</li>
                    <li>Contact customer support if you can't find it</li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {activeTab === 'stores' && (
            <div className="store-locator-section">
              <div className="store-search">
                <input
                  type="text"
                  placeholder="Enter your city or zip code"
                  className="store-search-input"
                />
                <button className="store-search-btn">
                  <FiSearch />
                  Find Stores
                </button>
              </div>
              <div className="stores-list">
                <div className="store-item">
                  <h4>JD Fashions Flagship Store</h4>
                  <p>123 Fashion Street, Gobichettipalaiyam, Erode 638457</p>
                  <p>📞 +91 98765 43210</p>
                  <p>🕒 Mon-Sat: 10:00 AM - 8:00 PM</p>
                  <div className="store-features">
                    <span className="store-feature">Premium Collection</span>
                    <span className="store-feature">Personal Styling</span>
                    <span className="store-feature">Alterations</span>
                  </div>
                </div>
                <div className="store-item">
                  <h4>JD Fashions Premium Outlet</h4>
                  <p>456 Mall Road, Coimbatore 641001</p>
                  <p>📞 +91 98765 43211</p>
                  <p>🕒 Mon-Sun: 10:00 AM - 9:00 PM</p>
                  <div className="store-features">
                    <span className="store-feature">Outlet Deals</span>
                    <span className="store-feature">Family Shopping</span>
                    <span className="store-feature">Gift Cards</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="support-contact-info">
          <div className="contact-method">
            <FiPhone className="contact-icon" />
            <div>
              <strong>Call Us</strong>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="contact-method">
            <FiMail className="contact-icon" />
            <div>
              <strong>Email Us</strong>
              <p>support@jdfashions.com</p>
            </div>
          </div>
          <div className="contact-method">
            <FiClock className="contact-icon" />
            <div>
              <strong>Support Hours</strong>
              <p>Mon-Sun: 9:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

// Share Modal Component
const ShareModal = ({ isOpen, onClose, product }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !product) return null;

  const shareUrl = `${window.location.origin}/product/${product.id}`;
  const shareText = `Check out this amazing ${product.name} from JD Fashions!`;

  const handleShare = async (platform) => {
    const url = encodeURIComponent(shareUrl);
    const text = encodeURIComponent(shareText);

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${text} ${url}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div 
        className="share-modal center-modal"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <button className="close-modal" onClick={onClose}>
          <FiX />
        </button>

        <div className="share-header">
          <h3>Share this product</h3>
          <p>Share {product.name} with your friends</p>
        </div>

        <div className="share-options">
          <button className="share-option" onClick={() => handleShare('whatsapp')}>
            <div className="share-icon whatsapp">
              <FiMessageCircle />
            </div>
            <span>WhatsApp</span>
          </button>

          <button className="share-option" onClick={() => handleShare('facebook')}>
            <div className="share-icon facebook">
              <FiFacebook />
            </div>
            <span>Facebook</span>
          </button>

          <button className="share-option" onClick={() => handleShare('twitter')}>
            <div className="share-icon twitter">
              <FiTwitter />
            </div>
            <span>Twitter</span>
          </button>

          <button className="share-option" onClick={() => handleShare('copy')}>
            <div className="share-icon copy">
              <FiShare2 />
            </div>
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
        </div>

        <div className="share-link">
          <input
            type="text"
            value={shareUrl}
            readOnly
            className="share-url-input"
          />
          <button 
            className="copy-link-btn"
            onClick={() => handleShare('copy')}
          >
            {copied ? <FiCheck /> : <FiShare2 />}
          </button>
        </div>
      </motion.div>
    </>
  );
};

// Enhanced Search Bar Component
const SearchBar = ({ isOpen, onClose, searchQuery, setSearchQuery, searchResults, onProductClick }) => {
  if (!isOpen) return null;

  return (
    <>
      <motion.div 
        className="search-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div 
        className="search-modal"
        initial={{ opacity: 0, scale: 0.9, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -50 }}
      >
        <div className="search-header">
          <div className="search-input-container">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for products, brands, and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="search-input"
            />
            <button className="close-search" onClick={onClose}>
              <FiX />
            </button>
          </div>
        </div>

        <div className="search-results">
          {searchQuery && searchResults.length === 0 ? (
            <div className="no-results">
              <FiSearch size={48} className="no-results-icon" />
              <h3>No products found</h3>
              <p>We couldn't find any products matching "{searchQuery}"</p>
            </div>
          ) : searchResults.length > 0 ? (
            <>
              <div className="results-header">
                <h3>Search Results ({searchResults.length})</h3>
                <button className="clear-search" onClick={() => setSearchQuery('')}>
                  Clear
                </button>
              </div>
              <div className="results-grid">
                {searchResults.map((product) => (
                  <motion.div 
                    key={product.id} 
                    className="search-result-item"
                    onClick={() => onProductClick(product)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="result-image">
                      <img src={product.image} alt={product.name} />
                      {product.originalPrice && (
                        <div className="result-badge">
                          -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </div>
                      )}
                    </div>
                    <div className="result-details">
                      <h4>{product.name}</h4>
                      <div className="result-category">{product.category}</div>
                      <div className="result-price">
                        ₹{product.price.toLocaleString()}
                        {product.originalPrice && (
                          <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <div className="search-suggestions">
              <h3>Popular Searches</h3>
              <div className="suggestion-tags">
                {['Dresses', 'Jackets', 'Sweaters', 'Accessories', 'New Arrivals'].map(tag => (
                  <button 
                    key={tag} 
                    className="suggestion-tag"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

// Enhanced User Profile Modal
const UserProfileModal = ({ isOpen, onClose, currentUser, onLogout, onNavigateTo }) => {
  if (!isOpen) return null;

  const userStats = [
    { label: 'Orders', value: '12', icon: FiShoppingBag },
    { label: 'Wishlist', value: '8', icon: FiHeart },
    { label: 'Reviews', value: '23', icon: FiStar },
    { label: 'Premium Member', value: 'Yes', icon: FiAward }
  ];

  return (
    <>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div 
        className="user-profile-modal center-modal"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <button className="close-modal" onClick={onClose}>
          <FiX />
        </button>
        
        <div className="profile-header">
          <div className="profile-avatar">
            {currentUser?.name?.charAt(0).toUpperCase()}
          </div>
          <div className="profile-info">
            <h2>{currentUser?.name}</h2>
            <p>{currentUser?.email}</p>
            <div className="premium-badge">
              <FiAward /> Premium Member
            </div>
          </div>
        </div>

        <div className="profile-stats">
          {userStats.map((stat, index) => (
            <div key={index} className="stat-item">
              <stat.icon className="stat-icon" />
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="profile-actions">
          <button className="profile-action-btn" onClick={() => onNavigateTo('orders')}>
            <FiShoppingBag />
            My Orders
          </button>
          <button className="profile-action-btn" onClick={() => onNavigateTo('wishlist')}>
            <FiHeart />
            My Wishlist
          </button>
          <button className="profile-action-btn" onClick={() => onNavigateTo('profile')}>
            <FiUser />
            Account Settings
          </button>
          <button className="profile-action-btn" onClick={() => onNavigateTo('privacy')}>
            <FiShield />
            Privacy & Security
          </button>
          <button className="profile-action-btn" onClick={() => onNavigateTo('help')}>
            <FiHelpCircle />
            Help Center
          </button>
        </div>

        <button className="logout-btn" onClick={onLogout}>
          <FiLogOut />
          Sign Out
        </button>
      </motion.div>
    </>
  );
};

// Orders Page Component
const OrdersPage = ({ orders }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'var(--success)';
      case 'Processing': return 'var(--warning)';
      case 'Shipped': return 'var(--primary)';
      case 'Cancelled': return 'var(--error)';
      default: return 'var(--text-light)';
    }
  };

  return (
    <div className="orders-page">
      <div className="container">
        <div className="page-header">
          <h1>My Orders</h1>
          <p>Track and manage your orders</p>
        </div>

        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <div className="order-info">
                  <h3>Order #{order.id}</h3>
                  <p>Placed on {new Date(order.date).toLocaleDateString()}</p>
                </div>
                <div className="order-status">
                  <span 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(order.status) }}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="order-items">
                {order.items.map((item, index) => (
                  <div key={index} className="order-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p>Size: {item.selectedSize} | Color: {item.selectedColor}</p>
                      <p>Qty: {item.quantity}</p>
                    </div>
                    <div className="item-price">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-footer">
                <div className="order-total">
                  Total: ₹{order.total.toLocaleString()}
                </div>
                <div className="order-actions">
                  <button className="track-order-btn">
                    <FiTruck />
                    Track Order
                  </button>
                  <button className="reorder-btn">
                    <FiRefreshCw />
                    Reorder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Premium Enhanced Header Component
const Header = ({ 
  cartCount, 
  wishlistCount, 
  onCartClick, 
  onMenuToggle, 
  isMenuOpen, 
  onWishlistClick, 
  currentUser,
  onSearchClick,
  onLoginClick,
  onLogout,
  onProfileClick,
  onOrdersClick,
  onSupportClick
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    if (isMenuOpen) {
      onMenuToggle();
    }
  };

  const navItems = [
    { 
      path: '/clothing', 
      label: 'CLOTHING', 
      icon: FiUser,
      submenu: [
        { label: "Men's Clothing", path: '/clothing/men' },
        { label: "Women's Clothing", path: '/clothing/women' },
        { label: "Premium Collection", path: '/clothing/premium' }
      ]
    },
    { 
      path: '/accessories', 
      label: 'ACCESSORIES', 
      icon: FiShoppingBag,
      submenu: [
        { label: "Men's Accessories", path: '/accessories/men' },
        { label: "Women's Accessories", path: '/accessories/women' },
        { label: "Luxury Collection", path: '/accessories/luxury' }
      ]
    },
    { path: '/about', label: 'ABOUT', icon: FiInfo },
    { path: '/contact', label: 'CONTACT', icon: FiMail }
  ];

  return (
    <header className={`premium-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-top-bar">
        <div className="container">
          <div className="top-bar-content">
            <span>Free Shipping on Orders Over ₹2000</span>
            <div className="top-bar-links">
              <button onClick={() => onSupportClick('track')} className="top-bar-link">Track Order</button>
              <button onClick={() => onSupportClick('stores')} className="top-bar-link">Store Locator</button>
              <button onClick={() => onSupportClick('contact')} className="top-bar-link">Customer Support</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <div className="logo-section" onClick={() => navigate('/')}>
              <div className="logo-container">
                <span className="logo-jd">JD</span>
                <div className="logo-text-container">
                  <span className="logo-text">FASHIONS</span>
                  <span className="logo-tagline">PREMIUM LIFESTYLE</span>
                </div>
              </div>
              <span className="premium-badge-header">
                <FiAward /> PREMIUM
              </span>
            </div>
            
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul className="nav-links">
                {navItems.map((item) => (
                  <li key={item.path} className="nav-item">
                    <a 
                      href={item.path}
                      className={`nav-link ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.path);
                      }}
                    >
                      <span className="nav-label">{item.label}</span>
                      {item.submenu && <FiChevronDown className="dropdown-arrow" />}
                    </a>
                    {item.submenu && (
                      <div className="nav-dropdown">
                        {item.submenu.map(subItem => (
                          <a 
                            key={subItem.path}
                            href={subItem.path}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(subItem.path);
                            }}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="header-actions">
              <div className="action-group">
                <button className="action-btn search-btn" onClick={onSearchClick}>
                  <FiSearch />
                  <span className="action-label">Search</span>
                </button>
                
                <div className="user-menu-container">
                  <button 
                    className="action-btn user-btn" 
                    onClick={currentUser ? () => setShowUserMenu(!showUserMenu) : onLoginClick}
                  >
                    <FiUser />
                    <span className="action-label">
                      {currentUser ? currentUser.name.split(' ')[0] : 'Account'}
                    </span>
                  </button>
                  
                  {showUserMenu && currentUser && (
                    <motion.div 
                      className="user-dropdown"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <div className="user-info-dropdown">
                        <div className="user-avatar-dropdown">
                          {currentUser.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="user-details">
                          <strong>{currentUser.name}</strong>
                          <span>{currentUser.email}</span>
                        </div>
                      </div>
                      <div className="dropdown-divider"></div>
                      <button className="dropdown-item" onClick={() => { onProfileClick(); setShowUserMenu(false); }}>
                        <FiUser />
                        My Profile
                      </button>
                      <button className="dropdown-item" onClick={() => { onOrdersClick(); setShowUserMenu(false); }}>
                        <FiShoppingBag />
                        My Orders
                      </button>
                      <button className="dropdown-item" onClick={() => { onWishlistClick(); setShowUserMenu(false); }}>
                        <FiHeart />
                        My Wishlist
                      </button>
                      <div className="dropdown-divider"></div>
                      <button className="dropdown-item" onClick={() => { onSupportClick('contact'); setShowUserMenu(false); }}>
                        <FiHelpCircle />
                        Customer Support
                      </button>
                      <button className="dropdown-item logout-item" onClick={() => { onLogout(); setShowUserMenu(false); }}>
                        <FiLogOut />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </div>
                
                <button className="action-btn wishlist-btn" onClick={onWishlistClick}>
                  <FiHeart />
                  <span className="action-label">Wishlist</span>
                  {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
                </button>
                
                <button className="action-btn cart-btn" onClick={onCartClick}>
                  <FiShoppingBag />
                  <span className="action-label">Bag</span>
                  {cartCount > 0 && <span className="badge">{cartCount}</span>}
                </button>
              </div>
              
              <button className="mobile-menu-button" onClick={onMenuToggle}>
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Professional Fashion Hero Component
const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "SPRING SUMMER '25",
      subtitle: "ELEVATE YOUR STYLE",
      description: "Discover the latest trends in premium fashion with our exclusive Spring Summer collection. Curated for the modern individual who values quality and sophistication.",
      buttonText: "SHOP COLLECTION",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      overlay: "linear-gradient(135deg, rgba(255,63,108,0.85) 0%, rgba(255,107,139,0.8) 50%, rgba(40,44,63,0.9) 100%)",
      accentColor: "#ff3f6c"
    },
    {
      title: "LUXURY COLLECTION",
      subtitle: "REDEFINE ELEGANCE",
      description: "Experience unparalleled luxury with our premium collection featuring the finest materials and exceptional craftsmanship for the discerning fashion enthusiast.",
      buttonText: "EXPLORE LUXURY",
      image: "https://images.unsplash.com/photo-1558769132-cb25cb6a45e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      overlay: "linear-gradient(135deg, rgba(40,44,63,0.9) 0%, rgba(30,34,53,0.85) 50%, rgba(20,24,43,0.9) 100%)",
      accentColor: "#282c3f"
    },
    {
      title: "SUSTAINABLE FASHION",
      subtitle: "STYLE WITH CONSCIENCE",
      description: "Embrace eco-luxury with our sustainable collection. Premium quality meets environmental responsibility in every carefully crafted piece.",
      buttonText: "DISCOVER SUSTAINABLE",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      overlay: "linear-gradient(135deg, rgba(3,166,133,0.85) 0%, rgba(2,128,102,0.8) 50%, rgba(1,100,80,0.9) 100%)",
      accentColor: "#03a685"
    },
    {
      title: "DESIGNER EDIT",
      subtitle: "EXCLUSIVE COLLABORATIONS",
      description: "Limited edition pieces from renowned designers. Unique styles that make a statement and set you apart from the crowd.",
      buttonText: "VIEW EDIT",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      overlay: "linear-gradient(135deg, rgba(147,112,219,0.85) 0%, rgba(138,43,226,0.8) 50%, rgba(75,0,130,0.9) 100%)",
      accentColor: "#9370db"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="premium-hero">
      <div className="hero-slides-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              backgroundImage: `${slide.overlay}, url(${slide.image})`
            }}
          >
            <div className="slide-content">
              <div className="container">
                <div className="hero-content-grid">
                  <div className="hero-text-content">
                    <motion.div
                      className="hero-badge-container"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="hero-badge" style={{ borderColor: slide.accentColor }}>
                        <span style={{ color: slide.accentColor }}>{slide.title}</span>
                      </div>
                    </motion.div>
                    
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      {slide.subtitle}
                    </motion.h1>
                    
                    <motion.p
                      className="hero-description"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      {slide.description}
                    </motion.p>
                    
                    <motion.div
                      className="hero-actions"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <button 
                        className="cta-button primary"
                        onClick={() => navigate('/new-arrivals')}
                        style={{ backgroundColor: slide.accentColor }}
                      >
                        {slide.buttonText} 
                        <FiArrowRight className="button-icon" />
                      </button>
                      <button 
                        className="cta-button secondary"
                        onClick={() => navigate('/bestsellers')}
                      >
                        View Bestsellers
                      </button>
                    </motion.div>
                    
                    <motion.div
                      className="hero-stats"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1 }}
                    >
                      <div className="stat">
                        <span className="stat-number">200+</span>
                        <span className="stat-label">Designer Brands</span>
                      </div>
                      <div className="stat">
                        <span className="stat-number">15K+</span>
                        <span className="stat-label">Happy Customers</span>
                      </div>
                      <div className="stat">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Cities Served</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="hero-visual-content">
                    <motion.div
                      className="floating-elements"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      <div className="floating-card card-1">
                        <div className="card-badge">NEW</div>
                        <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="New Arrival" />
                        <div className="card-content">
                          <span>Designer Coat</span>
                          <span>₹34,999</span>
                        </div>
                      </div>
                      <div className="floating-card card-2">
                        <div className="card-badge">TRENDING</div>
                        <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Trending" />
                        <div className="card-content">
                          <span>Cashmere Sweater</span>
                          <span>₹21,999</span>
                        </div>
                      </div>
                      <div className="floating-card card-3">
                        <div className="card-badge">PREMIUM</div>
                        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Premium" />
                        <div className="card-content">
                          <span>Leather Handbag</span>
                          <span>₹18,999</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button className="slide-nav prev" onClick={prevSlide}>
        <FiArrowLeft />
      </button>
      <button className="slide-nav next" onClick={nextSlide}>
        <FiArrowRight />
      </button>
      
      {/* Slide Indicators */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Hero Features Bar */}
      <div className="hero-features-bar">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <FiTruck />
              </div>
              <div className="feature-content">
                <span className="feature-title">Free Shipping</span>
                <span className="feature-desc">On orders over ₹2000</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FiShield />
              </div>
              <div className="feature-content">
                <span className="feature-title">Secure Payment</span>
                <span className="feature-desc">100% protected</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FiRefreshCw />
              </div>
              <div className="feature-content">
                <span className="feature-title">Easy Returns</span>
                <span className="feature-desc">30-day policy</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FiAward />
              </div>
              <div className="feature-content">
                <span className="feature-title">Premium Quality</span>
                <span className="feature-desc">Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Product Card Component
const ProductCard = ({ product, onAddToCart, onQuickView, onAddToWishlist, isInWishlist, onShare }) => {
  const [isHovered, setIsHovered] = useState(false);

  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        
        <div className={`product-overlay ${isHovered ? 'visible' : ''}`}>
          <button className="quick-view-btn" onClick={() => onQuickView(product)}>
            <FiEye /> Quick View
          </button>
          <button 
            className={`wishlist-btn ${isInWishlist ? 'in-wishlist' : ''}`}
            onClick={() => onAddToWishlist(product)}
          >
            <FiHeart />
          </button>
          <button className="share-btn" onClick={() => onShare(product)}>
            <FiShare2 />
          </button>
        </div>
        
        <div className="product-badges">
          {product.originalPrice && discountPercentage > 0 && (
            <div className="sale-badge">
              {discountPercentage}% OFF
            </div>
          )}
          {product.tags && product.tags.includes('new') && (
            <div className="new-badge">NEW</div>
          )}
          {product.isPremium && (
            <div className="premium-badge-product">
              <FiAward /> PREMIUM
            </div>
          )}
          {product.isTrending && (
            <div className="trending-badge">
              <FiTrendingUp /> TRENDING
            </div>
          )}
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-brand">{product.brand}</div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-category">{product.category}</div>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FiStar 
                key={i} 
                className={i < Math.floor(product.rating) ? 'star filled' : 'star'}
              />
            ))}
          </div>
          <span>({product.reviews})</span>
        </div>
        
        <div className="product-price">
          <span className="current-price">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        <div className="product-features">
          {product.features?.slice(0, 2).map((feature, index) => (
            <span key={index} className="feature-tag">{feature}</span>
          ))}
        </div>

        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          <FiShoppingCart /> Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

// Product Grid Component
const ProductGrid = ({ products, title, onAddToCart, onQuickView, onAddToWishlist, wishlistItems, onShare }) => {
  return (
    <section className="product-grid-section">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          <div className="section-controls">
            <button className="filter-btn">
              <FiFilter /> Filter
            </button>
            <button className="sort-btn">
              <FiArrowUp /> Sort
            </button>
          </div>
        </div>

        {products && products.length > 0 ? (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
                onAddToWishlist={onAddToWishlist}
                onShare={onShare}
                isInWishlist={wishlistItems.some(item => item.id === product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <FiPackage size={64} />
            <h3>No products found</h3>
            <p>Try adjusting your filters or browse other categories</p>
          </div>
        )}
      </div>
    </section>
  );
};

// Category Page Component
const CategoryPage = ({ category, onAddToCart, onQuickView, onAddToWishlist, wishlistItems, onShare }) => {
  const [selectedGender, setSelectedGender] = useState('all');
  const navigate = useNavigate();
  
  const categoryData = productsData[category];
  const isGenderBased = typeof categoryData === 'object' && !Array.isArray(categoryData);

  const getProducts = () => {
    if (!isGenderBased) return categoryData || [];
    
    if (selectedGender === 'all') {
      return [...(categoryData.men || []), ...(categoryData.women || [])];
    }
    
    return categoryData[selectedGender] || [];
  };

  const getTitle = () => {
    const baseTitle = category.charAt(0).toUpperCase() + category.slice(1);
    if (!isGenderBased) return baseTitle;
    
    if (selectedGender === 'all') return `${baseTitle} Collection`;
    return `${selectedGender.charAt(0).toUpperCase() + selectedGender.slice(1)}'s ${baseTitle}`;
  };

  return (
    <div className="category-page">
      <div className="container">
        <div className="category-header">
          <h1>{getTitle()}</h1>
          <p>Discover our premium {category.toLowerCase()} collection</p>
        </div>

        {isGenderBased && (
          <div className="gender-filter">
            <button 
              className={`gender-tab ${selectedGender === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedGender('all')}
            >
              All
            </button>
            <button 
              className={`gender-tab ${selectedGender === 'men' ? 'active' : ''}`}
              onClick={() => setSelectedGender('men')}
            >
              Men's
            </button>
            <button 
              className={`gender-tab ${selectedGender === 'women' ? 'active' : ''}`}
              onClick={() => setSelectedGender('women')}
            >
              Women's
            </button>
          </div>
        )}

        <ProductGrid
          products={getProducts()}
          title={getTitle()}
          onAddToCart={onAddToCart}
          onQuickView={onQuickView}
          onAddToWishlist={onAddToWishlist}
          onShare={onShare}
          wishlistItems={wishlistItems}
        />
      </div>
    </div>
  );
};

// Enhanced Quick View Modal with Centered Positioning
// Enhanced Quick View Modal with Centered Positioning
const QuickViewModal = ({ product, isOpen, onClose, onAddToCart, onAddToWishlist, isInWishlist, onShare }) => {
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || 'Black');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!isOpen || !product) return null;

  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity, selectedSize, selectedColor });
    onClose();
  };

  return (
    <>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div 
        className="quick-view-modal center-modal"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <button className="close-modal" onClick={onClose}>
          <FiX />
        </button>
        
        <div className="modal-content">
          <div className="modal-image-section">
            <div className="image-gallery">
              <div className="main-image-container">
                <img src={product.images?.[activeImage] || product.image} alt={product.name} />
                <div className="image-badges">
                  {product.originalPrice && discountPercentage > 0 && (
                    <div className="sale-badge-modal">
                      {discountPercentage}% OFF
                    </div>
                  )}
                  {product.isPremium && (
                    <div className="premium-badge-modal">
                      <FiAward /> PREMIUM
                    </div>
                  )}
                </div>
              </div>
              {product.images && product.images.length > 1 && (
                <div className="thumbnail-gallery">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img src={img} alt={`${product.name} ${index + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="modal-details-section">
            <div className="modal-header">
              <div className="product-brand">{product.brand}</div>
              <h2>{product.name}</h2>
              <div className="modal-price">
                <span className="current-price">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                )}
              </div>
              <div className="modal-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={i < Math.floor(product.rating) ? 'star filled' : 'star'}
                    />
                  ))}
                </div>
                <span>({product.reviews} reviews)</span>
                <span className="rating-value">{product.rating}</span>
              </div>
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="selection-section">
              <div className="size-selector">
                <label>Size:</label>
                <div className="size-options">
                  {product.sizes?.map(size => (
                    <button
                      key={size}
                      className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="color-selector">
                <label>Color:</label>
                <div className="color-options">
                  {product.colors?.map(color => (
                    <button
                      key={color}
                      className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="quantity-controls">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <FiMinus />
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>
                    <FiPlus />
                  </button>
                </div>
              </div>
            </div>

            <div className="product-features-list">
              <h4>Features:</h4>
              <ul>
                {product.features?.map((feature, index) => (
                  <li key={index}>
                    <FiCheck />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="modal-actions">
              <button 
                className="add-to-cart-modal"
                onClick={handleAddToCart}
              >
                <FiShoppingCart />
                Add to Cart - ₹{(product.price * quantity).toLocaleString()}
              </button>
              <div className="secondary-actions">
                <button 
                  className="wishlist-button-modal"
                  onClick={() => onAddToWishlist(product)}
                >
                  <FiHeart className={isInWishlist ? 'in-wishlist' : ''} />
                  {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>
                <button className="share-button-modal" onClick={() => onShare(product)}>
                  <FiShare2 />
                  Share
                </button>
              </div>
            </div>

            <div className="product-meta">
              <div className="meta-item">
                <FiTruck />
                <span>{product.delivery}</span>
              </div>
              <div className="meta-item">
                <FiRefreshCw />
                <span>30 Days Return</span>
              </div>
              <div className="meta-item">
                <FiShield />
                <span>Warranty Included</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

// Login Component
const Login = ({ onClose, onLogin, currentUser, onLogout }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  // If user is already logged in, show profile view
  if (currentUser) {
    return (
      <>
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        <motion.div 
          className="login-modal center-modal"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <button className="close-modal" onClick={onClose}>
            <FiX />
          </button>
          
          <div className="login-content">
            <div className="login-header">
              <div className="user-avatar-large">
                {currentUser.name.charAt(0).toUpperCase()}
              </div>
              <h2>Welcome Back!</h2>
              <p>You are logged in as {currentUser.name}</p>
            </div>
            
            <div className="user-stats">
              <div className="user-stat">
                <span className="stat-number">12</span>
                <span className="stat-label">Orders</span>
              </div>
              <div className="user-stat">
                <span className="stat-number">8</span>
                <span className="stat-label">Wishlist</span>
              </div>
              <div className="user-stat">
                <span className="stat-number">23</span>
                <span className="stat-label">Reviews</span>
              </div>
            </div>
            
            <button 
              className="logout-button"
              onClick={() => {
                onLogout();
                onClose();
              }}
            >
              <FiLogOut />
              Sign Out
            </button>
          </div>
        </motion.div>
      </>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
      // For demo purposes, we'll create a user object
      const userData = {
        name: isLogin ? formData.email.split('@')[0] : formData.name,
        email: formData.email
      };
      onLogin(userData);
    }
  };

  const handleDemoLogin = () => {
    if (onLogin) {
      onLogin({
        name: 'Demo User',
        email: 'demo@jdfashions.com'
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div 
        className="login-modal center-modal"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <button className="close-modal" onClick={onClose}>
          <FiX />
        </button>
        
        <div className="login-content">
          <div className="login-header">
            <div className="login-logo">
              <span>JD</span>
            </div>
            <h2>{isLogin ? 'Welcome Back' : 'Join JD Fashions'}</h2>
            <p>{isLogin ? 'Sign in to your account' : 'Create your premium account'}</p>
          </div>

          <button 
            className="demo-login-button"
            onClick={handleDemoLogin}
          >
            <FiUser />
            Try Demo Account
          </button>
          
          <div className="social-login">
            <button type="button" className="social-btn google-btn">
              <span>G</span>
              Continue with Google
            </button>
            <button type="button" className="social-btn facebook-btn">
              <FiFacebook />
              Continue with Facebook
            </button>
          </div>
          
          <div className="divider">
            <span>or continue with email</span>
          </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            {!isLogin && (
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required={!isLogin}
                />
              </div>
            )}
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                minLength="6"
              />
            </div>

            {isLogin && (
              <div className="form-options">
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <a href="#forgot" className="forgot-password">Forgot password?</a>
              </div>
            )}

            <button type="submit" className="login-button">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>
          
          <div className="login-switch">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                type="button"
                className="switch-button"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

// Cart Component
const Cart = ({ items, onClose, onRemove, onUpdateQuantity, onClearCart }) => {
  const navigate = useNavigate();
  
  const groupedItems = items.reduce((acc, item) => {
    const key = `${item.id}-${item.selectedSize}-${item.selectedColor}`;
    if (!acc[key]) {
      acc[key] = { ...item };
    } else {
      acc[key].quantity += item.quantity;
    }
    return acc;
  }, {});

  const cartItems = Object.values(groupedItems);
  
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = total > 2000 ? 0 : 150;
  const finalTotal = total + shipping;

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <>
      <motion.div 
        className="cart-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div 
        className="cart-sidebar"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
      >
        <div className="cart-header">
          <h2>Your Shopping Bag ({cartItems.length})</h2>
          <button className="close-cart" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">
                <FiShoppingCart />
              </div>
              <h3>Your bag is empty</h3>
              <p>Add some stylish items to get started</p>
              <button className="continue-shopping" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="item-price">₹{item.price.toLocaleString()}</p>
                      <div className="cart-item-meta">
                        <span>Size: {item.selectedSize}</span>
                        <span>Color: {item.selectedColor}</span>
                      </div>
                      <div className="quantity-controls">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1, item.selectedSize, item.selectedColor)}
                          disabled={item.quantity <= 1}
                        >
                          <FiMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1, item.selectedSize, item.selectedColor)}
                        >
                          <FiPlus />
                        </button>
                      </div>
                    </div>
                    <button 
                      className="remove-item"
                      onClick={() => onRemove(item.id, item.selectedSize, item.selectedColor)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                <div className="summary-row discount-row">
                  <span>Discount</span>
                  <span>-₹0</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>₹{finalTotal.toLocaleString()}</span>
                </div>
                
                <div className="promo-section">
                  <input type="text" placeholder="Enter promo code" />
                  <button>Apply</button>
                </div>
                
                <button className="checkout-button" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
                <button className="clear-cart-button" onClick={onClearCart}>
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
};

// Wishlist Component
const Wishlist = ({ items, onClose, onRemove, onAddToCart, onQuickView }) => {
  return (
    <>
      <motion.div 
        className="wishlist-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div 
        className="wishlist-sidebar"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
      >
        <div className="wishlist-header">
          <h2>Your Wishlist ({items.length})</h2>
          <button className="close-wishlist" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="wishlist-content">
          {items.length === 0 ? (
            <div className="empty-wishlist">
              <div className="empty-wishlist-icon">
                <FiHeart />
              </div>
              <h3>Your wishlist is empty</h3>
              <p>Save your favorite items here</p>
            </div>
          ) : (
            <div className="wishlist-items">
              {items.map(item => (
                <div key={item.id} className="wishlist-item">
                  <div className="wishlist-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="wishlist-item-details">
                    <h4>{item.name}</h4>
                    <p className="item-price">₹{item.price.toLocaleString()}</p>
                    <div className="wishlist-item-actions">
                      <button 
                        className="add-to-cart-from-wishlist"
                        onClick={() => {
                          onAddToCart(item);
                          onRemove(item.id);
                        }}
                      >
                        Add to Cart
                      </button>
                      <button 
                        className="quick-view-from-wishlist"
                        onClick={() => {
                          onClose();
                          onQuickView(item);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  <button 
                    className="remove-from-wishlist"
                    onClick={() => onRemove(item.id)}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

// Checkout Component
const Checkout = ({ onBack, cartItems, currentUser, onClearCart }) => {
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    email: currentUser?.email || '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: ''
  });

  const groupedItems = cartItems.reduce((acc, item) => {
    const key = `${item.id}-${item.selectedSize}-${item.selectedColor}`;
    if (!acc[key]) {
      acc[key] = { ...item };
    } else {
      acc[key].quantity += item.quantity;
    }
    return acc;
  }, {});

  const checkoutItems = Object.values(groupedItems);
  
  const subtotal = checkoutItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 2000 ? 0 : 150;
  const total = subtotal + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    if (onClearCart) {
      onClearCart();
    }
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="order-success">
            <div className="success-icon">
              <FiCheck />
            </div>
            <h1>Order Confirmed!</h1>
            <p>Thank you for your purchase. Your order has been placed successfully.</p>
            <div className="success-details">
              <p>Order Number: <strong>#ORD-{Date.now()}</strong></p>
              <p>Estimated Delivery: <strong>3-5 business days</strong></p>
            </div>
            <button 
              className="continue-shopping-btn"
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <button className="back-button" onClick={onBack}>
          ← Back to Shopping
        </button>
        
        <h1>Checkout</h1>
        
        <div className="checkout-content">
          <div className="checkout-form">
            <form onSubmit={handleSubmit}>
              <div className="form-section">
                <h3>Contact Information</h3>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-section">
                <h3>Shipping Address</h3>
                <div className="form-row">
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="firstName"
                      placeholder="First Name" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="lastName"
                      placeholder="Last Name" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="address"
                    placeholder="Address" 
                    value={formData.address}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="city"
                      placeholder="City" 
                      value={formData.city}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="zipCode"
                      placeholder="PIN Code" 
                      value={formData.zipCode}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Payment Method</h3>
                <div className="payment-methods">
                  <label className="payment-method">
                    <input type="radio" name="payment" defaultChecked />
                    <div className="payment-content">
                      <FiCreditCard />
                      <span>Credit/Debit Card</span>
                    </div>
                  </label>
                  <label className="payment-method">
                    <input type="radio" name="payment" />
                    <div className="payment-content">
                      <FiShoppingBag />
                      <span>Cash on Delivery</span>
                    </div>
                  </label>
                  <label className="payment-method">
                    <input type="radio" name="payment" />
                    <div className="payment-content">
                      <FiMapPin />
                      <span>UPI Payment</span>
                    </div>
                  </label>
                </div>
              </div>

              <button type="submit" className="place-order-button">
                Place Order - ₹{total.toLocaleString()}
              </button>
            </form>
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="order-items">
              {checkoutItems.length === 0 ? (
                <div className="empty-order">
                  <FiShoppingBag size={48} />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                checkoutItems.map(item => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="order-item">
                    <img src={item.image} alt={item.name} />
                    <div className="order-item-details">
                      <h4>{item.name}</h4>
                      <p>Size: {item.selectedSize} | Color: {item.selectedColor}</p>
                      <p>Qty: {item.quantity}</p>
                      <p>₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="total-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
              </div>
              <div className="total-row discount-row">
                <span>Discount</span>
                <span>-₹0</span>
              </div>
              <div className="total-row final-total">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>

            <div className="checkout-features">
              <div className="feature">
                <FiShield />
                <span>Secure Payment</span>
              </div>
              <div className="feature">
                <FiTruck />
                <span>Free Shipping</span>
              </div>
              <div className="feature">
                <FiRefreshCw />
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Us Component
const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1>About JD Fashions</h1>
          <p>Redefining style since 2010</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, JD Fashions began as a small boutique with a big vision: 
                to bring high-quality, contemporary fashion to discerning customers across India. 
                What started as a single store has grown into a pan-India brand known for 
                exceptional craftsmanship and timeless design.
              </p>
              <p>
                Our commitment to quality extends beyond our products to every aspect of 
                your shopping experience. We believe that great fashion should be accessible, 
                sustainable, and make you feel confident every day.
              </p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Our Store" />
            </div>
          </div>

          <div className="about-section reverse">
            <div className="about-text">
              <h2>Our Philosophy</h2>
              <p>
                At JD Fashions, we believe that clothing should be both beautiful and functional. 
                Each piece in our collection is carefully curated to ensure it meets our high 
                standards for quality, comfort, and style.
              </p>
              <p>
                We work with skilled artisans and use premium materials to create clothing 
                that not only looks good but feels good to wear. Our designs blend classic 
                elegance with modern trends, creating pieces that will remain stylish for 
                years to come.
              </p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Our Philosophy" />
            </div>
          </div>

          <div className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <FiStar className="value-icon" />
                <h3>Quality</h3>
                <p>We never compromise on quality. Every stitch, every fabric, every detail matters.</p>
              </div>
              <div className="value-card">
                <FiHeart className="value-icon" />
                <h3>Sustainability</h3>
                <p>We're committed to ethical sourcing and sustainable practices throughout our supply chain.</p>
              </div>
              <div className="value-card">
                <FiTruck className="value-icon" />
                <h3>Fast Delivery</h3>
                <p>Quick and reliable shipping across India to get your fashion finds to you faster.</p>
              </div>
              <div className="value-card">
                <FiShield className="value-icon" />
                <h3>Customer Care</h3>
                <p>Exceptional customer service and support whenever you need it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Us Component
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-hero">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <FiPhone />
                </div>
                <div className="method-info">
                  <h3>Phone</h3>
                  <p>+91 98765 43210</p>
                  <span>Mon-Fri from 8am to 6pm</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <FiMail />
                </div>
                <div className="method-info">
                  <h3>Email</h3>
                  <p>hello@jdfashions.com</p>
                  <span>Online support</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <FiMapPin />
                </div>
                <div className="method-info">
                  <h3>Store</h3>
                  <p>123 Fashion Street</p>
                  <span>Gobichettipalaiyam,Erode 638457,Tamilnadu</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <FiClock />
                </div>
                <div className="method-info">
                  <h3>Hours</h3>
                  <p>Tuesday - Saturday</p>
                  <span>10:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

            <div className="social-contact">
              <h3>Follow Us</h3>
              <div className="social-links-contact">
                <a href="#instagram" className="social-link"><FiInstagram /> Instagram</a>
                <a href="#facebook" className="social-link"><FiFacebook /> Facebook</a>
                <a href="#twitter" className="social-link"><FiTwitter /> Twitter</a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="success-message">
                <FiMail className="success-icon" />
                <h3>Message Sent!</h3>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send us a Message</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows="6"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Category Cards for Home Page
const CategoryCards = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: 'New Arrivals',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      path: '/new-arrivals',
      description: 'Latest trends and styles',
      items: '50+ items',
      gradient: 'linear-gradient(135deg, #ff6b8b 0%, #ff3f6c 100%)'
    },
    {
      name: 'Bestsellers',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      path: '/bestsellers',
      description: 'Customer favorites',
      items: '100+ items',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      name: "Men's Collection",
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      path: '/clothing/men',
      description: 'Premium menswear',
      items: '200+ items',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      name: "Women's Collection",
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      path: '/clothing/women',
      description: 'Elegant womenswear',
      items: '250+ items',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      name: "Accessories",
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      path: '/accessories',
      description: 'Complete your look',
      items: '150+ items',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      name: "Premium Collection",
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      path: '/new-arrivals',
      description: 'Luxury pieces',
      items: '75+ items',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  return (
    <section className="categories-showcase">
      <div className="container">
        <div className="section-header centered">
          <h2>Shop By Category</h2>
          <p>Discover our carefully curated collections for every style</p>
        </div>
        <div className="categories-grid-enhanced">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="category-card-enhanced"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(category.path)}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="category-image-container">
                <img src={category.image} alt={category.name} />
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <div className="category-meta">
                    <span>{category.items}</span>
                    <button className="category-cta">
                      Shop Now <FiArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Home Page Component
const HomePage = ({ onAddToCart, onQuickView, onAddToWishlist, wishlistItems, onShare }) => {
  return (
    <div>
      <Hero />
      <CategoryCards />
      
      {/* New Arrivals Section */}
      <ProductGrid
        products={productsData['new-arrivals']}
        title="New Arrivals"
        onAddToCart={onAddToCart}
        onQuickView={onQuickView}
        onAddToWishlist={onAddToWishlist}
        onShare={onShare}
        wishlistItems={wishlistItems}
      />

      {/* Bestsellers Section */}
      <ProductGrid
        products={productsData['bestsellers']}
        title="Bestsellers"
        onAddToCart={onAddToCart}
        onQuickView={onQuickView}
        onAddToWishlist={onAddToWishlist}
        onShare={onShare}
        wishlistItems={wishlistItems}
      />

      {/* Premium Collection Banner */}
      <section className="premium-banner">
        <div className="container">
          <div className="premium-content">
            <div className="premium-text">
              <div className="premium-badge">
                <FiAward /> PREMIUM COLLECTION
              </div>
              <h2>Experience Unparalleled Luxury</h2>
              <p>Discover our exclusive premium collection featuring the finest materials and craftsmanship. Each piece is meticulously crafted to offer exceptional quality and timeless elegance.</p>
              <button className="premium-cta">
                Explore Premium <FiArrowRight />
              </button>
            </div>
            <div className="premium-image">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Premium Collection" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature">
              <FiTruck className="feature-icon" />
              <h3>Free Shipping</h3>
              <p>On orders over ₹2000</p>
            </div>
            <div className="feature">
              <FiShield className="feature-icon" />
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </div>
            <div className="feature">
              <FiCreditCard className="feature-icon" />
              <h3>Secure Payment</h3>
              <p>Your payment information is safe</p>
            </div>
            <div className="feature">
              <FiStar className="feature-icon" />
              <h3>Quality Guarantee</h3>
              <p>Premium quality products</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Footer Component
const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-jd">JD</span>
              <span className="logo-text">FASHIONS</span>
              <span className="premium-badge-footer">PREMIUM</span>
            </div>
            <p>Premium clothing and accessories for the modern individual. Where quality meets contemporary design.</p>
            <div className="social-links">
              <a href="#instagram"><FiInstagram /></a>
              <a href="#facebook"><FiFacebook /></a>
              <a href="#twitter"><FiTwitter /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Shop</h4>
            <ul className="footer-links">
              <li><a href="/new-arrivals">New Arrivals</a></li>
              <li><a href="/bestsellers">Bestsellers</a></li>
              <li><a href="/clothing/men">Men's Clothing</a></li>
              <li><a href="/clothing/women">Women's Clothing</a></li>
              <li><a href="/accessories">Accessories</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Information</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="#shipping">Shipping & Returns</a></li>
              <li><a href="#size-guide">Size Guide</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul className="footer-links">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#returns">Returns & Exchanges</a></li>
              <li><a href="#support">Support Center</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to get exclusive offers and style tips</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 JD Fashions Premium. All rights reserved. | Crafted with passion for fashion</p>
        </div>
      </div>
    </footer>
  );
};

// ========== MAIN APP COMPONENT WITH ENHANCED FUNCTIONALITY ==========
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [shareProduct, setShareProduct] = useState(null);
  const [supportTab, setSupportTab] = useState('contact');
  const location = useLocation();
  const navigate = useNavigate();

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = getAllProducts().filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Add toast notification
  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  };

  // Remove toast
  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // Add to cart function with toast
  const addToCart = (product) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => 
        item.id === product.id && 
        item.selectedSize === (product.selectedSize || product.sizes?.[0]) && 
        item.selectedColor === (product.selectedColor || product.colors?.[0])
      );
      
      if (existingIndex >= 0) {
        const updatedItems = [...prev];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + (product.quantity || 1)
        };
        addToast(`${product.name} quantity updated in cart!`);
        return updatedItems;
      }
      
      addToast(`${product.name} added to cart successfully!`);
      return [...prev, { 
        ...product, 
        quantity: product.quantity || 1,
        selectedSize: product.selectedSize || (product.sizes ? product.sizes[0] : 'M'),
        selectedColor: product.selectedColor || (product.colors ? product.colors[0] : 'Black')
      }];
    });
  };

  // Remove from cart
  const removeFromCart = (id, size, color) => {
    setCartItems(prev => prev.filter(item => 
      !(item.id === id && item.selectedSize === size && item.selectedColor === color)
    ));
  };

  // Update quantity
  const updateQuantity = (id, newQuantity, size, color) => {
    if (newQuantity < 1) return;
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.selectedSize === size && item.selectedColor === color
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    addToast('Cart cleared successfully!');
  };

  // Add to wishlist with toast
  const addToWishlist = (product) => {
    setWishlistItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        addToast(`${product.name} removed from wishlist!`);
        return prev.filter(item => item.id !== product.id);
      }
      addToast(`${product.name} added to wishlist!`);
      return [...prev, product];
    });
  };

  // Remove from wishlist
  const removeFromWishlist = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  // Quick view handler
  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  // Close quick view
  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setQuickViewProduct(null);
  };

  // Share product handler
  const handleShare = (product) => {
    setShareProduct(product);
    setIsShareOpen(true);
  };

  // Close share modal
  const closeShare = () => {
    setIsShareOpen(false);
    setShareProduct(null);
  };

  // Support modal handler
  const handleSupportClick = (tab = 'contact') => {
    setSupportTab(tab);
    setIsSupportOpen(true);
  };

  // Close support modal
  const closeSupport = () => {
    setIsSupportOpen(false);
  };

  // Handle login
  const handleLogin = (userData) => {
    setCurrentUser({
      name: userData.name,
      email: userData.email
    });
    setIsLoginOpen(false);
    addToast(`Welcome back, ${userData.name}!`);
  };

  // Handle logout
  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoginOpen(false);
    setIsProfileOpen(false);
    addToast('Logged out successfully!');
  };

  // Handle search product click
  const handleSearchProductClick = (product) => {
    handleQuickView(product);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  // Handle navigation to different pages
  const handleNavigateTo = (page) => {
    if (page === 'orders') {
      navigate('/orders');
    } else if (page === 'wishlist') {
      setIsWishlistOpen(true);
    } else if (page === 'profile') {
      setIsProfileOpen(true);
    }
    setIsProfileOpen(false);
  };

  // Close all modals when route changes
  useEffect(() => {
    setIsCartOpen(false);
    setIsWishlistOpen(false);
    setIsMenuOpen(false);
    setIsLoginOpen(false);
    setIsQuickViewOpen(false);
    setIsSearchOpen(false);
    setIsProfileOpen(false);
    setIsSupportOpen(false);
    setIsShareOpen(false);
  }, [location]);

  // Render different pages based on route
  const renderPage = () => {
    switch (location.pathname) {
      case '/checkout':
        return <Checkout onBack={() => navigate(-1)} cartItems={cartItems} currentUser={currentUser} onClearCart={clearCart} />;
      case '/about':
        return <AboutUs />;
      case '/contact':
        return <ContactUs />;
      case '/orders':
        return <OrdersPage orders={sampleOrders} />;
      case '/clothing':
        return (
          <CategoryPage
            category="clothing"
            onAddToCart={addToCart}
            onQuickView={handleQuickView}
            onAddToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
            onShare={handleShare}
          />
        );
      case '/clothing/men':
        return (
          <ProductGrid
            products={productsData.clothing.men}
            title="Men's Clothing"
            onAddToCart={addToCart}
            onQuickView={handleQuickView}
            onAddToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
            onShare={handleShare}
          />
        );
      case '/clothing/women':
        return (
          <ProductGrid
            products={productsData.clothing.women}
            title="Women's Clothing"
            onAddToCart={addToCart}
            onQuickView={handleQuickView}
            onAddToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
            onShare={handleShare}
          />
        );
      case '/accessories':
        return (
          <CategoryPage
            category="accessories"
            onAddToCart={addToCart}
            onQuickView={handleQuickView}
            onAddToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
            onShare={handleShare}
          />
        );
      case '/accessories/men':
        return (
          <ProductGrid
            products={productsData.accessories.men}
            title="Men's Accessories"
            onAddToCart={addToCart}
            onQuickView={handleQuickView}
            onAddToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
            onShare={handleShare}
          />
        );
      case '/accessories/women':
        return (
          <ProductGrid
            products={productsData.accessories.women}
            title="Women's Accessories"
            onAddToCart={addToCart}
            onQuickView={handleQuickView}
            onAddToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
            onShare={handleShare}
          />
        );
      case '/new-arrivals':
        return (
          <ProductGrid
            products={productsData['new-arrivals']}
            title="New Arrivals"
            onAddToCart={addToCart}
            onQuickView={handleQuickView}
            onAddToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
            onShare={handleShare}
          />
        );
      case '/bestsellers':
        return (
          <ProductGrid
            products={productsData['bestsellers']}
            title="Bestsellers"
            onAddToCart={addToCart}
            onQuickView={handleQuickView}
            onAddToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
            onShare={handleShare}
          />
        );
      default:
        return (
          <HomePage
            onAddToCart={addToCart}
            onQuickView={handleQuickView}
            onAddToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
            onShare={handleShare}
          />
        );
    }
  };

  return (
    <div className="app">
      <Header 
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistItems.length}
        onCartClick={() => setIsCartOpen(true)}
        onWishlistClick={() => setIsWishlistOpen(true)}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        onSearchClick={() => setIsSearchOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
        onLogout={handleLogout}
        onProfileClick={() => setIsProfileOpen(true)}
        onOrdersClick={() => navigate('/orders')}
        onSupportClick={handleSupportClick}
        isMenuOpen={isMenuOpen}
        currentUser={currentUser}
      />
      
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Toast Notifications */}
      <div className="toast-container">
        <AnimatePresence>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              message={toast.message}
              type={toast.type}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <SearchBar
            isOpen={isSearchOpen}
            onClose={() => {
              setIsSearchOpen(false);
              setSearchQuery('');
            }}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            searchResults={searchResults}
            onProductClick={handleSearchProductClick}
          />
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <Cart
            items={cartItems}
            onClose={() => setIsCartOpen(false)}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onClearCart={clearCart}
          />
        )}
      </AnimatePresence>

      {/* Wishlist Sidebar */}
      <AnimatePresence>
        {isWishlistOpen && (
          <Wishlist
            items={wishlistItems}
            onClose={() => setIsWishlistOpen(false)}
            onRemove={removeFromWishlist}
            onAddToCart={addToCart}
            onQuickView={handleQuickView}
          />
        )}
      </AnimatePresence>

      {/* Quick View Modal */}
      <AnimatePresence>
        {isQuickViewOpen && quickViewProduct && (
          <QuickViewModal
            product={quickViewProduct}
            isOpen={isQuickViewOpen}
            onClose={closeQuickView}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            onShare={handleShare}
            isInWishlist={wishlistItems.some(item => item.id === quickViewProduct.id)}
          />
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginOpen && (
          <Login
            onClose={() => setIsLoginOpen(false)}
            onLogin={handleLogin}
            onLogout={handleLogout}
            currentUser={currentUser}
          />
        )}
      </AnimatePresence>

      {/* User Profile Modal */}
      <AnimatePresence>
        {isProfileOpen && currentUser && (
          <UserProfileModal
            isOpen={isProfileOpen}
            onClose={() => setIsProfileOpen(false)}
            currentUser={currentUser}
            onLogout={handleLogout}
            onNavigateTo={handleNavigateTo}
          />
        )}
      </AnimatePresence>

      {/* Customer Support Modal */}
      <AnimatePresence>
        {isSupportOpen && (
          <CustomerSupportModal
            isOpen={isSupportOpen}
            onClose={closeSupport}
            activeTab={supportTab}
          />
        )}
      </AnimatePresence>

      {/* Share Modal */}
      <AnimatePresence>
        {isShareOpen && shareProduct && (
          <ShareModal
            isOpen={isShareOpen}
            onClose={closeShare}
            product={shareProduct}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default App;