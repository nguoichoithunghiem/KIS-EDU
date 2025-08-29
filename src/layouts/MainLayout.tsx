import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 mt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
