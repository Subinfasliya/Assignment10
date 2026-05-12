import { FaStar } from "react-icons/fa";

const ProductCard = ({product}) => {
  return (
    <>
      {/* Product Card */}
      <div className="border rounded-lg  bg-gray-100 w-70 h-auto overflow-hidden w-full">
        <img
          src={product.image}
          alt="Product image"
          className="w-full h-70 object-cover "
        />
        {/* Product card body */}
        <div className="p-4">
          <h5 className="text-xl font-semibold mb-2">{product.name}</h5>
          <p>Price : ₹ {product.price}/-</p>
          <p>Category : {product.category}</p>
          <p className="flex items-center gap-1">
            Rating : {product.rating} <FaStar color="red" />
          </p>
        </div>
      </div>
    </>
  );
};
export default ProductCard
