import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "5px" }}>
          Product Management System
          <NavBar />
        </header>
        {children}
        <footer style={{ backgroundColor: "lightgray", padding: "5px" }}>
          Copyright 2024
        </footer>
      </body>
    </html>
  );
}
