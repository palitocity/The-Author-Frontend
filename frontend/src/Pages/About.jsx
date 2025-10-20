export default function About() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-heading mb-8 text-center">About SankofaSeek</h1>

      <p className="text-lg font-body max-w-3xl mx-auto leading-relaxed text-primary/90 mb-10">
        Long ago, before clocks ruled time, humanity walked in spirals — not straight lines.
        SankofaSeek is a movement to rediscover the treasures hidden in the past and carry them
        forward as tools for healing, creativity, and innovation. We believe remembering is an act
        of courage, not nostalgia.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {[
          { name: "Amina Adom", role: "Founder", img: "/team1.jpg" },
          { name: "Kofi Mensah", role: "Cultural Historian", img: "/team2.jpg" },
          { name: "Zara Bello", role: "Creative Director", img: "/team3.jpg" },
        ].map((member) => (
          <div
            key={member.name}
            className="bg-light shadow-md border border-primary rounded-lg p-6 text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-heading">{member.name}</h3>
            <p className="text-accent">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
