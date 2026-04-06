"use client";
import Link from "next/dist/client/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const trail = pathname.split("/").filter(Boolean);
  const currentPage = trail[trail.length - 1] ?? "Home";

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-4">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-slate-900 transition-colors"
          >
            <Home size={12} />
            Home
          </Link>
        </li>
        {trail.map((step) => (
          <li key={step}>
            <span className="mx-1">/</span>
            <Link
              href={`/${step}`}
              className={`capitalize hover:text-slate-900 transition-colors ${currentPage === step ? "text-slate-900" : ""}`}
            >
              {step}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
