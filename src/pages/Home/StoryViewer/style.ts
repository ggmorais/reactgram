import styled from 'styled-components';
import spinner from '../../../assets/images/Spinner-64px.svg';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  top: 0;
  left: 0;
  background-color: #333333;
  color: white;
`;

export const Centered = styled.div`
  width: 500px;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
  /* justify-content: center; */
  /* justify-items: center; */
  /* align-items: center; */
  /* align-items: center; */
`;

export const SideButtons = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* justify-content: center; */

  * {
    cursor: pointer;
  }
`;

export const  Middle = styled.div`
  flex: .9;
  justify-self: center;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-around; */
  /* height: 100%; */
  /* width: 400px; */
`;

export const Header = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
  
  justify-content: space-between;

  p {
    padding-right: 10px;
    padding-left: 10px;
  }

  span {
    font-size: 14px;
    color: grey;
    font-weight: bold;
  }

  img {
    width: 40px;
    border-radius: 50px;
    /* margin-left: auto; */
  }
`;

export const Image = styled.div`
  width: 100%;
  /* background-image: url(../../../assets/images/Spinner-200px.svg); */
  background-image: transparent url(${spinner});
  background-size: cover;
  height: 100%;
`;