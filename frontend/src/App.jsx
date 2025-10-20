import { Routes, Route } from "react-router-dom";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Marketplace from "./pages/Marketplace";
import StoryDetails from "./pages/StoryDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-light text-primary">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/:id" element={<StoryDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
