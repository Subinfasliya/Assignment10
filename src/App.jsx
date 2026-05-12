import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {

const products = [
  {
    id: 1,
    name: "Apple iPhone 15",
    price: 79999,
    category: "Mobile",
    rating: 4.8,
    image:"https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1759733968"

  },
  {
    id: 2,
    name: "Samsung Smart TV",
    price: 45999,
    category: "Electronics",
    rating: 4.5,
    image:"https://m.media-amazon.com/images/I/81IzIFwBqpL.jpg"
  },
  {
    id: 3,
    name: "Nike Running Shoes",
    price: 5999,
    category: "Fashion",
    rating: 4.3,
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQj6qcw1YoHXbajb7RFaRnRNFYFU0PxV8C-4-KPEznaH6kJm8VAgYADN3RU2kObImA3u8klF1jAr-DiaOgSH6CTMFHoq3vcN1qg9HIaQowzU1tVdQSTIqhtIw"
  },
  {
    id: 4,
    name: "HP Pavilion Laptop",
    price: 68999,
    category: "Computers",
    rating: 4.6,
    image:"https://doiqgxrhp4iii.cloudfront.net/15-DK0263TX_9_11zon.jpg"
  },
  {
    id: 5,
    name: "Boat Rockerz Headphones",
    price: 1999,
    category: "Accessories",
    rating: 4.2,
    image:"https://5.imimg.com/data5/SELLER/Default/2023/5/305490342/QM/XD/FM/145035758/boat-rockerz-510-headphones.jpg"
  },
  {
    id: 6,
    name: "Fastrack Watch",
    price: 2499,
    category: "Watches",
    rating: 4.4,
    image:"https://m.media-amazon.com/images/I/71rjlGEi+1L._SX522_.jpg"
  },
];

  return (
    <>
      <Header />
      <ProductList products={products} />
    </>
  );
}

export default App;
