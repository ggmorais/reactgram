import React, { useState } from 'react';
import { FiCamera } from 'react-icons/fi'

import api from '../../../../services/api';
import './styles.css';

export default function NewPost() {

  const [image, setImage] = useState(String as any);
  const [comment, setComment] = useState('');

  const user: IUser = JSON.parse(localStorage.getItem('auth') || '');

  const handelSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    
    formData.append('image', image);
    formData.append('userId', user._id);
    formData.append('comment', comment);

    setImage('');
    setComment('');

    try {

      await api.post('/posts/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

    } catch(err) {console.log(err)}
  }

  return (
    <div className="newpost-container">
      <h3>Create a post</h3>
      <form onSubmit={handelSubmit}>
        
        <label htmlFor="image">
          <FiCamera size={32} />
        </label>
        <input 
          id="image" 
          onChange={e => setImage(e.target.files![0])}
          type="file"
        />
        <textarea placeholder="Add a comment about" onChange={e => setComment(e.target.value)} />
        <button 
          disabled={image ? false : true}
          style={{ opacity: image ? 1 : .4 }} 
        >Publish</button>
      </form>
    </div>
  );
}