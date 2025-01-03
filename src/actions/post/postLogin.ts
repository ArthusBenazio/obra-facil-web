'use server'
import { signIn } from "@/auth";

interface User {
  id: string;
  name: string;
  email: string;
}
export async function postLogin(email: string, password: string): Promise<User | null> {
  console.log("signin", email, password);

  try {
    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    console.log("signin response", response);

    if (!response || response.error) {
      throw new Error("Erro na autenticação: " + response?.error);
    }
    return { id: '', name: '', email: response.user?.email ?? '' };
  } catch (error) {
    console.log("teste", error);
    throw new Error("Erro ao buscar usuário na API.", { cause: error });
  }
}
