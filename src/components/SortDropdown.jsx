const SortDropdown = ({sortHandler}) =>{
    return(
        <>
         <select name="sortedProduct" className="border p-2 rounded-md" onChange={sortHandler}>
          <option value="default">Sort By</option>            
          <option value="price-low">Price Low to High</option>            
          <option value="price-high">Price High to Low</option>      
          <option value="rating-high">Rating High to Low</option>      
         </select>
        </>
    )
}
export default SortDropdown