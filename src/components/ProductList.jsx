
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <>
      {/* Grid container */}
      <div className="p-5 md:p-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};
export default ProductList;
