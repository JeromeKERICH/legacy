import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';

const ArticlesSection = () => {
  



  const articles = [
    {
      id: 1,
      title: "Understanding Land Ownership in Kenya",
      excerpt: "A comprehensive guide to land titles, documentation, and legal requirements for property buyers.",
      category: "Legal Guide",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Investment Opportunities in Machakos County",
      excerpt: "Exploring the growing real estate market and development projects in Machakos region.",
      category: "Market Insights",
      readTime: "4 min read",
      image:"/assets/17.jpg"
    },
    {
      id: 3,
      title: "Diaspora Property Investment Guide",
      excerpt: "How to securely invest in Kenyan real estate from abroad with proper due diligence.",
      category: "Diaspora Guide",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "The Rise of Satellite Towns in Nairobi",
      excerpt: "Why areas like Kitengela, Ruiru, and Ngong are becoming prime investment destinations.",
      category: "Market Trends",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },

    {
      id: 8,
      title: "Future Development Projects in Kajiado County",
      excerpt: "Upcoming infrastructure and development plans that will impact property values.",
      category: "Market Insights",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 9,
      title: "Building Your Dream Home: A Step-by-Step Guide",
      excerpt: "From land acquisition to construction completion - everything you need to know.",
      category: "Home Building",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Expert insights, market trends, and investment guidance for your property journey
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-lg">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <Link
                  to={`/articles/${article.id}`}
                  className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors group"
                >
                  Read more
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Subscription Section */}
        

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 rounded-lg transition-all duration-300 font-semibold"
          >
            View all articles
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;