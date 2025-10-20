export default function Footer() {
  return (
    <footer className="bg-primary text-light py-6 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-sm">
          © {new Date().getFullYear()} SankofaSeek — “To become whole, you must first remember.”
        </p>
      </div>
    </footer>
  );
}
