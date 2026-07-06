import { useCollections } from '../hooks/useCollections';
import { CollectionCard } from '../components/CollectionCard';
import './PageShared.css';

export function Collections() {
  const { collections, loading, error } = useCollections(12);

  return (
    <div className="page">
      <div className="page-head">
        <p className="eyebrow">Browse by</p>
        <h1>Collections</h1>
        <p className="page-sub">Grouped the way we'd lay them out on a table, not by category.</p>
      </div>

      {loading && <p className="state-msg">Loading collections…</p>}
      {error && <p className="state-msg error">Error: {error}</p>}
      {!loading && !error && collections.length === 0 && (
        <p className="state-msg">No collections yet — add some in your Shopify admin.</p>
      )}

      <div className="grid">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
}
