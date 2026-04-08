export function PageTitle({ info }: { info: string }) {
  return <h1 className="text-3xl font-bold text-slate-900 mb-2">{info}</h1>;
}

export function PageDescription({ info }: { info: string }) {
  return <p className="text-slate-500 text-sm xl:max-w-[42%]">{info}</p>;
}
