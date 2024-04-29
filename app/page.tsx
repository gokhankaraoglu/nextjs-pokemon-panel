import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Pokemons",
    path: "/pokemon-list",
    logo: "/pokemon.png",
    alt: "Pokemon",
  },
];

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-center">
      <div className="bg-gray-100 flex items-center justify-around rounded-lg shadow-lg p-6 text-black">
        {categories.map(({ title, path, logo, alt }) => (
          <Link
            href={path}
            key={title}
            className="flex flex-col justify-between p-3 hover:bg-gray-300 rounded-lg h-full"
          >
            <Image
              width={180}
              height={57}
              alt={alt}
              src={logo}
              className="mb-2"
            />
            <h2 className="text-sm text-center">{title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
