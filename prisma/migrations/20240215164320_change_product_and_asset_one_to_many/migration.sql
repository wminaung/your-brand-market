-- DropForeignKey
ALTER TABLE "ProductAsset" DROP CONSTRAINT "ProductAsset_productId_fkey";

-- DropIndex
DROP INDEX "ProductAsset_productId_key";

-- AlterTable
ALTER TABLE "ProductAsset" ALTER COLUMN "productId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductAsset" ADD CONSTRAINT "ProductAsset_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
