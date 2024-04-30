"use client";

import { ChangeEvent, SyntheticEvent, useState } from "react";
import axios from "axios";

export default function RegisterProduct() {
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  const handleChangeProductName = (e: ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const handleChangeBrand = (e: ChangeEvent<HTMLInputElement>) => {
    setBrand(e.target.value);
  };

  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!productName || !brand || !quantity || !price) {
      console.log(productName, brand, quantity, price);
      setError("All fields are required");
    } else {
      try {
        postData();
        setError("product register successfully");
        alert("product register successfully");
      } catch (e: any) {
        setError(e);
      }
      setProductName("");
      setBrand("");
      setPrice("");
      setQuantity("");
      setError("");
    }
  };

  async function postData() {
    try {
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("brand", brand);
      formData.append("price", price);
      formData.append("quantity", quantity);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/admin/add-product/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={handleChangeProductName}
            placeholder="Product Name"
          />
        </div>
        <br />
        <div>
          <input
            type="text"
            name="brand"
            value={brand}
            onChange={handleChangeBrand}
            placeholder="Brand"
          />
        </div>
        <br />
        <div>
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleChangePrice}
            placeholder="Price"
          />
        </div>
        <br />
        <div>
          <input
            type="text"
            name="quantity"
            value={quantity}
            onChange={handleChangeQuantity}
            placeholder="Quantity"
          />
        </div>
        <br />
        {error && <p>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </>
  );
}
