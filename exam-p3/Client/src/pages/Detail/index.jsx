import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constant';
import axios from "axios";
import styles from "./index.module.scss";

const Details = () => {
  const [product, setProduct] = useState(null); 
  const { id } = useParams(); 

  const getProduct = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${id}`);
      setProduct(res.data); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]); 

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div className={styles["product-detail"]}>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default Details;
