export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonApi = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

export type PokemonDetail = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  isDefault: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  past_types: PokemonTypePast[];
  sprites: PokemonSprites;
  cries: PokemonCries;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];
};

type PokemonAbility = {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
};

type PokemonType = {
  slot: number;
  type: NamedAPIResource;
};

type PokemonTypePast = {
  generation: NamedAPIResource;
  types: PokemonType[];
};

type PokemonHeldItem = {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
};

type PokemonHeldItemVersion = {
  version: NamedAPIResource;
  rarity: number;
};

type PokemonMove = {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
};

type PokemonMoveVersion = {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
};

type PokemonStat = {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
};

type PokemonSprites = {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shinyFemale: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
  other: {
    dream_world: {
      front_default: string;
    };
    "official-artwork": {
      front_default: string;
      front_shiny: string;
    };
  };
};

type PokemonCries = {
  latest: string;
  legacy: string;
};

type NamedAPIResource = {
  name: string;
  url: string;
};

type VersionGameIndex = {
  game_index: number;
  version: NamedAPIResource;
};
