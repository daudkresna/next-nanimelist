import githubAuth from "next-auth/providers/github";
import { getServerSession } from "next-auth";

export const authOption = {
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
};

export const userSession = async () => {
  const user = await getServerSession(authOption);
  console.log(user?.user);
  return user?.user;
};
