import { Grid2X2, List, TableProperties } from "lucide-react";

export default function ToolbarViewToggle() {
  return (
    <div className="flex items-center bg-slate-50 p-1 border rounded-lg border-slate-200 max-h-10.5">
      <button className="p-2 bg-white shadow-xs rounded-md text-slate-900 cursor-pointer transition-colors">
        <Grid2X2 size={16} />
      </button>
      <button className="p-2 text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">
        <List size={16} />
      </button>
      <button className="p-2 text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">
        <TableProperties size={16} className="-scale-x-100" />
      </button>
    </div>
  );
}
