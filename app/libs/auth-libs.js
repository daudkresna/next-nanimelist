import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const userSession = async () => {
  const user = await getServerSession(authOption);
  console.log(user?.user);
  return user?.user;
};
