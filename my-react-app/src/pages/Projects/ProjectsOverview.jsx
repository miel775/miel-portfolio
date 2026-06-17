import { useEffect, useState } from 'react';
import MiniBanner from '/src/components/MiniBanner';

function ProjectsOverview() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); 
  
    useEffect(() => {
      fetch(`${import.meta.env.VITE_STRAPI_API_URL}/api/blogs`, {
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
    <main>
      <MiniBanner title="Projects" />


    </main>
  );
}

export default ProjectsOverview;
