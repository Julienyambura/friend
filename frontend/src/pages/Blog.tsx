"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../styles/tailwind.css";

// Defining the BlogPost interface
interface BlogPost {
  isExpanded: any;
  id: string;
  title: string;
  excerpt: string;
  image: string;
  content: string; // Full content for the individual post
}

export const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Dummy data for the blog posts (this can be replaced with real API data)
  const dummyPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Importance of Pet Nutrition",
      excerpt:
        "Proper nutrition is essential for your pet's health and longevity. Learn more about what makes up a healthy diet for pets.",
      image: "/images/image1.jpeg",
      content:
        "Full content about Pet Nutrition... This content explains why nutrition is vital for pets and the different nutrients they require.",
      isExpanded: undefined,
    },
    {
      id: "2",
      title: "How to Train Your Dog",
      excerpt:
        "Training your dog is essential for a well-behaved companion. Get to know the best methods to train your furry friend.",
      image: "/images/image2.jpeg",
      content:
        "Full content about Dog Training... This content covers the basics of dog training, including obedience and behavior correction.",
      isExpanded: undefined,
    },
    {
      id: "3",
      title: "Choosing the Right Pet for Your Family",
      excerpt:
        "Picking the right pet can be a life-changing decision for your family. Find out what factors to consider when adopting.",
      image: "/images/image3.jpeg",
      content:
        "Full content about Choosing the Right Pet... This post helps you select the ideal pet for your family based on your lifestyle.",
      isExpanded: undefined,
    },
    {
      id: "4",
      title: "Dealing with Pet Anxiety",
      excerpt:
        "Pet anxiety is common and can be managed with the right techniques. Here are some tips to help your pet feel more comfortable.",
      image: "/images/image4.jpeg",
      content:
        "Full content about Dealing with Pet Anxiety... This content explains how to recognize anxiety in pets and how to alleviate their stress.",
      isExpanded: undefined,
    },
  ];

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get<BlogPost[]>("/api/blog-posts");
        setBlogPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        // If API fails, use dummy data
        setBlogPosts(dummyPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleReadMore = (id: string) => {
    setBlogPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? { ...post, isExpanded: !post.isExpanded } // Toggle the content visibility
          : post
      )
    );
  };

  return (
    <motion.div
      className="blog p-6 bg-gray-100 flex flex-col gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Blog Posts Grid: Display 2x2 */}
      <div className="blog-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-6">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="blog-card flex flex-col p-4 border rounded-lg shadow-lg bg-white hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={post.image || "/images/image2.jpeg"}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="content">
              <h2 className="text-2xl font-semibold text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-700 mt-2">
                {post.isExpanded ? post.content : post.excerpt}
              </p>
              <button
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                onClick={() => handleReadMore(post.id)} // Toggle post content
              >
                {post.isExpanded ? "Show Less" : "Read More"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
