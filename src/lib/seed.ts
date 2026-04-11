import { IProduct } from "@/types/product";

export const PRODUCTS: IProduct[] = [
  {
    id: "1",
    name: "Aura Studio Pro",
    category: "Audio",
    price: 499.0,
    rating: 4.8,
    reviews: 124,
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/c18a32cf3c-480fa281c7cbf23efcd5.png", // Replace with your actual paths
    status: "In Stock",
    description:
      "High-fidelity wireless speaker with ambient lighting and 360-degree sound.",
    color: "Midnight Black",
    isNew: true,
    sale_discount: 0,
  },
  {
    id: "2",
    name: "Zenith Noise Cancelling",
    category: "Audio",
    price: 299.0,
    rating: 4.9,
    reviews: 89,
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/f78c1dc6ce-8eed18c26e7a3633778b.png",
    status: "In Stock",
    description:
      "Next-generation active noise cancellation with 40-hour battery life.",
    color: "Silver Birch",
    isNew: false,
    sale_discount: 0,
  },
  {
    id: "3",
    name: "Nova True Wireless Earbuds",
    category: "Wearables",
    price: 119.0,
    rating: 4.8,
    reviews: 210,
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/6fc47f59a2-615a3a0457386c4043e3.png",
    status: "Out of Stock",
    description:
      "Compact design with spatial audio support and water resistance for active lifestyles.",
    color: "White",
    isNew: false,
    sale_discount: 20,
  },
  {
    id: "4",
    name: "Luminal Desk Lamp",
    category: "Lifestyle",
    price: 120.0,
    rating: 4.7,
    reviews: 45,
    image: "/assets/icons/product-icon.svg",
    status: "In Stock",
    description:
      "Minimalist LED task light with adjustable color temperature and wireless charging.",
    color: "Matte White",
    isNew: false,
    sale_discount: 0,
  },
  {
    id: "5",
    name: "Pixel Fold 2",
    category: "Mobile",
    price: 1799.0,
    rating: 4.6,
    reviews: 67,
    image: "/assets/icons/product-icon.svg",
    status: "In Stock",
    description: "Ultra-slim foldable display with pro-grade camera system.",
    color: "Obsidian",
    isNew: false,
    sale_discount: 0,
  },
  {
    id: "6",
    name: "Analog Horizon Turntable",
    category: "Accessories",
    price: 349.0,
    rating: 4.9,
    reviews: 312,
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/5e6d9b2887-7d98acbce765ca13919c.png",
    status: "In Stock",
    description:
      "Belt-drive turntable with built-in preamp and Bluetooth connectivity in a walnut finish.",
    color: "Walnut",
    isNew: false,
    sale_discount: 35,
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
