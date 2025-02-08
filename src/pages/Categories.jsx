import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
import categoryData from '../components/Categorydata';
import Header from '../components/Header';

const Categories = ({ addToCart }) => {
  return (

    <>
    <Header/>
    <div className="categories-container">
      
      <div className="categories-grid">
        {Object.keys(categoryData).map((key) => (
          <div key={key} className="category-card">
            <div className="category-image-container">
              <img
                src={categoryData[key].image} 
                alt={categoryData[key].name}
                className="category-image"
              />
            </div>
            <h2 className="category-name">{categoryData[key].name}</h2>
            <button 
              className="add-to-cart-button" 
              onClick={() => addToCart(categoryData[key])}
            >
              Add to Cart
            </button>
            <Link to={`/category/${key}`} className="view-details-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Categories;
