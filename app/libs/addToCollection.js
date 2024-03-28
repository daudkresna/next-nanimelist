"use server";

import prisma from "@/app/libs/prisma";
import { revalidatePath } from "next/cache";
export const addCollection = async (formData) => {
  "use server";
  const data = {
    user_email: formData.get("userEmail"),
    anime_mal_id: formData.get("malAnimeId"),
    anime_image: formData.get("animeImage"),
    anime_title: formData.get("animeTitle"),
  };
  let addToCollection;
  try {
    addToCollection = await prisma.collection.create({ data });
  } catch (err) {
    console.log(addToCollection);
  }
  revalidatePath("/");
};
