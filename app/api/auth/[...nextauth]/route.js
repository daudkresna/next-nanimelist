import NextAuth from "next-auth";
import { authOption } from "@/app/libs/auth-libs";

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
