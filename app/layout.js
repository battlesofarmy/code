import { Inter, Poppins } from "next/font/google";
import SiteMenu from "@/components/SiteMenu";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";


// Load fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["400"], // Load specific font weights
  variable: "--font-inter", 
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","500", "600"], // Load specific font weights
  variable: "--font-poppins",
});


export const metadata = {
  title: "Tailwind & ShadCn",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <SiteMenu/>
        {children}
        <SiteFooter/>
      </body>
    </html>
  );
}
