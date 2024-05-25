-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "anime_title" TEXT NOT NULL,
    "anime_image" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collection_user_email_anime_mal_id_key" ON "Collection"("user_email", "anime_mal_id");
