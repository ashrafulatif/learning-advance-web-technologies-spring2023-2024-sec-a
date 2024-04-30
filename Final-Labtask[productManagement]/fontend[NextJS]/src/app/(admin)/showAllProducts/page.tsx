import axios from "axios";

export default async function ShowAllProducts() {
  try {
    const response = await axios.get("http://localhost:4000/admin");
    const data = response.data;
    console.log(data);

    // Check if data is an array and has at least one element
    if (Array.isArray(data) && data.length > 0) {
      return (
        <>
          <div>
            <h1>All Product List</h1>
            {data.map(product => (
              <div key={product.id}>
                <p>Name: {product.productName}</p>
                <p>Brand: {product.brand}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <hr />
              </div>
            ))}
          </div>
        </>
      );
    } else {
      // if no product data is received
      return (
        <>
          <div>
            <h1>Admin Profile</h1>
            <p>No product data available</p>
          </div>
        </>
      );
    }
  } catch (error) {
    console.log(error);
  }
}
