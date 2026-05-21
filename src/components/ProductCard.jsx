import { FaStar } from "react-icons/fa";

const ProductCard = ({product}) => {


  const cartHandler = (productName) =>{
       console.log(productName);  
  }
  
  return (
    <>
      {/* Product Card */}
      <div className="border rounded-lg  bg-gray-100 w-70 h-auto overflow-hidden w-full">
        <img
          src={product.image}
          alt="Product image"
          className="w-full h-70 object-contain"
        />
        {/* Product card body */}
        <div className="p-4">
          <h5 className="text-xl font-semibold mb-2">{product.name}</h5>
          <p>Price : ₹ {product.price}/-</p>
          <p>Category : {product.category}</p>
          <p className="flex items-center gap-1">
            Rating : {product.rating} <FaStar color="red" />
          </p>
          <button className="text-white bg-sky-500/100 mt-2 p-2 rounded cursor-pointer" onClick={()=> cartHandler(product.name)}>Add To Cart</button>
        </div>
      </div>
    </>
  );
};
export default ProductCard
