import { useProducts } from './hooks/useProducts';
import { useCollections } from './hooks/useCollections';
import { ProductCard } from './components/ProductCard';
import { CollectionCard } from './components/CollectionCard';
import './App.css';

function App() {
  const { products, loading: productsLoading, error: productsError } = useProducts(8);
  const { collections, loading: collectionsLoading, error: collectionsError } = useCollections(6);

  return (
    <div className="app">
      <header className="site-header">
        <h1>My Store</h1>
      </header>

      <main>
        <section>
          <h2>Collections</h2>
          {collectionsLoading && <p>Loading collections…</p>}
          {collectionsError && <p className="error">Error: {collectionsError}</p>}
          {!collectionsLoading && !collectionsError && collections.length === 0 && (
            <p>No collections found.</p>
          )}
          <div className="grid">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </section>

        <section>
          <h2>Products</h2>
          {productsLoading && <p>Loading products…</p>}
          {productsError && <p className="error">Error: {productsError}</p>}
          {!productsLoading && !productsError && products.length === 0 && (
            <p>No products found.</p>
          )}
          <div className="grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
