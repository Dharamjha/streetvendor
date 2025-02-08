import React, { useState, useEffect, useRef, useContext } from 'react';
import './Header.css';
import { FaShoppingCart, FaSearch, FaMap, FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import categoryData from './Categorydata';
import Auth from '../pages/Auth';
import { CartContext } from '../context/CartContext';
import Categories from '../pages/Categories';

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [location, setLocation] = useState("Select Location");
  const [showAuth, setShowAuth] = useState(false);
  const searchRef = useRef(null);

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const getAllSearchableItems = () => {
    const items = [];
    Object.entries(categoryData).forEach(([categoryName, category]) => {
      items.push({
        type: 'category',
        name: category.name,
        image: category.image,
      });
      category.ingredients.forEach(ingredient => {
        items.push({
          type: 'ingredient',
          name: ingredient.name,
          image: ingredient.image,
          category: category.name,
        });
      });
    });
    return items;
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value.trim() === "") {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const filtered = getAllSearchableItems().filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filtered);
    setShowSearchResults(true);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearchResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchItemClick = (item) => {
    setSearchTerm(item.name);
    setShowSearchResults(false);

    if (item.type === 'ingredient') {
      const categoryName = Object.entries(categoryData).find(([_, category]) =>
        category.ingredients.some(ing => ing.name === item.name)
      )?.[0];

      if (categoryName) {
        navigate(`/category/${categoryName.toLowerCase()}`);
      }
    } else {
      navigate(`/category/${item.name.toLowerCase()}`);
    }
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <>
      <div className="header">
        <div className="header-left">
          <h2 className="rahat" onClick={() => navigate('/')}>
            Rahat <span>Bazaar</span>
          </h2>
          <div className="location" onClick={() => setShowLocationModal(true)}>
            <FaMap className="location-icon" />
            <p className="text">{location}</p>
          </div>
         <Link to="/cat"> <h4 className='categoriesheader'>Categories</h4> </Link>
        </div>

        <div className="header-center" ref={searchRef}>
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search for ingredients or dishes..." 
              className="search-input" 
            />
          </div>
          
          {showSearchResults && searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((item, index) => (
                <div 
                  key={index}
                  className="search-result-item"
                  onClick={() => handleSearchItemClick(item)}
                >
                  <img src={item.image} alt={item.name} />
                  <div className="search-result-info">
                    <span className="search-result-name">{item.name}</span>
                    <span className="search-result-type">
                      {item.type === 'ingredient' ? `In ${item.category}` : 'Category'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="header-right">
          <div className="login" onClick={() => setShowAuth(true)}>
            <FaUser className="login-icon" />
            <p className="log">Login</p>
          </div>
          
          <div className="cart" onClick={handleCartClick}>
            <div className="cart-icon-container">
              <FaShoppingCart className="cart-icon" />
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </div>
            <p className="car">Cart</p>
          </div>
        </div>
      </div>

      {showLocationModal && (
        <div className="location-modal-overlay">
          <div className="location-modal">
            <h2>Set Your Location</h2>
            <button 
              className="close-button"
              onClick={() => setShowLocationModal(false)}
            >
              ×
            </button>
            <input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button
              className="confirm-button"
              onClick={() => setShowLocationModal(false)}
            >
              Confirm Location
            </button>
          </div>
        </div>
      )}

      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </>
  );
};

export default Header;