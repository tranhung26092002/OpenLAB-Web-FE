import useSWR from "swr";
import { useFetchApi } from "~/hooks/useFetchApi";

export function useSWRPublic(url: string) {
  const { data, error, isLoading } = useSWR(
    url,
    () =>
      fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/${url}`)
        .then((res) => res.json())
        .catch((e) => {
          throw new Error(`message Error is: ${e}`);
        })
  );

  return { data, error, isLoading };
}

export function useSWRPrivate(url: string, options?: RequestInit) {
  const fetchData = useFetchApi(url, options)
  const { isLoading, error, data } = useSWR(url, () => fetchData());

  return { isLoading, error, data }
}