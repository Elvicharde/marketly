export default function Main({ children }: { children: React.ReactNode }) {
  const backgroundStyle = {
    backgroundImage: `url('data:image/svg+xml;utf8,<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="%239C92AC" fill-opacity="0.05" fill-rule="evenodd"><circle cx="3" cy="3" r="3"/><circle cx="13" cy="13" r="3"/></g></svg>')`,
    backgroundRepeat: "repeat",
  };
  return (
    <main className="flex flex-col flex-1 w-full" style={backgroundStyle}>
      <section className="flex flex-col flex-1 max-w-360 mx-auto px-6 relative z-10 w-full py-8">
        {children}
      </section>
    </main>
  );
}
