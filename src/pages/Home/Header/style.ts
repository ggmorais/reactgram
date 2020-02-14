import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  height: 80px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  font-family: 'Pacifico', sans-serif;

  box-shadow: 1px 0px 2px ${props => props.theme.shadow};
  background-color: ${props => props.theme.base2};
  color: ${props => props.theme.font1};
  

  div {
    width: auto;
  }
`;

export const Title = styled.h2`
  float: right;
  margin-left: 10px;
  margin-top: -5px;
  padding-left: 10px;
  border-left: 1px solid ${(props: any) => props.theme.font1};
  cursor: pointer;
  font-weight: 100;
  font-size: 25px;
`;

export const Actions = styled.div`
  flex: .02 1 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  * {
    cursor: pointer;
  }
`;