import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdArrowBack, MdArrowForward, MdClose, MdMoreVert, MdMoreHoriz } from 'react-icons/md';
import { Container, Centered, Image, SideButtons, Header, Middle } from './style';
import spinner from '../../../assets/images/Spinner-64px.svg';

interface IStoryViewer { 
  _id: string,
  user: object | null,
  image: string,
}

export function StoryViewer() {

  const dispatch = useDispatch();
  const [story, activeStory] = useSelector(({ stories, activeStory }: any) => [stories[activeStory], activeStory]);

  if (!story) return <div />;

  const close = () => {
    dispatch({ type: 'SWITCH_STORY', pos: null });
  }

  const change = (n: number) => {
    dispatch({ type:  'SWITCH_STORY', pos: activeStory + n });
  }

  return (
    <Container>
      <Centered>
        <SideButtons>
          <MdArrowBack onClick={() => change(-1)} size={30} />
        </SideButtons>
        <Middle>
          <Header>
            <img src={story.user.image} />
            <p>{story.user.username}</p>
            <span>{new Date(story.date).getHours() + 'h'}</span>
            <MdMoreHoriz size={30} style={{ marginLeft: 'auto' }} />
          </Header>
          <Image style={ { backgroundImage: `url(${story.image})` } } />
        </Middle>
        <SideButtons>
          <MdClose onClick={() => close()} size={30} style={{ marginBottom: 'auto', marginTop: '40px' }} />
          <MdArrowForward onClick={() => change(1)} size={30} style={{ marginBottom: 'auto', marginTop: '-70px' }} />
        </SideButtons>
      </Centered>
    </Container>
  );
}