import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-width: 1440px;
  background: url("./resources/images/backgrounds/fatalFallsBackground.png")
    center no-repeat;
  background-size: cover;
`;
export const Overlay = styled.div`
  width: 100vw;
  max-width: 1440px;

  min-height: 100vh;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 0%,
    var(--overlay-dark) 100%
  );

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0;

  position: relative;
`;
export const LateralSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  min-height: calc(100vh - 7rem);

  margin-top: 7rem;

  &.left {
    display: none;
    width: 50%;
    img {
      max-height: 550px;
    }
  }

  &.right {
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    img {
      width: 70%;
      max-height: 150px;
    }
  }

  @media (min-width: 768px) {
    &.left {
      display: flex;
    }
    &.right {
      width: 50%;
      img {
        max-height: 160px;
      }
    }
  }
  @media (min-width: 1440px) {
    &.left img {
      max-height: 700px;
    }
    &.right img {
      max-height: 250px;
    }
  }
`;

export const Scroll = styled.div`
  position: absolute;
  right: 50%;
  bottom: 5%;
  transform: translateX(50%);

  .bar {
    border: 1px solid var(--text);
    border-radius: 50px;
    height: 5rem;

    width: 0;
    margin: 0 auto;
  }
  .text {
    transform: rotate(90deg);
    margin-bottom: 2rem;
    letter-spacing: 0.25em;
  }

  @media (min-width: 768px) {
    margin-right: 4rem;
    right: 0;
    transform: translateX(-50%);
  }
`;
