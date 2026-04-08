export function ProductViewTable({
  items,
  isFetching,
}: {
  items: any[];
  isFetching: boolean;
}) {
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
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-white border border-slate-200 rounded-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
              Product
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
              Rating
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap flex items-center gap-4">
              <img
                src="/images/products/vantage-watch.jpg"
                alt="Vantage Smart Watch"
                className="w-12 h-12 rounded-md object-cover"
              />
              <span className="text-sm font-medium text-slate-900">
                Vantage Smart Watch
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="text-sm text-slate-900">Electronics</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="text-sm font-medium text-slate-900">
                $199.99
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <span className="text-sm font-medium text-slate-900">4.5</span>
                <div className="ml-2 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.857 0 1.278-.883.588-1.338l-2.8 -2a1 1 0 00-.75-.46l-3.4 -1a1 1 0 00-.75-.46l-3.4 -1a1 1 0 01-.588 -1.338l2.8 -2a1 1 0 01 .75 -.46h3.462a1 1 0 01 .95 .69l1.07 3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                In Stock
              </span>
            </td>
          </tr>
          {/* More rows would go here */}
        </tbody>
      </table>
    </div>
  );
}
