/*
  Warnings:

  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "qiita" TEXT,
ADD COLUMN     "zenn" TEXT;
