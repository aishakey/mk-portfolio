import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact Me">
      <form className="space-y-4">
        <div>
          <label className="block text-lg font-medium">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </Section>
  );
}
