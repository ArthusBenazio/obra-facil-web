"use client";

import { login } from "@/app/services/authService";
import { useState } from "react";

export default function FormLogin() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const result = await login({ email, password });
      console.log("Login successful", result);
      // Salve o token no localStorage ou use um contexto para gerenciar o estado global.
      localStorage.setItem("authToken", result.token);
    } catch (err) {
      console.error(err);
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-full align-center justify-center p-8"
    >
      {error && <p className="text-red-500">{error}</p>}
      <label className="flex flex-col gap-2">
        Email
        <input name="email" type="email" className="rounded p-2" required />
      </label>
      <label className="flex flex-col gap-2">
        Password
        <input name="password" type="password" className="rounded p-2" required />
      </label>
      <button type="submit" className="font-semibold bg-blue text-white rounded p-2">
        Entrar
      </button>
    </form>
  );
}
