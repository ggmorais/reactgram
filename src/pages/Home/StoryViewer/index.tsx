import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './style';

interface IStoryViewer { 
  _id: string,
  user: object | null,
  image: string,
}

export function StoryViewer() {

  const activeStory = useSelector(({ activeStory }: any) => activeStory);

  if (!activeStory) return <div/>

  return (
    <Container>
      <img />
    </Container>
  );
}