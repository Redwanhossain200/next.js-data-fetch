import Product from '@/components/Product';

const getProducts = async () => {
  const res = await fetch('http://localhost:5000/products', {
    cache: 'force-cache',
  });
  return res.json();
};

const page = async () => {
  const products = await getProducts();
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-center py-4 text-4xl text-fuchsia-300 font-semibold">
        Products : {products.length}
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default page;
