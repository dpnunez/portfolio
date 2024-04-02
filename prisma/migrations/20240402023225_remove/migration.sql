/*
  Warnings:

  - You are about to drop the column `email` on the `BookGuest` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `BookGuest` table. All the data in the column will be lost.
  - Added the required column `message` to the `BookGuest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookGuest" DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "message" TEXT NOT NULL;
