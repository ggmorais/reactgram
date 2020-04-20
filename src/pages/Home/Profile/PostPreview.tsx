import React, { useState } from 'react';
import { FiHeart, FiMessageCircle } from 'react-icons/fi';

import './styles.css';

export default function PostPreview(post: IPost) {

  const [about, setAbout] = useState('');

  return (
    <div 
      key={post._id} 
      onMouseEnter={() => setAbout(String(post._id))}
      onMouseLeave={() => setAbout('')}
    >
      {about === post._id && (
        <div className="post-infos">
          <p><FiHeart size={22} /><span>{post.likes.length}</span></p>
          <p><FiMessageCircle size={22} /><span>{post.comments.length}</span></p>
        </div>
      )}
      <img src={post.host + post.imageUrl} />
    </div>
  )
}