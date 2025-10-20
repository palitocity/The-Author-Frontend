import React from "react";
import BlogCard from "./BlogCard";

const blogPosts = [
  {
    image: "../../public/asset/blog1.jpg",
    title: "Rediscovering the Lost Arts of Africa",
    excerpt:
      "Explore how traditional craftsmanship continues to inspire new generations of creators across Africa.",
    author: "Azeez",
    date: "Oct 5, 2025",
  },
  {
    image: "../../public/asset/blog2.jpg",
    title: "The Spirit of Sankofa: Learning from the Past",
    excerpt:
      "Sankofa teaches us that we must return to our roots to move forward with purpose and clarity.",
    author: "Kwame Adu",
    date: "Sep 28, 2025",
  },
  {
    image: "../../public/asset/blog3.jpg",
    title: "Voices of the Ancestors: Music that Heals",
    excerpt:
      "Discover how ancient rhythms and melodies are being revived in modern Afro-fusion music.",
    author: "Nia Okoro",
    date: "Sep 12, 2025",
  },
  {
    image: "../../public/asset/blog4.jpg",
    title: "Modern African Art: The Language of Color",
    excerpt:
      "How artists across the continent are reshaping the global perception of African creativity.",
    author: "Tunde Afolayan",
    date: "Aug 30, 2025",
  },
];

export default function BlogGrid() {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          SankofaSeek Blog
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
