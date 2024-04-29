import { PokemonDetail } from "@/app/types";
import { capitalize } from "@/app/utils";

interface PokemonDetailsProps {
  pokemon: PokemonDetail;
}

function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  return (
    <div className="flex flex-col items-center h-full">
      <h1 className="text-4xl font-bold pt-4">{capitalize(pokemon?.name)}</h1>
      <div className="m-4 h-48 w-48 relative">
        <img
          src={
            pokemon?.sprites.other["official-artwork"].front_default ||
            "/pokemon.png"
          }
          alt={"Picture of " + pokemon?.name}
          className="transition-opacity opacity-0 duration-[2s]"
          style={{ objectFit: "contain" }}
          onLoad={(event) => event.currentTarget.classList.remove("opacity-0")}
        />
      </div>
      {pokemon?.weight && (
        <h3 className="text-2xl">Weight: {pokemon?.weight}</h3>
      )}
      <div className="flex-col">
        {pokemon?.stats.map((statObject) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;

          return (
            <div className="flex items-stretch w-[500px]" key={statName}>
              <h3 className="p-3 w-2/4">{capitalize(statName)}</h3>

              <div className="w-2/4 m-auto bg-gray-200 rounded-full">
                <div
                  className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: `${statValue}%` }}
                >
                  {statValue}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonDetails;
