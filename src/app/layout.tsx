import type { Metadata } from "next";
import "../ui/styles/globals.css";



export const metadata: Metadata = {
  title: "Obra Fácil",
  description: "Diário de obra com controle de pagamentos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
