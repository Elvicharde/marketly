import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { PageDescription, PageTitle } from "@/components/shared/PageDetails";
import { ProductLayout } from "@/components/ui/product/Index";
import { Toolbar } from "@/components/ui/toolbar/Index";

export default function Home() {
  return (
    <div>
      <Breadcrumbs />
      <div className="flex flex-col gap-8">
        <div>
          <PageTitle info="Premium Audio Collection" />
          <PageDescription info="Discover our curated selection of high-fidelity headphones, speakers, and audio accessories designed for the ultimate listening experience." />
        </div>
        <Toolbar>
          <Toolbar.Search />
          <Toolbar.Filters />
          <Toolbar.ViewToggle />
        </Toolbar>

        {/* product view: grid, list, or table */}
        <ProductLayout />

        {/* Pagination Controls would go here */}
        <div></div>
      </div>
    </div>
  );
}
