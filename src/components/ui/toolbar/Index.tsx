import React from "react";
import ToolbarSearch from "./ToolbarSearch";
import ToolbarFilters from "./ToolbarFilters";
import ToolbarViewToggle from "./ToolbarViewToggle";

const ToolbarRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-8 shadow-sm flex flex-col lg:flex-row gap-4 items-center justify-between sticky z-40">
      {children}
    </div>
  );
};

// Namespace Export
export const Toolbar = Object.assign(ToolbarRoot, {
  Search: ToolbarSearch,
  Filters: ToolbarFilters,
  ViewToggle: ToolbarViewToggle,
});
