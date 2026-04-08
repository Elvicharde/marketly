export function ProductViewGrid({
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
