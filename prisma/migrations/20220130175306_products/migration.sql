-- CreateTable
CREATE TABLE "product_properties" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "product_properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_property_values" (
    "id" SERIAL NOT NULL,
    "product_property_id" INTEGER NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "product_property_values_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variations" (
    "id" SERIAL NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "variations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variation_values" (
    "variation_id" INTEGER NOT NULL,
    "product_property_value_id" INTEGER NOT NULL,

    CONSTRAINT "variation_values_pkey" PRIMARY KEY ("variation_id","product_property_value_id")
);

-- CreateTable
CREATE TABLE "_ProductToProductProperty" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "product_property_values_product_property_id_value_key" ON "product_property_values"("product_property_id", "value");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToProductProperty_AB_unique" ON "_ProductToProductProperty"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToProductProperty_B_index" ON "_ProductToProductProperty"("B");

-- AddForeignKey
ALTER TABLE "product_property_values" ADD CONSTRAINT "product_property_values_product_property_id_fkey" FOREIGN KEY ("product_property_id") REFERENCES "product_properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variations" ADD CONSTRAINT "variations_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variation_values" ADD CONSTRAINT "variation_values_variation_id_fkey" FOREIGN KEY ("variation_id") REFERENCES "variations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variation_values" ADD CONSTRAINT "variation_values_product_property_value_id_fkey" FOREIGN KEY ("product_property_value_id") REFERENCES "product_property_values"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductProperty" ADD FOREIGN KEY ("A") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductProperty" ADD FOREIGN KEY ("B") REFERENCES "product_properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;
