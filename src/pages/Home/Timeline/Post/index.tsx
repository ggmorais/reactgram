import React, { useState, useEffect } from 'react';
import { MdMoreHoriz, MdAccountCircle } from 'react-icons/md';
import { FiHeart, FiMessageCircle, FiShare2, FiBookmark } from 'react-icons/fi';

import api from '../../../../services/api';

import { ActionBar, Container, PostImage, TitleBar } from './style';
import './styles.css';

export function Post(props: IPost) {

  const [liked, setLiked] = useState(false);

  const user = JSON.parse(localStorage.getItem('auth') || '');

  const handleLike = async () => {
    
    setLiked(liked ? false : true);

    try {
      const res = await api.post('/posts/like', {
        userId: user._id,
        postId: props._id
      });

    } catch(err) {
      console.log(err)
    }
  }

  const handleShare = async () => {

  }

  const handleComment = async () => {

  }

  const handleMark = async () => {

  }

  useEffect(() => {
    if (props.likes.length > 0) {
      for (let like of props.likes) {
        if (like.username == user.username) {
          setLiked(true);
        }
      }
    }
  }, [])

  return (
    <Container>
      <TitleBar>

        {props.user.image 
          ? <img src={props.user.image} width="36px" style={{ borderRadius: '50px', marginLeft: '15px' }} />
          : <MdAccountCircle size={36} style={{ marginLeft: '10' }} />
        }
        <p>{props.user.username}</p>

        <MdMoreHoriz size={22} style={{ marginLeft: 'auto', marginRight: '15px' }} />
      </TitleBar>

      <PostImage src={props.image} />

      <ActionBar>
        <FiHeart
          className="btn-like"
          size={28} 
          onClick={handleLike}
          fill={liked ? '#ed4956' : 'transparent'} 
          color={liked ? '#ed4956' : 'inherit'}
        />
        <FiMessageCircle size={28} onClick={handleComment} style={{ marginLeft: '10px' }} />
        <FiShare2 size={28} onClick={handleShare} style={{ marginLeft: '10px' }} />
        <FiBookmark size={28} onClick={handleMark} style={{ marginLeft: 'auto' }} />
      </ActionBar>

    </Container>
  );
};
