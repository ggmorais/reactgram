import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-y: auto;
  cursor: pointer;
  margin-bottom: 5px;

  /* margin-left: 300px; */

  img {
    width: 36px;
    border-radius: 50px;
    margin: 0 15px;
  }

  div {
    p {
      font-size: 14px;
      color: ${props => props.theme.font1};
      font-weight: 600;
    }

    span {
      font-size: 13px;
      color: ${props => props.theme.font2};
    }
  }
`;

export function Card(props: IStorie) {

  return (
    <Container onClick={props.onClick}>
      <img src={props.user.image} />
      <div>
        <p>{props.user.username}</p>
        <span>2 hour ago</span>
      </div>
    </Container>
  );
};