export interface Product {
  id: string;
  name: string;
  price: number;
  type: "chocolate" | "cookie";
  accentColor: string;
  ingredient: string;
  tagline: string;
}

export const products: Product[] = [
  {
    id: "dark-sea-salt",
    name: "Dark Sea Salt",
    price: 299,
    type: "chocolate",
    accentColor: "#7c3aed",
    ingredient: "Himalayan Salt",
    tagline: "Bold. Salty. Unforgettable.",
  },
  {
    id: "rose-cardamom",
    name: "Rose Cardamom",
    price: 349,
    type: "chocolate",
    accentColor: "#ec4899",
    ingredient: "Rose Water & Elaichi",
    tagline: "Floral notes in every bite.",
  },
  {
    id: "hazelnut-crunch",
    name: "Hazelnut Crunch",
    price: 329,
    type: "chocolate",
    accentColor: "#f59e0b",
    ingredient: "Roasted Hazelnuts",
    tagline: "Crunch that hits different.",
  },
  {
    id: "mango-chili",
    name: "Mango Chili",
    price: 319,
    type: "chocolate",
    accentColor: "#ef4444",
    ingredient: "Alphonso Mango",
    tagline: "Sweet fire from India.",
  },
  {
    id: "classic-choco-cookie",
    name: "Classic Choco",
    price: 199,
    type: "cookie",
    accentColor: "#10b981",
    ingredient: "Cocoa Nibs",
    tagline: "The one that started it all.",
  },
  {
    id: "stuffed-brownie",
    name: "Stuffed Brownie",
    price: 249,
    type: "cookie",
    accentColor: "#3b82f6",
    ingredient: "Dark Fudge",
    tagline: "There's something inside.",
  },
];

export const featuredProduct = products[0];
