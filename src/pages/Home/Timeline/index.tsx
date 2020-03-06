import React from 'react';
import { useSelector } from 'react-redux';
import { Post } from './Post';
import { Container } from './style';

export default function Timeline() {

  const state = useSelector((state: IStore) => state);

  return (
    <Container>
      {state.posts.map((post: IPost) => (
        <Post 
          key={post._id}
          _id={post._id}
          user={post.user}
          image={post.image}
          likes={post.likes}
          date={post.date}
        />
      ))}
    </Container>
  );
};