import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useAppDispatch } from "../store/hooks";
import { useEffect } from "react";

export const useSyncQuery = <T>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: UseQueryOptions<T> & { syncAction: (data: T) => any }
) => {
  const dispatch = useAppDispatch();

  const query = useQuery<T>({
    ...options,
    meta: { syncAction: options.syncAction },
  });

  useEffect(() => {
    if (query.data && options.syncAction) {
      dispatch(options.syncAction(query.data));
    }
  }, [query.data, dispatch, options]);

  return query;
};
