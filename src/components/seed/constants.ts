export const CategoryFilterOptions = {
  ALL: "All Categories",
  ELECTRONICS: "Electronics",
  FASHION: "Fashion",
  HOME: "Home & Garden",
} as const;

export const PriceFilterOptions = {
  ALL: "All Prices",
  UNDER_50: "Under $50",
  BETWEEN_50_100: "$50 - $100",
  OVER_100: "Over $100",
} as const;

export const SortOptions = {
  RECOMMENDED: "Recommended",
  NEWEST_ARRIVALS: "Newest Arrivals",
  PRICE_LOW_TO_HIGH: "Price: Low to High",
  PRICE_HIGH_TO_LOW: "Price: High to Low",
  BEST_SELLERS: "Best Sellers",
} as const;
