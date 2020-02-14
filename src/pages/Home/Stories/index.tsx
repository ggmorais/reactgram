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
        <button>Ver tudo</button>
      </Header>
      <List>
        {stories.map((story: any) => (
          <Card 
            key={story._id} 
            {...story}
            onClick={() => dispatch({ type: 'SWITCH_STORY', ...story })}
          />
        ))}
      </List>  
    </Container>
  );
};