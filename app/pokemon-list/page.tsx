"use client";

import { Fragment, useCallback, useEffect, useState } from "react";
import { useGetPokemonList } from "../utils/api/pokemon/factory";
import PokemonCard from "../components/pokemon/PokemonCard";
import Pagination from "../components/elements/Pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Loading from "../components/elements/Loading";

function PokemonList() {
  const pageLimit = Number(process.env.NEXT_PUBLIC_PAGE_ITEM_LIMIT);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const [activePage, setActivePage] = useState<number>(
    Number(params?.get("page")) || 1
  );
  const { data, isLoading } = useGetPokemonList({ page: activePage });

  const router = useRouter();
  const pathname = usePathname();
  const [totalPage, setTotalPage] = useState(1);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    if (data?.count !== undefined) {
      setTotalPage(Math.floor((data.count || 0) / pageLimit));
    }
  }, [data?.count]);

  const handleClick = (num: number) => {
    let newPage = num;
    if (num <= 0) newPage = 1;
    if (num > totalPage) newPage = totalPage;
    setActivePage(newPage);
    router.push(pathname + "?" + createQueryString("page", newPage.toString()));
  };

  return (
    <div className="pokemon-list">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ul role="list" className="list">
            {data?.results.map((pokemon) => (
              <Fragment key={pokemon.name}>
                <PokemonCard pokemon={pokemon} />
              </Fragment>
            ))}
          </ul>
          <Pagination
            currentPage={activePage}
            totalPages={totalPage}
            onPageChange={handleClick}
          />
        </>
      )}
    </div>
  );
}

export default PokemonList;
