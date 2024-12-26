import { useState, useEffect } from "react";
import axios from "axios";

const useProductFetch = (categoryName) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'http://localhost:8000/api/products'; 


        if (categoryName) {
          url = `http://localhost:8000/api/products?category=${categoryName}`;
        }

        const response = await axios.get(url);

        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]); // Fetch products whenever the category changes

  return { products, loading };
};

export default useProductFetch;
