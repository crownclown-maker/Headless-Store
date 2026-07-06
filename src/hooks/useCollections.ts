import { useEffect, useState } from 'react';
import { shopifyClient } from '../lib/shopify';
import { COLLECTIONS_QUERY } from '../lib/queries';
import type { Collection } from '../lib/types';

export function useCollections(first: number = 12) {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchCollections() {
      setLoading(true);
      setError(null);
      try {
        const { data, errors } = await shopifyClient.request(COLLECTIONS_QUERY, {
          variables: { first },
        });

        if (errors) {
          throw new Error(errors.message || 'Failed to fetch collections');
        }

        if (!cancelled) {
          const items = data.collections.edges.map((edge: any) => edge.node);
          setCollections(items);
        }
      } catch (err: any) {
        if (!cancelled) setError(err.message || 'Something went wrong');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchCollections();
    return () => {
      cancelled = true;
    };
  }, [first]);

  return { collections, loading, error };
}
