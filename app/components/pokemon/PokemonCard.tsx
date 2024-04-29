import { Pokemon } from "@/app/types";
import { capitalize } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
  pokemon: Pokemon;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link href={`pokemon-list/${pokemon.name}`}>
      <li key={pokemon.name} className="card-item">
        <div className="card-inner">
          <Image
            width={48}
            height={48}
            alt={pokemon.name}
            src="/pokemon.png"
            className="flex-none rounded-full bg-gray-50"
          />
          <div className="flex items-center">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {capitalize(pokemon.name)}
            </p>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default PokemonCard;
