import React from "react";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-8 font-semibold">{title}</h2>
        {children}
      </div>
    </section>
  );
}
