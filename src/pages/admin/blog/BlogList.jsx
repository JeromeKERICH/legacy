import React, { useEffect, useState } from 'react';
import api from '../../../api/api';
import { Link } from 'react-router-dom';

export default function BlogList(){
  const [posts, setPosts] = useState([]);
  useEffect(()=> {
    (async ()=> {
      const res = await api.get('/blog');
      setPosts(res.data.items || []);
    })();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Legacy Digest</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(p => (
          <article key={p._id} className="bg-white p-4 rounded shadow">
            {p.heroImage?.url && <img src={p.heroImage.url} alt={p.title} className="w-full h-44 object-cover rounded mb-3" />}
            <Link to={`/blog/${p.slug}`} className="text-xl font-semibold">{p.title}</Link>
            <p className="text-sm text-gray-600 mt-2">{p.excerpt}</p>
            <div className="mt-3">
              <Link to={`/blog/${p.slug}`} className="text-amber-600">Read more →</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
