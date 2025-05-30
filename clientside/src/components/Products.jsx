import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { motion } from "framer-motion";

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products", {
          params: { search: "apple" },
        });
        setProductsData(res.data);
      } catch (error) {
        console.error("Failed to fetch the data", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {productsData.map((product) => (
          <motion.div
            key={product.id}
            className="relative bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute top-4 right-4 text-red-500 text-lg hover:scale-110 transition-transform">
              <FaHeart />
            </div>

            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
            <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
            <p className="text-blue-600 font-bold text-lg mb-4">${product.price}</p>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300">
              Buy Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
