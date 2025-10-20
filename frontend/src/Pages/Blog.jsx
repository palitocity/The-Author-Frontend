import { useFetch } from "../Hooks/useFetch";
import BlogCard from "../(components)/BlogCard";
import Loader from "../(components)/Loader";

export default function Blog() {
  const { data: blogs, loading } = useFetch("http://localhost:5000/api/blogs");

  return (
    <section className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-heading text-center mb-8">Blog</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
