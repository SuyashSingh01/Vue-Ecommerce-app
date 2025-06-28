import { request } from "@/services/request";
import { useQuery } from "@tanstack/vue-query";

export const getallproduct = async () => {
  const response = await request("GET", "https://fakestoreapi.com/products");
  if (response.status !== 200) {
    throw new Error("Failed to fetch products");
  }

  return response;
};
export const useGetAllProduct = () => {
  return useQuery({
    queryKey: ["products", "all"],
    queryFn: () => getallproduct(),
    staleTime: 1000 * 60 * 2,
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
