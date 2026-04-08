import { ProductLayoutType } from "@/lib/seed";
import { ProductViewGrid } from "./ProductViewGrid";
import { ProductViewList } from "./ProductViewList";
import { ProductViewTable } from "./ProductViewTable";
import { useProductData } from "@/hooks/useProductData";
import { useProductLayout } from "@/hooks/useProductLayout";

export function ProductLayout() {
  const layout = useProductLayout();
  const [combinedItems, fetchingStatus] = useProductData();

  return (
    <>
      {layout.name === ProductLayoutType.GRID && (
        <ProductViewGrid
          isFetching={fetchingStatus}
          items={combinedItems || []}
        />
      )}
      {layout.name === ProductLayoutType.TABLE && (
        <ProductViewTable
          isFetching={fetchingStatus}
          items={combinedItems || []}
        />
      )}
      {layout.name === ProductLayoutType.LIST && (
        <ProductViewList
          isFetching={fetchingStatus}
          items={combinedItems || []}
        />
      )}
    </>
  );
}
