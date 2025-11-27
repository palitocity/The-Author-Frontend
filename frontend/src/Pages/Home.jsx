import Hero from "../(components)/Hero";
import StoryCard from "../(components)/StoryCard";
import BlogCard from "../(components)/BlogCard";
import { useFetch } from "../Hooks/useFetch";
import Loader from "../(components)/Loader";
import CultureBody from "../(components)/culture";
import StoryAnimation from "../(components)/animatedStory";

export default function Home() {
  const { data: stories, loading: storiesLoading } = useFetch(
    "http://localhost:5000/api/stories?featured=true"
  );
  const { data: blogs, loading: blogsLoading } = useFetch(
    "http://localhost:5000/api/blogs?limit=3"
  );
  return (
    <>
      <Hero />
      <CultureBody />
      <StoryAnimation />
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading mb-6 text-center"></h2>
        {storiesLoading ? (
          <Loader />
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <StoryCard key={story._id} story={story} />
            ))}
          </div>
        )}
      </section>

      <section className="container mx-auto px-6 py-12 bg-primary/5">
        <h2 className="text-3xl font-heading mb-6 text-center">
          Latest from the Blog
        </h2>
        {blogsLoading ? (
          <Loader />
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {blogs.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
