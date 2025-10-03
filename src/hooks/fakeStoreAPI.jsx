import { useEffect, useState } from "react";

// Feching the data
const GetProducts = () => {
  const [productsData, setProductsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("server error");
        }
        return res.json();
      })
      .then((json) => setProductsData(json));
  }, []);

  return { productsData, error };
};

export default GetProducts;
