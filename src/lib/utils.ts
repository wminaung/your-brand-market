import { Session } from "next-auth";
import { Prisma, User } from "../../prisma/generated/client";
import { prisma } from "./db";
import { userService } from "@/services/fetchDataFromApi";
import { configs } from "./configs";

// export const getProductAssets = async (): Promise<ProductAsset[]> => {
//   const data = await prisma.productAsset.findMany();
//   return data;
// };
export const googleCallbackMiddleware = async (session: Session) => {
  if (!session.user) return;
  const { email, name } = session.user;
  if (!email || !name) return;
  // http://localhost:3000/sign-in

  const res = await fetch(`${configs.apiBaseUrl}/users/check`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) {
    console.log(
      "user payload is something wrong! check googleCallbackMiddleware"
    );
    return;
  }

  const data = (await res.json()) as User | null;

  if (!data) {
    console.log("Need to create New User For Api");

    const res = await fetch(`${configs.authBaseUrl}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ email, name, isGoogleAuth: true }),
    });

    if (!res.ok) {
      console.log(
        "sign-up wrong ",
        res.status,
        res.statusText,
        await res.json()
      );
    } else {
      console.log(
        "!congrate user is registreated now in googleCallbackMiddleware",
        await res.json()
      );
    }
  } else {
    console.log(
      { user: data },
      "!congrate user is registreated now in googleCallbackMiddleware"
    );
  }

  // const isUserExist = await prisma.user.findUnique({ where: { email: email } });

  // if (!isUserExist) {
  //   await userService.createOne<Prisma.UserCreateArgs>({
  //     data: {
  //       name,
  //       email,
  //       image,
  //     },
  //   });
  // }
};
