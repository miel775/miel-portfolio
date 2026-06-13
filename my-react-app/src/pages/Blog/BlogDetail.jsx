import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { STRAPI_URL } from '../../api';
import MiniBanner from '/src/components/MiniBanner';
import '/src/stylesheets/blogs.css';

function BlogDetail() {
  const { slug } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`)
      .then((res) => res.json())
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setPost(response.data[0]);
        }
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching blog:", error));
  }, [slug]);

  if (loading) return <div id="wrapper-header"><p>Loading article...</p></div>;
  if (!post) return <div id="wrapper-header"><p>Blog post not found.</p></div>;

  // Use optional chaining to safely access deep properties
  const imageUrl = post.CoverImage?.url 
    ? `${process.env.STRAPI_URL}${post.CoverImage.url}` 
    : null;

  return (
<div className="blog-content">
  <BlocksRenderer 
    content={post.content} 
    blocks={{
      link: ({ children, url }) => <a href={url} target="_blank" rel="noreferrer">{children}</a>,
      heading: ({ children, level }) => {
        const Tag = `h${level}`;
        return <Tag className="blog-heading">{children}</Tag>;
      }
    }}
  />
</div>
  );
}

export default BlogDetail;