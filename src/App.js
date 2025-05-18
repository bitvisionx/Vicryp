// src/App.js
import React, { useEffect, useState } from 'react';
import CryptoCard from './pages/CryptoCard';
import { calculateRSI, calculateBollingerBands } from './utils/indicators';
import './styles.css';

export default function App() {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Voorbeeld: Fetch historische prijsdata (dummy data hier)
  useEffect(() => {
    async function fetchPrices() {
      // TODO: Vervang dit met echte API calls (bv. CoinGecko)
      const dummyPrices = [
        50, 52, 53, 54, 56, 57, 59, 60, 62, 61,
        63, 65, 66, 64, 62, 61, 60, 59, 58, 57,
      ];
      setPrices(dummyPrices);
      setLoading(false);
    }
    fetchPrices();
  }, []);

  if (loading) return <div>Loading...</div>;

  const currentPrice = prices[prices.length - 1];
  const rsi = calculateRSI(prices);
  const bollinger = calculateBollingerBands(prices);

  return (
    <div className="app">
      <h1>CrypVisionX</h1>
      <CryptoCard name="Bitcoin" price={currentPrice} rsi={rsi} bollinger={bollinger} />
    </div>
  );
}
