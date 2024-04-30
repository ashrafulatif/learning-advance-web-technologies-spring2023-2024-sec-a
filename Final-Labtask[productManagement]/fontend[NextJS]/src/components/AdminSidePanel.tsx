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
    </div>
  );
};
export default AdminSidePanel;
