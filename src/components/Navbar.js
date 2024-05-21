import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="py-8 px-10 flex justify-between items-center">
      <div>
        <Image src="/logo.svg" width={80} height={40} />
      </div>
      <div className="space-x-12 flex-1 text-center">
        <Link href="#projects" scroll={false}>
          Projects
        </Link>
        <Link href="#about" scroll={false}>
          About
        </Link>
        <Link href="#contact" scroll={false}>
          Contact
        </Link>
      </div>
      <a
        href="/resume.pdf"
        target="_blank"
        className="text-main-pink border-2 border-main-pink rounded-2xl px-4 py-1"
      >
        Resume
      </a>
    </nav>
  );
}
