const Product = ({ product }) => {
  const { id, name, price, category, description, image, inStock, rating } =
    product;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200">
      <figure>
        <img src={image} alt={name} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold">${price}</span>
          <div className="badge badge-outline">{rating} ★</div>
        </div>
        <div className="justify-end card-actions mt-2">
          <button className="btn btn-primary btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
