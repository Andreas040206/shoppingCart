import { useEffect, useState } from "react";

const GetProducts = () => {
  const [productsData, setProductsData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((res) => res.json())
      .then((json) => setProductsData(json));
  }, []);

  return { productsData };
};

export default GetProducts;
