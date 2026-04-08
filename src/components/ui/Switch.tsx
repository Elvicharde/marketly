export function Switch({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`w-10 h-5 rounded-full transition-colors duration-300 ${enabled ? "bg-[#0F172A]" : "bg-gray-300"}`}
    >
      <span
        className={`block w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${enabled ? "translate-x-5.5" : "translate-x-1"}`}
      />
    </button>
  );
}
