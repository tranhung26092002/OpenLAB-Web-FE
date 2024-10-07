import useSWR from "swr";

async function useSWRCustom(url: string) {
  const { data, error, isLoading } = useSWR(
    url,
    await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/${url}`)
      .then((res) => res.json())
      .catch((e) => {
        throw new Error(`message Error is: ${e}`);
      })
  );
  return { data, error, isLoading };
}
export default useSWRCustom;
