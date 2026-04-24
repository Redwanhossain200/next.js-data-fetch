// const getPosts = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// };

const getPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
  } catch (err) {
    throw new Error('Failed to fetch posts');
  }
};

const PostsPage = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const posts = await res.json();

  const posts = await getPosts();

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-4 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-transparent border border-fuchsia-300 rounded-xl p-4 shadow-md">
            <h3 className="text-lg font-bold mb-5">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
