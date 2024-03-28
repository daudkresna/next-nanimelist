import prisma from "@/app/libs/prisma";

export const getUserCollection = async (user) => {
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user.email,
    },
  });
  return collection;
};
