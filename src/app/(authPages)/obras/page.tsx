'use client';

import { useSession } from "next-auth/react";

export default function ObrasPage() {
  const { data: session, status } = useSession();

  // Enquanto a sessão está carregando
  if (status === "loading") {
    return <p>Carregando...</p>;
  }

  // Caso o usuário não esteja autenticado
  if (status === "unauthenticated") {
    return <p>Você não está autenticado. Por favor, faça login.</p>;
  }

  console.log("session", session);

  // Caso o usuário esteja autenticado
  return (
    <div>
      <h1>Obras</h1>
      <p>Bem-vindo, {session?.user?.name}</p>
    </div>
  );
}
