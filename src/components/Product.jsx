'use client';
import toast from 'react-hot-toast';

const Product = ({ product }) => {
  const { id, name, price, category, description, image, inStock, rating } =
    product;

  const handleAddToCart = () => {
    toast.success('Successfully added to cart!');
  };

  return (
    <div className="bg-[#111827] rounded-2xl shadow-md hover:shadow-indigo-500/20 transition-all duration-300 border border-gray-800 overflow-hidden group">
      <figure className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
        />
      </figure>

      <div className="p-5 space-y-3">
        <h2 className="text-lg font-bold text-white group-hover:text-indigo-400 transition">
          {name}
        </h2>

        <p className="text-sm text-gray-400 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 text-xs bg-indigo-500/10 text-indigo-400 rounded-full">
            {category}
          </span>

          <span
            className={`px-2 py-1 text-xs rounded-full ${
              inStock
                ? 'bg-green-500/10 text-green-400'
                : 'bg-red-500/10 text-red-400'
            }`}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        <div className="flex justify-between items-center pt-2">
          <span className="text-lg font-bold text-white">${price}</span>

          <div className="text-yellow-400 text-sm font-semibold">
            ⭐ {rating}
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={handleAddToCart}
            className="px-4 btn cursor-pointer py-2 bg-indigo-500 text-white text-sm rounded-lg hover:bg-indigo-600 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
