import React, { useEffect, useState } from 'react';
import api from '../../../api/api';
import { useParams } from 'react-router-dom';

export default function BlogPost(){
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(()=> {
    (async ()=> {
      const res = await api.get(`/blog/post/${slug}`);
      setPost(res.data);
    })();
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
      {post.heroImage?.url && <img src={post.heroImage.url} alt={post.title} className="w-full rounded mb-4" />}
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} className="prose max-w-none" />
      {/* Subscribe widget */}
      <div className="mt-8 p-4 bg-yellow-50 rounded">
        <h4 className="font-semibold">Subscribe for new posts</h4>
        <SubscribeInline />
      </div>
    </article>
  );
}
