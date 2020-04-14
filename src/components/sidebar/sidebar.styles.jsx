import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

export const ImageContainer = styled(Row)`
  width: 200px;
  height: 200px;
  position: relative;

  img {
    width: 100%;
    height: 200px;
  }
`;

export const SideBarContainer = styled(Container)`
  background-color: #17181b;
  width: 200px;
  height: 100vh;
  display: block;
  margin: 0;
  z-index: 5;
  

  .copyright {
    color: #fff;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200px;
    text-align: center;
    padding: 5px 0;
  }
`;

export const Name = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  display: flex;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  background-color: #580000;
  bottom: 0;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  opacity: 0.8;
  color: #fff;
  letter-spacing: 2px;
`;

export const NavLinks = styled(Row)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    li {
      text-align: left;
      list-style-type: none;
      padding: 10px 0 5px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding-left: 20%;
      width: 100%;

      a {
        color: rgba(255, 255, 255, 0.3);
        text-transform: uppercase;
        font-size: 14px;
        white-space: nowrap;
        line-height: 1.5rem;
        text-decoration: none;
        transition: color 0.5s ease-in-out;

        .link-icons {
          line-height: 1.5rem;
          position: inline-block;
          left: 48px;
          vertical-align: middle;
          margin-bottom: 8px;
          margin-right: 5px;
        }

        &:hover {
          text-decoration: none;
          color: #fff;
          transition: color 0.5s ease-in-out;
        }
      }
      & .active {
        color: #fff;
      }
    }
  }
`;

export const ListSocial = styled.ul`
  width: 200px;
  margin: 0 0 10px 0;
  padding: 0;

  li {
    display: inline-flex;
    margin-right: 5px;

    a {
      color: rgba(255, 255, 255, 0.3);

      &:hover {
        text-decoration: none;
        color: #fff;
        transition: color 0.5s ease-in-out;
      }
    }
  }
`;
