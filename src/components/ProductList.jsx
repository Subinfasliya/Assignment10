import { useState } from "react";
import ProductCard from "./ProductCard";
import SearchInput from "./SearchInput";
import CategoryFilter from "./CategoryFilter";
import SortDropdown from "./SortDropdown";

const ProductList = ({ products }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("default");

  // Search Handler for searching products by name
  const searchHandler = (event) => {
    setSearchValue(event.target.value.toLowerCase().trim());
  };

  // Filter Handler for filtered Product by category
  const filterHandler = (event) => {
    setSelectedCategory(event.target.value.toLowerCase());
  };

  // Filtered Products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchValue);

    const matchesCategory =
      selectedCategory === "all"
        ? true
        : product.category.toLowerCase() === selectedCategory;

    

    return matchesSearch && matchesCategory;
  });

  // Sorting Products
  const sortHandler = (event) => {
    setSelectedSort(event.target.value);
  };

  const sortedProducts = [...filteredProducts];

  switch (selectedSort) {
    case "price-low":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;

    case "rating-high":
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;

    default:
      break;
  }

  return (
    <>
      {/* div container for display search bar */}
      <div className="p-5 pt-8 md:px-15 gap-5 grid grid-cols-1 md:grid-cols-3">
        <SearchInput searchHandler={searchHandler} />
        <CategoryFilter filterHandler={filterHandler} />
        <SortDropdown sortHandler={sortHandler} />
      </div>

      {/* Grid container for display Product Cards */}
      <div className="p-5 md:p-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        ) : (
          <h2 className="text-2xl font-semibold">No Products Found</h2>
        )}
      </div>
    </>
  );
};
export default ProductList;
