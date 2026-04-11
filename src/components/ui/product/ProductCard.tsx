import { IProduct } from "@/types/product";
import { HeartIcon, PlusIcon, StarIcon } from "lucide-react";

interface IProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 flex flex-col relative">
      {product.isNew && (
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide">
            New
          </span>
        </div>
      )}

      {/* Save Button */}
      <button className="cursor-pointer absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-white shadow-sm transition-all">
        <HeartIcon className="w-4 h-4" />
      </button>

      {/* Image Container */}
      <div className="relative aspect-square bg-[#F8FAFC] overflow-hidden flex items-center justify-center p-6">
        <img
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          src={product.image}
          alt={product.name}
        />

        {/* Quick View Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <button className="cursor-pointer w-full bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-900 font-medium text-sm py-2 rounded-lg hover:bg-slate-900 hover:text-white transition-colors shadow-sm">
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-slate-900 text-base leading-tight">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 bg-slate-50 px-1.5 py-0.5 rounded text-xs font-medium text-slate-600">
            <StarIcon
              className="w-3 h-3"
              color="#F29F2C"
              fill="#F29F2C"
              strokeWidth={1}
            />
            {product.rating}
          </div>
        </div>

        <p className="text-sm text-slate-500 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <button className="cursor-pointer w-10 h-10 rounded-[10px] bg-slate-50 text-slate-900 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors border border-slate-200 hover:border-slate-900">
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
