import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/sankofaseek.png";

export default function Footer() {
  return (
    <footer className="bg-[#6B4321]  text-white pt-12 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col space-y-4">
          <img src={logo} alt="SankofaSeek" className="h-12 w-12" />
          <p className="text-sm text-gray-300">
            SankofaSeek connects you to stories of heritage, culture, and
            tradition — exploring the pulse of our ancestors.
          </p>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="hover:text-accent transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-accent transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-accent transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-accent transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          {["Home", "About", "Blog", "Marketplace"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-300 hover:text-accent transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Resources */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg mb-2">Resources</h3>
          <a
            href="/contact"
            className="text-gray-300 hover:text-accent transition"
          >
            Contact Us
          </a>
          <a
            href="/privacy"
            className="text-gray-300 hover:text-accent transition"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-gray-300 hover:text-accent transition"
          >
            Terms of Service
          </a>
          <a href="/faq" className="text-gray-300 hover:text-accent transition">
            FAQ
          </a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col space-y-3">
          <h3 className="font-semibold text-lg mb-2">Subscribe</h3>
          <p className="text-gray-300 text-sm">
            Get the latest stories and updates directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-black flex-1 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-accent px-4 py-2 rounded-md font-bold hover:bg-secondary transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} SankofaSeek. All rights reserved.
      </div>
    </footer>
  );
}
