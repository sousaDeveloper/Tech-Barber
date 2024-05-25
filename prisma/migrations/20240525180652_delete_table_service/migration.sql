/*
  Warnings:

  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_serviceID_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_barbershopId_fkey";

-- DropTable
DROP TABLE "Service";
