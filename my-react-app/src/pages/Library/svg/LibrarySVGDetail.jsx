import { useParams } from 'react-router-dom';

function LibrarySVGDetail() {
  const { slug } = useParams();

  return (
    <main>
      <h1>Library SIG Detail</h1>
      <p>Slug: {slug}</p>
    </main>
  );
}

export default LibrarySVGDetail;
