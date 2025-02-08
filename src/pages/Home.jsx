import React from 'react';
import './Home.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import { useCart } from '../context/CartContext'
import Footer from '../components/Footer';


const Home = () => {
  const { addToCart, cartItems } = useCart();
  return (
    <div>
      <Header />
      <Banner />
      <CategoryList addToCart={addToCart} cartItems={cartItems} />
      <Footer/>
    </div>
  );
};

export default Home;
