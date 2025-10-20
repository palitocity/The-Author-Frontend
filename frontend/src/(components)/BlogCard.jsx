import React from "react";

export default function BlogCard({ image, title, excerpt, author, date }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative h-48 md:h-56 lg:h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-5 flex flex-col">
        <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-600 text-sm flex-1 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto border-t pt-3">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
