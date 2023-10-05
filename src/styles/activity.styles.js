import styled from "styled-components";

export const ActivityPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActivityMainDiv = styled.div`
  height: auto;
  width: 55%;
  margin-top: 10px;
  @media screen and (max-width: 1200px) {
    width: 65%;
  }

  @media screen and (max-width: 700px) {
    width: 85%;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

export const ActivityDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  border: 1px solid #d6e4e5;
  padding: 10px;
  h4 {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
  }
  p {
    font-size: 0.9rem;
  }
`;

export const ActivityTabDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
`;

export const ActivityTabButton = styled.button`
  font-weight: bold;
  padding: 0 10px;
  margin-right: 15px;
  font-size: 0.9rem;
  height: 30px;
  border: none;
  border-radius: 15px;
`;

export const ActivityContentDiv = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
