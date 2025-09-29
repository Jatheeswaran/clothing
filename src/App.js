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
  FiFilter
} from 'react-icons/fi';
import './App.css';

// ========== DATA ==========
const productsData = {
  'new-arrivals': [
    {
      id: 1,
      name: 'Designer Wool Blend Coat',
      price: 349,
      originalPrice: 449,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'coats',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Camel', 'Navy'],
      description: 'Premium wool blend coat with contemporary design, perfect for modern professionals. Features include hidden pockets, reinforced stitching, and luxury lining.',
      features: ['100% Wool Blend', 'Hidden Pockets', 'Reinforced Stitching', 'Luxury Lining'],
      material: '85% Wool, 15% Cashmere',
      care: 'Dry Clean Only',
      rating: 4.9,
      reviews: 156,
      inStock: true,
      tags: ['new', 'premium', 'winter']
    },
    {
      id: 2,
      name: 'Organic Cotton Premium Tee',
      price: 65,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'tops',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Navy', 'Olive'],
      description: 'Ultra-soft organic cotton t-shirt with perfect fit. Made from sustainable materials with attention to comfort and durability.',
      features: ['100% Organic Cotton', 'Sustainable Material', 'Reinforced Neckline', 'Pre-shrunk'],
      material: '100% Organic Cotton',
      care: 'Machine Wash Cold',
      rating: 4.7,
      reviews: 234,
      inStock: true,
      tags: ['new', 'sustainable', 'basic']
    },
    {
      id: 3,
      name: 'Designer Silk Dress',
      price: 289,
      originalPrice: 359,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'dresses',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Navy', 'Black', 'Burgundy'],
      description: 'Elegant silk dress with flowing silhouette and delicate details. Perfect for special occasions and evening wear.',
      features: ['100% Silk', 'Flowing Silhouette', 'Delicate Details', 'Evening Wear'],
      material: '100% Mulberry Silk',
      care: 'Dry Clean Only',
      rating: 4.8,
      reviews: 189,
      inStock: true,
      tags: ['new', 'luxury', 'dress']
    },
    {
      id: 4,
      name: 'Premium Denim Jacket',
      price: 145,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'jackets',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Light Blue', 'Dark Blue', 'Black'],
      description: 'Classic denim jacket with modern fit and premium finish. Features multiple pockets and durable construction.',
      features: ['Premium Denim', 'Modern Fit', 'Multiple Pockets', 'Durable Construction'],
      material: '100% Cotton Denim',
      care: 'Machine Wash',
      rating: 4.6,
      reviews: 312,
      inStock: true,
      tags: ['new', 'denim', 'jacket']
    }
  ],
  'bestsellers': [
    {
      id: 5,
      name: 'Luxury Cashmere Sweater',
      price: 285,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'knitwear',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Charcoal', 'Cream', 'Navy', 'Burgundy'],
      description: 'Exceptional 100% cashmere sweater offering unparalleled softness and warmth. Hand-finished details for ultimate luxury.',
      features: ['100% Cashmere', 'Hand-finished', 'Ribbed Cuffs', 'Classic Crewneck'],
      material: '100% Mongolian Cashmere',
      care: 'Dry Clean Recommended',
      rating: 4.9,
      reviews: 267,
      inStock: true,
      tags: ['bestseller', 'luxury', 'cashmere']
    },
    {
      id: 6,
      name: 'Tailored Wide-Leg Trousers',
      price: 145,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'bottoms',
      sizes: ['S', 'M', 'L'],
      colors: ['Black', 'Beige', 'Navy', 'Grey'],
      description: 'Elegant wide-leg trousers with perfect drape and sophisticated silhouette. Ideal for both professional and casual settings.',
      features: ['Premium Fabric', 'Perfect Drape', 'Hidden Waistband', 'Adjustable Length'],
      material: 'Wool Blend',
      care: 'Dry Clean Only',
      rating: 4.6,
      reviews: 178,
      inStock: true,
      tags: ['bestseller', 'trousers', 'tailored']
    }
  ],
  'clothing': [
    {
      id: 7,
      name: 'Designer Silk Blend Blouse',
      price: 165,
      originalPrice: 220,
      image: 'https://images.unsplash.com/photo-1589810635657-232948472d98?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'tops',
      sizes: ['XS', 'S', 'M'],
      colors: ['White', 'Cream', 'Blush', 'Navy'],
      description: 'Luxurious silk blend blouse with delicate details and elegant drape. Features French seams and mother-of-pearl buttons.',
      features: ['Silk Blend', 'French Seams', 'Mother-of-Pearl Buttons', 'Elegant Drape'],
      material: '70% Silk, 30% Cotton',
      care: 'Hand Wash',
      rating: 4.8,
      reviews: 192,
      inStock: true,
      tags: ['clothing', 'blouse', 'silk']
    },
    {
      id: 8,
      name: 'Designer Linen Jumpsuit',
      price: 175,
      originalPrice: 250,
      image: 'https://images.unsplash.com/photo-1506629905607-e9911cd189c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'jumpsuits',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Natural', 'Black', 'Olive', 'Terracotta'],
      description: 'Chic linen jumpsuit offering comfort and style. Features adjustable waist and multiple pockets for functionality.',
      features: ['100% Linen', 'Adjustable Waist', 'Multiple Pockets', 'Relaxed Fit'],
      material: '100% Premium Linen',
      care: 'Machine Wash Gentle',
      rating: 4.5,
      reviews: 189,
      inStock: true,
      tags: ['clothing', 'linen', 'jumpsuit']
    }
  ],
  'accessories': [
    {
      id: 9,
      name: 'Signature Silk Scarf',
      price: 85,
      originalPrice: 120,
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'accessories',
      sizes: ['One Size'],
      colors: ['Multicolor', 'Navy/Gold', 'Burgundy/Cream', 'Emerald'],
      description: 'Luxurious silk scarf with exclusive print design. Versatile accessory that elevates any outfit with sophistication.',
      features: ['100% Silk', 'Hand-rolled Edges', 'Exclusive Print', 'Versatile Styling'],
      material: '100% Mulberry Silk',
      care: 'Dry Clean Only',
      rating: 4.9,
      reviews: 278,
      inStock: true,
      tags: ['accessories', 'silk', 'scarves']
    },
    {
      id: 10,
      name: 'Designer Leather Belt',
      price: 95,
      image: 'https://images.unsplash.com/photo-1548036328-71a4f4e8b0ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'accessories',
      sizes: ['S', 'M', 'L'],
      colors: ['Black', 'Brown', 'Tan'],
      description: 'Premium leather belt with polished buckle and precise craftsmanship. The perfect finishing touch for any outfit.',
      features: ['Genuine Leather', 'Polished Buckle', 'Multiple Sizes', 'Timeless Design'],
      material: '100% Genuine Leather',
      care: 'Leather Conditioner',
      rating: 4.7,
      reviews: 156,
      inStock: true,
      tags: ['accessories', 'leather', 'belts']
    }
  ],
  'sale': [
    {
      id: 11,
      name: 'Premium Leather Midi Skirt',
      price: 199,
      originalPrice: 320,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'bottoms',
      sizes: ['S', 'M', 'L'],
      colors: ['Black', 'Brown', 'Burgundy'],
      description: 'Sophisticated leather midi skirt with elegant silhouette and premium finish. Perfect for making a fashion statement.',
      features: ['Genuine Leather', 'Concealed Zipper', 'Lined Interior', 'Premium Finish'],
      material: '100% Genuine Leather',
      care: 'Professional Leather Care',
      rating: 4.7,
      reviews: 134,
      inStock: true,
      tags: ['sale', 'leather', 'premium']
    },
    {
      id: 12,
      name: 'Cashmere Blend Cardigan',
      price: 145,
      originalPrice: 220,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'knitwear',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Cream', 'Grey', 'Navy', 'Burgundy'],
      description: 'Luxurious cashmere blend cardigan offering warmth and style. Perfect for layering in cooler weather.',
      features: ['Cashmere Blend', 'Ribbed Trim', 'Deep Pockets', 'Versatile Styling'],
      material: '70% Cashmere, 30% Merino Wool',
      care: 'Dry Clean Recommended',
      rating: 4.6,
      reviews: 203,
      inStock: true,
      tags: ['sale', 'cashmere', 'cardigan']
    }
  ]
};

