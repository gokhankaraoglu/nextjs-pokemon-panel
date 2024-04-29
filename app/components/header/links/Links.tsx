import Link from "next/link";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "Pokemons",
    path: "/pokemon-list",
  },
];

const Links = () => {
  return (
    <div>
      {links.map(({ path, title }) => (
        <Link href={path} key={title} className="button">
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
