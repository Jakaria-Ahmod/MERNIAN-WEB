import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { categories, products } from './store';
import ProductCard from '../../../globalComponents/productCard';

const Categories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const totalPages = Math.ceil(products.length / productsPerPage);

  // Current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Pagination buttons
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  return (
    <div>
      {/* Categories */}
      <div className="px-6 py-4 border-b border-[#d9d9d9]">
        <h2 className="text-black font-semibold mb-3">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="text-[#3e3f5e] hover:text-[#615dfa] text-sm font-medium transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[19px] gap-x-[21px] p-6">
        {currentProducts.map((item, index) => (
          <ProductCard
            key={index}
            price={item.price}
            img={item.img}
            title={item.title}
            category={item.category}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="px-6 py-6 flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`p-2 rounded ${
            currentPage === 1
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-[#afb0c0] hover:bg-gray-100'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-2">
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`px-3 py-1 text-sm rounded ${
                currentPage === number
                  ? 'text-[#23d2e2] font-semibold'
                  : 'text-[#afb0c0] hover:text-[#3e3f5e]'
              }`}
            >
              {number < 10 ? `0${number}` : number}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`p-2 rounded ${
            currentPage === totalPages
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-[#afb0c0] hover:bg-gray-100'
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Categories;