// ========== COMPONENTS ==========

// Search Bar Component
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
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
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
              <p>No products found for "{searchQuery}"</p>
              <span>Try checking your spelling or using different keywords</span>
            </div>
          ) : searchResults.length > 0 ? (
            <>
              <div className="results-header">
                <h3>Search Results ({searchResults.length})</h3>
              </div>
              <div className="results-grid">
                {searchResults.map((product) => (
                  <div 
                    key={product.id} 
                    className="search-result-item"
                    onClick={() => onProductClick(product)}
                  >
                    <img src={product.image} alt={product.name} />
                    <div className="result-details">
                      <h4>{product.name}</h4>
                      <div className="result-price">
                        ${product.price}
                        {product.originalPrice && (
                          <span className="original-price">${product.originalPrice}</span>
                        )}
                      </div>
                      <div className="result-category">{product.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="search-suggestions">
              <h3>Popular Searches</h3>
              <div className="suggestion-tags">
                {['Dresses', 'Jackets', 'Sweaters', 'Accessories', 'Sale', 'New Arrivals'].map(tag => (
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

// Header Component
const Header = ({ 
  cartCount, 
  wishlistCount, 
  onCartClick, 
  onMenuToggle, 
  isMenuOpen, 
  onWishlistClick, 
  currentUser,
  onSearchClick 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    if (isMenuOpen && onMenuToggle) {
      onMenuToggle();
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => navigate('/')}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              JD FASHIONS
            </motion.span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-links">
              {[
                { path: '/new-arrivals', label: 'New Arrivals' },
                { path: '/bestsellers', label: 'Bestsellers' },
                { path: '/clothing', label: 'Clothing' },
                { path: '/accessories', label: 'Accessories' },
                { path: '/sale', label: 'Sale' },
                { path: '/about', label: 'About Us' }
              ].map((item) => (
                <li key={item.path}>
                  <a 
                    href={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.path);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="header-actions">
            <button className="icon-button search-button" onClick={onSearchClick}>
              <FiSearch />
            </button>
            <button className="icon-button" onClick={() => navigate(currentUser ? '/profile' : '/login')}>
              <FiUser />
              {currentUser && <span className="user-indicator"></span>}
            </button>
            <button className="icon-button wishlist-icon" onClick={onWishlistClick}>
              <FiHeart />
              {wishlistCount > 0 && <span className="wishlist-count">{wishlistCount}</span>}
            </button>
            <button className="icon-button cart-icon" onClick={onCartClick}>
              <FiShoppingBag />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
            <button className="mobile-menu-button" onClick={onMenuToggle}>
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Component
const Hero = ({ onShopNow }) => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Elevate Your Style with <span className="gradient-text">JD Fashions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover our exclusive collection of premium clothing and accessories. 
            Where quality meets contemporary design for the modern individual.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button className="cta-button primary" onClick={() => navigate('/new-arrivals')}>
              Shop New Collection <FiArrowRight />
            </button>
            <button className="cta-button secondary" onClick={() => navigate('/about')}>
              Our Story
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ product, onAddToCart, onQuickView, onAddToWishlist, isInWishlist }) => {
  const [isHovered, setIsHovered] = useState(false);

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
        <img src={product.image} alt={product.name} />
        <div className={`product-overlay ${isHovered ? 'visible' : ''}`}>
          <button className="quick-view-btn" onClick={() => onQuickView(product)}>
            Quick View
          </button>
          <button 
            className={`wishlist-btn ${isInWishlist ? 'in-wishlist' : ''}`}
            onClick={() => onAddToWishlist(product)}
          >
            <FiHeart />
          </button>
        </div>
        {product.originalPrice && (
          <div className="sale-badge">
            SALE<br/>{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </div>
        )}
        {product.tags.includes('new') && (
          <div className="new-badge">NEW</div>
        )}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <FiStar 
              key={i} 
              className={i < Math.floor(product.rating) ? 'star filled' : 'star'}
            />
          ))}
          <span className="rating-text">({product.reviews})</span>
        </div>
        <div className="product-price">
          ${product.price}
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>
        <div className="product-colors">
          {product.colors.slice(0, 3).map((color, index) => (
            <span 
              key={index}
              className="color-dot"
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
            />
          ))}
          {product.colors.length > 3 && (
            <span className="color-more">+{product.colors.length - 3}</span>
          )}
        </div>
        <button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

// Product Grid Component
const ProductGrid = ({ category, onAddToCart, onQuickView, onAddToWishlist, wishlistItems }) => {
  const sectionProducts = productsData[category] || [];

  return (
    <section className="product-grid-section">
      <div className="container">
        <div className="section-header">
          <h2>{category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
          <p>Discover our curated collection of {category.replace('-', ' ')}</p>
        </div>
        <motion.div 
          className="products-grid"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {sectionProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              onAddToWishlist={onAddToWishlist}
              isInWishlist={wishlistItems.some(item => item.id === product.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Quick View Modal Component
const QuickViewModal = ({ product, isOpen, onClose, onAddToCart, onAddToWishlist, isInWishlist }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!isOpen) return null;

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
        className="quick-view-modal"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <button className="close-modal" onClick={onClose}>
          <FiX />
        </button>
        
        <div className="modal-content">
          <div className="modal-image-section">
            <div className="modal-image">
              <img src={product.image} alt={product.name} />
              <button 
                className={`wishlist-btn-modal ${isInWishlist ? 'in-wishlist' : ''}`}
                onClick={() => onAddToWishlist(product)}
              >
                <FiHeart />
              </button>
            </div>
          </div>
          
          <div className="modal-details-section">
            <div className="modal-header">
              <h2>{product.name}</h2>
              <div className="modal-price">
                ${product.price}
                {product.originalPrice && (
                  <span className="original-price">${product.originalPrice}</span>
                )}
              </div>
            </div>
            
            <div className="modal-rating">
              {[...Array(5)].map((_, i) => (
                <FiStar 
                  key={i} 
                  className={i < Math.floor(product.rating) ? 'star filled' : 'star'}
                />
              ))}
              <span>({product.reviews} reviews)</span>
            </div>

            <div className="product-tabs">
              <button 
                className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`tab-button ${activeTab === 'details' ? 'active' : ''}`}
                onClick={() => setActiveTab('details')}
              >
                Details
              </button>
              <button 
                className={`tab-button ${activeTab === 'shipping' ? 'active' : ''}`}
                onClick={() => setActiveTab('shipping')}
              >
                Shipping
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'description' && (
                <div>
                  <p className="modal-description">{product.description}</p>
                  <div className="features-list">
                    <h4>Key Features:</h4>
                    <ul>
                      {product.features.map((feature, index) => (
                        <li key={index}>✓ {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {activeTab === 'details' && (
                <div>
                  <div className="detail-item">
                    <strong>Material:</strong> {product.material}
                  </div>
                  <div className="detail-item">
                    <strong>Care Instructions:</strong> {product.care}
                  </div>
                  <div className="detail-item">
                    <strong>Category:</strong> {product.category}
                  </div>
                </div>
              )}
              {activeTab === 'shipping' && (
                <div>
                  <div className="shipping-info">
                    <FiTruck className="shipping-icon" />
                    <div>
                      <strong>Free Shipping</strong>
                      <p>On orders over $200. Usually delivers in 3-5 business days.</p>
                    </div>
                  </div>
                  <div className="shipping-info">
                    <FiShield className="shipping-icon" />
                    <div>
                      <strong>Easy Returns</strong>
                      <p>30-day return policy. No questions asked.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="selection-section">
              <div className="size-selector">
                <label>Size:</label>
                <div className="size-options">
                  {product.sizes.map(size => (
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
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                      onClick={() => setSelectedColor(color)}
                      style={{ 
                        backgroundColor: color.toLowerCase(),
                        border: color.toLowerCase() === 'white' ? '1px solid #ddd' : 'none'
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
              
              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="quantity-controls">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            </div>
            
            <div className="modal-actions">
              <button 
                className="add-to-cart-modal"
                onClick={() => {
                  onAddToCart({ ...product, quantity, selectedSize, selectedColor });
                  onClose();
                }}
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

// Cart Component
const Cart = ({ items, onClose, onRemove, onUpdateQuantity }) => {
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = total > 200 ? 0 : 15;
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
        transition={{ type: 'spring', damping: 30 }}
      >
        <div className="cart-header">
          <h2>Your Shopping Cart ({items.length})</h2>
          <button className="close-cart" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="empty-cart">
              <FiShoppingCart size={48} />
              <p>Your cart is empty</p>
              <button className="continue-shopping" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map(item => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-item-details">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <p className="cart-item-price">${item.price}</p>
                      <div className="cart-item-meta">
                        <span>Size: {item.selectedSize}</span>
                        <span>Color: {item.selectedColor}</span>
                      </div>
                      <div className="quantity-controls">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      className="remove-item"
                      onClick={() => onRemove(item.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {total < 200 && (
                  <div className="shipping-note">
                    Add ${(200 - total).toFixed(2)} more for free shipping!
                  </div>
                )}
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
                <button className="checkout-button" onClick={handleCheckout}>
                  Proceed to Checkout
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
        transition={{ type: 'spring', damping: 30 }}
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
              <FiHeart size={48} />
              <p>Your wishlist is empty</p>
              <p>Add items you love by clicking the heart icon</p>
            </div>
          ) : (
            <div className="wishlist-items">
              {items.map(item => (
                <div key={item.id} className="wishlist-item">
                  <div className="wishlist-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="wishlist-item-details">
                    <h4 className="wishlist-item-name">{item.name}</h4>
                    <p className="wishlist-item-price">${item.price}</p>
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

// Login Component
const Login = ({ onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
    onClose();
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
        className="login-modal"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <button className="close-modal" onClick={onClose}>
          <FiX />
        </button>
        
        <div className="login-content">
          <div className="login-header">
            <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
            <p>{isLogin ? 'Sign in to your account' : 'Join JD Fashions today'}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            {!isLogin && (
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
            )}
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
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                minLength="6"
              />
            </div>
            
            <button type="submit" className="login-button">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>
          
          <div className="login-switch">
            <p>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                className="switch-button"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

// Checkout Component
const Checkout = ({ cartItems, onBack }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 200 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful order
    alert('Order placed successfully! Thank you for shopping with JD Fashions.');
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                  <label>Email Address</label>
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

              <div className="form-section">
                <h3>Shipping Address</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Street address"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Payment Information</h3>
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      required
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                      placeholder="123"
                      maxLength="3"
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="place-order-button">
                Place Order - ${total.toFixed(2)}
              </button>
            </form>
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="order-items">
              {cartItems.map(item => (
                <div key={item.id} className="order-item">
                  <img src={item.image} alt={item.name} />
                  <div className="order-item-details">
                    <h4>{item.name}</h4>
                    <p>Size: {item.selectedSize} | Color: {item.selectedColor}</p>
                    <p>Qty: {item.quantity} × ${item.price}</p>
                  </div>
                  <div className="order-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="total-row">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="total-row final-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
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
                to bring high-quality, contemporary fashion to discerning customers worldwide. 
                What started as a single store has grown into a global brand known for 
                exceptional craftsmanship and timeless design.
              </p>
              <p>
                Our commitment to quality extends beyond our products to every aspect of 
                your shopping experience. We believe that great fashion should be accessible, 
                sustainable, and make you feel confident every day.
              </p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Our Store" />
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
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Our Philosophy" />
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
                <p>Quick and reliable shipping to get your fashion finds to you faster.</p>
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

// Home Page Component
const HomePage = ({ onAddToCart, onQuickView, onAddToWishlist, wishlistItems }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Hero />
      
      {/* Featured Categories */}
      <section className="featured-categories">
        <div className="container">
          <div className="section-header">
            <h2>Shop By Category</h2>
            <p>Discover our carefully curated collections</p>
          </div>
          <div className="categories-grid">
            {[
              { name: 'New Arrivals', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', path: '/new-arrivals' },
              { name: 'Bestsellers', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', path: '/bestsellers' },
              { name: 'Clothing', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', path: '/clothing' },
              { name: 'Accessories', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', path: '/accessories' }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                className="category-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(category.path)}
              >
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                  <h3>{category.name}</h3>
                  <button>
                    Shop Now <FiArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
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
              <p>Free shipping on orders over $200</p>
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
            <h3>JD FASHIONS</h3>
            <p>Premium clothing and accessories for the modern individual. Where quality meets contemporary design.</p>
            <div className="social-links">
              <a href="#instagram">Instagram</a>
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
              <a href="#pinterest">Pinterest</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Shop</h4>
            <ul className="footer-links">
              <li><a href="/new-arrivals">New Arrivals</a></li>
              <li><a href="/bestsellers">Bestsellers</a></li>
              <li><a href="/clothing">Clothing</a></li>
              <li><a href="/accessories">Accessories</a></li>
              <li><a href="/sale">Sale</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Information</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="#shipping">Shipping & Returns</a></li>
              <li><a href="#size-guide">Size Guide</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul className="footer-links">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#returns">Returns & Exchanges</a></li>
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
          <p>&copy; 2024 JD Fashions. All rights reserved. | Crafted with passion for fashion</p>
        </div>
      </div>
    </footer>
  );
};

// ========== MAIN APP COMPONENT ==========
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = Object.values(productsData)
        .flat()
        .filter(product => 
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Add to cart function
  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => 
        item.id === product.id && 
        item.selectedSize === product.selectedSize && 
        item.selectedColor === product.selectedColor
      );
      
      if (existing) {
        return prev.map(item =>
          item.id === product.id && 
          item.selectedSize === product.selectedSize && 
          item.selectedColor === product.selectedColor
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }
      return [...prev, { 
        ...product, 
        quantity: product.quantity || 1,
        selectedSize: product.selectedSize || product.sizes[0],
        selectedColor: product.selectedColor || product.colors[0]
      }];
    });
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Add to wishlist
  const addToWishlist = (product) => {
    setWishlistItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.filter(item => item.id !== product.id);
      }
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

  // Handle login
  const handleLogin = (userData) => {
    setCurrentUser({
      name: userData.name || 'John Doe',
      email: userData.email
    });
  };

  // Handle search product click
  const handleSearchProductClick = (product) => {
    handleQuickView(product);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  // Close all modals when route changes
  useEffect(() => {
    setIsCartOpen(false);
    setIsWishlistOpen(false);
    setIsMenuOpen(false);
    setIsLoginOpen(false);
    setIsQuickViewOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  // Render different pages based on route
  const renderPage = () => {
    switch (location.pathname) {
      case '/checkout':
        return <Checkout cartItems={cartItems} onBack={() => window.history.back()} />;
      case '/about':
        return <AboutUs />;
      case '/new-arrivals':
      case '/bestsellers':
      case '/clothing':
      case '/accessories':
      case '/sale':
        return (
          <ProductGrid
            category={location.pathname.slice(1)}
            onAddToCart={addToCart}
            onQuickView={handleQuickView}
            onAddToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
          />
        );
      default:
        return (
          <HomePage
            onAddToCart={addToCart}
            onQuickView={handleQuickView}
            onAddToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
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