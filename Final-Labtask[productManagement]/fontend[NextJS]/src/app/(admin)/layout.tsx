import Link from "next/link";

const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
      <div>
        <ul>
            <li><Link href='/'>Add New Employer</Link></li>
            <li><Link href='/'>Update Employer</Link></li>
            <li><Link href='/'>Remove Employer</Link></li>
        </ul>
        {children}
      </div>
    )
  }
  
  export default Layout;
  