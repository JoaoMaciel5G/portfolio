import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"]});

export const metadata: Metadata = {
  title: "Portfólio João Maciel",
  description: "Portfólio pessoal de um programador fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`dark flex flex-col ${roboto.className}`}>
        <Header/>
          {children}
        </body>
    </html>
  );
}
