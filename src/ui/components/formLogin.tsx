"use client";

import { useState } from "react";
import { InputField } from "./common/input";
import { useRouter } from "next/navigation";
import { postLogin } from "@/actions/post/postLogin";

export default function FormLogin() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email) {
      setError("O email é obrigatório.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Insira um email válido.");
      return;
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
      console.log("Login", email, password);
      const result = await postLogin(email, password);
      console.log("Login bem-sucedido", result);

      if (result) {
        router.push("/obras");
      }
    } catch (err) {
      console.error(err);
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  const redirectToRegister = () => {
    router.push("/cadastro");
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

      <div className="flex flex-col">
        <InputField
          label="Senha"
          name="password"
          placeholder="Digite sua senha"
          type="password"
          errorMessage={error && error.includes("senha") ? error : undefined}
        />
        <button
          type="button"
          onClick={redirectToRegister}
          className="flex justify-end pt-1"
        >
          Esqueceu sua senha?
        </button>
      </div>

      <div className="flex flex-col">
        <button
          type="submit"
          className="font-semibold bg-blue text-white rounded p-2"
        >
          Entrar
        </button>

        <div className="text-center pt-1">
          <span>Ainda não possui conta? </span>
          <button
            type="button"
            onClick={redirectToRegister}
            className="text-blue font-semibold"
          >
            Cadastre-se
          </button>
        </div>
      </div>
    </form>
  );
}
