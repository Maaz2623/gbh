import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"], // medium-bold for professional look
  display: "swap",
});

export const Navbar = () => {
  return (
    <header className="px-6 py-4 border-b bg-transparent">
      <div className="flex items-center gap-x-4">
        <Image
          src="/gbh-logo.png"
          alt="Green Bell High Logo"
          width={48}
          height={48}
          className="object-contain"
        />
        <h1
          className={`${montserrat.className} text-2xl sm:text-3xl font-semibold text-gray-800`}
        >
          Green Bell High
        </h1>
      </div>
    </header>
  );
};
