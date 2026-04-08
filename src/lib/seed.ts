export const PRODUCTS = [
  {
    id: "1",
    name: "Aura Studio Pro",
    category: "Audio",
    price: 499.0,
    rating: 4.8,
    reviews: 124,
    image: "/images/products/aura-studio.jpg", // Replace with your actual paths
    status: "In Stock",
    description:
      "High-fidelity wireless speaker with ambient lighting and 360-degree sound.",
    color: "Midnight Black",
  },
  {
    id: "2",
    name: "Zenith Noise Cancelling",
    category: "Audio",
    price: 299.0,
    rating: 4.9,
    reviews: 89,
    image: "/images/products/zenith-headphones.jpg",
    status: "In Stock",
    description:
      "Next-generation active noise cancellation with 40-hour battery life.",
    color: "Silver Birch",
  },
  {
    id: "3",
    name: "Vantage Smart Watch",
    category: "Wearables",
    price: 349.5,
    rating: 4.5,
    reviews: 210,
    image: "/images/products/vantage-watch.jpg",
    status: "Out of Stock",
    description:
      "Titanium casing with advanced health tracking and sapphire glass.",
    color: "Slate Grey",
  },
  {
    id: "4",
    name: "Luminal Desk Lamp",
    category: "Lifestyle",
    price: 120.0,
    rating: 4.7,
    reviews: 45,
    image: "/images/products/luminal-lamp.jpg",
    status: "In Stock",
    description:
      "Minimalist LED task light with adjustable color temperature and wireless charging.",
    color: "Matte White",
  },
  {
    id: "5",
    name: "Pixel Fold 2",
    category: "Mobile",
    price: 1799.0,
    rating: 4.6,
    reviews: 67,
    image: "/images/products/pixel-fold.jpg",
    status: "In Stock",
    description: "Ultra-slim foldable display with pro-grade camera system.",
    color: "Obsidian",
  },
  {
    id: "6",
    name: "Sonic Key mechanical",
    category: "Accessories",
    price: 159.0,
    rating: 4.9,
    reviews: 312,
    image: "/images/products/keyboard.jpg",
    status: "In Stock",
    description:
      "Compact 65% wireless mechanical keyboard with hot-swappable switches.",
    color: "Arctic Blue",
  },
];

export const PRODUCTS_VIEW_OPTIONS = [
  { id: 0, icon: "/assets/icons/table.svg", name: "Table" },
  { id: 1, icon: "/assets/icons/grid.svg", name: "Grid" },
  { id: 2, icon: "/assets/icons/row-icon.svg", name: "List" },
];

export enum ProductLayoutType {
  TABLE = "Table",
  GRID = "Grid",
  LIST = "List",
}
