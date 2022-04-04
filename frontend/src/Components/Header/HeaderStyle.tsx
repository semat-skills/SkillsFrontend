import styled from "styled-components";
import { Colors } from "../../Assets/styles/thems";

export const Container = styled.header`
  background-color: ${Colors.lightTurquoise};

  width: 100vw;
  min-height: 72px;
  left: 0px;
  right: 0px;
  margin: 0px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 18px;
  padding-bottom: 18px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 1024px) {
    padding-left: 105px;
    padding-right: 105px;
    padding-top: 18px;
    padding-bottom: 18px;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.pelorous};
    min-width: 76px;
    min-height: 36px;

    font-size: 3.5vw;
  }
  .nav-bar {
    display: flex;
    flex-direction: row;
    font-size: large;
    color: black;
    text-decoration: none;
  }
  .nav-title {
    padding: 0 10px;
  }
  .profilePicture {
    min-height: 60px;
    min-width: 60px;
    border-radius: 50%;
    background-color: beige;
    margin-left: 10px;
    border: 1px solid #000000;
  }

  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 24px;
    min-height: 24px;
  }
  .link {
    text-decoration: none;
    color: black;
    font-size: large;
  }
  .bord {
    font-size: large;
    padding: 0px 10px;
  }

  .login-signup-nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
