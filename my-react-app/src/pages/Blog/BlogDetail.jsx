import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '/src/stylesheets/blogs.css';

function BlogDetail() {
  const { slug } = useParams(); 
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Fetching data using the slug filter
    fetch(`${import.meta.env.VITE_STRAPI_API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`)
      .then((res) => res.json())
      .then((result) => {
        // 2. Strapi returns data as an array, so we pick the first match
        setBlog(result.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog post not found.</p>;

  // 3. Destructure the specific fields from the API object
  // Note: Adjust 'markdown_content' if your field is named differently in Strapi
  const { title, subtitle, featured_image, markdown_content } = blog;
  const imageUrl = featured_image?.url;

  return (
    <article className="blog-post">
      <h1>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
      
      {imageUrl && (
        <img 
          src={`${import.meta.env.VITE_STRAPI_API_URL}${imageUrl}`} 
          alt={featured_image.alternativeText || title} 
        />
      )}

      <div className="markdown-body">
        <ReactMarkdown>{markdown_content}</ReactMarkdown>
      </div>
    </article>
  );
}

export default BlogDetail;