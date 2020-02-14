import React from 'react';
import { Container } from './style';

interface IProfile {
  username: string;
}

export default function Profile({username}: IProfile) {

  return (
    <Container>
      <p>eae {username}</p>
    </Container>
  );
};