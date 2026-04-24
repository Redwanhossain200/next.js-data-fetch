'use client';
import toast from 'react-hot-toast';

const BookCard = ({ book }) => {
  const { title, author, genre, publishedYear, rating, price, inStock } = book;

  const handleAddToCart = () => {
    toast.success('Successfully added to cart!');
  };

  const handleProtect = () => {
    toast('Book protected successfully!', {
      icon: '🛡️',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <div className="bg-[#111827] rounded-2xl shadow-md hover:shadow-indigo-500/20 transition-all duration-300 border border-gray-800 overflow-hidden group">
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition">
          {title}
        </h3>

        <p className="text-sm text-gray-400">
          by <span className="font-medium text-gray-300">{author}</span>
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-2 py-1 text-xs bg-indigo-500/10 text-indigo-400 rounded-full">
            {genre}
          </span>
          <span className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-full">
            {publishedYear}
          </span>
        </div>
      </div>

      <div className="px-5 pb-4 flex justify-between items-center">
        <div className="text-yellow-400 font-semibold">⭐ {rating}</div>

        <div
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            inStock
              ? 'bg-green-500/10 text-green-400'
              : 'bg-red-500/10 text-red-400'
          }`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </div>
      </div>

      <div className="px-5 pb-5 flex flex-col items-center gap-2">
        <p className="text-lg font-bold text-white">${price.toFixed(2)}</p>

        <div className="flex w-full gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 px-4 py-2 bg-indigo-500 text-white text-sm rounded-lg hover:bg-indigo-600 transition cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed">
            Buy Now
          </button>

          <button
            onClick={handleProtect}
            className="flex-1 px-4 py-2 bg-emerald-500 text-white text-sm rounded-lg hover:bg-emerald-600 transition cursor-pointer">
            Protect
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
