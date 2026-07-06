import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';
import './PageShared.css';

export function Shop() {
  const { products, loading, error } = useProducts(24);

  return (
    <div className="page">
      <div className="page-head">
        <p className="eyebrow">All products</p>
        <h1>Shop</h1>
        <p className="page-sub">Everything we make, in one place.</p>
      </div>

      {loading && <p className="state-msg">Loading products…</p>}
      {error && <p className="state-msg error">Error: {error}</p>}
      {!loading && !error && products.length === 0 && (
        <p className="state-msg">No products yet — add some in your Shopify admin.</p>
      )}

      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
