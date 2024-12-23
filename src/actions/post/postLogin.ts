interface User {
  id: string;
  name: string;
  email: string;
}

export async function postLogin(email: string, password: string): Promise<User | null> {
  console.log(email, password);
  try {
    const apiUrl = `${process.env.API_BASE_URL}/login`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Erro na resposta da API.');
    }

    const data: { user?: User } = await response.json();

    if (data && data.user) {
      return data.user; 
    } else {
      return null; 
    }
  } catch (error) {
    console.error('Erro ao buscar usuário na API:', error);
    throw new Error('Erro ao buscar usuário na API.');
  }
}
