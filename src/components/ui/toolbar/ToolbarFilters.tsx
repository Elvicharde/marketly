"use client";

import { useState } from "react";
import { Select } from "@/components/shared/Select";
import {
  CategoryFilterOptions,
  PriceFilterOptions,
  SortOptions,
} from "@/components/seed/constants";
import { Switch } from "../Switch";
// import {
//   TCategoryFilterOption,
//   TPriceFilterOption,
//   TSortOption,
// } from "@/types/toolbar";

export default function ToolbarFilters() {
  const [inStock, setInStock] = useState(false);

  return (
    <div className="flex flex-1 justify-between flex-wrap">
      <div className="flex gap-3 flex-wrap">
        <Select
          options={Object.entries(CategoryFilterOptions).map(
            ([key, value]) => ({
              label: value,
              value: key,
            }),
          )}
          onOptionChange={(option) => console.log(option)}
        />
        <Select
          options={Object.entries(PriceFilterOptions).map(([key, value]) => ({
            label: value,
            value: key,
          }))}
          onOptionChange={(option) => console.log(option)}
        />
        <div className="flex items-center">
          <Switch enabled={inStock} onToggle={() => setInStock(!inStock)} />
          <span className="ml-2 text-sm font-medium text-slate-600">
            In Stock
          </span>
        </div>
      </div>
      <div className="flex items-baseline gap-0">
        <span className="text-sm text-slate-500">Sort By:</span>
        <Select
          options={Object.entries(SortOptions).map(([key, value]) => ({
            label: value,
            value: key,
          }))}
          onOptionChange={(option) => console.log(option)}
          className="px-4 appearance-none bg-transparent border-none font-medium text-slate-900 text-sm 
            focus:outline-none cursor-pointer pr-8"
          iconStyle="text-slate-900"
        />
      </div>
    </div>
  );
}
