import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.css';
import categoryData from './Categorydata';
import '../components/Header.jsx'

const CategoryList = ({ addToCart }) => {
  const categories = Object.values(categoryData);

  return (

    <>
    <div className="category-container">
      {categories.map((category) => (
        <div key={category.name} className="category-card">
          <Link to={`/category/${category.name.toLowerCase()}`} className="category-link">
            <img src={category.image} alt={category.name} className="category-image" />
            <h3 className="category-name">{category.name}</h3>
          </Link>
          <button
            className="add-to-cart-button"
            onClick={() => {
              const item = {
                id: category.name, 
                name: category.name,
                price: category.price || 0,
                quantity: 1,
                image: category.image,
              };
              addToCart(item);
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
    </>
  );
};

export default CategoryList;