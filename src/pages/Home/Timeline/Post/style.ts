import styled from "styled-components";

export const Container = styled.div`
  width: 99%;
  margin-bottom: 60px;
  height: auto;
  background-color: ${props => props.theme.base2};
  border-radius: 2px;
  margin-left: 2px;
  box-shadow: 0px 0px 1px 0px ${props => props.theme.shadow};
`;

export const PostImage = styled.img`
  width: 100%;
  min-height: 400px;
`;

export const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 15px;
  margin-bottom: 15px;
  color: ${props => props.theme.font1};
  justify-content: space-between;

  p {
    margin-left: 15px;
    color: ${props => props.theme.font1};
    font-weight: 530;
  }
`;

export const ActionBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  color: ${props => props.theme.font1};

  * {
    cursor: pointer;
  }
`;