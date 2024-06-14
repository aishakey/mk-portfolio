import Image from "next/image";

export default function Section({ id, title, flowers, children }) {
  return (
    <section id={id} className="md:min-h-screen">
      <div className="container mx-auto mt-6 md:mt-12">
        <div className="flex items-center justify-center mb-16">
          {flowers && (
            <Image
              src="/flower1.svg"
              alt="Flower"
              width={25}
              height={25}
              className="mr-2"
            />
          )}

          <h2 className="md:text-2xl text-xl text-center font-semibold">
            {title}
          </h2>
          {flowers && (
            <Image
              src="/flower1.svg"
              alt="Flower"
              width={25}
              height={25}
              className="ml-2"
            />
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
