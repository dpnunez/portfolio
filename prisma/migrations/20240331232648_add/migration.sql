/*
  Warnings:

  - Added the required column `message` to the `ContactMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContactMessage" ADD COLUMN     "message" TEXT NOT NULL;
