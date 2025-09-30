import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // você pode adicionar mais pesos se precisar
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "ACE Agrimensura",
  description: "Soluções profissionais em agrimensura e topografia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="icon"
          href="/icon.svg"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
