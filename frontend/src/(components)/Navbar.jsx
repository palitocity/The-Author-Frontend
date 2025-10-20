import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary text-accent shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-bold tracking-wide">
          SankofaSeek
        </Link>
        <ul className="flex space-x-6 font-body">
          {["Home", "About", "Blog", "Marketplace"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-accent border-b-2 border-accent"
                    : "hover:text-accent transition"
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
