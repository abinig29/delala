import { type QueryClient } from "@tanstack/react-query";
import { type KY, MTD } from "@/lib/constant";


export const updateAfterDelete = <T>(
  key: KY,
  query: string,
  queryClient: QueryClient,
  id: string,
) => {
  queryClient.setQueryData([key, query], (prevData: PaginationRes<T>): PaginationRes<T> => {
    return {
      ...prevData,
      count: prevData?.count ? prevData?.count - 1 : 0,
      values: prevData?.values?.filter((cat: any) => cat.id !== id),
    };
  });
};
export const updateLocalData = <T>(
  method: MTD,
  key: KY,
  query: any,
  queryClient: QueryClient,
  newData: any,
  id?: string,
  reset?: any,
) => {
  try {
    if (method == MTD.POST) {
      queryClient.setQueryData([key], (prevData: any) => {
        const count = prevData?.count || 0;
        const data = prevData?.body || [];
        return {
          ...prevData,
          count: count + 1,
          body: [...data, newData?.body ? newData.body : null],
        };
      });
      reset();
    } else {
      const currentData: PaginationRes<T> | undefined =
        queryClient.getQueryData([key, query]);
      const updatedData = currentData?.values?.map((cat: any) => {
        if (cat.id === id) {
          return { ...newData };
        }
        return cat;
      });

      queryClient.setQueryData([key, query], { ...currentData, values: updatedData });
    }
  } catch (e: any) {
    console.log("===>>>//", e);
  }
};
