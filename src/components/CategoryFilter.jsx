const CategoryFilter = ({filterHandler}) =>{
    return(
        <>
        <div>
          <select name="categories" id="" className="py-3 px-4 border rounded-lg" onChange={filterHandler} >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="mobile">Mobile</option>
            <option value="fashion">Fashion</option>
            <option value="computers">Computers</option>
          </select>
        </div>
        </>
    )
}
export default CategoryFilter