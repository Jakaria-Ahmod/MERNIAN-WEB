import React, { useState } from 'react';
import StoreBanner from '../../globalComponents/storeBanner';
import ProductPrice from './components/productPrice';
import Categores from './components/Categores';
import ProductCard from '../../globalComponents/productCard';
import { products } from '../store/components/store';

const Prodact = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 📄 Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="mb-[100px]">
      <StoreBanner />
      <ProductPrice searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="flex gap-x-[14px] mt-[20px]">
        <Categores />
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {currentItems.map((item, index) => (
              <ProductCard
                key={index}
                img={item.img}
                price={item.price}
                category={item.category}
                title={item.title}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded text-sm ${
                  currentPage === index + 1
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prodact;
