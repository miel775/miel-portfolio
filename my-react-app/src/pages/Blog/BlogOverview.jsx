import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Added missing Link import
import MiniBanner from '/src/components/MiniBanner';
import { STRAPI_URL } from '../api';
import '/src/stylesheets/blogs.css';

function BlogOverview() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:1337/api/blogs?populate=CoverImage')
      .then((res) => res.json())
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  if (loading) return (
    <div id="wrapper-header-loading">
      <p>Loading blogs...</p>
    </div>
  );

  return (
    <div id="wrapper-header">
        <MiniBanner title="All Blogs"/>

        <main className="blog-grid">
          {/* 2. Fixed typo from lenth to length */}
          {blogs.length === 0 ? (
            <p>No Blogs published yet</p>
          ) : (
            blogs.map((blog) => {
              // 3. Changed https to http for localhost
              const thumbnailUrl = blog.CoverImage?.url
                ? `http://localhost:1337${blog.CoverImage.url}`
                : null;

                return (
                  <article key={blog.documentId} className="blog-card">
                    {thumbnailUrl && (
                      <img src={thumbnailUrl} alt={blog.title} className="blog-thumbnail"/>
                    )}
                    <h2>{blog.title}</h2>
                    <p>{blog.excerpt}</p>

                    <Link to={`/blogs/${blog.slug}`} className="read-more-button">
                      Read Article
                    </Link>
                  </article>
                );
            })
          )}
        </main>
    </div>
  );
}

export default BlogOverview;