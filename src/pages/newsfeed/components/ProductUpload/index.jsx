'use client';

import { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router';

export default function ProductUploadForm() {
  const [features, setFeatures] = useState([
    { id: 1, name: '', value: '' },
    { id: 2, name: '', value: '' },
    { id: 3, name: '', value: '' },
  ]);

  const addFeature = () => {
    const newId = Math.max(...features.map(f => f.id)) + 1;
    setFeatures([...features, { id: newId, name: '', value: '' }]);
  };

  const removeFeature = id => {
    if (features.length > 1) {
      setFeatures(features.filter(f => f.id !== id));
    }
  };

  const updateFeature = (id, field, value) => {
    setFeatures(
      features.map(f => (f.id === id ? { ...f, [field]: value } : f))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Form Content */}
      <div className="p-6 max-w-4xl mx-auto ">
        {/* Form Fields */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <select className="h-12 outline-none px-4 border-borderColor border rounded text-gray-600">
            <option disabled selected className="outline-none">
              Product name
            </option>
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
          </select>

          <input
            type="text"
            placeholder="$12"
            className="h-12 px-4 border rounded text-gray-900 font-medium outline-none border-borderColor"
            defaultValue="$12"
          />

          <select className="h-12 px-4  border-borderColor outline-none border rounded text-gray-600">
            <option disabled selected>
              Product Category
            </option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>

          <select className="h-12 px-4 border border-borderColor outline-none rounded text-gray-600">
            <option disabled selected>
              Product Color
            </option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </select>

          <select className="h-12 px-4 border border-borderColor rounded outline-none text-gray-600">
            <option disabled selected>
              Product Size
            </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>

          <input
            type="number"
            placeholder="10"
            className="h-12 px-4 border rounded text-gray-900 font-medium border-borderColor outline-none"
            defaultValue="10"
          />
        </div>

        {/* Image Upload Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className="h-12 cursor-pointer bg-slate-800 hover:bg-slate-700 text-white font-medium rounded">
            Image Preview
          </button>
          <button className="h-12 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium rounded">
            Image Thumbnail
          </button>
        </div>

        {/* Image Preview Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="h-48 rounded bg-gradient-to-br from-purple-400 to-purple-600" />
          <div className="h-48 rounded bg-slate-800" />
        </div>

        {/* Product Description */}
        <div className="mb-8">
          <textarea
            placeholder="Product Description"
            className="w-full min-h-[120px] p-4 border rounded text-gray-600 resize-none border-borderColor outline-none"
          />
        </div>

        {/* Additional Features */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Additional Information
            </h3>
            <button
              onClick={addFeature}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center "
              title="Add Feature"
            >
              <Link>
                <GoPlus />
              </Link>
            </button>
          </div>

          <div className="space-y-3">
            {features.map(feature => (
              <div key={feature.id} className="flex gap-3 items-center">
                <input
                  type="text"
                  placeholder="Feature Name"
                  value={feature.name}
                  onChange={e =>
                    updateFeature(feature.id, 'name', e.target.value)
                  }
                  className="flex-1 h-12 px-4 border rounded text-gray-600 border-borderColor outline-none"
                />
                <input
                  type="text"
                  placeholder="Feature Value"
                  value={feature.value}
                  onChange={e =>
                    updateFeature(feature.id, 'value', e.target.value)
                  }
                  className="flex-1 h-12 px-4 border rounded text-gray-600 border-borderColor outline-none"
                />
                <button
                  onClick={() => removeFeature(feature.id)}
                  className="bg-red-500 hover:bg-red-600 text-white rounded w-10 h-10 flex items-center justify-center"
                  title="Delete"
                >
                  <Link>
                    {' '}
                    <RiDeleteBinLine />
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button className="px-8 cursor-pointer py-3 bg-slate-800 text-white rounded hover:bg-slate-700">
            Discard
          </button>
          <button className="px-8 cursor-pointer py-3 bg-colorOne text-white rounded ">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
