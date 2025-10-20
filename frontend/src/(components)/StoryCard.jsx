export default function StoryCard({ story }) {
  return (
    <div className="bg-light border border-primary rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
      <img
        src={story.image}
        alt={story.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-heading mb-2">{story.title}</h3>
        <p className="text-sm text-primary/80 font-body">{story.summary}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-accent font-semibold">${story.price}</span>
          <a
            href={`/marketplace/${story._id}`}
            className="text-primary underline hover:text-secondary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
