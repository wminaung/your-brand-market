import GoogleProvider from "next-auth/providers/google";
import { configs } from "./configs";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Auth } from "./types";
import { prisma } from "./db";
import { googleCallbackMiddleware } from "./utils";
import { User } from "../../prisma/generated/client";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: configs.GOOGLE_ID,
      clientSecret: configs.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        name: {
          label: "Username",
          type: "text",
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@google.com",
        },
        password: { label: "Password", type: "password" },
        auth: { label: "AuthType", type: "text" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        console.log({ credentials });
        const { auth, email, name, password } = credentials;

        if (!auth || !email) {
          return null;
        }

        //  sigin up
        if (auth === Auth.SIGN_UP) {
          console.log("sign up start");

          const res = await fetch(`${configs.authBaseUrl}/sign-up`, {
            method: "POST",
            headers: {
              "Content-Type": "Application/json",
            },
            body: JSON.stringify({ email, name, password }),
          });

          if (!res.ok) {
            console.log(
              "sign-up wrong ",
              res.status,
              res.statusText,
              await res.json()
            );
            return null;
          }
          const newUser = (await res.json()) as User;
          console.log("!congrate user is registreated now in credential", {
            newUser,
          });
          return null;
        } else if (auth === Auth.SIGN_IN) {
          console.log("sign in start");

          const res = await fetch(`${configs.authBaseUrl}/sign-in`, {
            method: "POST",
            headers: {
              "Content-Type": "Application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          if (!res.ok) {
            console.log(
              "sign-in wrong ",
              res.status,
              res.statusText,
              await res.json()
            );
            return null;
          }
          const validUser = (await res.json()) as User;
          console.log("!congrate user is loging... now in credential", {
            validUser,
          });
          return {
            id: validUser.id,
            email: validUser.email,
            name: validUser.name,
          };
        }
        return null;
        //end
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    signOut: "/signup",
  },
  callbacks: {
    // todo - signin with google
    async session({ session, token, trigger, user, newSession }) {
      console.log("SIGNIN WITH GOOGLE >>>>>>>>>>>>>>>>>>>>>>>>>");

      await googleCallbackMiddleware(session);

      return session;
    },
  },

  secret: "apple",
};
