import { Search } from "lucide-react";

export default function ToolbarSearch() {
  return (
    <div className="relative flex-1 sm:max-w-61.25">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        size={18}
      />
      <input
        type="text"
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-brand-500/20 transition-all"
      />
    </div>
  );
}
