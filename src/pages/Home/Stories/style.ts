import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 250px;
  /* overflow-y: hidden; */
  background-color: ${props => props.theme.base2};
  border-radius: 2px;
  box-shadow: 0px 0px 1px 0px ${props => props.theme.shadow};
  color: ${props => props.theme.font1};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;

  p {
    color: ${props => props.theme.font2};
    font-weight: 600;
    font-size: 14px;
  }

  button {
    margin-left: auto;
    border: none;
    background-color: transparent;
    font-weight: 500;
    font-size: 13px;
    font-family: sans-serif;
    color: ${props => props.theme.font1};
    cursor: pointer;
  }
`;

export const List = styled.div`
  overflow-y: auto;
  height: 200px;
`;
