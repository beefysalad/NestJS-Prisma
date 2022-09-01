/*
  Warnings:

  - Changed the type of `type` on the `Organizer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "OrgType" AS ENUM ('DEPARTMENT', 'ORGANIZATION', 'OTHERS');

-- AlterTable
ALTER TABLE "Organizer" DROP COLUMN "type",
ADD COLUMN     "type" "OrgType" NOT NULL;

-- DropEnum
DROP TYPE "Type";
