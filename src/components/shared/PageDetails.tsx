export function PageTitle({ title }: { title: string }) {
  return <h1 className="text-3xl font-bold text-slate-900 mb-2">{title}</h1>;
}

export function PageDescription({ description }: { description: string }) {
  return <p className="text-slate-500 text-sm max-w-2xl">{description}</p>;
}
