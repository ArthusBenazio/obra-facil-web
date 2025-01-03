import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const response = await fetch("http://127.0.0.1:5000/login", {
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
    
          if (!data?.user) {
            throw new Error("Usuário não encontrado.");
          }
    
          return data.user; 
        } catch (err) {
          console.error(err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt(args) {
      const { token, user } = args;
      if (user) {
        token.email = user.email;
        token.name = user.name;
    }
      return token;
    },
    async session(args) {
      console.log("Aqui",args);
      const { session, token } = args;
      if (token) {
        session.user = {
          ...session.user,
          name: token.name,
        };
      }
      console.log("session", session);
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});