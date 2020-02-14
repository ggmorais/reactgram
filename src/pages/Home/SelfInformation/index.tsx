import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './style';

export interface ISelfInformation {
  _id?: string,
  username: string,
  fullname: string,
  image: string,
}

export default function SelfInformation() {

  const user = useSelector(({ user }: any) => user);

  return (
    <Container>
      <img src={user.image} />
      <div>
        <p>{user.username}</p>
        <span>{user.fullname}</span>
      </div>
    </Container>
  );
};