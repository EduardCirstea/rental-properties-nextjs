import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import "@/assets/styles/global.css";
import Footer from "@/components/Footer";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Property puls",
  keywords: "rental,property,real estate",
  description: "Find the perfect rental property",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
