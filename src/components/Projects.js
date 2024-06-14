import Project from "./Project";
import Section from "./Section";

export default function Projects() {
  const projectData = [
    {
      imageSrc: "/bean.svg",
      name: "Bean",
      subtitle: "Discover & Review Coffee Shops Worldwide",
      githubLink: "https://github.com/projectone",
      liveDemoLink: "https://projectone.com",
      email: "bean@example.com",
      password: "bean123",
      description:
        "Bean is the ultimate full-stack coffee shop locator, built using the MERN stack with secure image storage in S3 buckets. Dive into the world of coffee with user-generated reviews and discover new favorites using advanced filters. Featuring JWT for secure authentication and crafted with minimalist CSS, this platform offers an intuitive and sleek user experience for coffee enthusiasts everywhere.",
    },
    {
      imageSrc: "/fridge.svg",
      name: "Fridge",
      subtitle: "Personalized Online Invites & Cards",
      githubLink: "https://github.com/projecttwo",
      liveDemoLink: "https://projecttwo.com",
      email: "fridge@example.com",
      password: "fridge123",

      description:
        "Fridge transforms how you create and share special memories. Utilizing Next.js and Tailwind, this full-stack application allows users to send unique digital cards, mimicking the cherished tradition of displaying personal mementos on a fridge. With OAuth integration, including Google authentication, and all illustrations crafted in vibrant vector graphics, Fridge offers a playful yet personal way to stay connected.",
    },
    {
      imageSrc: "/memory_sack.svg",
      name: "Memory Sack",
      subtitle: "Sharpen Your Memory with Fun",
      githubLink: "https://github.com/aishakey/memory-sack-game",
      liveDemoLink: "https://memory-sack-game.vercel.app/",
      email: null,
      password: null,
      description:
        "Memory Sack challenges your memory and concentration through a fun, interactive game designed with Next.js and Tailwind. Each round increases in complexity, presenting more words in a sequence that players must replicate accurately to advance to the next level. Responsive and engaging, Memory Sack is perfect for quick brain exercises on the go, enhancing cognitive skills with each level.",
    },
  ];

  return (
    <Section id="projects" title="Projects" flowers="true">
      <div className="flex flex-col md:mb-20 md:-mt-4 justify-center items-center gap-10">
        {projectData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </Section>
  );
}
