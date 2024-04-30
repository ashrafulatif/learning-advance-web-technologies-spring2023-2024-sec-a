import Link from "next/link";

const AdminSidePanel = () => {
  return (
    <div>
      <h4>Admin</h4>
      <li>
        <Link href="/registerEmployer">Add New Employer</Link>
      </li>
      <li>
        <Link href="/updateEmployer">Update Employer</Link>
      </li>
      <li>
        <Link href="/deleteEmployer">Remove Employer</Link>
      </li>
    </div>
  );
};
export default AdminSidePanel;
