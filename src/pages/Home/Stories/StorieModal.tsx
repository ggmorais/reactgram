import React from 'react';
import styled from 'styled-components';
import IStorie from './IStorie';

const Container = styled.div`
  width: 400px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  img {
    height: 100%;
  }
`;

export function StorieModal(props: IStorie) {

  return (
    <Container>
      <img src={props.image} />
    </Container>
  );
};