import React from 'react';
import CryptoCard from './pages/CryptoCard';
import './styles.css';

export default function App() {
  return (
    <div className="app">
      <h1>CrypVisionX</h1>
      <CryptoCard 
        name="Bitcoin" 
        price={12345.67} 
        rsi={45} 
        bollinger={{
          upper: 13000,
          middle: 12500,
          lower: 12000
        }} 
      />
    </div>
  );
}
