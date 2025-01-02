import { API_BASE_URL } from "@/app/services/config";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: { id: string; name: string; email: string; subscriptionPlan: string; role: string };
}

export async function postLogin(credentials: LoginCredentials): Promise<LoginResponse>  {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Credenciais inválidas ou erro no servidor.");
    }

    const data = await response.json();
    console.log(data);
    alert('Login bem-sucedido! Bem-vindo, ' + data.user.name);
    return data; 
  } catch (error) {
    console.error("Erro na autenticação:", error);
    throw error;
  }
}
