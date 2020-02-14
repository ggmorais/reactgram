import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  img {
    float: left;
    width: 50px;
    border-radius: 50px;
  }

  div {
    margin-left: 15px;
  }

  p {
    color: ${props => props.theme.font1};
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
  }

  span {
    color: ${props => props.theme.font2};
    font-size: 12px;
  }
`;