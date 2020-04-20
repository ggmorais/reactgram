import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { 
  FiArrowDown, 
  FiUser, 
  FiCheck, 
  FiMoreHorizontal, 
  FiList, 
  FiBookmark,
  FiHeart,
  FiMessageCircle,
} from 'react-icons/fi'

import api from '../../../services/api';
import './styles.css';
import PostPreview from './PostPreview';

export default function Profile() {

  const [user, setUser] = useState({} as IUser);
  const [selected, setSelected] = useState('posts');
  const [about, setAbout] = useState('');

  const history = useHistory();

  const username = history.location.pathname.substring(1)

  const fetchUserData = async () => {
    try {
      const res = await api.get(`/profile/${username}`);

      console.log(res.data.marked);

      setUser(res.data);
    } catch(err) {console.log(err)}
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="profile-container">
      <div className="centered">

        <header>
          <img src="https://api.adorable.io/avatars/50/" />

          <div className="right-side">
            <div className="actions">
              <h2>{username}</h2>
              <div className="buttons">
                <button className="message">Send a message</button>
                <button className="follow">
                  <FiUser size={14} fill="#000" color="#000" />
                  <FiCheck size={14} />
                </button>
                <button className="suggestions">
                  <FiArrowDown size={12} />
                </button>
                <FiMoreHorizontal size={32} />
              </div>
            </div>

            <div className="stats">
              <p>
                <b>3046</b> posts
              </p>
              <p>
                <b>346208</b> followers
              </p>
              <p>
                <b>133</b> following
              </p>
            </div>

            <div className="infos">
              <b>{user.fullname}</b>
              <p>
              Texto texto texto texto texto texto texto
              Texto texto texto texto texto texto texto
              Texto texto texto texto texto texto texto
              Texto texto texto texto texto texto texto
              </p>
            </div>
          </div>
        </header>

        <div className="hmenu">
          <div className="selector">
            <p 
              onClick={() => setSelected('posts')}
              style={selected === 'posts' ? { borderTop: '1px solid black', color: 'black' } : {}}
            >
              <FiList size={18} />
              <span>POSTS</span>
            </p>
            <p 
              onClick={() => setSelected('saved')}
              style={selected === 'saved' ? { borderTop: '1px solid black', color: 'black' } : {}}
            >
              <FiBookmark size={18} />
              <span>SAVED</span>
            </p>
          </div>

          <div className="posts">
            {(selected === 'posts') 
              ? (user.posts) && user.posts.map(post => <PostPreview { ...post } key={post._id} host={user.host} />
            ) :
            (selected === 'marked') 
              && (user.marked) && user.marked.map(post => <PostPreview { ...post } key={post._id} host={user.host} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};