import { QueryKey, useQuery } from "@tanstack/react-query";
import { get } from ".";
import { PokemonApi, PokemonDetail } from "@/app/types";

export function useGet<T>(path: string, queryKey?: QueryKey) {
  // We are using path as a query key if queryKey is not provided
  const fetchQueryKey: QueryKey = queryKey || [{ path }];
  const { isError, data, isLoading, error } = useQuery({
    queryKey: fetchQueryKey,
    queryFn: () => get<T>({ path }),
  });

  return { isError, data, isLoading, error };
}

export function useGetPokemonList(options: { page: number }) {
  const queryParams: string[] = [];

  const { page } = options;

  const limit = Number(process.env.NEXT_PUBLIC_PAGE_ITEM_LIMIT);

  queryParams.push(`limit=${limit}`);

  let offset = `offset=${limit * page}`;
  queryParams.push(offset);

  const filterQuery = queryParams.length ? `?${queryParams.join("&")}` : "";

  const { data, isLoading, isError, error } = useGet<PokemonApi>(
    `pokemon${filterQuery}`
  );

  // const customError = error as CustomError;
  // const errorMessage = customError?.response?.data?.error;

  return { data, isLoading, isError, error };
}

export function useGetPokemon(name: string) {
  const { data, isLoading, isError, error } = useGet<PokemonDetail>(
    `pokemon/${name}`
  );

  return { data, isLoading, isError, error };
}
