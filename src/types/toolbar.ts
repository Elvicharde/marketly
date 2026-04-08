import {
  CategoryFilterOptions,
  PriceFilterOptions,
  SortOptions,
} from "@/components/seed/constants";

export type TCategoryFilterOption =
  (typeof CategoryFilterOptions)[keyof typeof CategoryFilterOptions];
export type TPriceFilterOption =
  (typeof PriceFilterOptions)[keyof typeof PriceFilterOptions];
export type TSortOption = (typeof SortOptions)[keyof typeof SortOptions];
