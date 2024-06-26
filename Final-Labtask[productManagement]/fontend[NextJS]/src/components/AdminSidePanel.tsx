import Link from "next/link";

const AdminSidePanel = () => {
  return (
    <div>
      <h4>Admin</h4>
      <li>
        <Link href="/registerProduct">Add New Product</Link>
      </li>
      <li>
        <Link href="/updateProduct">Update Product</Link>
      </li>
      <li>
        <Link href="/deleteProduct">Remove Product</Link>
      </li>
      <li>
        <Link href="/adminProfile">Profile</Link>
      </li>
      <li>
        <Link href="/showAllProducts">Show All Products</Link>
      </li>
    </div>
  );
};
export default AdminSidePanel;
