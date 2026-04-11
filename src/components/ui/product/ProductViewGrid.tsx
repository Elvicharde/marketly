import ProductCard from "./ProductCard";
import {IProduct} from "@/types/product";

interface IProductViewGridProps {
  items: IProduct[];
  isFetching: boolean;
} 

export function ProductViewGrid({
  items,
  isFetching,
}: IProductViewGridProps) {
  if (isFetching) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <span className="text-gray-500">Loading products...</span>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <span className="text-gray-500">No products found.</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((product) => (
        <ProductCard product={product} key={product.id}/>
      ))}
    </div>
  );
}
