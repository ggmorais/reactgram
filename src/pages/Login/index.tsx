import React from 'react';
import { Container } from './style';

export default function Login() {

  return (
    <Container>
      <h1>Reactgram</h1>
      <form>
        <input type="text" placeholder="Username or email" />
        <input type="password" placeholder="password" />
        <button>Enter</button>
      </form>
    </Container>
  );
};