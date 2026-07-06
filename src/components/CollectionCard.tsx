import type { Collection } from '../lib/types';

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <div className="card">
      {collection.image ? (
        <img
          src={collection.image.url}
          alt={collection.image.altText || collection.title}
          className="card-image"
        />
      ) : (
        <div className="card-image placeholder" />
      )}
      <div className="card-body">
        <h3>{collection.title}</h3>
      </div>
    </div>
  );
}
