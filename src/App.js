import React, { useState } from 'react';
import './App.css';

function App() {
  // Hook useState per gestire la lista dei prodotti
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Smartphone' },
  ]);

  // Hook useState per il nuovo prodotto
  const [newProduct, setNewProduct] = useState('');

  // Funzione per gestire l'aggiunta di un nuovo prodotto
  const addProduct = () => {
    if (newProduct.trim() !== '') {
      setProducts([...products, { id: products.length + 1, name: newProduct }]);
      setNewProduct(''); // Resetta il campo input
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista dei Prodotti</h1>
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">{product.name}</li>
          ))}
        </ul>
        <div className="add-product">
          <input
            type="text"
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
            placeholder="Inserisci nuovo prodotto"
            className="product-input"
          />
          <button onClick={addProduct} className="add-button">Aggiungi Prodotto</button>
        </div>
      </header>
    </div>
  );
}

export default App;
