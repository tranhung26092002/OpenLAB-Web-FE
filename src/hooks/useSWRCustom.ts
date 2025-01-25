import useSWR from "swr";
import { useFetchApi } from "~/hooks/useFetchApi";
import type { SWRConfiguration } from "swr";
export function useSWRPublic(url: string, options?: RequestInit) {
  const { data, error, isLoading } = useSWR(
    url,
    () =>
      fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/${url}`, {
        ...options,
      })
        .then((res) => res.json())
        .catch((e) => {
          throw new Error(`message Error is: ${e}`);
        }),
    {
      revalidateIfStale: false,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      dedupingInterval: 2000,
      // revalidateOnMount: false,
    }
  );

  return { data, error, isLoading };
}

export function useSWRPrivate(
  url: string,
  options?: RequestInit,
  config?: SWRConfiguration
) {
  const fetchData = useFetchApi(url, options);
  const { isLoading, error, data } = useSWR(
    url,
    () => fetchData(),
    config ? config : {}
  );

  return { isLoading, error, data };
}
