import styled from "styled-components";

export const Container = styled.footer`
  padding: 0 60px;
  width: 100%;
  display: flex;
  height: 80px;
  background-color: var(--background-light);
  justify-content: center;
  align-items: center;
  gap: 1rem;
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
