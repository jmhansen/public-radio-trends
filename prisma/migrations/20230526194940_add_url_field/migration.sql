/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Program` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Program" ADD COLUMN     "url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Program_url_key" ON "Program"("url");
