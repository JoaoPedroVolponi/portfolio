import styled from "styled-components";

export const ContainerPresentation = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors.backgroundpresentation};
  gap: 20px;
  padding: 0 20%;
  position: relative;

  @media screen and (max-width: 780px) {
    background: ${(props) => props.theme.colors.backgroundpresentation780};
  }

  @media screen and (max-width: 1560px) {
    padding: 0 10%;
  }
`;

export const SwitchContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ContainerMe = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  flex-direction: column;
`;

export const TextName = styled.span`
  color: ${props => props.theme.colors.text};
  font-weight: 700;
  font-size: 50px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const SubText = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  font-size: 25px;

  @media screen and (max-width: 536px) {
    font-size: 4.5vw;
  }
`;

export const Navigations = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 480px) {
    gap: 15px;
  }
`;

export const TextNavs = styled.a`
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  font-style: normal;

  &::after {
    content: "";
    background-color: #37a2d8;
    height: 3px;
    width: 0%;
    display: block;
    transition: 0.3s ease-in-out;
  }

  &:hover::after {
    content: "";
    background-color: #37a2d8;
    height: 3px;
    width: 70%;
    display: block;
  }
`;

export const Imagem = styled.img`
  position: absolute;
  right: 0;
  left: 60%;
  height: 20vw;

  @media screen and (max-width: 980px) {
    position: static;
    height: auto;
    width: 80%;
    max-width: 300px;
    display: block;
    margin: 20px auto 0;
  }

  animation: float 10s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-25px);
    }
    40% {
      transform: translateX(-25px);
    }
    60% {
      transform: translateY(-25px);
    }
    80% {
      transform: translateX(-25px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
