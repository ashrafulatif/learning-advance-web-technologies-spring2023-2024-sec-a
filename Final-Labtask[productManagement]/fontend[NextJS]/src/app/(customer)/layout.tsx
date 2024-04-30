import CustomerSidePanel from "@/components/CustomerSidePanel";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CustomerSidePanel />
      {children}
    </div>
  );
};

export default Layout;
