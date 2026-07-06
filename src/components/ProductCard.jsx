export function ProductCard({ product }) {
  const price = product.priceRange.minVariantPrice;

  return (
    <div className="card">
      {product.featuredImage ? (
        <img
          src={product.featuredImage.url}
          alt={product.featuredImage.altText || product.title}
          className="card-image"
        />
      ) : (
        <div className="card-image placeholder" />
      )}
      <div className="card-body">
        <h3>{product.title}</h3>
        <p className="price">
          {new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: price.currencyCode,
          }).format(Number(price.amount))}
        </p>
      </div>
    </div>
  );
}
