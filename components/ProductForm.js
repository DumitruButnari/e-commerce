import { useState } from "react";
import axios from "axios";
import { router } from "next/client";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);

  async function saveProduct(e) {
    e.preventDefault();
    const data = { title, description, price };
    if (_id) {
      // Update product
      await axios.put("/api/products", { ...data, _id });
    } else {
      //Create product
      await axios.post("/api/products", data);
    }
    setGoToProducts(true);
  }
  if (goToProducts) {
    router.push("/products");
  }

  return (
    <form onSubmit={saveProduct}>
      <label htmlFor="name">Product name</label>
      <input
        id="name"
        type="text"
        placeholder="products name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="price">Price in USD</label>
      <input
        id="price"
        type="number"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className="btn-primary" type={"submit"}>
        Save
      </button>
    </form>
  );
}
