import Link from "next/link";
export default function Navbar({ bgColor, textColor }) {
  return (
    <nav className="w-full p-4 border-b border-black">
      <ul className="flex flex-row justify-between">
        <Link href="./projects">
          <li
            className={`px-2 py-1.5 rounded ${textColor} ${bgColor} hover:bg-black hover:text-white `}
          >
            Projects
          </li>
        </Link>
        <Link href="./about">
          <li
            className={`px-2 py-1.5 rounded hover:bg-black hover:text-white `}
          >
            About
          </li>{" "}
        </Link>
        <Link href="./contact">
          <li
            className={`px-2 py-1.5 rounded hover:bg-black hover:text-white `}
          >
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
}
