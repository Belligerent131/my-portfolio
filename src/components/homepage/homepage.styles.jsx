import styled from "styled-components";
import { Container } from "react-bootstrap";

export const PageContainer = styled(Container)`
  display: block;
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow: hidden;
`;

export const BackgroundContainer = styled.div`
  background-image: url("/images/bg.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  position: relative;
  z-index: 1;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  margin: -5px;
  border: 1px solid #000;
  right: -5px;
  bottom: -5px;
`;

export const InfoContainer = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  width: 90%;
  height: 90%;
  z-index: 10;
  top: 0;

  .name {
    font-family: "Playfair Display", serif;
    line-height: 1.2;
    font-size: 62px;
    text-transform: uppercase;
    letter-spacing: 2px;

    .first {
      font-weight: 500;
      color: #fff;
    }

    .last {
      font-weight: 900;
      color: #ff000d;
    }
  }

  .description {
    p {
      font-size: 28px;
      font-weight: 300;
      color: #fff;
      font-family: "Roboto", sans-serif;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .Typewriter {
      .Typewriter__wrapper {
        font-weight: 500;
        border-bottom: 3px solid red;
      }

      .Typewriter__cursor {
        color: red;
      }
    }
  }
`;
