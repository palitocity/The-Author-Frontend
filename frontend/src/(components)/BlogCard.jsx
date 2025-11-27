import React from "react";

export default function BlogCard({
  image,
  title,
  excerpt,
  author,
  date,
  category = "Article",
  readTime = "5 min read",
}) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100 hover:border-gray-200 hover:-translate-y-1">
      {/* Image Container with Overlay */}
      <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-xs font-semibold text-gray-900 rounded-full shadow-lg">
            {category}
          </span>
        </div>

        {/* Read Time */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full shadow-lg flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {readTime}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 p-6 lg:p-7 flex flex-col">
        {/* Title */}
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-1 mb-5 line-clamp-3">
          {excerpt}
        </p>

        {/* Author Section */}
        <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100">
          <div className="flex items-center gap-3">
            {/* Author Avatar */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm shadow-md">
              {author.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900">
                {author}
              </span>
              <span className="text-xs text-gray-500">{date}</span>
            </div>
          </div>

          {/* Read More Arrow */}
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
            <svg
              className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}

// Demo Component
function Demo() {
  const sampleCard = {
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    title: "10 Essential Tips for Modern Web Development in 2024",
    excerpt:
      "Discover the latest trends and best practices that every web developer should know. From performance optimization to cutting-edge frameworks, we cover everything you need to stay ahead.",
    author: "Sarah Johnson",
    date: "Nov 27, 2024",
    category: "Development",
    readTime: "8 min read",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-md mx-auto">
        <BlogCard {...sampleCard} />
      </div>
    </div>
  );
}
