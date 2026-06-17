import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import MiniBanner from '/src/components/MiniBanner';
import '/src/stylesheets/blogs.css';

function BlogOverview() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch(`${import.meta.env.VITE_STRAPI_API_URL}/api/blogs?populate=featured_image`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No blog content found.</p>;

return (
    <div>
      <MiniBanner title="Blogs"/>
      <div id="blog-tiles">
{Array.isArray(data) && data.length > 0 ? (
  data.map((blog) => {
    const imageUrl = blog.featured_image?.formats?.medium?.url;

    return (
      <main key={blog.documentId} className="blog-card">
        <section className="blog-tile">
          {imageUrl && (
            <img 
              src={`${import.meta.env.VITE_STRAPI_API_URL}${imageUrl}`} 
              alt={blog.featured_image.alternativeText || blog.title} 
              width="256"
            />
          )}
          
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          
          <div className="button">
            <Link to={`/blog/${blog.documentId}`}>Read More</Link>
          </div>
        </section>
      </main>
    );
  })
) : (
  <p>No blog content found.</p>
)}
      </div>
    </div>
  );
}
export default BlogOverview;