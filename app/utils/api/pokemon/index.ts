import axios from "axios";

interface BaseRequest {
  path: string;
}

// P = payload, R = ResponseType
export async function get<R>({ path }: BaseRequest): Promise<R> {
  const headers: HeadersInit = { "Content-Type": "application/json" };

  const { data } = await axios.get<R>(
    `${process.env.NEXT_PUBLIC_POKEMON_API_URL}/${path}`,
    {
      headers,
    }
  );

  return data;
}
