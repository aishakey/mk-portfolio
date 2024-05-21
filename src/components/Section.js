export default function Section({ id, title, children }) {
  return (
    <section id={id} className="min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold">{title}</h2>
        {children}
      </div>
    </section>
  );
}
