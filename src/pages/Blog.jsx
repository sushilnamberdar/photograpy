import React, { useState } from 'react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: '📝' },
    { id: 'techniques', name: 'Techniques', icon: '📸' },
    { id: 'locations', name: 'Locations', icon: '🗺️' },
    { id: 'equipment', name: 'Equipment', icon: '🔧' },
    { id: 'inspiration', name: 'Inspiration', icon: '💡' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Mastering Golden Hour Photography',
      category: 'techniques',
      excerpt: 'Discover the secrets to capturing stunning images during the magical golden hour, when natural light creates the most beautiful and dramatic effects.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-15',
      readTime: '8 min read',
      author: 'Alex Chen'
    },
    {
      id: 2,
      title: 'Top 10 Wildlife Photography Destinations',
      category: 'locations',
      excerpt: 'Explore the world\'s best locations for wildlife photography, from the African savanna to the Arctic tundra, and learn what makes each destination unique.',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-12',
      readTime: '12 min read',
      author: 'Alex Chen'
    },
    {
      id: 3,
      title: 'Essential Camera Gear for Nature Photography',
      category: 'equipment',
      excerpt: 'A comprehensive guide to the essential equipment every nature photographer needs, from cameras and lenses to tripods and filters.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-10',
      readTime: '10 min read',
      author: 'Alex Chen'
    },
    {
      id: 4,
      title: 'Finding Inspiration in Everyday Nature',
      category: 'inspiration',
      excerpt: 'Learn how to find photographic inspiration in your local environment, even when you can\'t travel to exotic locations.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-08',
      readTime: '6 min read',
      author: 'Alex Chen'
    },
    {
      id: 5,
      title: 'Composition Techniques for Landscape Photography',
      category: 'techniques',
      excerpt: 'Master the fundamental composition techniques that will transform your landscape photography from good to extraordinary.',
      image: 'https://images.unsplash.com/photo-1464822759844-d150baec0134?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-05',
      readTime: '9 min read',
      author: 'Alex Chen'
    },
    {
      id: 6,
      title: 'The Art of Macro Photography in Nature',
      category: 'techniques',
      excerpt: 'Explore the fascinating world of macro photography and learn how to capture the intricate details of flowers, insects, and other small subjects.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-03',
      readTime: '11 min read',
      author: 'Alex Chen'
    },
    {
      id: 7,
      title: 'Photographing the Northern Lights',
      category: 'locations',
      excerpt: 'A complete guide to capturing the aurora borealis, including the best locations, camera settings, and techniques for this challenging subject.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-01',
      readTime: '14 min read',
      author: 'Alex Chen'
    },
    {
      id: 8,
      title: 'Building Your Photography Portfolio',
      category: 'inspiration',
      excerpt: 'Learn how to curate and present your best work to create a compelling photography portfolio that showcases your unique style and vision.',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2023-12-28',
      readTime: '7 min read',
      author: 'Alex Chen'
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Photography Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Insights, tips, and stories from the world of nature photography. 
            Learn new techniques, discover amazing locations, and find inspiration for your next adventure.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Featured Post
            </h2>
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{formatDate(filteredPosts[0].date)}</span>
                    <span>•</span>
                    <span>{filteredPosts[0].readTime}</span>
                    <span>•</span>
                    <span>{filteredPosts[0].author}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    {filteredPosts[0].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  <button className="btn-primary">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <article key={post.id} className="card overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{formatDate(post.date)}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    By {post.author}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
              No posts found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try selecting a different category or check back later for new articles.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <section className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Stay Updated
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
            Get the latest photography tips, tutorials, and inspiration delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog; 