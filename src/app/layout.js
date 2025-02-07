import "./globals.css";

import dynamic from "next/dynamic";
const Navbar = dynamic(() => import('@/components/navigation/navbar'));
const Footer = dynamic(() => import('@/components/navigation/footer'));

export const metadata = {
  title: "Youjo Senki (Saga of Tanya the Evil)",
  description: "Synopsis and Stream Youjo Senki",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen _monica-theme-d2f2b383">
        <Navbar />
        <main className="flex-grow pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
