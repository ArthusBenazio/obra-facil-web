"use client";

import { useState } from "react";
import { InputField } from "./common/input";
import { postLogin } from "@/actions/post/postLogin";

export default function FormLogin() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email) {
      setError("O email e senha são obrigatórios.");
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Insira um email válido.");
    }
    if (!password) {
      setError("A senha é obrigatória.");
      return;
    }
    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      const result = await postLogin({ email, password });
      console.log("Login bem-sucedido", result);
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

      <InputField
        label="Email"
        name="email"
        placeholder="Digite seu email"
        type="email"
        errorMessage={error && error.includes("email") ? error : undefined}
      />

      <InputField
        label="Senha"
        name="password"
        placeholder="Digite sua senha"
        type="password"
        errorMessage={error && error.includes("senha") ? error : undefined}
      />

      <button
        type="submit"
        className="font-semibold bg-blue text-white rounded p-2"
      >
        Entrar
      </button>
    </form>
  );
}
