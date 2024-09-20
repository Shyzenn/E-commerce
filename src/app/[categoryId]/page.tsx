"use client";

import products from "@/lib/data.json";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const normalizeCategory = (category: string) =>
  category.toLowerCase().replace(/\s+/g, "-");

const Page = () => {
  const categories = [
    { id: "all", name: "All" },
    { id: "furnitures", name: "Furnitures" },
    { id: "electronics", name: "Electronics" },
    { id: "lamps", name: "Lamps" },
    { id: "kitchen", name: "Kitchen" },
    { id: "chairs", name: "Chairs" },
    { id: "skin-care", name: "Skin Care" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.categories.some(
          (cat) => normalizeCategory(cat) === selectedCategory
        )
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory]);

  return (
    <div className="mt-10">
      <h1 className="text-center mb-10 text-2xl font-bold uppercase">
        {categories.find((cat) => cat.id === selectedCategory)?.name || "All"}
      </h1>

      <div className="flex gap-5 mb-10 justify-center flex-wrap">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 border-2 rounded-lg transition duration-300 ${
              selectedCategory === category.id
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
            onClick={() => handleCategoryClick(normalizeCategory(category.id))}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              href={`/products/${product.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="border-2 border-gray-300 hover:border-black cursor-pointer transition duration-300"
              key={product.id}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={280}
                height={280}
              />
              <div className="p-2 flex flex-col gap-2">
                <p className="text-lg">{product.name}</p>
                <p className="text-xl font-semibold">{product.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No Products</p>
        )}
      </div>
    </div>
  );
};

export default Page;
