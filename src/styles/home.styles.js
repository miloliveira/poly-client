import styled from "styled-components";

export const HomePage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePageShowLoginDiv = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePageShowSignupDiv = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePageInnerDiv = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  h5 {
    margin: 0;
  }
  button {
    margin-left: 5px;
    font-weight: bold;
    color: #497174;
    padding: 3px 10px;
    border: 2px solid #497174;
    border-radius: 20px;
  }
  button:hover {
    border: 3px solid #497174;
  }
`;
