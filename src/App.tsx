import { usePosts } from "./store/actions/posts.actions";
import { useAppSelector } from "./store/hooks";

function App() {
  const { isLoading } = usePosts();
  const posts = useAppSelector((state) => state.posts);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default App;
