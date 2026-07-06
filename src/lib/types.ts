export interface Money {
  amount: string;
  currencyCode: string;
}

export interface Product {
  id: string;
  title: string;
  handle: string;
  description?: string;
  featuredImage?: {
    url: string;
    altText: string | null;
  };
  priceRange: {
    minVariantPrice: Money;
  };
}

export interface Collection {
  id: string;
  title: string;
  handle: string;
  description?: string;
  image?: {
    url: string;
    altText: string | null;
  };
}
