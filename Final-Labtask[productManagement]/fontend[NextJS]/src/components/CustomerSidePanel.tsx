import Link from "next/link";

const CustomerSidePanel = () => {
  return (
    <div>
      <h4>Customer</h4>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
      <li>
        <Link href="/showProducts">Show All Products</Link>
      </li>
    </div>
  );
};
export default CustomerSidePanel;
