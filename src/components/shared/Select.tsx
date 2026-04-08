"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

type TSelectOption = {
  label: string;
  value: string;
};

interface ISelectProps extends Omit<
  React.ComponentPropsWithoutRef<"select">,
  "defaultValue"
> {
  options: TSelectOption[];
  onOptionChange: (option: TSelectOption) => void;
  defaultValue?: TSelectOption;
  placeholder?: string;
  className?: string;
  iconStyle?: React.ComponentProps<typeof ChevronDown>["className"];
}

export const Select = React.forwardRef(function Select(
  {
    options,
    onOptionChange,
    defaultValue,
    placeholder,
    iconStyle,
    className,
    ...nativeProps
  }: ISelectProps,
  ref: React.ForwardedRef<HTMLSelectElement>,
) {
  // Handle option change and call the provided callback
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (onOptionChange) {
      const selected = options.find((opt) => opt.value === e.target.value);
      if (selected) onOptionChange(selected);
    }
    nativeProps.onChange?.(e);
  }
  return (
    <div className="relative">
      <select
        className={cn(
          "appearance-none bg-slate-50 border border-slate-200 rounded-lg pl-4 pr-10 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900/20 cursor-pointer",
          className,
        )}
        ref={ref}
        onChange={handleChange}
        value={defaultValue?.value || ""}
        {...nativeProps}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none",
          iconStyle,
        )}
      />
    </div>
  );
});

Select.displayName = "Select";
