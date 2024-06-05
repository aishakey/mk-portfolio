import Image from "next/image";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="min-h-screen">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Image
            src="/flower1.svg"
            alt="Flower"
            width={25}
            height={25}
            className="mr-2"
          />
          <h2 className="text-2xl text-center font-semibold">{title}</h2>
          <Image
            src="/flower1.svg"
            alt="Flower"
            width={25}
            height={25}
            className="ml-2"
          />
        </div>
        {children}
      </div>
    </section>
  );
}
