import { ReactNode } from "react";
import "@/assets/styles/global.css";

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
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
