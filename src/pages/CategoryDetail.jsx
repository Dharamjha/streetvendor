import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import categoryData from '../components/Categorydata.jsx';
import './CategoryDetails.css';
import Header from '../components/Header.jsx';

const CategoryDetail = () => {
  const [toast, setToast] = useState(null);
  const { categoryName } = useParams();
  const { addToCart } = useCart();
  const category = categoryData[categoryName];

  if (!category) {
    return <div>Category not found</div>;
  }

  const handleAddToCart = (item) => {
    addToCart(item);
    setToast({
      name: item.name,
      timestamp: Date.now()
    });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <>
      <Header />
      <div className="category-detail-container">
        {toast && (
          <div className="toast-notification">
            <span>{toast.name} added to cart!</span>
          </div>
        )}

        <header className="category-header">
          <img src={category.image} alt={category.name} />
          <h1>{category.name}</h1>
          <p className="category-description">{category.description}</p>
        </header>

        <div className="ingredients-list">
          {category.ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-card">
              <div className="ingredient-image-container">
                <img src={ingredient.image} alt={ingredient.name} />
              </div>
              <div className="ingredient-info">
                <h3>{ingredient.name}</h3>
                <p className="ingredient-quantity">Quantity: {ingredient.quantity}</p>
                <p className="ingredient-price">Price: ₹{ingredient.price}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart({
                    id: `${categoryName}-${ingredient.name}`,
                    name: ingredient.name,
                    price: ingredient.price,
                    image: ingredient.image,
                    quantity: 1
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="whole-category-cart">
          <button
            className="add-category-btn"
            onClick={() => handleAddToCart({
              id: categoryName,
              name: category.name,
              price: category.price,
              image: category.image,
              quantity: 1
            })}
          >
            Add Whole {category.name} to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryDetail;