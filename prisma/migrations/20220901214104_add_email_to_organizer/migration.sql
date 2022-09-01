/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Organizer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Organizer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Organizer" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Organizer_email_key" ON "Organizer"("email");
