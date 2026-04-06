import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import MiniBanner from '/src/components/MiniBanner';
import '/src/stylesheets/blogs.css';

function BlogDetail() {
  const { slug } = useParams(); 
  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:1337/api/blogs?filters[slug][$eq]=${slug}&populate=CoverImage`)
      .then((res) => res.json())
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setPost(response.data[0]);
        }
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching blog:", error));
  }, [slug]);

  // 3. Handle loading and "not found" states
  if (loading) return <div id="wrapper-header"><p>Loading article...</p></div>;
  if (!post) return <div id="wrapper-header"><p>Blog post not found.</p></div>;

  // 4. Strapi image URL fix
  // Strapi returns images as relative paths (e.g., "/uploads/my-image.png"). 
  // We must prepend your local server URL so React can find it.
  const imageUrl = post.CoverImage?.url 
    ? `http://localhost:1337${post.CoverImage.url}` 
    : null; // Fallback in case a post doesn't have an image

  return (
    <div id="wrapper-header">
      <MiniBanner title={post.title} />
      
      <main>
        {imageUrl && (
          <div id="blog-head-picture">
            <img src={imageUrl} alt={post.title} />
          </div>
        )}

        <div className="blog-content">
          <ReactMarkdown>{post.Content}</ReactMarkdown>
        </div>

      </main>
    </div>
  );
}

export default BlogDetail;