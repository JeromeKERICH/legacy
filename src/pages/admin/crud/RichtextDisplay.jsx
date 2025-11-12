// components/RichTextDisplay.jsx
import React from 'react';

export default function RichTextDisplay({ content, className = "" }) {
  if (!content) return null;

  return (
    <div 
      className={`rich-text-content font-cambria text-gray-700 leading-relaxed ${className}`}
    >
      <style jsx>{`
        .rich-text-content h2 {
          font-family: Cambria, serif;
          font-weight: bold;
          font-size: 1.5rem;
          color: #000;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid #fbbf24;
          padding-bottom: 0.5rem;
        }
        
        .rich-text-content h3 {
          font-family: Cambria, serif;
          font-weight: bold;
          font-size: 1.25rem;
          color: #000;
          margin-top: 1.25rem;
          margin-bottom: 0.75rem;
        }
        
        .rich-text-content p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        
        .rich-text-content ul, .rich-text-content ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }
        
        .rich-text-content ul {
          list-style-type: disc;
        }
        
        .rich-text-content ol {
          list-style-type: decimal;
        }
        
        .rich-text-content li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        
        .rich-text-content strong {
          font-weight: bold;
          color: #000;
        }
        
        .rich-text-content em {
          font-style: italic;
        }
        
        .rich-text-content u {
          text-decoration: underline;
        }
        
        .rich-text-content a {
          color: #d97706;
          text-decoration: underline;
        }
        
        .rich-text-content a:hover {
          color: #b45309;
        }
        
        .rich-text-content blockquote {
          border-left: 4px solid #fbbf24;
          padding-left: 1rem;
          margin-left: 0;
          font-style: italic;
          color: #6b7280;
          background: #fffbeb;
          padding: 1rem;
          border-radius: 0 0.5rem 0.5rem 0;
        }
      `}</style>
      
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}