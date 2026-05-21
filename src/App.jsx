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
      image:
        "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1759733968",
    },
    {
      id: 2,
      name: "Samsung Smart TV",
      price: 45999,
      category: "Electronics",
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/81IzIFwBqpL.jpg",
    },
    {
      id: 3,
      name: "Nike Running Shoes",
      price: 5999,
      category: "Fashion",
      rating: 4.3,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQj6qcw1YoHXbajb7RFaRnRNFYFU0PxV8C-4-KPEznaH6kJm8VAgYADN3RU2kObImA3u8klF1jAr-DiaOgSH6CTMFHoq3vcN1qg9HIaQowzU1tVdQSTIqhtIw",
    },
    {
      id: 4,
      name: "HP Pavilion Laptop",
      price: 68999,
      category: "Computers",
      rating: 4.6,
      image: "https://doiqgxrhp4iii.cloudfront.net/15-DK0263TX_9_11zon.jpg",
    },
    {
      id: 5,
      name: "Boat Rockerz Headphones",
      price: 1999,
      category: "Accessories",
      rating: 4.2,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/305490342/QM/XD/FM/145035758/boat-rockerz-510-headphones.jpg",
    },
    {
      id: 6,
      name: "Fastrack Watch",
      price: 2499,
      category: "Watches",
      rating: 4.4,
      image: "https://m.media-amazon.com/images/I/71rjlGEi+1L._SX522_.jpg",
    },
    {
      id: 7,
      name: "Sony Wireless Speaker",
      price: 8999,
      category: "Electronics",
      rating: 4.5,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQIAx118ejDc_yWeCv8xCKHBnKsSmqhS2Fx9wUZ_XJTBWEwH9XZpGibqF9Zw6BkMxyxd7rml6pKoz2fNWyebaXlkY7_eY26jlrvef27FkCzo8jjq2AW2YOU7puG",
    },
    {
      id: 8,
      name: "Dell Inspiron Laptop",
      price: 54999,
      category: "Computers",
      rating: 4.4,
      image: "https://m.media-amazon.com/images/I/717WZ7WriwL._SX522_.jpg",
    },
    {
      id: 9,
      name: "Realme Narzo 70",
      price: 17999,
      category: "Mobile",
      rating: 4.3,
      image:
        "https://rukminim2.flixcart.com/image/1536/1536/xif0q/mobile/d/i/h/90-5g-rma-realme-original-imahgvhhxhwsrmar.jpeg?q=90",
    },
    {
      id: 10,
      name: "Puma Sports T-Shirt",
      price: 1499,
      category: "Fashion",
      rating: 4.1,
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/682540/02/fnd/IND/fmt/png/Men's-Poly-Tee",
    },
    {
      id: 12,
      name: "Canon DSLR Camera",
      price: 65999,
      category: "Electronics",
      rating: 4.7,
      image:
        "https://images.pexels.com/photos/13491657/pexels-photo-13491657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 13,
      name: "Mi Smart Band 8",
      price: 3499,
      category: "Watches",
      rating: 4.2,
      image:
        "https://furper.com/cdn/shop/products/xiaomi-mi-band-8-fitness-band-with-spo2-sensor-162-inch-amoled-display-smart-band-xiaomi-white-632327_grande.jpg?v=1682013533",
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
