import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center h-[70vh] text-center">
      <h1 className="text-6xl font-heading mb-4">404</h1>
      <p className="text-lg mb-6 font-body">The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
