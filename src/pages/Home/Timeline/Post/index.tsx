import React from 'react';
import { MdMoreHoriz, MdShare, MdThumbUp } from 'react-icons/md';
import { ActionBar, Container, PostImage, TitleBar } from './style';

export function Post(props: IPost) {

  return (
    <Container>
      <TitleBar>
        <img src={props.user.image} width="36px" style={{ borderRadius: '50px', marginLeft: '15px' }} />
        <p>{props.user.username}</p>
        <MdMoreHoriz size={22} style={{ marginLeft: 'auto', marginRight: '15px' }} />
      </TitleBar>
      <PostImage src={props.image} />
      <ActionBar>
        <MdThumbUp size={30} />
        <MdShare size={30} style={{ marginLeft: '10px' }} />
      </ActionBar>
    </Container>
  );
};
