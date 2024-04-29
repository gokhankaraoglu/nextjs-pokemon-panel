"use client";

import { useGetPokemon } from "@/app/utils/api/pokemon/factory";
import { capitalize } from "@/app/utils";
import Loading from "@/app/components/elements/Loading";
import { useRouter } from "next/navigation";
import { addtoCompare } from "@/app/store/comparing/comparingReducer";
import { useAppDispatch, useAppSelector } from "@/app/store/hook";
import PokemonDetails from "@/app/components/pokemon/PokemonDetails";
import { useState } from "react";

interface PokemonPageProps {
  params: {
    pokemonName: string;
  };
}

function PokemonPage({ params }: PokemonPageProps) {
  const { pokemonName } = params;
  const { data: pokemon, isLoading } = useGetPokemon(pokemonName);
  const router = useRouter();
  const [isCompared, setIsCompared] = useState(false);
  const { comparePokemon } = useAppSelector((state) => state.comparing);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center h-full">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex w-full justify-between items-center">
            <button
              type="button"
              onClick={() => router.back()}
              className="button"
            >
              Back
            </button>
            {comparePokemon?.id !== pokemon?.id && (
              <div>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(addtoCompare(pokemon));
                    setIsCompared(false);
                  }}
                  className="button"
                >
                  Add to Compare
                </button>

                {comparePokemon && !isCompared && (
                  <button
                    type="button"
                    onClick={() => setIsCompared((prev) => !prev)}
                    className="button"
                  >
                    Compare with {capitalize(comparePokemon?.name)}
                  </button>
                )}
              </div>
            )}
          </div>
          <div
            className={`w-full flex ${
              isCompared ? "justify-between" : "justify-center"
            }`}
          >
            {pokemon && <PokemonDetails pokemon={pokemon} />}
            {comparePokemon?.id !== pokemon?.id &&
              isCompared &&
              comparePokemon && <PokemonDetails pokemon={comparePokemon} />}
          </div>
        </>
      )}
    </div>
  );
}

export default PokemonPage;
