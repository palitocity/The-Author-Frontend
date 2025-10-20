import StoryCard from "../(components)/StoryCard";
import { useFetch } from "../Hooks/useFetch";
import Loader from "../(components)/Loader";

export default function Marketplace() {
  const { data: stories, loading } = useFetch("http://localhost:5000/api/stories");

  return (
    <section className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-heading text-center mb-10">Marketplace</h1>

      {loading ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard key={story._id} story={story} />
          ))}
        </div>
      )}
    </section>
  );
}
