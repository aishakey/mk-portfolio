import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Maria Key",
  description: "Personal developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="fixed inset-0 flex justify-center items-center p-6">
          <div className="w-full h-full bg-[#EFFDFF] overflow-y-auto">
            <Navbar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
