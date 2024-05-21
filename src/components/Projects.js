import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-2xl font-bold">Project 1</h3>
          <p className="text-lg">Description of project 1...</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-2xl font-bold">Project 2</h3>
          <p className="text-lg">Description of project 2...</p>
        </div>
        {/* Add more projects */}
      </div>
    </Section>
  );
}
