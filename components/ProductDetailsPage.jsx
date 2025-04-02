import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDetails from "../components/ProductDetails";


const ProductDetailsPage = () => {
  const { id } = useParams(); // ✅ Extract product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("Fetching product ID:", id); // Debugging

    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products/${id}`);
        console.log("Fetched product:", response.data); // Debugging
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {product ? <ProductDetails product={product} onClose={() => {}} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProductDetailsPage;
