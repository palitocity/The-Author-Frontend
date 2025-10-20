import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../(components)/Loader";

export default function StoryDetails() {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStory = async () => {
      const res = await fetch(`http://localhost:5000/api/stories/${id}`);
      const data = await res.json();
      setStory(data);
      setLoading(false);
    };
    getStory();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src={story.image}
          alt={story.title}
          className="rounded-lg mb-6 w-full h-72 object-cover"
        />
        <h1 className="text-4xl font-heading mb-4">{story.title}</h1>
        <p className="text-primary/80 font-body leading-relaxed">{story.content}</p>
        <button className="mt-8 bg-accent text-primary font-semibold px-8 py-3 rounded-lg hover:bg-secondary transition">
          Buy Story - ${story.price}
        </button>
      </div>
    </section>
  );
}
