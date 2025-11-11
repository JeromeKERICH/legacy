import React, { useEffect } from 'react'
import BlogHero from '../components/blogs/BlogHero'
import ArticlesSection from '../components/blogs/BlogContent';
import BlogCTA from '../components/blogs/BlogCTA';

const Articles = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
  return (
    <div>
      <BlogHero/>
      <ArticlesSection/>
      <BlogCTA/>
    </div>
  )
}

export default Articles
