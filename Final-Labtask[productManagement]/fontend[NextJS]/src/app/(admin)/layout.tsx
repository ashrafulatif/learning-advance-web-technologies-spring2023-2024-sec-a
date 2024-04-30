import AdminSidePanel from "@/components/adminSIdePanel";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminSidePanel />
      {children}
    </div>
  );
};

export default Layout;
