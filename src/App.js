import './App.css';
import ProductCard from './components/ProductCard/ProductCard';

import {products} from './data/Product';





function App(){ 
  
  

  return(
    

    <div className="App">
      <header className="App-header">
        <h1>Product Showcase</h1>
      <p>Discover our latest products and deals!</p>
      </header>


    <main className="product-grid">
      {products.map(product =>(
        <ProductCard
        key={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        image={product.image}
        IsOnSale={product.IsOnSale}
        salePrice={product.salePrice}
        />
      ))}
    </main>
      
    </div>


    

  )
} 
export default App;
