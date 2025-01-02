import type { Metadata } from "next";
import "../ui/styles/globals.css";
import { AuthProvider } from "@/infra/providers/auth-provider";

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
    <AuthProvider>
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
    </AuthProvider>
  );
}
