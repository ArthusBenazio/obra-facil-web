import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { postLogin } from "./actions/post/postLogin";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          !credentials ||
          typeof credentials.email !== "string" ||
          typeof credentials.password !== "string"
        ) {
          throw new Error("Credenciais inválidas.");
        }

        const user = await postLogin(credentials.email, credentials.password);

        if (!user) {
          throw new Error("Credenciais inválidas.");
        }

        return user; 
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }: { token: JWT; user?: User }) {
  //     // Adiciona dados do usuário ao token, se o usuário existir
  //     if (user) {
  //       token.email = user.email;
  //       token.name = user.name;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }: { session: Session; token: JWT }) {
  //     // Adiciona dados do token à sessão
  //     if (token) {
  //       session.user = {
  //         ...session.user,
  //         email: token.email,
  //         name: token.name,
  //       };
  //     }
  //     return session;
  //   },
  // },
  secret: process.env.NEXTAUTH_SECRET,
});