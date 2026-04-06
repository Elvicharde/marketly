import { Search, Heart, ShoppingBasket, User } from "lucide-react";
import { toTitleCase } from "@/lib/utils";

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-50 glass-panel border-b border-slate-200/50">
      <div className="max-w-360 mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo brandName="Marketly" />
        </div>
        <nav className="hidden md:block">
          <ul className="inline-flex gap-6 text-slate-500">
            <li>
              <a
                href="/discover"
                className="text-slate-900 font-semibold text-sm border-b-2 border-slate-900 pb-1"
              >
                Discover
              </a>
            </li>
            <li>
              <a
                href="/categories"
                className="text-slate-900 font-semibold text-sm border-slate-900 pb-1"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="/brands"
                className="text-slate-900 font-semibold text-sm border-slate-900 pb-1"
              >
                Brands
              </a>
            </li>
            <li>
              <a
                href="/sales"
                className="text-slate-900 font-semibold text-sm border-slate-900 pb-1"
              >
                Sales
              </a>
            </li>
          </ul>
        </nav>
        <NavIcons />
      </div>
    </header>
  );
}

export function NavIcons() {
  return (
    <div className="flex items-center gap-6 text-brand-900">
      {/* Search Icon */}
      <button className="hover:text-brand-500 transition-colors">
        <Search size={20} strokeWidth={2} />
      </button>

      {/* Favorites */}
      <button className="hover:text-brand-500 transition-colors">
        <Heart size={20} strokeWidth={2} />
      </button>

      {/* The Basket (Matches fa-basket-shopping) */}
      <button className="relative hover:text-brand-500 transition-colors">
        <ShoppingBasket size={20} strokeWidth={2} />
        {/* Badge - Using your brand-900 or accent color */}
        <span className="absolute -top-1 -right-1 bg-brand-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
          1
        </span>
      </button>

      {/* User Profile */}
      <button className="hover:text-brand-500 transition-colors">
        <User size={20} strokeWidth={2} />
      </button>
    </div>
  );
}

export function Logo({ brandName = "Marketly" }: { brandName: string }) {
  return (
    <div className="flex items-center gap-2">
      {/* The Logo Icon Container */}
      <div className="bg-slate-900 flex h-10 w-10 items-center justify-center rounded-xl">
        <ShoppingBasket size={22} strokeWidth={2.5} className="text-white" />
      </div>

      {/* The Brand Name */}
      <span className="text-brand-900 text-xl font-bold tracking-tight">
        {toTitleCase(brandName)}
      </span>
    </div>
  );
}
