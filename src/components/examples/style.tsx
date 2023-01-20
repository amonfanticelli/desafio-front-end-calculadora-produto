import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 40rem;
  padding: 3px;
  border-radius: 25px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  display: flex;
`;

export const Form = styled.form`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: white;
  h1 {
    color: blue;
  }

  label {
  }

  input {
    border: 1.2182px solid #343b41;
    width: 100%;
    height: 2rem;
  }
`;

export const Aside = styled.aside`
  background-color: #f7f9fa;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;

  h2 {
    color: #8cadd6;
  }

  div {
  }

  span {
    display: flex;
    color: #64778e;
  }

  p {
  }
`;
