import Link from "next/link";
import Links from "./links/Links";

function Header() {
  return (
    <header className="w-full flex justify-between items-center h-12 rounded-b-md bg-red-500 text-white">
      <Link href="/" className="p-1 rounded-md font-bold text-xl ml-1 flex">
        Pokemon Panel
      </Link>

      <Links />
    </header>
  );
}

export default Header;
