import { useEffect, useState } from 'react';
import MiniBanner from '/src/components/MiniBanner';
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

  if (loading) return <div id="wrapper-header"><p>Loading blogs...</p></div>;

  return (
    <div id="wrapper-header">
        <MiniBanner title="All Blogs"/>

        <main className="blog-grid">
          {blogs.lenth === 0 ? (
            <p>No Blogs published yet</p>
          ) : (
            blogs.map((blog) => {
              const thumbnailUrl = blog.CoverImage?.url
                ? `https://localhost:1337${blog.CoverImage.url}`
                : null;

                return (
                  <article key={blog.documentId} className="blog-card">
                    {thumbnailUrl && (
                      <img src={thumbnailUrl} alt={blog.title} className="blog-thumbnail"/>
                    )}
                    <h2>{blog.title}</h2>
                    <p> {blog.excerpt} </p>

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