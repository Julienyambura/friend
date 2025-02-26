"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../styles/tailwind.css";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
}

export const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get<BlogPost[]>("/api/blog-posts");
        setBlogPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <motion.div
      className="blog p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-semibold text-center mb-8">Pet Care Blog</h1>

      {/* Loading State */}
      {loading && <p className="text-center text-xl">Loading blog posts...</p>}

      {/* Blog Posts */}
      <div className="blog-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="blog-card flex flex-col sm:flex-row p-6 border rounded-lg shadow-lg bg-white hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full sm:w-1/3 h-48 sm:h-auto object-cover rounded-md sm:mr-6 mb-4 sm:mb-0"
            />
            <div className="content sm:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-700 mt-2">{post.excerpt}</p>
              <button
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                onClick={() => alert("Redirecting to full post...")}
              >
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
