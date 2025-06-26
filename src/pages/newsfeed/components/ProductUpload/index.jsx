'use client';

import { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';
import { products } from '../../../store/components/store';

export default function ProductUploadForm() {
  const [features, setFeatures] = useState([
    { id: 1, name: '', value: '' },
    { id: 2, name: '', value: '' },
    { id: 3, name: '', value: '' },
  ]);

  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    category: '',
    color: '',
    size: '',
    quantity: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [allSubmittedData, setAllSubmittedData] = useState([]);

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

  const handleSubmit = () => {
    const newErrors = {};
    const { productName, price, category, color, size, quantity, description } =
      formData;

    if (!productName) newErrors.productName = 'Product name is required';
    if (!price) newErrors.price = 'Price is required';
    if (!category) newErrors.category = 'Category is required';
    if (!color) newErrors.color = 'Color is required';
    if (!size) newErrors.size = 'Size is required';
    if (!quantity) newErrors.quantity = 'Quantity is required';
    if (!description) newErrors.description = 'Description is required';

    const incompleteFeature = features.find(
      f => !f.name.trim() || !f.value.trim()
    );
    if (incompleteFeature)
      newErrors.features = 'All feature name & value fields are required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const submitted = {
      ...formData,
      features: [...features],
      submittedAt: new Date().toISOString(),
    };

    products.push(submitted);
    setAllSubmittedData(prev => [...prev, submitted]);

    alert('✅ Product added successfully!');

    setFormData({
      productName: '',
      price: '',
      category: '',
      color: '',
      size: '',
      quantity: '',
      description: '',
    });

    setFeatures([
      { id: 1, name: '', value: '' },
      { id: 2, name: '', value: '' },
      { id: 3, name: '', value: '' },
    ]);
    setErrors({});
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="p-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Product Name */}
          <div className="flex flex-col">
            <select
              className={`h-12 outline-none px-4 border rounded text-gray-600 ${
                errors.productName ? 'border-red-500' : 'border-borderColor'
              }`}
              value={formData.productName}
              onChange={e =>
                setFormData({ ...formData, productName: e.target.value })
              }
            >
              <option disabled value="">
                Product name
              </option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
            </select>
            <p className="text-red-500 text-sm inline-block min-h-[1.25rem]">
              {errors.productName || '\u00A0'}
            </p>
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="$12"
              className={`h-12 px-4 border rounded text-gray-900 font-medium outline-none ${
                errors.price ? 'border-red-500' : 'border-borderColor'
              }`}
              value={formData.price}
              onChange={e =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
            <p className="text-red-500 text-sm inline-block min-h-[1.25rem]">
              {errors.price || '\u00A0'}
            </p>
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <select
              className={`h-12 px-4 border rounded text-gray-600 outline-none ${
                errors.category ? 'border-red-500' : 'border-borderColor'
              }`}
              value={formData.category}
              onChange={e =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option disabled value="">
                Product Category
              </option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
            <p className="text-red-500 text-sm inline-block min-h-[1.25rem]">
              {errors.category || '\u00A0'}
            </p>
          </div>

          {/* Color */}
          <div className="flex flex-col">
            <select
              className={`h-12 px-4 border rounded text-gray-600 outline-none ${
                errors.color ? 'border-red-500' : 'border-borderColor'
              }`}
              value={formData.color}
              onChange={e =>
                setFormData({ ...formData, color: e.target.value })
              }
            >
              <option disabled value="">
                Product Color
              </option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
            </select>
            <p className="text-red-500 text-sm inline-block min-h-[1.25rem]">
              {errors.color || '\u00A0'}
            </p>
          </div>

          {/* Size */}
          <div className="flex flex-col">
            <select
              className={`h-12 px-4 border rounded text-gray-600 outline-none ${
                errors.size ? 'border-red-500' : 'border-borderColor'
              }`}
              value={formData.size}
              onChange={e => setFormData({ ...formData, size: e.target.value })}
            >
              <option disabled value="">
                Product Size
              </option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <p className="text-red-500 text-sm inline-block min-h-[1.25rem]">
              {errors.size || '\u00A0'}
            </p>
          </div>

          {/* Quantity */}
          <div className="flex flex-col">
            <input
              type="number"
              placeholder="10"
              className={`h-12 px-4 border rounded text-gray-900 font-medium outline-none ${
                errors.quantity ? 'border-red-500' : 'border-borderColor'
              }`}
              value={formData.quantity}
              onChange={e =>
                setFormData({ ...formData, quantity: e.target.value })
              }
            />
            <p className="text-red-500 text-sm inline-block min-h-[1.25rem]">
              {errors.quantity || '\u00A0'}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <textarea
            placeholder="Product Description"
            className={`w-full min-h-[120px] p-4 border rounded text-gray-600 resize-none outline-none ${
              errors.description ? 'border-red-500' : 'border-borderColor'
            }`}
            value={formData.description}
            onChange={e =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <p className="text-red-500 text-sm inline-block min-h-[1.25rem]">
            {errors.description || '\u00A0'}
          </p>
        </div>

        {/* Features */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Additional Information
            </h3>
            <button
              onClick={addFeature}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <GoPlus />
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
                >
                  <RiDeleteBinLine />
                </button>
              </div>
            ))}
            {errors.features && (
              <p className="text-red-500 text-sm inline-block min-h-[1.25rem]">
                {errors.features}
              </p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button className="px-8 py-3 bg-slate-800 text-white rounded hover:bg-slate-700">
            Discard
          </button>
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-colorOne text-white rounded hover:bg-colorTwo"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
