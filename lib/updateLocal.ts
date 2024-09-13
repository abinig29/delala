import { type QueryClient } from "@tanstack/react-query";
import { type KY, MTD } from "@/lib/constant";

export const updateAfterDelete = (
  key: KY,
  queryClient: QueryClient,
  id: string,
) => {
  queryClient.setQueryData([key], (prevData: any) => {
    return {
      count: prevData?.count ? prevData?.count - 1 : 0,
      body: prevData?.body?.filter((cat: any) => cat.id !== id),
    };
  });
};
export const updateLocalData = <T>(
  method: MTD,
  key: KY,
  queryClient: QueryClient,
  reset: any,
  newData: any,
  id: string,
) => {
  try {
    if (method == MTD.POST) {
      queryClient.setQueryData([key], (prevData: any) => {
        console.log("prev Data", prevData);
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
      const currentData: { count: number; body: T[] } | undefined =
        queryClient.getQueryData([key]);
      const updatedData = currentData?.body.map((cat: any) => {
        if (cat._id === id) {
          return { ...cat, ...newData.body };
        }
        return cat;
      });
      queryClient.setQueryData([key], { ...currentData, body: updatedData });
    }
  } catch (e: any) {
    console.log("===>>>//", e);
  }
};
