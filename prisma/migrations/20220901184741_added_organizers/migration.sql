-- CreateEnum
CREATE TYPE "Type" AS ENUM ('DEPARTMENT', 'ORGANIZATION', 'OTHERS');

-- CreateTable
CREATE TABLE "Organizer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "Type" NOT NULL,

    CONSTRAINT "Organizer_pkey" PRIMARY KEY ("id")
);
