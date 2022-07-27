import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 60px;
  height: 80px;
  display: flex;
  -webkit-boxpack: justify;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-light);

  h1 {
    color: var(--background);
    font-weight: bold;
  }
  .image--header {
    width: 500px;
    margin-bottom: 1rem;
  }
`;

export const ContainerSectionImage = styled.div`
  display: flex;
`;

export const ContainerSectionButtonsList = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonHigh = styled.button`
  border-radius: 0.25rem;
  border: 2px solid white;
  color: white;
  background-color: var(--background);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 35px;

  font-size: 1rem;
  font-weight: bold;
`;

export const ButtonMid = styled.button`
  border-radius: 0.25rem;
  border: 2px solid white;
  color: white;
  background-color: var(--background);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 35px;

  font-size: 1rem;
  font-weight: bold;
`;

export const ButtonLow = styled.button`
  border-radius: 0.25rem;
  border: 2px solid white;
  color: white;
  background-color: var(--background);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 35px;

  img {
    width: 17px;
    height: 17px;
  }
`;

export const Paragraphy = styled.p`
  font-size: 2rem;

  text-align: center;
  font-family: var(--text-configuration);
  font-weight: bold;

  background: linear-gradient(
      to right,
      #e7ba59,
      #3399d8,
      #23316b,
      #3399d8,
      #23316b
    )
    0% 0% / 400% 100%;

  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

  animation: 6s ease-in-out 0s infinite normal none running rainbow_animation;
  -webkit-animation: 6s ease-in-out 0s infinite normal none running
    rainbow_animation;

  @keyframes rainbow_animation {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
