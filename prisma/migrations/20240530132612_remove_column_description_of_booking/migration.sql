/*
  Warnings:

  - You are about to drop the column `description` on the `Booking` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_serviceID_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "bookingId" TEXT;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE SET NULL ON UPDATE CASCADE;
