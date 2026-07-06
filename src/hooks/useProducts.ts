import { useEffect, useState } from 'react';
import { shopifyClient } from '../lib/shopify';
import { PRODUCTS_QUERY } from '../lib/queries';
import type { Product } from '../lib/types';

export function useProducts(first: number = 12) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        const { data, errors } = await shopifyClient.request(PRODUCTS_QUERY, {
          variables: { first },
        });

        if (errors) {
          throw new Error(errors.message || 'Failed to fetch products');
        }

        if (!cancelled) {
          const items = data.products.edges.map((edge: any) => edge.node);
          setProducts(items);
        }
      } catch (err: any) {
        if (!cancelled) setError(err.message || 'Something went wrong');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchProducts();
    return () => {
      cancelled = true;
    };
  }, [first]);

  return { products, loading, error };
}
