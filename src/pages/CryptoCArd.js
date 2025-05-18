import React from 'react';

export default function CryptoCard({ name, price, rsi, bollinger }) {
  return (
    <div style={{ 
      backgroundColor: '#222', 
      border: '1px solid gold', 
      borderRadius: '8px', 
      padding: '20px', 
      color: 'gold',
      maxWidth: '400px',
      margin: '20px auto'
    }}>
      <h2>{name}</h2>
      <p>Current Price: €{price.toFixed(2)}</p>
      {rsi !== null && <p>RSI: {rsi.toFixed(2)}</p>}
      {bollinger && (
        <p>
          Bollinger Bands — Upper: €{bollinger.upper.toFixed(2)}, Middle: €{bollinger.middle.toFixed(2)}, Lower: €{bollinger.lower.toFixed(2)}
        </p>
      )}
    </div>
  );
}
