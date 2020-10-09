import styled from "styled-components/macro";

export default styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 60px;
  right: 10px;
  z-index: 5;

  @media screen and (max-width: 800px) {
    top: 50px;
    right: 25px;
  }

  .items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  button {
    margin-top: auto;
  }
`;
