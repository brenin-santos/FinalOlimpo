import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  padding: 50px 120px;
  align-items: left;
  justify-content: center;
  gap: 2rem;
`;
export const ContainerProgress = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  margin: 0 20rem;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: var(--background);
`;

export const ContainerWalletAddress = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  margin: 0 20rem 2rem 20rem;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: var(--background);
`;
export const ContainerInputsButton = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;
export const CardButton = styled.div`
  width: 270px;
  height: 40px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
`;
export const CardInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: space-between;

  .card-negative {
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;

    padding: 0;
    border: 0;
    transition: 0.2s;
    background: var(--background-middle);
    color: white;
  }
  .card-negative:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
  .card-input-number {
    height: 100%;
    width: 130px;
    display: flex;
    color: #1965c2;
    font-weight: bold;
    font-size: 15px;

    align-items: center;
    justify-content: center;
    border: 0;
    padding: 0;
  }
  .card-positive {
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;

    padding: 0;
    border: 0;
    transition: 0.2s;
    background: var(--background-middle);
    color: white;
  }
  .card-positive:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
  .button-down-section-connect {
    width: 180px;
    height: 40px;
    background: #f62d58;
    color: white;
    font-size: 15px;
    font-weight: 600;
    border: 1px solid #f62d58;
    transition: 0.2s;
    border-radius: 999px;
  }
  .button-down-section-connect:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`;

export const TextBoldMiddle = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
  font-size: 1.4rem;
  font-weight: 800;
  color: white;
  font-family: "Fredoka One", cursive;
`;

export const ContainerText = styled.div`
  width: max-content;
  padding: 1rem;

  display: flex;
  text-align: center;

  background: var(--background);

  border-radius: 0.25rem;
  border: 1px solid var(--background);
`;
export const MintButton = styled.button`
  height: 40px;
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
export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  margin: 1rem 30rem;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: var(--background);

  font-size: 24px;
  color: white;
  font-family: var(--text-configuration);
`;
