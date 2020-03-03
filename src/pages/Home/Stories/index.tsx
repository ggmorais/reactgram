import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from './Card';
import { Container, Header, List } from './style';

export default function Stories() {

  const stories = useSelector(({ stories }: any) => stories);
  const dispatch = useDispatch();

  return (
    <Container>
      <Header>
        <p>Stories</p>
        <button onClick={() => dispatch({ type: 'SWITCH_STORY', pos: 0 })}>See all</button>
      </Header>
      <List>
        {stories.map((story: any, i: number) => (
          <Card 
            key={story._id} 
            {...story}
            onClick={() => dispatch({ type: 'SWITCH_STORY', pos: i })}
          />
        ))}
      </List>  
    </Container>
  );
};