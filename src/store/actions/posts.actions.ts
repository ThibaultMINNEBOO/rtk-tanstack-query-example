import { useSyncQuery } from "../../hooks/useSyncQuery";
import { setPosts } from "../slices/posts.slice";

export const usePosts = () => {
  return useSyncQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.json();
    },
    syncAction: setPosts,
  });
};
