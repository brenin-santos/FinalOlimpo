import styled from "styled-components";

export const Container = styled.div`
  opacity: 1;
  transform: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  gap: 2rem;
`;
export const ImagePet = styled.img`
  width: 370px;
  height: 370px;
`;
export const Paragraphy = styled.p`
  font-size: 4rem;

  max-width: 950px;

  text-align: center;
  font-family: var(--text-configuration);
  font-weight: bold;

  background: linear-gradient(
      to right,
      #f9c763,
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

  margin-top: 5rem;

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

export const ButtonSoldOut = styled.button`
  height: 35px;
  width: 220px;
  background: var(--background-middle);
  text-align: center;

  font-size: 20px;
  border: none;
  color: white;
  border-radius: 0.3rem;
  font-weight: bold;
  transition: width 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    width: 240px;
    height: 45px;
  }
`;

export const TextBoldHigh = styled.h1`
  font-size: 4rem;
  color: white;
  font-weight: bold;
  font-family: var(--text-configuration);
`;

export const TextMiddle = styled.h3`
  font-size: 2rem;
  max-width: 950px;
  text-align: center;
  color: white;
  font-weight: bold;
  font-family: var(--text-configuration);
`;
